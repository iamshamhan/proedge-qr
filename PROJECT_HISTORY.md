# PROEDGE Project History & Handover

This file is the current handover source for future coding agents. Read it before work, verify its statements against the repository, and preserve the chronological session history at the bottom.

## Latest Project Status

**Last verified:** 2026-11-17

**Branch:** `main`

**Last committed and pushed revision:** See `git log -1` for the latest pushed revision, which includes this UI refinement and history update.
**Working tree after the requested push:** The UI refinement and this history update are included in the user-requested push. `.impeccable/config.json`, `.impeccable/hook.cache.json`, and the untracked `output/` folder remain uncommitted and untouched.

- The static landing page renders the business details and configured social/review links.
- Instagram, TikTok, Facebook, WhatsApp, and Google Review links are configured. The online-store card is intentionally disabled and marked “Coming Soon”; it has no destination URL.
- The online-store card displays “PROEDGE Online Store” and “Browse authentic sports shoes and accessories.” while remaining disabled and marked “Coming Soon.”
- GitHub Pages deployment is configured on pushes to `main` and by manual workflow dispatch. The status of the latest Actions run was not verified during this documentation task.
- There is no package manifest, build script, or automated test suite. `node --check` passes for `app.js` and `config.js`; this is a static site with no build step.
- Browser preview was checked at 320×667, 375×667, 390×844, 430×932, 768×1024, and 1440×900. The four social buttons measured equal at every size; Google Reviews and Online Store also measured equal, with no clipped card contents or horizontal overflow.
- The page logo loaded from the relative `logo-horizontal.svg` path. Browser checks reported no console errors or failed network requests.
- `app.js` now uses correct TikTok and WhatsApp SVG glyphs; the Coming Soon button's accessible name includes its status.

### Known Documentation and Runtime Gaps

- `README.md` is not fully current: its social/button examples and Facebook/website visibility differ from `config.js`; it lists Inter and older colors while the app uses Space Grotesk/Syne and current CSS tokens; and it describes offline capability although no service worker exists.
- `manifest.json` uses `/` for `start_url` and `scope`, while the GitHub Pages project site lives under `/proedge-qr/`. Verify installed-app behavior on the project path before changing these values.
- Some business copy is duplicated between `index.html` and `config.js`. The tagline is part of the selected horizontal logo, while the visible introduction and showroom address are in `index.html`; keep matching business fields in sync when changing them.
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
| `logo-stacked.svg` | Stacked logo retained for the favicon, Apple touch icon, and manifest. |
| `logo-horizontal.svg` | Official wide logo lockup used in the page header and as the Open Graph image; it includes the brand name and tagline. |
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
| Static business landing page | Semantic page shell, official horizontal logo lockup, introduction, and showroom section in `index.html`. The logo supplies the visible wordmark/tagline; a visually hidden heading preserves page semantics. | Implemented; current copy and logo loading verified in local browser preview. |
| Configured contact and social cards | `config.js` supplies link labels, URLs, icons, visibility, primary CTA, and coming-soon state; `app.js` renders cards in configuration order. | Implemented; rendered link names and destinations verified in browser snapshot. External destination correctness has not been separately tested. |
| Google Review call to action | Google Review URL is a primary full-width card. | Implemented; browser preview verified. |
| Online-store placeholder | Empty URL plus `isComingSoon: true` keeps the website card disabled and displays a “Coming Soon” badge. It is not a live store. | Implemented by design; verified in browser snapshot. |
| Responsive styling and interactions | `styles.css` supplies equal-height two-column social buttons, matching full-width Google/store cards, fluid logo sizing, viewport-aware page height, focus/hover styles, reduced-motion handling, and animations. | Implemented; browser checks at six phone, tablet, and desktop sizes showed matched button dimensions and no horizontal overflow or clipped card content. |
| Link rendering safeguards and interactions | `app.js` escapes configured label and URL values, opens valid external links in a new tab with `noopener noreferrer`, and adds keyboard/touch/observer behavior. | Source inspected; no dedicated automated behavior test suite exists. |
| SEO and PWA metadata | HTML metadata and `manifest.json` include app name, theme, icons, and Google Reviews/WhatsApp shortcuts. | Implemented; metadata has not had a dedicated social-preview or installability audit. |
| GitHub Pages delivery | `.github/workflows/deploy.yml` deploys the repository root on pushes to `main` and manual dispatch. | Workflow source verified; latest remote Actions result not verified in this assessment. |
| Landing-page UI refinement | Selected the existing official horizontal logo lockup to avoid repeating the wordmark/tagline; aligned showroom details; standardized social button dimensions; matched the Google Reviews and disabled Online Store card dimensions; corrected TikTok/WhatsApp icons; and exposed the Coming Soon status to assistive technology. | Implemented in `index.html`, `styles.css`, `app.js`, and `config.js`; browser and syntax checks passed at the sizes listed above. |
| Current copy refinement | Updated tagline, introduction, showroom heading/address, social labels, Google Review label, and online-store card copy; removed the unavailable catalog description. | Implemented in `index.html`/`config.js`; mobile and desktop copy verified and included in this user-requested push. |

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
- **Website:** `url` is empty; card is visible but disabled with `isComingSoon: true`. It displays “PROEDGE Online Store,” “Browse authentic sports shoes and accessories,” and a “Coming Soon” badge.
- No passwords, tokens, or credential values are stored in this history.

### Assets and Presentation

- Header/logo and Open Graph image: `logo-horizontal.svg`, the official wide lockup containing both PROEDGE and its tagline.
- Favicon, Apple touch icon, and manifest logo: `logo-stacked.svg`.
- Both available logo SVGs have an opaque white background in the source asset; no transparent logo variant was available. The page adds no additional logo frame or background.
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
7. The tagline is embedded in the horizontal logo lockup; `index.html` renders the introduction and showroom title/address, while `config.js` keeps matching business fields. Keep duplicated values synchronized when changing them.
8. No custom domain or offline service worker is currently configured. Do not claim either feature is active.
9. Preserve uncommitted working-tree changes, including `.impeccable/` files, unless the user explicitly directs otherwise.

## Next Agent Instructions

1. Read this file and `AGENTS.md`, then inspect `git status --short --branch` before changing anything.
2. Continue from the existing implementation; do not repeat the completed logo, layout, icon, or copy work. Preserve `.impeccable/` edits and the untracked `output/` folder.
3. Keep social and Google Review URLs unchanged. Do not make the Online Store clickable or add a destination until the real store URL is supplied.
4. For relevant app changes, run `node --check app.js` and `node --check config.js`, then test the affected behavior in the browser. For layout changes, check at least 320px and 360px and verify dimensions/overflow rather than relying on visual inspection alone.
5. Update the status, completed/pending tasks, tests, known issues, and next-agent steps in this file at the end of every coding session; append a dated log entry instead of deleting history.
6. Preserve Git history and do not commit or push unless the user explicitly requests it.

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

### 2026-11-17 — PROEDGE landing-page UI refinement

- Inspected the available logo variants and selected `logo-horizontal.svg` for the page header; its wordmark/tagline are not duplicated by separate visible text. The only available logo SVGs have white backgrounds baked into the assets.
- Standardized all four social buttons to matching dimensions and aligned the Google Reviews and disabled Online Store cards to matching full-width dimensions. Improved showroom address wrapping and kept the store description visible on small screens.
- Updated the Online Store heading/description, replaced the incorrect TikTok glyph and malformed WhatsApp SVG, and included the Coming Soon status in the disabled button's accessible name.
- Preserved all configured URLs, the empty store URL, QR assets, and GitHub Pages settings.
- Verified `node --check app.js` and `node --check config.js`. Browser checks at 320×667, 375×667, 390×844, 430×932, 768×1024, and 1440×900 confirmed equal button dimensions, no horizontal overflow or clipped card content, a loaded relative logo path, and no console errors or failed requests. No build or automated test suite exists.
- Updated this handover entry and pushed the UI changes to `origin/main` at the user's request. Left `.impeccable/` changes and the untracked `output/` folder untouched.
