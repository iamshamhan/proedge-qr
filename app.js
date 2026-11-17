/**
 * PROEDGE QR Landing Page - Application Logic
 *
 * Renders link cards from config.js and handles interactions.
 */

// SVG Icons (inline - official brand icons)
const ICONS = {
    // Google Maps / Google Reviews - official Google Maps pin
    google: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,

    // Instagram - official glyph
    instagram: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.057-1.265-.068-1.644-.068-4.849 0-3.204.013-3.583.068-4.848.148-3.227 1.682-4.77 4.92-4.918 1.265-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.601 6.78 6.98 6.98 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-.293-1.28-.701-1.688-4.949-1.688zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,

    // TikTok - official logo
    tiktok: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.545,2.4h-.941v8.639h.632V5.18h.31v5.859h.912V2.4Zm6.342,7.622c.097.729.161,1.472.161,2.215,0,5.025-4.08,9.106-9.105,9.106S2.132,17.57,2.132,12.544,6.212,3.44,11.237,3.44c3.163,0,5.99,1.826,7.468,4.52h1.572c-0.843-2.052-2.752-3.62-5.066-3.62-4.506,0-8.165,3.659-8.165,8.165s3.659,8.165,8.165,8.165c3.489,0,6.53-1.955,7.734-4.76l-1.604-.753c-.707,1.51-2.165,2.682-4.129,2.682-2.842,0-5.157-2.315-5.157-5.157s2.315-5.156,5.157-5.156c1.384,0,2.647.586,3.552,1.532l1.152-1.134C18.04,1.984,15.557,.5,12.545,.5,7.906,.5,4.095,4.31,4.095,9.042s3.81,8.542,8.543,8.542c3.57,0,5.642-1.91,7.66-4.502l-1.625-1.733Z"/></svg>`,

    // Facebook - official "f" logo
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,

    // WhatsApp - official logo
    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.95 11.95 0 0 0 12 0C5.37 0 .16 5.16.52 11.76a.75.75 0 0 0 .1.5 72 72 0 0 0 1.2 2.8.75.75 0 0 0 1.1.1c3.24-1.68 5.69-1.8 7.5-2.02a.75.75 0 0 1 .97.1 12.25 12.25 0 0 1 3.1 5.6.75.75 0 1 1-1.46.4A10.6 10.6 0 0 0 12 1.4a10.6 10.6 0 0 0-9.38 9.4.75.75 0 1 1-.8-.9A9.1 9.1 0 0 1 12 2.3c4 0 7.2 2.3 8.5 5.3.1.3.3.5.6.5h.1c.3 0.5-.2.6-.6.7-2.3 1.04-5.6.7-7.2a.75.75 0 0 0-.5-.9z"/><path d="M18.4 15.2c-.7-.5-1.5-.9-2.4-1a22 22 0 0 0-1.8-.3c-.5 0-.9.2-1.2.4-.8.4-1.7.5-2.3.2-.3-.1-1.2-.6-1.2-1.3 0-.2.2-.4.3-.7.1-.2.3-.7.5-1.2.2-.5.3-1.3.1-1.6-.2-.3-.5-.9-.7-1.1-.2-.2-.5-.4-.8-.5-.3-.1-.6-.2-.9-.2s-.6.1-.9.2c-.7.2-1.4.8-1.7 2.1-.2.8-.7 3-1 4.6a.8.8 0 0 0 1 1.3c.8.2 2.2.4 2.8.6.8.3 2.4 1 3.3 1.3 2 .6 4 .6 5.2-.6.6-.4 1.4-1 1.8-2.1.3-.9.1-2.1-.5-3.3-.3-.6-.7-1.1-1.3-1.5-.4-.3-1-.4-2-.4-.6 0-1.6.4-2.3.7zm-3.4 1.8c.6-.6 1.4-.8 2.2-.8.9 0 1.7.5 1.7 1.4 0 .5-.2.8-.5 1-2 1.6-4 2.1-5 2.1-.7 0-1.3-.2-2-.3"/></svg>`,

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

    // Render in config order - socials first, then Google Reviews, then Website
    Object.entries(links).forEach(([key, link]) => {
        if (!link.visible) {
            return;
        }

        const iconName = link.icon || 'globe';
        const iconSVG = ICONS[iconName] || ICONS.globe;
        const isPrimary = link.isPrimary;
        const isComingSoon = link.isComingSoon;

        let className = `link-card link-card--${key}`;
        if (isPrimary) {
            className += ' link-card--primary';
        }
        if (isComingSoon) {
            className += ' link-card--coming-soon';
        }

        // Determine if link should be clickable
        const hasValidUrl = link.url && link.url.trim() !== '' && link.url.startsWith('http');
        const isClickable = hasValidUrl && !isComingSoon;

        let hrefAttr = '#';
        let targetAttr = '';
        let clickHandler = '';

        if (isClickable) {
            hrefAttr = escapeHtml(link.url);
            targetAttr = ' target="_blank" rel="noopener noreferrer"';
        } else {
            clickHandler = ' tabindex="0"';
        }

        // Build label with optional subtitle
        let labelHtml = `<span class="label">${escapeHtml(link.label)}</span>`;
        if (link.subtitle) {
            labelHtml += `<span class="subtitle">${escapeHtml(link.subtitle)}</span>`;
        }

        if (isClickable) {
            html += `
                <a href="${hrefAttr}"
                   class="${escapeHtml(className)}"
                   ${targetAttr}
                   aria-label="${escapeHtml(link.label)}">
                    <span class="icon" aria-hidden="true">${iconSVG}</span>
                    <span class="label-wrap">${labelHtml}</span>
                </a>
            `;
        } else {
            html += `
                <button class="${escapeHtml(className)}"
                        aria-label="${escapeHtml(link.label)}"
                        disabled${clickHandler}>
                    <span class="icon" aria-hidden="true">${iconSVG}</span>
                    <span class="label-wrap">${labelHtml}</span>
                    ${isComingSoon ? '<span class="coming-soon-badge">Coming Soon</span>' : ''}
                </button>
            `;
        }
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