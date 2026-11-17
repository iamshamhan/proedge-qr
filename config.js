/**
 * PROEDGE QR Landing Page - Configuration
 *
 * All business links and information are defined here for easy maintenance.
 * Update this file to change any links or business details.
 */

const PROEDGE_CONFIG = {
    // Business Information
    business: {
        name: 'PROEDGE',
        tagline: 'Experience the authentic.',
        type: 'Authentic sports shoes and accessories',
        location: 'Dehiwala, Sri Lanka',
        fullAddress: 'No 32 Attidiya Road Kawdana, Dehiwala, 10350',
        phone: '075 067 8675',
        phoneFormatted: '+94750678675',
    },

    // Social Media & External Links
    // Set url to null or empty string to hide the button
    // Use isComingSoon: true for buttons that are visible but not yet clickable
    links: {
        instagram: {
            label: 'Follow on Instagram',
            url: 'https://www.instagram.com/pro.edge_lk',
            icon: 'instagram',
            visible: true,
            isPrimary: false,
        },
        tiktok: {
            label: 'Follow on TikTok',
            url: 'https://www.tiktok.com/@pro.edge7',
            icon: 'tiktok',
            visible: true,
            isPrimary: false,
        },
        facebook: {
            label: 'Follow on Facebook',
            url: 'https://www.facebook.com/share/1C4RMiDa12/',
            icon: 'facebook',
            visible: true,
            isPrimary: false,
        },
        whatsapp: {
            label: 'Chat on WhatsApp',
            url: 'https://wa.me/94750678675',
            icon: 'whatsapp',
            visible: true,
            isPrimary: false,
        },
        googleReviews: {
            label: 'Leave Us a Google Review',
            url: 'https://g.page/r/CSV9PVOFhL-fEBM/review',
            icon: 'google',
            visible: true,
            isPrimary: true,
        },
        website: {
            label: 'Visit Website',
            subtitle: 'Visit for catalogs & products',
            url: '', // Will be updated when website launches
            icon: 'globe',
            visible: true,
            isPrimary: false,
            isComingSoon: true,
        },
    },

    // SEO Metadata
    seo: {
        title: 'PROEDGE - Experience the Authentic',
        description: 'Premium sports shoes and accessories in Dehiwala, Sri Lanka',
        ogTitle: 'PROEDGE - Experience the Authentic',
        ogDescription: 'Premium sports shoes and accessories in Dehiwala, Sri Lanka',
        ogImage: 'logo-horizontal.svg',
        ogUrl: 'https://iamshamhan.github.io/proedge-qr/',
        twitterCard: 'summary_large_image',
    },

    // Asset Paths (relative to index.html)
    assets: {
        logoStacked: 'logo-stacked.svg',
        logoHorizontal: 'logo-horizontal.svg',
        qrCode: 'qr-code.png',
        favicon: 'logo-stacked.svg',
    },
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PROEDGE_CONFIG;
}