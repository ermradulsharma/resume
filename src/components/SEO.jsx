import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const SEO = ({
    title = "Mradul Sharma | Senior Full-Stack Developer (Laravel, React.js, Node.js, Next.js)",
    description = "Explore Mradul Sharma's portfolio featuring enterprise-grade full-stack applications built with Laravel, React, AWS, and more.",
    keywords = "Mradul Sharma, Senior Full Stack Developer, Laravel 12 Developer, React JS Developer, Node.js Developer, AWS Cloud Developer, Microservices Developer, API Developer, SaaS Developer, PostgreSQL Expert, MongoDB Developer, DevOps Engineer, Docker Kubernetes Developer, JavaScript ES6 Developer, CodeIgniter Developer, Next.js Developer, Inertia.js Developer, Tailwind CSS Developer, PHP Developer India, Full Stack Developer Uttar Pradesh, Web Developer Etah, Remote Full Stack Developer, CI/CD Pipeline Engineer, AWS EC2 S3 RDS Developer, Payment Gateway Integration Developer (Stripe PayPal Razorpay), Freelance Full Stack Developer India",
    author = "Mradul Sharma",
    ogTitle,
    ogDescription,
    ogImage = "https://mradulsharma.vercel.app/preview.png",
    ogUrl = "https://mradulsharma.vercel.app/",
    twitterCard = "summary_large_image",
    canonicalUrl,
    structuredData,
}) => {
    const pageTitle = title;
    const pageOgTitle = ogTitle || title;
    const pageOgDescription = ogDescription || description;
    const pageCanonical = canonicalUrl || ogUrl;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{pageTitle}</title>
            <meta name="title" content={pageTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={pageCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:title" content={pageOgTitle} />
            <meta property="og:description" content={pageOgDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Mradul Sharma Portfolio Banner" />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:url" content={ogUrl} />
            <meta name="twitter:title" content={pageOgTitle} />
            <meta name="twitter:description" content={pageOgDescription} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:image:alt" content="Mradul Sharma Portfolio Banner" />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    author: PropTypes.string,
    ogTitle: PropTypes.string,
    ogDescription: PropTypes.string,
    ogImage: PropTypes.string,
    ogUrl: PropTypes.string,
    twitterCard: PropTypes.string,
    canonicalUrl: PropTypes.string,
    structuredData: PropTypes.object,
};

export default SEO;
