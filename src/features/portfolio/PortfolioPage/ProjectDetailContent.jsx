import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { BiDetail, BiTargetLock, BiCheckCircle, BiRocket } from 'react-icons/bi';
import { getSafeProjectImage } from '../../../utils/imageUtils';

const ProjectDetailContent = ({ project, openLightbox }) => {
    const { title, case_study } = project;

    return (
        <>
            {project.metrics && (
                <div className="metrics-container mb-5" data-aos="fade-up">
                    <Row className="g-3">
                        {project.metrics.map((m, idx) => (
                            <Col key={idx} md={4} sm={6}>
                                <div className="metric-card p-4 text-center rounded-4 border shadow-sm h-100 bg-white">
                                    <h4 className="display-6 fw-bold text-primary mb-1">{m.value}</h4>
                                    <p className="text-muted small text-uppercase mb-0 fw-medium letter-spacing-1">{m.label}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}

            {/* Overview */}
            <div className="content-block mb-5" data-aos="fade-up">
                <h3 className="h4 fw-bold mb-3 d-flex align-items-center">
                    <BiDetail className="me-2 text-primary" /> Overview
                </h3>
                <p className="text-secondary lead-sm">{case_study.overview}</p>
            </div>

            {/* Problem Statement */}
            {case_study.problem_statement && (
                <div className="content-block mb-5" data-aos="fade-up">
                    <h3 className="h4 fw-bold mb-3 d-flex align-items-center text-danger">
                        <BiTargetLock className="me-2" /> Challenges Faced
                    </h3>
                    <ul className="list-unstyled">
                        {case_study.problem_statement.map((item, idx) => (
                            <li key={idx} className="mb-3 d-flex align-items-start">
                                <BiCheckCircle className="text-danger mt-1 me-3 flex-shrink-0" />
                                <span className="text-secondary">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Solution / Objectives */}
            {case_study.objectives && (
                <div className="content-block mb-5" data-aos="fade-up">
                    <h3 className="h4 fw-bold mb-3 d-flex align-items-center text-primary">
                        <BiRocket className="me-2" /> Our Solution
                    </h3>
                    <ul className="list-unstyled">
                        {case_study.objectives.map((item, idx) => (
                            <li key={idx} className="mb-3 d-flex align-items-start">
                                <BiCheckCircle className="text-primary mt-1 me-3 flex-shrink-0" />
                                <span className="text-secondary">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Challenges & Solutions */}
            {case_study.challenges_and_solutions && (
                <div className="content-block mb-5" data-aos="fade-up">
                    <h3 className="h4 fw-bold mb-4 d-flex align-items-center">
                        <BiTargetLock className="me-2 text-warning" /> Challenges & Solutions
                    </h3>
                    <div className="challenges-container">
                        {case_study.challenges_and_solutions.map((item, idx) => (
                            <div key={idx} className="challenge-item p-4 mb-4 rounded-4 border-start border-4 border-warning shadow-sm bg-white">
                                <div className="row">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <h6 className="fw-bold text-uppercase small text-muted mb-2">Challenge</h6>
                                        <p className="text-secondary mb-0">{item.challenge}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="fw-bold text-uppercase small text-primary mb-2">Solution</h6>
                                        <p className="text-secondary mb-0">{item.solution}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Implementation Details */}
            {case_study.implemented && (
                <div className="content-block mb-5" data-aos="fade-up">
                    <h3 className="h4 fw-bold mb-4">{case_study.implemented.title || "Implementation Journey"}</h3>
                    <div className="implementation-grid">
                        {Object.entries(case_study.implemented.architecture || {}).map(([key, val]) => (
                            <Card key={key} className="border-0 shadow-sm mb-3 bg-light rounded-4">
                                <Card.Body className="p-4">
                                    <h5 className="h6 fw-bold text-uppercase mb-2 d-flex align-items-center" style={{ color: 'var(--accent-color)' }}>
                                        <span className="dot me-2"></span> {key.replace('_', ' ')}
                                    </h5>
                                    <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>{val}</p>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-5">
                        <h5 className="fw-bold mb-4 small text-uppercase text-muted letter-spacing-1">Key Deliverables</h5>
                        <div className="row g-3">
                            {case_study.implemented.key_features.map((feature, idx) => (
                                <div key={idx} className="col-md-6">
                                    <div className="p-3 border rounded-3 small text-secondary bg-white h-100 d-flex align-items-center shadow-sm hover-up transition-base">
                                        <BiCheckCircle className="text-primary me-2 flex-shrink-0 fs-5" /> {feature}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Screenshot Gallery */}
            {case_study.images && case_study.images.length > 0 && (
                <div className="content-block mb-5" data-aos="fade-up">
                    <h3 className="h4 fw-bold mb-4 d-flex align-items-center">
                        <BiDetail className="me-2 text-primary" /> Project Gallery
                    </h3>
                    <div className="project-gallery mt-4">
                        <div className="row g-4">
                            {case_study.images.map((img, idx) => (
                                <div key={idx} className={`${idx === 0 ? 'col-12' : 'col-md-6 col-lg-4'}`}>
                                    <button
                                        type="button"
                                        className="gallery-item rounded-4 overflow-hidden shadow-sm border h-100 cursor-pointer"
                                        aria-label={`Open ${title} screenshot ${idx + 1} of ${case_study.images.length}`}
                                        onClick={() => openLightbox(idx)}
                                    >
                                        <img
                                            src={getSafeProjectImage(img, project.image)}
                                            alt={`${title} - screenshot ${idx + 1}`}
                                            className="img-fluid w-100 h-100 object-fit-cover transition-base"
                                            loading="lazy"
                                            onError={(e) => {
                                                const fallback = getSafeProjectImage(project.image);
                                                if (e.target.src !== fallback) {
                                                    e.target.src = fallback;
                                                    e.target.title = "Fallback image used";
                                                }
                                            }}
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Outcomes */}
            {case_study.outcomes && (
                <div className="content-block mb-0" data-aos="fade-up">
                    <h3 className="h4 fw-bold mb-4 d-flex align-items-center text-primary">
                        <BiCheckCircle className="me-2 text-primary" /> Strategic Impact
                    </h3>
                    <div className="row g-4 mt-2">
                        {case_study.outcomes.map((outcome, idx) => (
                            <div key={idx} className="col-md-6">
                                <div className="p-4 bg-primary-subtle rounded-4 border border-primary border-opacity-25 h-100 shadow-sm">
                                    <p className="mb-0 small fw-medium text-dark-emphasis" style={{ lineHeight: '1.6' }}>{outcome}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectDetailContent;
