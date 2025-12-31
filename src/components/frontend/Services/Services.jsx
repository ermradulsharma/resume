import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../frontend/Services/Services.css';
import data from "../../database/services.json";
import { getServiceIcon } from '../../../utils/serviceIcons';
import SectionHeader from '../../common/SectionHeader';

const Services = () => {
    return (
        <section id="services" className="about section">
            <SectionHeader
                title="Services"
                description={data.description}
            />
            <Container data-aos="fade-up" data-aos-delay="100">
                <Row className="align-items-center">
                    <Col lg={12} data-aos="fade-left" data-aos-delay="300">
                        <div className="about-content">
                            <div className="skills-grid d-grid gap-4 mb-0" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                                {data.services.map((service, index) => {
                                    const IconComponent = getServiceIcon(service.icon);
                                    return (
                                        <div className="skill-item" key={index} data-aos="zoom-in" data-aos-delay={100 + (index * 50)}>
                                            <div className="skill-icon">
                                                <IconComponent className='tech-icon' title={service.title} />
                                            </div>
                                            <h3>{service.title}</h3>
                                            <p className="text-secondary">{service.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Services;
