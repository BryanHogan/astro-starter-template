#!/usr/bin/env node

import * as p from "@clack/prompts";
import { spawn } from "node:child_process";
import {
    cp,
    mkdir,
    readFile,
    readdir,
    rename,
    rm,
    stat,
    writeFile,
} from "node:fs/promises";
import { basename, dirname, join, resolve } from "node:path";
import { parseArgs } from "node:util";
import { fileURLToPath } from "node:url";

const packageDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const templateDirectory = join(packageDirectory, "template");
const baseTemplateDirectory = join(templateDirectory, "base");

let targetDirectory;
let targetCreatedByGenerator = false;
let generationStage = "prompts";

try {
    await main();
} catch (error) {
    if (
        targetCreatedByGenerator &&
        targetDirectory &&
        ["copy", "configure"].includes(generationStage)
    ) {
        await rm(targetDirectory, { recursive: true, force: true });
    }

    const message = error instanceof Error ? error.message : String(error);
    p.cancel(message);

    if (generationStage === "install" && targetDirectory) {
        p.log.info(`Project files were kept. Run \`npm install\` in ${targetDirectory}.`);
    }

    process.exitCode = 1;
}

async function main() {
    const parsedArguments = getArguments();

    if (parsedArguments.values.help) {
        printHelp();
        return;
    }

    if (parsedArguments.values.version) {
        const packageJson = JSON.parse(
            await readFile(join(packageDirectory, "package.json"), "utf8"),
        );
        console.log(packageJson.version);
        return;
    }

    if (parsedArguments.positionals.length > 1) {
        throw new Error("Provide at most one destination directory.");
    }

    const useDefaults = parsedArguments.values.yes ?? false;
    const providedDirectory = parsedArguments.positionals[0];

    p.intro("Create a Bryan Web Starter site");

    const projectDirectory = useDefaults
        ? providedDirectory ?? "my-website"
        : providedDirectory ??
          (await askText({
              message: "Where should the project be created?",
              placeholder: "my-website",
              defaultValue: "my-website",
              validate: validateDirectoryAnswer,
          }));

    targetDirectory = resolve(process.cwd(), projectDirectory.trim());
    const targetState = await inspectTarget(targetDirectory);

    if (targetState === "not-directory") {
        throw new Error(`The destination exists and is not a directory: ${targetDirectory}`);
    }

    if (targetState === "not-empty") {
        throw new Error(`The destination directory is not empty: ${targetDirectory}`);
    }

    const defaultSiteName = humanizeDirectoryName(basename(targetDirectory));
    const answers = useDefaults
        ? {
              siteName: defaultSiteName,
              description: "A website built with Bryan Web Starter.",
              author: "Your Name",
              siteUrl: "https://example.com",
              installDependencies: !parsedArguments.values["no-install"],
              initializeGit: !parsedArguments.values["no-git"],
          }
        : {
              siteName: await askText({
                  message: "What is the site name?",
                  defaultValue: defaultSiteName,
                  validate: validateRequired,
              }),
              description: await askText({
                  message: "How would you describe the site?",
                  placeholder: "A clear, useful description of the website.",
                  validate: validateRequired,
              }),
              author: await askText({
                  message: "Who is the author?",
                  placeholder: "Your Name",
                  validate: validateRequired,
              }),
              siteUrl: await askText({
                  message: "What is the production URL? (optional)",
                  placeholder: "https://example.com",
                  validate: validateSiteUrl,
              }),
              installDependencies: parsedArguments.values["no-install"]
                  ? false
                  : await askConfirm("Install dependencies?"),
              initializeGit: parsedArguments.values["no-git"]
                  ? false
                  : await askConfirm("Initialize a Git repository?"),
          };

    answers.siteUrl = normalizeSiteUrl(answers.siteUrl);

    generationStage = "copy";
    targetCreatedByGenerator = targetState === "missing";
    await mkdir(targetDirectory, { recursive: true });

    const progress = p.spinner();
    progress.start("Creating the project");

    await cp(baseTemplateDirectory, targetDirectory, {
        recursive: true,
        force: false,
    });
    await rename(
        join(targetDirectory, "gitignore"),
        join(targetDirectory, ".gitignore"),
    );

    generationStage = "configure";
    await configureProject(targetDirectory, answers);
    progress.stop("Project files created");

    if (answers.installDependencies) {
        generationStage = "install";
        p.log.step("Installing dependencies");
        await runCommand("npm", ["install"], targetDirectory);
    }

    if (answers.initializeGit) {
        generationStage = "git";
        const existingRepository = await findGitRoot(targetDirectory);

        if (existingRepository) {
            p.log.info(`Using the existing Git repository at ${existingRepository}.`);
        } else {
            try {
                await runCommand("git", ["init"], targetDirectory, true);
            } catch {
                p.log.warn(
                    "Git could not be initialized. Run `git init` in the project later.",
                );
            }
        }
    }

    generationStage = "complete";
    const relativeTarget = join(".", projectDirectory);
    const nextCommands = answers.installDependencies
        ? `cd ${relativeTarget}\nnpm run dev`
        : `cd ${relativeTarget}\nnpm install\nnpm run dev`;

    p.note(nextCommands, "Next steps");

    if (answers.siteUrl === "https://example.com") {
        p.log.warn(
            "Replace https://example.com in src/config.ts before publishing the site.",
        );
    }

    p.outro(`Created ${answers.siteName} in ${targetDirectory}`);
}

function getArguments() {
    try {
        return parseArgs({
            allowPositionals: true,
            strict: true,
            options: {
                help: { type: "boolean", short: "h" },
                version: { type: "boolean", short: "v" },
                yes: { type: "boolean", short: "y" },
                "no-install": { type: "boolean" },
                "no-git": { type: "boolean" },
            },
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        throw new Error(`${message}\nRun with --help to see available options.`);
    }
}

function printHelp() {
    console.log(`
Create a configured Astro website.

Usage:
  create-web-starter [directory] [options]
  npm create @bryanhogan/web-starter@latest [directory] -- [options]

Options:
  -y, --yes      Accept defaults and skip prompts
      --no-install  Do not install dependencies
      --no-git   Do not initialize Git
  -h, --help     Show this help
  -v, --version  Show the generator version
`);
}

async function askText(options) {
    const answer = await p.text(options);
    handleCancellation(answer);
    return answer.trim();
}

async function askConfirm(message) {
    const answer = await p.confirm({ message, initialValue: true });
    handleCancellation(answer);
    return answer;
}

function handleCancellation(answer) {
    if (p.isCancel(answer)) {
        p.cancel("Setup cancelled.");
        process.exit(0);
    }
}

function validateRequired(value) {
    return value?.trim() ? undefined : "Enter a value to continue.";
}

function validateDirectoryAnswer(value) {
    return value?.trim() ? undefined : "Enter a destination directory.";
}

function validateSiteUrl(value) {
    try {
        normalizeSiteUrl(value);
        return undefined;
    } catch (error) {
        return error instanceof Error ? error.message : String(error);
    }
}

function normalizeSiteUrl(value) {
    const normalizedValue = value?.trim() ?? "";

    if (!normalizedValue) {
        return "https://example.com";
    }

    let url;

    try {
        url = new URL(normalizedValue);
    } catch {
        throw new Error("Enter a complete URL such as https://example.com.");
    }

    if (!["http:", "https:"].includes(url.protocol)) {
        throw new Error("The production URL must use HTTP or HTTPS.");
    }

    if (url.username || url.password || url.search || url.hash) {
        throw new Error("Use the site origin without credentials, a query, or a hash.");
    }

    if (url.pathname !== "/") {
        throw new Error("Use the site origin without a path, such as https://example.com.");
    }

    return url.origin;
}

async function inspectTarget(directory) {
    try {
        const targetStats = await stat(directory);

        if (!targetStats.isDirectory()) {
            return "not-directory";
        }

        return (await readdir(directory)).length === 0 ? "empty" : "not-empty";
    } catch (error) {
        if (error?.code === "ENOENT") {
            return "missing";
        }

        throw error;
    }
}

async function configureProject(directory, answers) {
    const packagePath = join(directory, "package.json");
    const projectPackage = JSON.parse(await readFile(packagePath, "utf8"));
    projectPackage.name = createPackageName(basename(directory));
    await writeFile(packagePath, `${JSON.stringify(projectPackage, null, 2)}\n`);

    const structuredReplacements = {
        __SITE_URL_JSON__: JSON.stringify(answers.siteUrl),
        __SITE_NAME_JSON__: JSON.stringify(answers.siteName),
        __SITE_DESCRIPTION_JSON__: JSON.stringify(answers.description),
        __SITE_AUTHOR_JSON__: JSON.stringify(answers.author),
        __OG_IMAGE_ALT_JSON__: JSON.stringify(`${answers.siteName} social image`),
        __START_YEAR__: String(new Date().getFullYear()),
    };

    for (const relativePath of ["src/config.ts", "src/pages/index.mdx"]) {
        await replaceTokens(join(directory, relativePath), structuredReplacements);
    }

    const markdownReplacements = {
        __SITE_NAME_MARKDOWN__: escapeMarkdown(answers.siteName),
        __SITE_DESCRIPTION_MARKDOWN__: escapeMarkdown(answers.description),
        __SITE_AUTHOR_MARKDOWN__: escapeMarkdown(answers.author),
    };

    for (const relativePath of [
        "README.md",
        "src/content/author.md",
    ]) {
        await replaceTokens(join(directory, relativePath), markdownReplacements);
    }
}

async function replaceTokens(filePath, replacements) {
    let content = await readFile(filePath, "utf8");

    for (const [token, value] of Object.entries(replacements)) {
        content = content.replaceAll(token, value);
    }

    await writeFile(filePath, content);
}

function createPackageName(value) {
    const normalized = value
        .normalize("NFKD")
        .toLowerCase()
        .replace(/[^a-z0-9._-]+/g, "-")
        .replace(/^[._-]+|[._-]+$/g, "")
        .slice(0, 214);

    return normalized || "my-website";
}

function humanizeDirectoryName(value) {
    const words = value
        .replace(/[-_]+/g, " ")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .trim();

    if (!words) {
        return "My Website";
    }

    return words.replace(/\b\p{L}/gu, (character) => character.toUpperCase());
}

function escapeMarkdown(value) {
    return value
        .replace(/[\r\n]+/g, " ")
        .replace(/([\\`*_{}\[\]<>])/g, "\\$1");
}

async function runCommand(command, arguments_, cwd, quiet = false) {
    const isWindowsNpm = process.platform === "win32" && command === "npm";
    const executable = isWindowsNpm
        ? process.env.ComSpec ?? "cmd.exe"
        : command;
    const commandArguments = isWindowsNpm
        ? ["/d", "/s", "/c", "npm.cmd", ...arguments_]
        : arguments_;

    await new Promise((resolvePromise, rejectPromise) => {
        const child = spawn(executable, commandArguments, {
            cwd,
            stdio: quiet ? "ignore" : "inherit",
        });

        child.on("error", rejectPromise);
        child.on("close", (code) => {
            if (code === 0) {
                resolvePromise();
            } else {
                rejectPromise(new Error(`${command} exited with code ${code}.`));
            }
        });
    });
}

async function findGitRoot(directory) {
    const executable = process.platform === "win32" ? "git.exe" : "git";

    return await new Promise((resolvePromise) => {
        let output = "";
        const child = spawn(
            executable,
            ["-C", directory, "rev-parse", "--show-toplevel"],
            { stdio: ["ignore", "pipe", "ignore"] },
        );

        child.stdout.on("data", (chunk) => {
            output += chunk;
        });
        child.on("error", () => resolvePromise(undefined));
        child.on("close", (code) =>
            resolvePromise(code === 0 ? output.trim() : undefined),
        );
    });
}
