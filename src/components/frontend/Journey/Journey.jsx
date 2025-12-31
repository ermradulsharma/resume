import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../../database/about.json";
import { BsBriefcase, BsMortarboard } from "react-icons/bs";
import SectionHeader from "../../common/SectionHeader";

const Journey = () => {
    const professional = data.about.experience;
    const educations = data.about.education;
    return (
        <section id="resume" className="resume section">
            <SectionHeader
                title="My Journey"
                description="A comprehensive overview of my academic background and professional journey."
            />
            <Container data-aos="fade-up" data-aos-delay="100">
                <Row>
                    <Col lg={6} data-aos="fade-right" data-aos-delay="200">
                        <div className="experience-section">
                            <div className="section-header">
                                <h2 className="mb-1" style={{ color: "var(--heading-color)" }}><BsBriefcase style={{ color: "var(--accent-color)" }} /> Professional Journey</h2>
                                <p style={{ color: "var(--default-color)" }} className="mb-0 section-subtitle">Proven track record of delivering scalable solutions across multiple industries using full-stack technologies.</p>
                            </div>
                            <div className="experience-cards">
                                {professional.map((item, index) => (
                                    <div className="experience-card" key={index} data-aos="zoom-in" data-aos-delay={300 + index * 100}>
                                        <div className="card-header">
                                            <div className="role-info">
                                                <h3>{item.role}</h3>
                                                <h4>{item.place}</h4>
                                            </div>
                                            <span className="duration">{item.duration}</span>
                                        </div>
                                        <div className="card-body">
                                            <p>{item.description}</p>
                                            {item.achievements && item.achievements.length > 0 && (
                                                <ul className="achievements">
                                                    {item.achievements.map((point, i) => (
                                                        <li key={i}>{point}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} data-aos="fade-left" data-aos-delay="200">
                        <div className="education-section">
                            <div className="section-header">
                                <h2 className="mb-1" style={{ color: "var(--heading-color)" }}><BsMortarboard style={{ color: "var(--accent-color)" }} /> Academic Excellence </h2>
                                <p style={{ color: "var(--default-color)" }} className="mb-0 section-subtitle">Strong foundation in engineering and analytical thinking, complemented by real-world software experience.</p>
                            </div>
                            <div className="education-timeline">
                                <div className="timeline-track"></div>
                                {educations.map((edu, index) => (
                                    <div className="education-item" key={index} data-aos="slide-up" data-aos-delay={200 + index * 100}>
                                        <div className="timeline-marker"></div>
                                        <div className="education-content">
                                            <div className="degree-header">
                                                <h3 style={{ color: "var(--heading-color)" }}>{edu.role}</h3>
                                                <span className="year">{edu.duration}</span>
                                            </div>
                                            <h4 className="institution">{edu.place}, {edu.location}</h4>
                                            <p>{edu.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default Journey;