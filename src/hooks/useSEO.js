import { useEffect } from 'react';

// ============================================================================
// CONFIGURATION CONSTANTS
// ============================================================================

/**
 * Base URL for the website
 * @constant {string}
 */
const BASE_URL = 'https://mradulsharma.vercel.app';

/**
 * Default SEO configuration values
 * @constant {Object}
 */
const SEO_DEFAULTS = {
    author: 'Mradul Sharma',
    ogImage: `${BASE_URL}/preview.png`,
    ogUrl: `${BASE_URL}/`,
    twitterCard: 'summary_large_image',
    siteName: 'Mradul Sharma Portfolio',
    locale: 'en_US',
    language: 'English'
};

// ============================================================================
// MAIN HOOK
// ============================================================================

/**
 * Custom React hook for managing SEO meta tags in the document head
 * 
 * This hook handles:
 * - Page title
 * - Meta descriptions and keywords
 * - Open Graph tags for social sharing
 * - Twitter Card tags
 * - Canonical URLs
 * - JSON-LD structured data
 * - Proper cleanup on unmount
 * 
 * @param {Object} config - SEO configuration object
 * @param {string} config.title - Page title (appears in browser tab and search results)
 * @param {string} config.description - Meta description for search engines and social shares
 * @param {string} [config.keywords] - Comma-separated keywords for SEO
 * @param {string} [config.author=Mradul Sharma] - Content author name
 * @param {string} [config.ogTitle] - Open Graph title (defaults to title)
 * @param {string} [config.ogDescription] - Open Graph description (defaults to description)
 * @param {string} [config.ogImage] - Open Graph image URL for social shares
 * @param {string} [config.ogUrl] - Open Graph URL (canonical URL for social shares)
 * @param {string} [config.twitterCard=summary_large_image] - Twitter card type
 * @param {string} [config.canonicalUrl] - Canonical URL for the page (prevents duplicate content)
 * @param {Object} [config.schema] - JSON-LD structured data object for rich snippets
 * 
 * @example
 * useSEO({
 *   title: 'About Me | Mradul Sharma',
 *   description: 'Learn more about my journey as a full-stack developer',
 *   keywords: 'developer, full-stack, Laravel, React',
 *   canonicalUrl: 'https://mradulsharma.vercel.app/about'
 * });
 * 
 * @example
 * // With structured data
 * useSEO({
 *   title: 'Blog Post Title',
 *   description: 'Post excerpt...',
 *   canonicalUrl: 'https://mradulsharma.vercel.app/blogs/post-slug',
 *   schema: {
 *     '@context': 'https://schema.org',
 *     '@type': 'BlogPosting',
 *     headline: 'Blog Post Title',
 *     author: { '@type': 'Person', name: 'Mradul Sharma' }
 *   }
 * });
 */
export const useSEO = ({
    title,
    description,
    keywords,
    author = SEO_DEFAULTS.author,
    ogTitle,
    ogDescription,
    ogImage = SEO_DEFAULTS.ogImage,
    ogUrl = SEO_DEFAULTS.ogUrl,
    twitterCard = SEO_DEFAULTS.twitterCard,
    canonicalUrl,
    schema
}) => {
    useEffect(() => {
        // Track dynamically created elements for cleanup
        const createdElements = [];
        const originalTitle = document.title;

        // ====================================================================
        // HELPER FUNCTIONS
        // ====================================================================

        /**
         * Normalizes URLs for consistency
         * - Ensures HTTPS protocol
         * - Removes trailing slashes (except for root domain)
         * 
         * @param {string} url - URL to normalize
         * @returns {string|null} Normalized URL or original if null/undefined
         */
        const normalizeUrl = (url) => {
            if (!url) return url;

            try {
                // Ensure https protocol
                let normalized = url.replace(/^http:/, 'https:');

                // Remove trailing slash (except for root domain)
                const rootUrl = `${BASE_URL}/`;
                if (normalized.endsWith('/') && normalized !== rootUrl) {
                    normalized = normalized.slice(0, -1);
                }

                return normalized;
            } catch (error) {
                console.error('Error normalizing URL:', url, error);
                return url;
            }
        };

        /**
         * Sets or updates a meta tag in the document head
         * 
         * @param {string} name - Meta tag name or property
         * @param {string} content - Meta tag content
         * @param {boolean} [isProperty=false] - Whether to use 'property' instead of 'name'
         */
        const setMetaTag = (name, content, isProperty = false) => {
            if (!content) return;

            try {
                const attribute = isProperty ? 'property' : 'name';
                let element = document.querySelector(`meta[${attribute}="${name}"]`);

                if (!element) {
                    element = document.createElement('meta');
                    element.setAttribute(attribute, name);
                    element.setAttribute('data-dynamic-seo', 'true');
                    document.head.appendChild(element);
                    createdElements.push(element);
                }
                element.setAttribute('content', content);
            } catch (error) {
                console.error(`Failed to set meta tag ${name}:`, error);
            }
        };

        /**
         * Sets or updates a link tag in the document head
         * 
         * @param {string} rel - Link relationship type
         * @param {string} href - Link href attribute
         */
        const setLinkTag = (rel, href) => {
            if (!href) return;

            try {
                let element = document.querySelector(`link[rel="${rel}"]`);

                if (!element) {
                    element = document.createElement('link');
                    element.setAttribute('rel', rel);
                    element.setAttribute('data-dynamic-seo', 'true');
                    document.head.appendChild(element);
                    createdElements.push(element);
                }
                element.setAttribute('href', href);
            } catch (error) {
                console.error(`Failed to set link tag ${rel}:`, error);
            }
        };

        // ====================================================================
        // SET PAGE TITLE
        // ====================================================================

        try {
            if (title) {
                document.title = title;
            }
        } catch (error) {
            console.error('Failed to set page title:', error);
        }

        // ====================================================================
        // PRIMARY META TAGS
        // ====================================================================

        setMetaTag('description', description);
        setMetaTag('keywords', keywords);
        setMetaTag('author', author);
        setMetaTag('language', SEO_DEFAULTS.language);
        setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

        // ====================================================================
        // CANONICAL URL
        // ====================================================================

        const finalCanonicalUrl = normalizeUrl(canonicalUrl || ogUrl);
        if (finalCanonicalUrl) {
            setLinkTag('canonical', finalCanonicalUrl);
        }

        // Normalize og:url to match canonical exactly
        const finalOgUrl = normalizeUrl(ogUrl);

        // ====================================================================
        // OPEN GRAPH TAGS (Facebook, LinkedIn, etc.)
        // ====================================================================

        setMetaTag('og:type', 'website', true);
        setMetaTag('og:url', finalOgUrl, true);
        setMetaTag('og:title', ogTitle || title, true);
        setMetaTag('og:description', ogDescription || description, true);
        setMetaTag('og:image', ogImage, true);
        setMetaTag('og:image:width', '1200', true);
        setMetaTag('og:image:height', '630', true);
        setMetaTag('og:image:alt', 'Mradul Sharma Portfolio Banner', true);
        setMetaTag('og:site_name', SEO_DEFAULTS.siteName, true);
        setMetaTag('og:locale', SEO_DEFAULTS.locale, true);

        // ====================================================================
        // TWITTER CARD TAGS
        // ====================================================================

        setMetaTag('twitter:card', twitterCard);
        setMetaTag('twitter:url', finalOgUrl);
        setMetaTag('twitter:title', ogTitle || title);
        setMetaTag('twitter:description', ogDescription || description);
        setMetaTag('twitter:image', ogImage);
        setMetaTag('twitter:image:alt', 'Mradul Sharma Portfolio Banner');

        // ====================================================================
        // JSON-LD STRUCTURED DATA
        // ====================================================================

        if (schema) {
            try {
                // Validate schema is a valid object
                const schemaString = JSON.stringify(schema);
                JSON.parse(schemaString); // Validate JSON

                let script = document.querySelector('script[type="application/ld+json"][data-dynamic-seo="true"]');

                if (!script) {
                    script = document.createElement('script');
                    script.type = 'application/ld+json';
                    script.setAttribute('data-dynamic-seo', 'true');
                    document.head.appendChild(script);
                    createdElements.push(script);
                }

                script.textContent = schemaString;
            } catch (error) {
                console.error('Failed to set structured data schema:', error);
            }
        }

        // ====================================================================
        // CLEANUP FUNCTION
        // ====================================================================

        return () => {
            // Remove all dynamically created elements
            createdElements.forEach(element => {
                try {
                    if (element && element.parentNode) {
                        element.parentNode.removeChild(element);
                    }
                } catch (error) {
                    console.error('Error removing element during cleanup:', error);
                }
            });

            // Reset title to original
            try {
                document.title = originalTitle;
            } catch (error) {
                console.error('Error resetting title during cleanup:', error);
            }
        };
    }, [title, description, keywords, author, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, canonicalUrl, schema]);
};

export default useSEO;
