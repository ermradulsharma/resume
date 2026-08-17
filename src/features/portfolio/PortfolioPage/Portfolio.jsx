import React, { useEffect } from "react";
import { Container, Card, Pagination } from "react-bootstrap";
import { usePortfolioProjects } from "../../../hooks/queries/usePortfolioData";
import { usePortfolioPagination } from "../../../hooks/ui/usePortfolioPagination";
import SEO from "../../../components/ui/SEO";
import "./Portfolio.css";
import data from "../../../data/portfolio.json";
import seoData from "../../../data/seo.json";
import LetsConnect from "../../../features/home/LetsConnect";
import { trackEvent } from "../../../utils/analytics/ga";
import SectionHeader from "../../../components/ui/SectionHeader";
import BrandButton from "../../../components/ui/BrandButton";
import Skeleton from "../../../components/ui/Skeleton/Skeleton";
import UniversalCard from "../../../components/ui/UniversalCard/UniversalCard";

const truncateText = (text, maxLength = 155) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export default function Portfolio() {
    const { title, description } = data.projects;
    const { data: projectsList = [], isLoading } = usePortfolioProjects();
    const { filter, currentPage, updateParams, totalPages, currentProjects } = usePortfolioPagination(projectsList, 8);

    useEffect(() => {
        if (currentPage < 1) updateParams({ page: 1 });
    }, [currentPage, updateParams]);

    return (
        <Container fluid className="px-0" id="portfolio" data-aos="fade-up" data-aos-delay="100">
            <SEO
                title={seoData.portfolioSeo.title}
                description={seoData.portfolioSeo.description}
                keywords={seoData.portfolioSeo.keywords}
                ogUrl={seoData.portfolioSeo.ogUrl}
                canonicalUrl={seoData.portfolioSeo.canonicalUrl}
                ogImage={seoData.portfolioSeo.ogImage}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": seoData.portfolioSeo.title,
                    "image": seoData.portfolioSeo.ogImage,
                    "author": {
                        "@type": "Person",
                        "name": "Mradul Sharma"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Mradul Sharma",
                        "logo": {
                            "@type": "ImageObject",
                            "url": seoData.portfolioSeo.ogImage
                        }
                    },
                    "datePublished": "",
                    "description": seoData.portfolioSeo.description,
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://mradulsharma.vercel.app`
                    }
                }}
            />
            {/* Hero Section */}
            <div className="portfolio-hero text-white d-flex align-items-center justify-content-center text-center">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1 className="display-4 fw-bold">Portfolio</h1>
                    <p className="lead text-white">Explore a portfolio of modern web applications and enterprise projects built with Laravel, React, Node.js, and AWS, showcasing full-stack development expertise.</p>
                </div>
            </div>

            {/* Project Cards Section */}
            <Container className="portfolio section" id="portfolio" data-aos="fade-up" data-aos-delay="100">
                <SectionHeader title={title} description={description} className=" py-4 px-3" level="h1" />
                {/* Filters */}
                <h2 className="visually-hidden">Filter Projects</h2>
                <header className="d-flex flex-column flex-md-row align-items-md-center justify-content-end mb-4 gap-2">
                    <div className="d-flex gap-1 flex-wrap">
                        {["All", "PHP", "Laravel", "CodeIgniter", "Vue.js", "React.js", "Next.js", "Mautic"].map((btn) => (
                            <BrandButton
                                key={btn}
                                to={`?filter=${btn}&page=1`}
                                variant={filter === btn ? "brand" : "brand-outline"}
                                size="sm"
                                style={{ minWidth: "100px" }}
                                onClick={() => {
                                    trackEvent({ name: "filter_projects", category: "Projects", label: btn });
                                }}
                            >
                                {btn}
                            </BrandButton>
                        ))}
                    </div>
                </header>

                {/* Project Grid */}
                <div className="project-grid">


                    {isLoading ? (
                        [...Array(6)].map((_, index) => (
                            <Card key={`skeleton-${index}`} className="project-card border-0 shadow-sm overflow-hidden p-0">
                                <Skeleton height="220px" borderRadius="0" />
                                <Card.Body className="p-4">
                                    <Skeleton width="80%" height="24px" className="mb-2" />
                                    <Skeleton width="40%" height="16px" className="mb-3" />
                                    <Skeleton width="100%" height="60px" className="mb-3" />
                                    <div className="d-flex gap-2">
                                        <Skeleton width="60px" height="24px" />
                                        <Skeleton width="60px" height="24px" />
                                        <Skeleton width="60px" height="24px" />
                                    </div>
                                </Card.Body>
                            </Card>
                        ))
                    ) : (
                        currentProjects.map((p, index) => (
                            <UniversalCard key={index} image={p.image} title={p.title} link={`/portfolio/${p.slug}`} description={truncateText(p.description, 140)} badge={{ text: p.period, bg: "primary-subtle", color: "var(--primary-color)" }} tags={p.technologies} overlayText="Case Study" onClick={() => trackEvent({ name: "view_case_study", category: "Projects", label: p.title })} />
                        ))
                    )}
                </div>

                {totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-5">
                        <Pagination>
                            <Pagination.First href={`?filter=${filter}&page=1`} onClick={(e) => { e.preventDefault(); updateParams({ page: 1 }); }} disabled={currentPage === 1} />
                            <Pagination.Prev href={`?filter=${filter}&page=${Math.max(currentPage - 1, 1)}`} onClick={(e) => { e.preventDefault(); updateParams({ page: Math.max(currentPage - 1, 1) }); }} disabled={currentPage === 1} />
                            {Array.from({ length: totalPages }, (_, i) => (
                                <Pagination.Item key={i + 1} active={i + 1 === currentPage} href={`?filter=${filter}&page=${i + 1}`} onClick={(e) => { e.preventDefault(); updateParams({ page: i + 1 }); }}> {i + 1} </Pagination.Item>
                            ))}
                            <Pagination.Next href={`?filter=${filter}&page=${Math.min(currentPage + 1, totalPages)}`} onClick={(e) => { e.preventDefault(); updateParams({ page: Math.min(currentPage + 1, totalPages) }); }} disabled={currentPage === totalPages} />
                            <Pagination.Last href={`?filter=${filter}&page=${totalPages}`} onClick={(e) => { e.preventDefault(); updateParams({ page: totalPages }); }} disabled={currentPage === totalPages} />
                        </Pagination>
                    </div>
                )}
            </Container>
            <LetsConnect />
        </Container>
    );
}
