import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../components/frontend/TechStack/TechStack.css";
import data from "../../database/techStack.json";
import TechStackCard from "./TechStackCard";
const TechStack = () => {
    const techData = data.techStack.technology;
    const iconMap = {
        frontend: "bi bi-code-slash",
        backend: "bi bi-server",
        frameworks: "bi bi-box",
        database: "bi bi-hdd",
        cloudsAndDevOps: "bi bi-cloud",
        tools: "bi bi-tools",
        paymentGateway: "bi bi-currency-exchange",
    };
    return (
        <section id="skills" className="skills section my-5">
            <Container className="section-title">
                <Row>
                    <Col lg={8}>
                        <h2>{data.techStack.name}</h2>
                        <p>{data.techStack.description}</p>
                    </Col>
                </Row>
            </Container>
            <Container data-aos="fade-up" data-aos-delay="100">
                <Row>
                    <Col lg={8}>
                        <div className="skills-grid">
                            <Row className="g-4">
                                {Object.keys(techData).map((type, index) => (
                                    <TechStackCard key={type} type={type} iconClass={iconMap[type] || "bi bi-circle"} aosDelay={200 + index * 100} />
                                ))}
                            </Row>
                        </div>
                    </Col>

                    <Col lg={4}>
                        <div className="skills-summary" data-aos="fade-left" data-aos-delay="200">
                            <h3>Professional Expertise</h3>
                            <p>Proven expertise in full-stack development, DevOps, cloud infrastructure, API design, and building scalable web applications using Laravel, React, and Node.js. Experienced in leading teams and delivering high-quality enterprise-grade solutions.</p>
                            <div className="summary-stats">
                                <div className="stat-item" data-aos="zoom-in" data-aos-delay="300">
                                    <div className="stat-circle"><i className="bi bi-trophy"></i></div>
                                    <div className="stat-info">
                                        <span className="stat-number">5+</span>
                                        <span className="stat-label">Years Experience</span>
                                    </div>
                                </div>

                                <div className="stat-item" data-aos="zoom-in" data-aos-delay="400">
                                    <div className="stat-circle"><i className="bi bi-diagram-3"></i></div>
                                    <div className="stat-info">
                                        <span className="stat-number">50+</span>
                                        <span className="stat-label">Projects Completed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default TechStack;
