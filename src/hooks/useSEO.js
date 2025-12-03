import { useEffect } from 'react';

/**
 * Custom hook for managing document head meta tags
 * Compatible with React 19
 */
export const useSEO = ({
    title,
    description,
    keywords,
    author = "Mradul Sharma",
    ogTitle,
    ogDescription,
    ogImage = "https://mradulsharma.vercel.app/preview.png",
    ogUrl = "https://mradulsharma.vercel.app/",
    twitterCard = "summary_large_image",
    canonicalUrl,
    schema
}) => {
    useEffect(() => {
        // Set page title
        if (title) {
            document.title = title;
        }

        // Helper function to set or update meta tags
        const setMetaTag = (name, content, isProperty = false) => {
            if (!content) return;

            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Helper function to set or update link tags
        const setLinkTag = (rel, href) => {
            if (!href) return;

            let element = document.querySelector(`link[rel="${rel}"]`);

            if (!element) {
                element = document.createElement('link');
                element.setAttribute('rel', rel);
                document.head.appendChild(element);
            }
            element.setAttribute('href', href);
        };

        // Helper function to normalize URLs for consistency
        const normalizeUrl = (url) => {
            if (!url) return url;

            // Ensure https protocol
            let normalized = url.replace(/^http:/, 'https:');

            // Remove trailing slash (except for root domain)
            // Keep root domain with slash: https://mradulsharma.vercel.app/
            if (normalized.endsWith('/') && normalized !== 'https://mradulsharma.vercel.app/') {
                normalized = normalized.slice(0, -1);
            }

            return normalized;
        };

        // Primary Meta Tags
        setMetaTag('description', description);
        setMetaTag('keywords', keywords);
        setMetaTag('author', author);
        setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

        // Set canonical URL with normalization (prefer explicit canonicalUrl, fallback to ogUrl)
        const finalCanonicalUrl = normalizeUrl(canonicalUrl || ogUrl);
        if (finalCanonicalUrl) {
            setLinkTag('canonical', finalCanonicalUrl);
        }

        // Normalize og:url to match canonical exactly
        const finalOgUrl = normalizeUrl(ogUrl);

        // JSON-LD Schema
        if (schema) {
            let script = document.querySelector('script[type="application/ld+json"][data-dynamic="true"]');
            if (!script) {
                script = document.createElement('script');
                script.type = 'application/ld+json';
                script.setAttribute('data-dynamic', 'true');
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(schema);
        }

        // Open Graph / Facebook
        setMetaTag('og:type', 'website', true);
        setMetaTag('og:url', finalOgUrl, true);
        setMetaTag('og:title', ogTitle || title, true);
        setMetaTag('og:description', ogDescription || description, true);
        setMetaTag('og:image', ogImage, true);
        setMetaTag('og:image:width', '1200', true);
        setMetaTag('og:image:height', '630', true);
        setMetaTag('og:image:alt', 'Mradul Sharma Portfolio Banner', true);

        // Twitter Card
        setMetaTag('twitter:card', twitterCard);
        setMetaTag('twitter:url', finalOgUrl);
        setMetaTag('twitter:title', ogTitle || title);
        setMetaTag('twitter:description', ogDescription || description);
        setMetaTag('twitter:image', ogImage);
        setMetaTag('twitter:image:alt', 'Mradul Sharma Portfolio Banner');

        // Cleanup function to reset title on unmount (optional)
        return () => {
            // You can reset to default title if needed
            // document.title = 'Mradul Sharma | Portfolio';
        };
    }, [title, description, keywords, author, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, canonicalUrl, schema]);
};

export default useSEO;
