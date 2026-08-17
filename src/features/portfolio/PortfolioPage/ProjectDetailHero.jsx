import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiArrowBack, BiTime, BiLayer } from 'react-icons/bi';
import { getSafeProjectImage } from '../../../utils/imageUtils';

const ProjectDetailHero = ({ project }) => {
    const { title, technologies, period, case_study } = project;

    return (
        <div className="project-hero text-white d-flex align-items-center" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${getSafeProjectImage(project.image)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px'
        }}>
            <Container data-aos="fade-up">
                <Row>
                    <Col lg={8}>
                        <Link to="/portfolio" className="back-link d-inline-flex align-items-center mb-4 text-decoration-none">
                            <BiArrowBack className="me-2" /> Back to Portfolio
                        </Link>
                        <h1 className="display-4 fw-bold mb-3">{title}</h1>
                        <div className="d-flex flex-wrap gap-3 mb-4">
                            <span className="d-flex align-items-center">
                                <BiTime className="me-2 text-primary" /> {case_study.project_details?.year || period}
                            </span>
                            <span className="d-flex align-items-center">
                                <BiLayer className="me-2 text-primary" /> {case_study.project_details?.category || project.category}
                            </span>
                        </div>
                        <div className="d-flex flex-wrap gap-2">
                            {technologies.map(tech => (
                                <Badge key={tech} bg="primary-subtle" text="light" className="px-3 py-2 fw-normal fs-6" style={{ background: 'var(--primary-subtle)', color: 'var(--primary-color)', border: '1px solid var(--primary-color)' }}>
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProjectDetailHero;
