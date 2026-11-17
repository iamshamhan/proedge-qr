/**
 * PROEDGE QR Landing Page - Application Logic
 *
 * Renders link cards from config.js and handles interactions.
 */

// SVG Icons (inline for zero dependencies)
const ICONS = {
    google: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M7.11 18.81c-2.4 1.79-5.8 2.86-9.29 2.86-2.86 0-5.29-1.93-6.16-4.53H0v2.84c1.7 1.27 3.58 2.1 5.54 2.1 1.96 0 3.84-.5 5.24-1.37 1.36-.81 2.38-1.91 3.06-3.3z"/></svg>`,

    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,

    tiktok: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm6.6 12c-.48.06-.96.12-1.44.18v1.44c.54-.12 1.08-.18 1.62-.18 1.5 0 2.7 1.2 2.7 2.7 0 .48-.06.9-.12 1.32-.12.66-.18 1.32-.3 1.92.3-.12.54-.12.84-.12.12 1.14.9 2.04 2.04 2.04 1.02 0 1.92-.6 2.22-1.44.12-.36 0-.78-.12-.96 1.5-.9 2.1-2.58 2.1-4.2 0-2.28-1.86-4.2-4.02-4.32.3-1.68 1.02-2.88 2.22-3.66 1.14-.72 2.76-.48 3.3.42zm-.12 6.54c0 1.56-.6 2.64-1.62 3-1.02.3-2.34-.12-3-.72.06-.9.36-1.74 1.02-2.22.66-.48 1.32-.6 2.22-.3.12 0 1.2 1.02 1.68 3.24zm-5.4 0c-1.14 0-2.34-.72-2.52-2.46-.12-.06 1.56-.06 2.7 0 1.14.06 1.5 2.22 2.16 2.4.3 0 2.7-2.7 2.82-3.12 1.26.06 2.64.9 2.64 2.7 0 1.5-.84 2.52-2.46 2.52-.6 0-.96-.24-1.2-.42 1.02.6 1.32 1.8 1.32 2.64 0 2.76-2.22 4.8-5.4 4.8z"/></svg>`,

    facebook: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,

    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.95 11.95 0 0 0 12 0C5.37 0 .16 5.16.52 11.76a.75.75 0 0 0 .1.5 72 72 0 0 0 1.2 2.8.75.75 0 0 0 1.1.1c3.24-1.68 5.69-1.8 7.5-2.02a.75.75 0 0 1 .97.1 12.25 12.25 0 0 1 3.1 5.6.75.75 0 1 1-1.46.4A10.6 10.6 0 0 0 12 1.4a10.6 10.6 0 0 0-9.38 9.4.75.75 0 1 1-.8-.9A9.1 9.1 0 0 1 12 2.3c4 0 7.2 2.3 8.5 5.3.1.3.3.5.6.5h.1c.3 0 .5-.2.6-.6.7-2.3 1.04-5.6.7-7.2a.75.75 0 0 0-.5-.9z"/><path d="M18.4 15.2c-.7-.5-1.5-.9-2.4-1a22 22 0 0 0-1.8-.3c-.5 0-.9.2-1.2.4-.8.4-1.7.5-2.3.2-.3-.1-1.2-.6-1.2-1.3 0-.2.2-.4.3-.7.1-.2.3-.7.5-1.2.2-.5.3-1.3.1-1.6-.2-.3-.5-.9-.7-1.1-.2-.2-.5-.4-.8-.5-.3-.1-.6-.2-.9-.2s-.6.1-.9.2c-.7.2-1.4.8-1.7 2.1-.2.8-.7 3-1 4.6a.8.8 0 0 0 1 1.3c.8.2 2.2.4 2.8.6.8.3 2.4 1 3.3 1.3 2 .6 4 .6 5.2-.6.6-.4 1.4-1 1.8-2.1.3-.9.1-2.1-.5-3.3-.3-.6-.7-1.1-1.3-1.5-.4-.3-1-.4-2-.4-.6 0-1.6.4-2.3.7zm-3.4 1.8c.6-.6 1.4-.8 2.2-.8.9 0 1.7.5 1.7 1.4 0 .5-.2.8-.5 1-2 1.6-4 2.1-5 2.1-.7 0-1.3-.2-2-.3"/></svg>`,

    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
};

/**
 * Initialize the application
 */
function init() {
    renderLinks();
    observeElements();
}

/**
 * Render link cards from configuration
 */
function renderLinks() {
    const container = document.getElementById('linksGrid');
    if (!container || typeof PROEDGE_CONFIG === 'undefined') {
        console.warn('Config not loaded or container missing');
        return;
    }

    const links = PROEDGE_CONFIG.links;
    let html = '';

    // Render primary CTA first (Google Reviews)
    Object.entries(links).forEach(([key, link]) => {
        if (!link.visible || !link.url || link.url.trim() === '') {
            return;
        }

        const iconName = link.icon || 'globe';
        const iconSVG = ICONS[iconName] || ICONS.globe;
        const isPrimary = link.isPrimary;
        const className = isPrimary
            ? `link-card link-card--google`
            : `link-card link-card--${key}`;

        const targetAttr = link.url.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';

        html += `
            <a href="${escapeHtml(link.url)}"
               class="${escapeHtml(className)}"
               ${targetAttr}
               aria-label="${escapeHtml(link.label)}">
                <span class="icon" aria-hidden="true">${iconSVG}</span>
                <span class="label">${escapeHtml(link.label)}</span>
            </a>
        `;
    });

    container.innerHTML = html;
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Set up IntersectionObserver for animations
 */
function observeElements() {
    if (!('IntersectionObserver' in window)) {
        // Fallback: make all elements visible
        document.querySelectorAll('[style*="animation"]').forEach(el => {
            el.style.animation = 'none';
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe animated elements
    document.querySelectorAll('.page > *').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Handle keyboard navigation for cards
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        const target = e.target.closest('.link-card');
        if (target && target.tagName === 'A') {
            target.click();
        }
    }
});

/**
 * Add touch feedback for mobile
 */
document.addEventListener('touchstart', (e) => {
    const card = e.target.closest('.link-card');
    if (card) {
        card.style.transform = 'scale(0.99)';
    }
}, { passive: true });

document.addEventListener('touchend', (e) => {
    const card = e.target.closest('.link-card');
    if (card) {
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    }
}, { passive: true });

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}