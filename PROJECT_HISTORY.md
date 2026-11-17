# PROEDGE Project History & Handover

This file is the current handover source for future coding agents. Read it before work, verify its statements against the repository, and preserve the chronological session history at the bottom.

## Latest Project Status

**Last verified:** 2026-11-17

**Branch:** `main`

**Last committed and pushed revision:** The current copy and handover update from this requested push; use `git log -1` for its exact revision.
**Working tree after the requested push:** The copy edits in `index.html` and `config.js` and the handover files are included in the push. `.impeccable/config.json` and `.impeccable/hook.cache.json` were modified before this task and remain uncommitted and untouched.

- The static landing page renders the business details and configured social/review links.
- Instagram, TikTok, Facebook, WhatsApp, and Google Review links are configured. The online-store card is intentionally disabled and marked “Coming Soon”; it has no destination URL.
- The current copy update is included in this user-requested commit and push.
- GitHub Pages deployment is configured on pushes to `main` and by manual workflow dispatch. The status of the latest Actions run was not verified during this documentation task.
- There is no package manifest, build script, or automated test suite. `node --check` passes for `app.js` and `config.js`; this is a static site with no build step.
- Browser preview was checked at 320×667, 360×740, 390×844, and 414×896. The current copy fits without horizontal overflow at those widths.
- A local browser preview reports a malformed SVG path in the WhatsApp icon in `app.js`. This is a known, pre-existing issue and was not changed during copy or documentation work.
- The coming-soon button's `aria-label` is generated from its label (“Online Store”) and does not include the adjacent visual “Coming Soon” badge; review its accessible name if working on accessibility.

### Known Documentation and Runtime Gaps

- `README.md` is not fully current: its social/button examples and Facebook/website visibility differ from `config.js`; it lists Inter and older colors while the app uses Space Grotesk/Syne and current CSS tokens; it describes offline capability although no service worker exists; and it describes a horizontal logo in the header although `index.html` renders the stacked logo.
- `manifest.json` uses `/` for `start_url` and `scope`, while the GitHub Pages project site lives under `/proedge-qr/`. Verify installed-app behavior on the project path before changing these values.
- `index.html` and `config.js` contain separate copies of some business copy (including tagline and address). The page currently renders the HTML copy; keep the two in sync when those fields are changed.
- SEO and manifest descriptions still use the older “Premium sports shoes and accessories” wording; they were left untouched because the requested copy scope specified only visible landing-page text.
- The workflow references the repository Actions secret `PAGES_TOKEN` for Pages setup. Whether it is configured is unknown; never record or expose secret values.
- `CNAME` contains comments only; no custom domain is configured.
- The README says MIT License, but no `LICENSE` file exists in the root. Confirm the intended license before adding one.
- QR images are present, but their contents have not been scanned or checked against the live URL in this handover.

## Project Overview

- **Name:** PROEDGE QR Landing Page.
- **Purpose:** A mobile-first link landing page reached from PROEDGE QR codes, providing showroom information and social/review contact links.
- **Target users:** PROEDGE customers and prospective customers, particularly visitors in Dehiwala, Sri Lanka, using a phone or desktop browser.
- **Technologies:** HTML5, CSS3, vanilla JavaScript (ES6+), inline/external SVG, and Google Fonts (Space Grotesk and Syne). There are no framework or runtime package dependencies and no compile/build step.
- **Hosting:** GitHub Pages using GitHub Actions.
- **Live site:** https://iamshamhan.github.io/proedge-qr/
- **Repository:** https://github.com/iamshamhan/proedge-qr

## Current Project Structure

| Path | Purpose |
|---|---|
| `index.html` | Static page entry point; metadata, visible brand/introduction/showroom copy, logo, and script/style references. |
| `styles.css` | Design tokens, dark visual theme, responsive layout, link-card styles, focus states, and animations. |
| `app.js` | Inline SVG icon map; renders configured link cards; escapes text/URLs; adds intersection, keyboard, and touch interactions. |
| `config.js` | Business fields, link labels/URLs/visibility/CTA flags, SEO values, and asset paths. Link labels and destinations are consumed by `app.js`; some business copy is duplicated in `index.html`. |
| `manifest.json` | PWA metadata, icons, app display settings, and Google Reviews/WhatsApp shortcuts. |
| `logo-stacked.svg` | Stacked logo, used in the page header, favicon, Apple touch icon, and manifest. |
| `logo-horizontal.svg` | Wide logo used as the Open Graph image and included in the manifest. |
| `qr-code.png` | 132×132 QR image intended for print; not displayed in the landing page. |
| `download.png` | 132×132 original/backup QR image. |
| `CNAME` | Placeholder comments for a future custom domain; no active domain entry. |
| `.github/workflows/deploy.yml` | GitHub Pages deployment on `main` pushes or manual dispatch. |
| `README.md` | Project setup, configuration, design, deployment, PWA, accessibility, and testing notes; some sections are stale (see known gaps). |
| `PROJECT_HISTORY.md` | Current status, decisions, pending work, and chronological handover log. |
| `AGENTS.md` | Permanent short instructions for AI coding agents. |
| `.impeccable/config.json` | Local design-tool detector configuration; not used by the web app. |
| `.impeccable/hook.cache.json` | Local design-tool session/cache state; not used by the web app. |

`index.html` is the browser entry point. There is no `package.json`, test directory, or build configuration in the repository.

## Completed Work

| Feature | Implementation and decisions | Status and verification |
|---|---|---|
| Static business landing page | Semantic page shell, brand heading/tagline, introduction, and showroom section in `index.html`. | Implemented; current copy verified in local browser preview. |
| Configured contact and social cards | `config.js` supplies link labels, URLs, icons, visibility, primary CTA, and coming-soon state; `app.js` renders cards in configuration order. | Implemented; rendered link names and destinations verified in browser snapshot. External destination correctness has not been separately tested. |
| Google Review call to action | Google Review URL is a primary full-width card. | Implemented; browser preview verified. |
| Online-store placeholder | Empty URL plus `isComingSoon: true` keeps the website card disabled and displays a “Coming Soon” badge. It is not a live store. | Implemented by design; verified in browser snapshot. |
| Responsive styling and interactions | `styles.css` supplies two-column social cards, full-width primary cards, fluid logo sizing, viewport-aware page height, focus/hover styles, reduced-motion handling, and animations. | Implemented; browser preview at 320×667, 360×740, 390×844, and 414×896 showed no horizontal overflow. |
| Link rendering safeguards and interactions | `app.js` escapes configured label and URL values, opens valid external links in a new tab with `noopener noreferrer`, and adds keyboard/touch/observer behavior. | Source inspected; no dedicated automated behavior test suite exists. |
| SEO and PWA metadata | HTML metadata and `manifest.json` include app name, theme, icons, and Google Reviews/WhatsApp shortcuts. | Implemented; metadata has not had a dedicated social-preview or installability audit. |
| GitHub Pages delivery | `.github/workflows/deploy.yml` deploys the repository root on pushes to `main` and manual dispatch. | Workflow source verified; latest remote Actions result not verified in this assessment. |
| Current copy refinement | Updated tagline, introduction, showroom heading/address, social labels, Google Review label, and online-store card copy; removed the unavailable catalog description. | Implemented in `index.html`/`config.js`; mobile copy preview verified at the sizes listed above and included in this user-requested push. |

## Current Configuration

### Business and Link Information

- **Business:** PROEDGE; `Dehiwala, Sri Lanka`.
- **Phone:** `075 067 8675`; WhatsApp destination `https://wa.me/94750678675`.
- **Showroom address:** `No. 32, Attidiya Road, Kawdana, Dehiwala, 10350` (the current visible HTML copy and `config.js` business field).
- **Instagram:** `https://www.instagram.com/pro.edge_lk`
- **TikTok:** `https://www.tiktok.com/@pro.edge7`
- **Facebook:** `https://www.facebook.com/share/1C4RMiDa12/`
- **WhatsApp:** `https://wa.me/94750678675`
- **Google Reviews:** `https://g.page/r/CSV9PVOFhL-fEBM/review`
- **Website:** `url` is empty; card is visible but disabled with `isComingSoon: true`. The “Online Store” label and existing “Coming Soon” badge together form the display text.
- No passwords, tokens, or credential values are stored in this history.

### Assets and Presentation

- Header/logo and favicon: `logo-stacked.svg`.
- Open Graph image: `logo-horizontal.svg`.
- Print QR image: `qr-code.png`; backup/original: `download.png`.
- Main CSS background is `#0A0A0A`; surface `#1A1A1A`; brand blue `#0096D6`; TikTok surface `#242424` with hover `#383838`.
- Page fonts are Space Grotesk (base) and Syne (display), loaded from Google Fonts.

### Hosting and Domain

- Git remote: `https://github.com/iamshamhan/proedge-qr.git`; branch `main`.
- Public URL: `https://iamshamhan.github.io/proedge-qr/`.
- Workflow: `.github/workflows/deploy.yml`; triggered on `push` to `main` and `workflow_dispatch`.
- Workflow references `${{ secrets.PAGES_TOKEN }}` when enabling Pages. Secret configuration is not verified.
- `CNAME` is only a commented placeholder; custom domain is not active.

## Pending Work

- [ ] Add the real online-store URL when the store launches; the current card is a disabled placeholder.
- [ ] Bring stale setup/link/design/PWA information in `README.md` in line with source files.
- [ ] Verify `manifest.json` `start_url`/`scope` on GitHub Pages project-path hosting.
- [ ] Fix or replace the malformed WhatsApp inline SVG path in `app.js`, then verify its icon in-browser.
- [ ] Review the accessible name of the disabled online-store button so its coming-soon status is clear to assistive technology.
- [ ] Validate every configured external destination and scan the printed QR code to confirm its encoded destination.
- [ ] Decide whether offline support is required; if not, correct the README’s offline claim. If it is required, design and test a service worker rather than assuming static assets provide offline support.
- [ ] Confirm the intended license and whether a `LICENSE` file should exist.
- [ ] Confirm whether the deployment secret is configured and check a successful GitHub Actions deployment when authenticated.
- [ ] Re-run mobile browser checks after any copy/layout change; there is no automated browser test suite.
- [ ] If a custom domain is introduced, configure DNS, replace the `CNAME` placeholder, and update SEO/PWA URLs deliberately.

## Important Decisions to Preserve

1. Keep the site static and dependency-free unless the user explicitly asks for a framework or build system.
2. Keep link destinations and card metadata in `config.js`; `app.js` determines rendering order from the configuration object.
3. Keep the Google Review and online-store cards full width, with social links in a two-column grid; avoid reintroducing a single-column stack on normal mobile widths.
4. The website card is intentionally non-clickable until a real destination URL is supplied. Do not invent a URL or make the empty URL clickable.
5. The QR image is a print asset and is intentionally not shown on the landing page.
6. Preserve external-link escaping, `target="_blank"`, `rel="noopener noreferrer"`, keyboard/focus behavior, touch feedback, and reduced-motion handling.
7. `index.html` is the rendered source for tagline, intro, showroom title/address; the corresponding tagline/address fields in `config.js` are currently not used to populate those HTML elements. Keep duplicated values synchronized or refactor only when explicitly scoped.
8. No custom domain or offline service worker is currently configured. Do not claim either feature is active.
9. Preserve uncommitted working-tree changes, including `.impeccable/` files, unless the user explicitly directs otherwise.

## Next Agent Instructions

1. Read this file and `AGENTS.md`, then inspect `git status --short --branch` before making any change.
2. Start from the existing tree: the latest copy edits and handover files are uncommitted; do not reapply, discard, or overwrite them.
3. Verify current source and the specific user request. Do not change URLs, assets, deployment behavior, or existing link behavior unless explicitly needed.
4. For app changes, run `node --check app.js` and `node --check config.js`, then preview relevant mobile widths (at minimum 320px and 360px) and report only checks actually performed.
5. At the end of every coding session, update the current status, completed/pending checklists, test results, known issues, and next steps here; append a dated entry below instead of deleting prior session history.
6. Do not commit or push unless the user explicitly requests it. Preserve all pre-existing edits and Git history.

## Chronological Session History

### 2026-11-17 — Responsive landing-page refinements

- Updated the showroom address, TikTok contrast, social-card grid, Google/website CTA sizing, and logo treatment across commits `42b3035` and `1416202`.
- Used a local browser preview to check responsive rendering across phone and desktop widths; the latest refinements remove the circular logo frame, give controls more spacing, and keep the footer close to the buttons.
- These two commits are pushed to `origin/main`.

### 2026-11-17 — Landing-page microcopy

- Refined PROEDGE QR landing-page copy: tagline, introduction, showroom address, social labels, Google review call to action, and upcoming online store label.
- Removed the unavailable online-store catalog description.
- Preserved existing URLs, assets, layout, styling, and link behavior.
- Updated the copy in the current working tree; it was not committed or pushed during that session.

### 2026-11-17 — Permanent handover documentation

- Audited source, configuration, assets, README, GitHub Pages workflow, CNAME placeholder, local design-tool files, and commit history before documenting them.
- Added permanent agent rules in `AGENTS.md` and expanded this file with verified project overview, structure, configuration, decisions, test status, known gaps, and next-agent steps.
- Verified JavaScript syntax with `node --check` and checked the current copy in a browser at mobile widths. No build/test suite exists.
- The documentation and preceding copy changes were uncommitted at the time; they are included in the push recorded below. Existing `.impeccable/` modifications were preserved.

### 2026-11-17 — User-requested commit and push

- Committed and pushed the current copy changes and the `PROJECT_HISTORY.md`/`AGENTS.md` handover files to `origin/main`, at the user's request.
- Left the pre-existing `.impeccable/` modifications uncommitted and untouched.
- Verified the push by checking the branch status and latest commit afterward.
