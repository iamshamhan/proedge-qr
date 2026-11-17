# PROEDGE QR Landing Page

A premium, mobile-first QR landing page for **PROEDGE** - Authentic sports shoes and accessories in Dehiwala, Sri Lanka.

[![Deploy to GitHub Pages](https://github.com/iamshamhan/proedge-qr/actions/workflows/deploy.yml/badge.svg)](https://github.com/iamshamhan/proedge-qr/actions/workflows/deploy.yml)

---

## 📱 Live Demo

**GitHub Pages:** https://iamshamhan.github.io/proedge-qr/

---

## 📁 Project Structure

```
proedge-qr/
├── index.html          # Main HTML entry point
├── styles.css          # All styles (CSS custom properties, responsive design)
├── app.js              # Application logic (rendering, interactions)
├── config.js           # 🔧 ALL BUSINESS CONFIGURATION (edit this file)
├── manifest.json       # PWA manifest for "Add to Home Screen"
├── logo-stacked.svg    # Square logo (used for favicon, PWA)
├── logo-horizontal.svg # Wide logo (used for OG image)
├── qr-code.png         # QR code asset (for printing)
├── download.png        # Original QR code (backup)
└── README.md           # This file
```

---

## ⚙️ Configuration

All business information and links are centralized in **`config.js`**. Edit this file to update any details without touching HTML/CSS/JS.

### Business Information

```javascript
business: {
    name: 'PROEDGE',
    tagline: 'Experience the authentic.',
    type: 'Authentic sports shoes and accessories',
    location: 'Dehiwala, Sri Lanka',
    phone: '075 067 8675',
    phoneFormatted: '+94750678675',
}
```

### Social Media Links

Each link has these properties:

| Property | Description |
|----------|-------------|
| `label` | Accessible label / button text |
| `url` | Destination URL (set to `''` to hide) |
| `icon` | Icon key from `app.js` ICONS object |
| `visible` | Auto-hidden when `url` is empty |
| `isPrimary` | Makes the button span full width (Google Reviews) |

```javascript
links: {
    googleReviews: {
        label: 'Leave Us a Google Review',
        url: 'https://g.page/r/CSV9PVOFhL-fEBM/review',
        icon: 'google',
        visible: true,
        isPrimary: true,
    },
    instagram: {
        label: 'Follow on Instagram',
        url: 'https://www.instagram.com/pro.edge_lk',
        icon: 'instagram',
        visible: true,
    },
    tiktok: {
        label: 'Follow on TikTok',
        url: 'https://www.tiktok.com/@pro.edge7',
        icon: 'tiktok',
        visible: true,
    },
    facebook: {
        label: 'Follow on Facebook',
        url: '',                    // 👈 Add your Facebook Page URL here
        icon: 'facebook',
        visible: false,             // 👈 Stays hidden until URL is added
        isPrimary: false,
    },
    whatsapp: {
        label: 'Chat on WhatsApp',
        url: 'https://wa.me/94750678675',
        icon: 'whatsapp',
        visible: true,
    },
    website: {
        label: 'Visit Website',
        url: '',                     // 👈 Add your website URL here
        icon: 'globe',
        visible: false,              // 👈 Stays hidden until URL is added
        isPrimary: false,
    },
}
```

### Adding Facebook Later

When you have a Facebook Page URL:

1. Open `config.js`
2. Find the `facebook` entry under `links`
3. Update:
   ```javascript
   facebook: {
       label: 'Follow on Facebook',
       url: 'https://www.facebook.com/your-page',  // Add real URL
       icon: 'facebook',
       visible: true,                               // Change to true
       isPrimary: false,
   }
   ```
4. Commit and push - GitHub Pages will auto-deploy

### Adding Website Later

Same process for the `website` link when you have a website.

---

## 🎨 Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0A0A0A` | Page background |
| `--color-surface` | `#1A1A1A` | Card backgrounds |
| `--color-brand-primary` | `#0172AF` | **PROEDGE Blue** - accents, focus |
| `--color-brand-primary-hover` | `#018CD6` | Hover states |
| `--color-google` | `#4285F4` | Google Reviews button |
| `--color-instagram` | `#E1306C` | Instagram gradient |
| `--color-tiktok` | `#000000` | TikTok button |
| `--color-facebook` | `#1877F2` | Facebook button |
| `--color-whatsapp` | `#25D366` | WhatsApp button |

### Typography

- **Font:** Inter (Google Fonts, preloaded)
- **Weights:** 300, 400, 500, 600, 700
- **Scale:** Clamp-based fluid typography

### Spacing

Consistent 4px base unit (`--space-1` = 4px)

### Border Radius

- `--radius-xl` (1rem) - Primary cards
- `--radius-2xl` (1.5rem) - Location badge

---

## 🚀 Deployment

### GitHub Pages (Automatic)

1. In **Settings → Pages**, set the source to **GitHub Actions**.
2. Add a repository Actions secret named `PAGES_TOKEN` containing a personal access token with access to this repository and permission to manage Pages. The workflow uses it to enable Pages when GitHub has not created the Pages site yet.
3. Push to `main` branch; GitHub Actions deploys automatically.
4. Visit: `https://iamshamhan.github.io/proedge-qr/`

Create the secret under **Settings → Secrets and variables → Actions → New repository secret**. Do not put the token in source code.

### Manual Deployment

```bash
# From project root
git add .
git commit -m "Update config/content"
git push origin main
```

### Workflow File (`.github/workflows/deploy.yml`)

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - uses: actions/deploy-pages@v4
```

---

## 🔧 Custom Domain (Future)

When you have a custom domain (e.g., `proedge.lk`):

1. **Add CNAME file** to project root:
   ```
   proedge.lk
   ```

2. **Configure DNS** at your registrar:
   - Type: `CNAME`
   - Name: `www` (or `@` for apex)
   - Value: `iamshamhan.github.io`

3. **Enable HTTPS** in GitHub Pages settings (auto-provisioned)

4. **Update `config.js`** SEO URLs:
   ```javascript
   seo: {
       ogUrl: 'https://proedge.lk/',
       // ...
   }
   ```

---

## 📱 PWA Features

- **Add to Home Screen** on mobile
- **Offline-capable** (static assets)
- **Standalone display** mode
- **App shortcuts** for Google Reviews & WhatsApp

---

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels on all interactive elements
- Focus-visible states for keyboard navigation
- Color contrast ratios meeting WCAG AA
- Reduced motion support (`prefers-reduced-motion`)
- Screen reader friendly

---

## 🧪 Testing Checklist

Before deploying, verify:

- [ ] All configured URLs open correctly
- [ ] External links open in new tab (`target="_blank"`)
- [ ] All links have `rel="noopener noreferrer"`
- [ ] Page loads on mobile (iOS Safari, Chrome Android)
- [ ] Page loads on desktop (Chrome, Firefox, Safari)
- [ ] QR code asset (`qr-code.png`) is accessible at `/qr-code.png`
- [ ] Favicon appears in browser tab
- [ ] OG meta tags render correctly (test with [Facebook Debugger](https://developers.facebook.com/tools/debug/))
- [ ] No console errors
- [ ] No layout shifts (CLS < 0.1)

---

## 📦 Assets

| File | Purpose | Usage |
|------|---------|-------|
| `logo-stacked.svg` | Square logo | Favicon, PWA icon, header (mobile) |
| `logo-horizontal.svg` | Wide logo | OG image, header (desktop) |
| `qr-code.png` | 132x132 QR code | **For printing on physical products** |
| `download.png` | Original upload | Backup |

> **Note:** The QR code is intentionally **not displayed** on the landing page - it's meant for physical products (boxes, cards, signage). The deployed page URL should be encoded in the QR code.

---

## 🛠️ Tech Stack

- **HTML5** + **CSS3** + **Vanilla JS (ES6+)**
- **Zero dependencies** - No frameworks, no build step
- **GitHub Pages** - Free static hosting
- **Inter font** - Self-hosted via Google Fonts preload

---

## 📝 License

MIT License - Feel free to use as a template for your own business.

---

## 🤝 Support

For issues or questions:
- **WhatsApp:** [075 067 8675](https://wa.me/94750678675)
- **GitHub Issues:** [iamshamhan/proedge-qr](https://github.com/iamshamhan/proedge-qr/issues)

---

**Built with care for PROEDGE** 🏃‍♂️👟