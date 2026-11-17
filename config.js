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
        fullAddress: 'No. 123, Galle Road, Dehiwala 10350, Sri Lanka',
        phone: '075 067 8675',
        phoneFormatted: '+94750678675',
    },

    // Social Media & External Links
    // Set url to null or empty string to hide the button
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
        website: {
            label: 'Visit Website',
            url: '', // Set your website URL here when available
            icon: 'globe',
            visible: false, // Automatically hidden when url is empty
            isPrimary: false,
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