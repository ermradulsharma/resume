import React, { useState } from "react";
import { Container, Card, Button, Badge, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import SEO from "../../../components/common/SEO";
import "../../frontend/Portfolio/Portfolio.css";
import data from "../../../components/database/portfolio.json";
import LetsConnect from "../../../components/LetsConnect";
import { trackEvent } from "../../../utils/analytics/ga";
import SectionHeader from "../../../components/common/SectionHeader";
import { getSafeProjectImage } from "../../../utils/imageUtils";

const TechBadges = ({ items }) => (
    <div className="d-flex flex-wrap gap-2 mt-2">
        {items.map((t) => (
            <Badge key={t} bg="success-subtle" text="dark" className="fw-normal">
                {t}
            </Badge>
        ))}
    </div>
);

const truncateText = (text, maxLength = 155) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export default function Portfolio() {
    const { title, description, projectsList } = data.projects;
    const [filter, setFilter] = useState("All");

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 8;

    // Filter projects by technology
    const filteredProjects = projectsList.filter((p) =>
        filter === "All" ? true : p.technologies.some((tech) => tech.toLowerCase().includes(filter.toLowerCase()))
    );

    // Reset page if filter changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [filter]);

    // Pagination logic
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const indexOfLast = currentPage * projectsPerPage;
    const indexOfFirst = indexOfLast - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

    return (
        <section className="portfolio-section py-0">
            <SEO
                title="Portfolio | Full-Stack Projects by Mradul Sharma Dev"
                description="Explore a portfolio of modern web applications and enterprise projects built with Laravel, React, Node.js, and AWS, showcasing full-stack development expertise."
                keywords="Full Stack Portfolio, Laravel Projects, React Applications, Enterprise Web Applications, SaaS Platform Development, Microservices Architecture, Real-Time Trading Platform, CMS Development, Payroll Management System, Cloud-Based Applications, API Integration Projects, Database-Driven Solutions, E-commerce Development, Payment Gateway Integration, Scalable Web Applications, Progressive Web Apps"
                ogUrl="https://mradulsharma.vercel.app/portfolio"
                canonicalUrl="https://mradulsharma.vercel.app/portfolio"
            />
            {/* Hero Section */}
            <div className="portfolio-hero text-white d-flex align-items-center justify-content-center text-center">
                <div className="overlay"></div>
            </div>

            {/* Project Cards Section */}
            <SectionHeader
                title={title}
                description={description}
                className=" py-4 px-3"
            />
            <Container>
                {/* Filters */}
                <header className="d-flex flex-column flex-md-row align-items-md-center justify-content-end mb-4 gap-2">
                    <div className="d-flex gap-1 flex-wrap">
                        {["All", "PHP", "Laravel", "CodeIgniter", "Vue.js", "React.js", "Next.js", "Mautic"].map((btn) => (
                            <Button
                                key={btn}
                                variant={filter === btn ? "success" : "outline-secondary"}
                                size="sm"
                                style={{ minWidth: "100px" }}
                                onClick={() => {
                                    setFilter(btn);
                                    trackEvent({ name: "filter_projects", category: "Projects", label: btn });
                                }}
                            >
                                {btn}
                            </Button>
                        ))}
                    </div>
                </header>

                {/* Project Grid */}
                <div className="project-grid">
                    {currentProjects.map((p, index) => (
                        <Card key={index} className="shadow-lg project-card p-0 border-0 overflow-hidden">
                            <Link
                                to={`/portfolio/${p.slug}`}
                                className="text-decoration-none"
                                onClick={() => trackEvent({ name: "view_case_study", category: "Projects", label: p.title })}
                            >
                                <div className="card-img-wrapper position-relative overflow-hidden">
                                    <Card.Img
                                        src={getSafeProjectImage(p.image)}
                                        alt={p.title}
                                        height={220}
                                        style={{ objectFit: "cover" }}
                                        loading="lazy"
                                        onError={(e) => { e.target.src = 'https://via.placeholder.com/400x220?text=Project+Image'; }}
                                    />
                                    <div className="overlay d-flex justify-content-center align-items-center">
                                        <Button as="span" variant="success" className="fw-bold">
                                            Case Study
                                        </Button>
                                    </div>
                                </div>
                            </Link>
                            <Card.Body className="p-4 d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <Link
                                        to={`/portfolio/${p.slug}`}
                                        className="text-decoration-none text-dark flex-grow-1"
                                        onClick={() => trackEvent({ name: "view_case_study", category: "Projects", label: p.title })}
                                    >
                                        <Card.Title
                                            className="h6 fw-bold mb-0 project-title"
                                            style={{ minHeight: "40px" }}
                                        >
                                            {p.title}
                                        </Card.Title>
                                    </Link>
                                    <Badge bg="success-subtle" text="success" className="border border-success-subtle">{p.period}</Badge>
                                </div>
                                <Card.Text className="text-secondary small mb-3">
                                    {truncateText(p.description, 140)}
                                </Card.Text>
                                <TechBadges items={p.technologies} />
                            </Card.Body>
                        </Card>
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-5">
                        <Pagination>
                            <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
                            <Pagination.Prev onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} />
                            {Array.from({ length: totalPages }, (_, i) => (
                                <Pagination.Item
                                    key={i + 1}
                                    active={i + 1 === currentPage}
                                    onClick={() => setCurrentPage(i + 1)}
                                >
                                    {i + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} />
                            <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
                        </Pagination>
                    </div>
                )}
            </Container>

            <LetsConnect />
        </section>
    );
}
