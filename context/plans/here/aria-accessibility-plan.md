# ARIA and Accessibility Improvement Plan

## Current assessment

The project generally uses ARIA well. Native HTML elements are preferred, ARIA references resolve to existing elements, decorative icons are hidden from assistive technology, and the current-page and navigation-expanded states reflect the interface. The work below focuses on interaction robustness, removing redundancy, and adding a few high-value accessibility features.

## 1. Improve the mobile navigation

Update `src/components/HeaderNavigation.astro` so the mobile navigation works predictably for keyboard and assistive-technology users.

- Add `aria-label="Primary"` to the primary `<nav>` landmark.
- Hide the entire navigation landmark while the mobile menu is collapsed instead of hiding only its `<ul>`.
- Preserve the current `aria-controls` relationship and keep `aria-expanded` synchronized with the visible state.
- Close the menu when Escape is pressed.
- Return focus to the menu-toggle button after Escape closes the menu.
- Reset stale expanded state when the layout crosses the mobile breakpoint.
- Decide whether the overlay is modal:
  - If it remains modal-looking, contain focus while open and make background content inert.
  - If it is a non-modal disclosure, adjust its presentation and interaction so users do not tab into visually obscured content.
- Do not add `aria-modal="true"` unless genuine modal focus and background behavior is implemented.

## 2. Define disabled-link behavior in `Button`

Update `src/components/Button.astro` so `aria-disabled="true"` is not merely visual.

- Keep using the native `disabled` attribute for button mode.
- For link mode, choose and document one supported behavior:
  - Prevent link activation while retaining focusability so the unavailable action can still be discovered, or
  - Remove `href` and render a non-link element, or
  - Explicitly reject or document `aria-disabled` as unsupported for link mode.
- Do not rely on `pointer-events: none`; it does not prevent keyboard activation.
- Make the visual disabled treatment match the implemented semantic and interactive state.

## 3. Preserve `Steps` list semantics

Update `src/components/Steps.astro` so removing native list markers does not risk removing ordered-list semantics in some browser and screen-reader combinations.

- Prefer retaining native list semantics without `list-style: none`, while visually replacing the markers.
- If that is not practical, ensure the rendered `<ol>` receives `role="list"`.
- Confirm that list length and list-item positions remain announced.

## 4. Strengthen meaningful icon semantics

Update `src/components/Icon.astro`.

- Continue setting `aria-hidden="true"` when no label is supplied.
- When a label is supplied, expose the SVG with both `role="img"` and `aria-label`.
- Continue requiring callers to omit the label when nearby text already communicates the icon's meaning.

## 5. Simplify redundant ARIA

- Remove `aria-hidden="true"` from the decorative footer logo in `src/components/Footer.astro`; `alt=""` is sufficient.
- Remove `aria-hidden="true"` from the card icon wrapper in `src/components/Card.astro`; the unlabeled `Icon` already hides itself.
- Keep these changes as cleanup only; the existing markup is not harmful.

## 6. Refine navigation landmark names

Use short accessible names that do not repeat the landmark role, because assistive technology already announces “navigation.”

- Primary header navigation: `aria-label="Primary"`.
- Blog navigation: consider `aria-label="Blog"`.
- Adjacent-post navigation: consider `aria-label="Adjacent posts"`.
- Footer utility navigation: consider `aria-label="Footer utility"`.
- Keep the footer link groups named with `aria-labelledby`; their visible headings are good landmark names.
- Keep `aria-label="Social profiles"`; it is already clear and concise.

## 7. Decide whether the Hero should be a named region

`src/components/Hero.astro` currently uses `aria-labelledby` to expose the section as a named region.

- Keep it if navigating directly to the Hero as a landmark is useful.
- Otherwise remove the region naming and rely on the existing `<h1>` for page structure.
- Do not add accessible names to every section, which would create landmark clutter.

## 8. Add a skip link

Add a keyboard-visible “Skip to main content” link near the beginning of `src/layouts/BaseLayout.astro`.

- Give every page's `<main>` a consistent `id="main-content"` in `PageLayout.astro`, `BlogPostLayout.astro`, and `404.astro`.
- Point the skip link to `#main-content`.
- Keep it visually hidden until focused, then display it prominently above other content.
- Ensure the fixed header does not obscure the focused main-content target.

## 9. Verification checklist

After implementation:

- Navigate every page and the mobile menu using only the keyboard.
- Verify menu opening, closing, Escape handling, focus order, and focus restoration.
- Inspect the accessibility tree for named and duplicate landmarks.
- Confirm decorative icons are absent and labeled standalone icons are announced once.
- Confirm current navigation links announce “current page.”
- Confirm disabled actions cannot be activated by pointer or keyboard.
- Confirm ordered steps are announced as a list with the correct item count.
- Confirm the skip link is the first useful focus target and reaches the main landmark.
- Run an HTML/ARIA validator and an automated accessibility checker, followed by a brief screen-reader check; automated checks alone are not sufficient.

## Suggested implementation order

1. Mobile navigation behavior and landmark naming.
2. Disabled-link behavior.
3. Skip link and main-content targets.
4. Steps list semantics.
5. Icon semantics and redundant-ARIA cleanup.
6. Optional Hero landmark decision.
7. Keyboard, accessibility-tree, validator, and screen-reader verification.
