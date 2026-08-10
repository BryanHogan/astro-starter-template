import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const packageDirectory = resolve(scriptDirectory, "..");
const repositoryRoot = resolve(packageDirectory, "../..");
const templateDirectory = join(packageDirectory, "template");
const baseDirectory = join(templateDirectory, "base");
const sourceDirectory = join(packageDirectory, "source");

if (!templateDirectory.startsWith(`${packageDirectory}${sep}`)) {
    throw new Error("Refusing to rebuild a template outside the generator package.");
}

await rm(templateDirectory, { recursive: true, force: true });
await mkdir(baseDirectory, { recursive: true });

for (const entry of [
    "src",
    "public",
    "astro.config.mjs",
    "tsconfig.json",
    "AGENTS.md",
    "CLAUDE.md",
]) {
    await cp(join(repositoryRoot, entry), join(baseDirectory, entry), {
        recursive: true,
    });
}

await cp(join(repositoryRoot, ".gitignore"), join(baseDirectory, "gitignore"));
await cp(join(repositoryRoot, "LICENSE"), join(baseDirectory, "LICENSE"));

const rootPackage = JSON.parse(
    await readFile(join(repositoryRoot, "package.json"), "utf8"),
);

const generatedPackage = {
    name: "__PROJECT_PACKAGE_NAME__",
    private: true,
    type: rootPackage.type,
    version: "0.0.1",
    scripts: Object.fromEntries(
        Object.entries(rootPackage.scripts).filter(([name]) =>
            ["dev", "build", "preview", "astro"].includes(name),
        ),
    ),
    engines: rootPackage.engines,
    dependencies: rootPackage.dependencies,
    license: rootPackage.license,
};

await writeFile(
    join(baseDirectory, "package.json"),
    `${JSON.stringify(generatedPackage, null, 2)}\n`,
);

await cp(join(sourceDirectory, "replacements"), baseDirectory, {
    recursive: true,
    force: true,
});

console.log(`Built generator template at ${templateDirectory}`);
