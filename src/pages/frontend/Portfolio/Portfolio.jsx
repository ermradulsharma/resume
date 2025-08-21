import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "../../frontend/Portfolio/Portfolio.css";
import data from "../../../components/database/portfolio.json";

const TechBadges = ({ items }) => (
    <div className="d-flex flex-wrap gap-2 mt-2">
        {items.map((t) => (
            <Badge key={t} bg="secondary" className="fw-normal">
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
    const { title, description, period, projectsList } = data.projects;
    const [filter, setFilter] = useState("All");
    const filteredProjects = projectsList.filter((p) =>
        filter === "All" ? true : p.technologies.some((tech) =>
            tech.toLowerCase().includes(filter.toLowerCase())
        )
    );
    return (
        <section className="portfolio-section py-0">
            {/* Hero Section */}
            <div className="portfolio-hero text-white d-flex align-items-center justify-content-center text-center">
                <div className="overlay"></div>
            </div>

            {/* Project Cards Section */}
            <Container className="section-title py-4 px-3">
                <h2>Projects & Case Studies</h2>
                <p>I offer end-to-end development solutions that are scalable, secure, and tailored to meet the evolving needs of modern digital businesses. With expertise spanning full-stack development, cloud-native architectures, and database optimization, I design and implement systems capable of handling growth without compromising performance or security. My approach combines technical precision with strategic planning, ensuring each solution is optimized for speed, stability, and long-term maintainability. Whether building custom applications, architecting APIs, or deploying cloud infrastructure, I prioritize user experience, operational efficiency, and data protection. Every project is crafted to align with business goals, adapt to future demands, and deliver measurable value in an increasingly competitive digital landscape.</p>
            </Container>
            <Container className="pb-5">
                <header className="d-flex flex-column flex-md-row align-items-md-center justify-content-end mb-4 gap-2">
                    <div className="d-flex gap-2 flex-wrap">
                        {["All", "Laravel", "Bootstrap", "JavaScript", "JQuery", "Mautic"].map((btn) => (<Button key={btn} variant={filter === btn ? "primary" : "outline-secondary"} size="sm" onClick={() => setFilter(btn)}>{btn}</Button>))}
                    </div>
                </header>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {filteredProjects.map((p, index) => (
                        <Col key={index}>
                            <Card className="h-100 shadow-sm border-0 project-card p-0">
                                <div className="ratio ratio-21x9 overflow-hidden rounded-top">
                                    <Card.Img src={require(`../../../assets/projects/${p.image}`)} alt={p.title} className="object-fit-cover" />
                                </div>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start">
                                        <Card.Title className="fs-6 fw-semibold mb-1 my-min-height-38">{p.title}</Card.Title>
                                        <Badge bg="light" text="dark">{p.period}</Badge>
                                    </div>
                                    <Card.Text className="text-muted mb-2">{truncateText(p.description, 155)}</Card.Text>
                                    <TechBadges items={p.technologies} />
                                </Card.Body>
                                <Card.Footer className="bg-white border-0 pt-0 pb-3 px-3">
                                    <div className="d-flex gap-2">
                                        <Button as="a" href={p.link} target="_blank" rel="noreferrer" variant="primary" size="sm">Live Demo</Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
