import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Modal } from "react-bootstrap";
import "../../frontend/Portfolio/Portfolio.css";
import data from "../../../components/database/portfolio.json";

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
    const { title, description, period, projectsList } = data.projects;
    const [filter, setFilter] = useState("All");
    const [showModal, setShowModal] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const filteredProjects = projectsList.filter((p) =>
        filter === "All" ? true : p.technologies.some((tech) =>
            tech.toLowerCase().includes(filter.toLowerCase())
        )
    );
    const handleShow = (project) => {
        setActiveProject(project);
        setShowModal(true);
    };

    const handleClose = () => {
        setActiveProject(null);
        setShowModal(false);
    };
    return (
        <section className="portfolio-section py-0">
            {/* Hero Section */}
            <div className="portfolio-hero text-white d-flex align-items-center justify-content-center text-center">
                <div className="overlay"></div>
            </div>

            {/* Project Cards Section */}
            <Container className="section-title py-4 px-3">
                <h2>{title}</h2>
                <p>{description}</p>
            </Container>
            <Container className="pb-5">
                <header className="d-flex flex-column flex-md-row align-items-md-center justify-content-end mb-4 gap-2">
                    <div className="d-flex gap-2 flex-wrap">
                        {["All", "Laravel", "Bootstrap", "JavaScript", "JQuery", "Mautic"].map((btn) => (<Button key={btn} variant={filter === btn ? "primary" : "outline-secondary"} size="sm" onClick={() => setFilter(btn)}>{btn}</Button>))}
                    </div>
                </header>
                <Row xs={1} md={2} lg={4} className="g-4 portfolio-project">
                    {filteredProjects.map((p, index) => (
                        <Col key={index} className="rounded">
                            <Card className="h-100 shadow-lg border-0 project-card p-0 rounded">
                                <div className="overflow-hidden rounded-top">
                                    <Card.Img src={require(`../../../assets/projects/${p.image}`)} alt={p.title} className="object-fit-cover rounded-0" height={147} />
                                    {/* Hover Overlay with Button */}
                                    <div className="overlay d-flex justify-content-center align-items-center">
                                        <Button variant="success" onClick={() => handleShow(p)} size="sm" bg="success-subtle">Case Study</Button>
                                    </div>
                                </div>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start">
                                        <Card.Title className="fs-6 fw-semibold mb-1 my-min-height-38">{p.title}</Card.Title>
                                        <Badge bg="info" text="light">{p.period}</Badge>
                                    </div>
                                    <Card.Text className="text-muted mb-2">{truncateText(p.description, 155)}</Card.Text>
                                    <TechBadges items={p.technologies} />
                                </Card.Body>
                                {/* <Card.Footer className="border-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <Button as="a" href={p.link} target="_blank" rel="noreferrer" variant="primary" size="sm">Live Demo</Button>
                                        <Button as="a" href={p.link} target="_blank" rel="noreferrer" variant="danger" size="sm">Case Study</Button>
                                        <Button as="a" href={p.link} target="_blank" rel="noreferrer" variant="success" size="sm">Gallary</Button>
                                    </div>
                                </Card.Footer> */}
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            {/* Modal */}
            <Modal show={showModal} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton className="p-3">
                    <Modal.Title className="fs-6 fw-semibold">{activeProject?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-3">
                    {/* Overview */}
                    {activeProject?.case_study?.overview && (
                        <>
                            <h6 className="fw-bold">Overview</h6>
                            <p className="text-muted">{activeProject.case_study.overview}</p>
                        </>
                    )}

                    {/* Problem Statement */}
                    {activeProject?.case_study?.problem_statement?.length > 0 && (
                        <>
                            <h6 className="fw-bold mt-3">Problem Statement</h6>
                            <ul>
                                {activeProject.case_study.problem_statement.map((problem, idx) => (
                                    <li key={idx}>{problem}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    {/* Objectives */}
                    {activeProject?.case_study?.objectives?.length > 0 && (
                        <>
                            <h6 className="fw-bold mt-3">Objectives</h6>
                            <ul>
                                {activeProject.case_study.objectives.map((obj, idx) => (
                                    <li key={idx}>{obj}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    {/* Tech Stack & Key Features */}
                    {activeProject?.case_study?.implemented && (
                        <>
                            <h6 className="fw-bold mt-3">{activeProject.case_study.implemented.title}</h6>
                            <ul>{activeProject.case_study.implemented.key_features.map((f, idx) => (<li key={idx}>{f}</li>))}</ul>
                        </>
                    )}
                    {/* Challenges & Solutions */}
                    {activeProject?.case_study?.challenges_and_solutions?.length > 0 && (
                    <>
                        <h6 className="fw-bold mt-3">Challenges & Solutions</h6>
                        <div className="table-responsive">
                        <table className="table table-bordered table-sm align-middle">
                            <thead className="table-light">
                            <tr>
                                <th className="text-center" style={{ width: "50%"}}>Challenge</th>
                                <th className="text-center" style={{ width: "50%"}}>Solution</th>
                            </tr>
                            </thead>
                            <tbody>
                            {activeProject.case_study.challenges_and_solutions.map((item, idx) => (
                                <tr key={idx}>
                                    <td>{item.challenge}</td>
                                    <td>{item.solution}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
                    </>
                    )}


                    {/* Outcomes */}
                    {activeProject?.case_study?.outcomes?.length > 0 && (
                        <>
                            <h6 className="fw-bold mt-3">Outcomes</h6>
                            <ul>{activeProject.case_study.outcomes.map((outcome, idx) => (<li key={idx}>{outcome}</li>))}</ul>
                        </>
                    )}

                    {/* Tech Badges */}
                    {activeProject?.technologies?.length > 0 && (
                        <div className="mt-3 d-flex flex-wrap gap-2">
                            {activeProject.technologies.map((tech, i) => (<Badge bg="success-subtle" text="dark" className="fw-normal" key={i}>{tech} </Badge>))}
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer className="p-2 border-0">
                    <Button variant="danger" size="sm" className="m-0 px-4" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

        </section>
    );
}
