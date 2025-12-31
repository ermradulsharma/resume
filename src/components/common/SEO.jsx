import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({
    title,
    description,
    keywords,
    author = "Mradul Sharma",
    ogTitle,
    ogDescription,
    ogImage = "https://mradulsharma.vercel.app/preview.png",
    ogUrl,
    twitterCard = "summary_large_image",
    canonicalUrl,
    prevUrl,
    nextUrl,
    schema
}) => {
    const location = useLocation();
    const baseUrl = "https://mradulsharma.vercel.app";

    // Normalize URL helper
    const normalizeUrl = (url) => {
        if (!url) return url;
        
        // Ensure https
        let normalized = url.replace(/^http:/, 'https:');
        
        // Remove trailing slash except for the root domain
        const urlObj = new URL(normalized, baseUrl);
        if (urlObj.pathname.endsWith('/') && urlObj.pathname !== '/') {
            urlObj.pathname = urlObj.pathname.slice(0, -1);
        }
        
        return urlObj.toString();
    };

    const currentUrl = normalizeUrl(canonicalUrl || ogUrl || `${baseUrl}${location.pathname}`);
    const metaTitle = title;
    const metaDescription = description;
    const metaKeywords = keywords;
    const metaAuthor = author;
    const metaOgTitle = ogTitle || metaTitle;
    const metaOgDescription = ogDescription || metaDescription;
    const metaOgImage = ogImage;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            {metaKeywords && <meta name="keywords" content={metaKeywords} />}
            <meta name="author" content={metaAuthor} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

            {/* Canonical URL */}
            <link rel="canonical" href={currentUrl} />

            {/* Pagination Links */}
            {prevUrl && <link rel="prev" href={normalizeUrl(prevUrl)} />}
            {nextUrl && <link rel="next" href={normalizeUrl(nextUrl)} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={metaOgTitle} />
            <meta property="og:description" content={metaOgDescription} />
            <meta property="og:image" content={metaOgImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Mradul Sharma Portfolio" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={metaOgTitle} />
            <meta name="twitter:description" content={metaOgDescription} />
            <meta name="twitter:image" content={metaOgImage} />

            {/* Schema.org JSON-LD */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
