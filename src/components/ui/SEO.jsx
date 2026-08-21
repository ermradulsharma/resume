import React, { useMemo } from 'react';
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
    breadcrumbs,
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

    // Auto-generate breadcrumbs if not provided explicitly
    const effectiveBreadcrumbs = useMemo(() => {
        if (breadcrumbs) return breadcrumbs;
        if (location.pathname === '/') return null;

        const pathSegments = location.pathname.split('/').filter(Boolean);
        const crumbs = [{ name: 'Home', url: baseUrl }];
        let accumPath = '';

        pathSegments.forEach((segment) => {
            accumPath += `/${segment}`;
            const formattedName = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
            crumbs.push({
                name: formattedName,
                url: `${baseUrl}${accumPath}`
            });
        });

        return crumbs;
    }, [breadcrumbs, location.pathname]);

    // Construct BreadcrumbList schema
    const breadcrumbSchema = useMemo(() => {
        if (!effectiveBreadcrumbs || effectiveBreadcrumbs.length === 0) return null;
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": effectiveBreadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": crumb.name,
                "item": crumb.url ? normalizeUrl(crumb.url) : currentUrl
            }))
        };
    }, [effectiveBreadcrumbs, currentUrl]);

    // Default WebSite Schema with SearchAction for homepage Sitelinks
    const webSiteSchema = useMemo(() => {
        if (location.pathname !== '/') return null;
        return {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${baseUrl}/#website`,
            "url": baseUrl,
            "name": "Mradul Sharma | Senior FullStack Developer & Software Architect",
            "description": "Professional portfolio of Mradul Sharma, a Senior FullStack Developer specialized in Laravel, React, Node.js, and AWS.",
            "publisher": {
                "@type": "Person",
                "name": "Mradul Sharma",
                "url": baseUrl
            },
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": `${baseUrl}/blogs?search={search_term_string}`
                },
                "query-input": "required name=search_term_string"
            }
        };
    }, [location.pathname]);

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
            {breadcrumbSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}
            {webSiteSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(webSiteSchema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
