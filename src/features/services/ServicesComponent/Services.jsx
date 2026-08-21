import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './Services.css';
import data from "../../../data/services.json";
import { getServiceIcon } from '../../../utils/serviceIcons';
import SectionHeader from "../../../components/ui/SectionHeader";

const Services = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Development', 'Cloud & DevOps', 'Architecture'];

    const filteredServices = useMemo(() => {
        if (activeTab === 'All') return data.services;
        if (activeTab === 'Development') {
            return data.services.filter(s => s.title.toLowerCase().includes('development') || s.title.toLowerCase().includes('stack') || s.title.toLowerCase().includes('api') || s.title.toLowerCase().includes('frontend') || s.title.toLowerCase().includes('backend'));
        }
        if (activeTab === 'Cloud & DevOps') {
            return data.services.filter(s => s.title.toLowerCase().includes('cloud') || s.title.toLowerCase().includes('devops') || s.title.toLowerCase().includes('docker') || s.title.toLowerCase().includes('aws') || s.title.toLowerCase().includes('ci/cd') || s.title.toLowerCase().includes('deployment'));
        }
        if (activeTab === 'Architecture') {
            return data.services.filter(s => s.title.toLowerCase().includes('architecture') || s.title.toLowerCase().includes('consultancy') || s.title.toLowerCase().includes('leadership') || s.title.toLowerCase().includes('system') || s.title.toLowerCase().includes('security'));
        }
        return data.services;
    }, [activeTab]);

    return (
        <Container className='services section clearfix' id="services" data-aos="fade-up" data-aos-delay="100" style={{ clear: 'both', position: 'relative' }}>
            <SectionHeader title="Services" description={data.description} />

            <div className="d-flex justify-content-center mb-4">
                <Nav variant="pills" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)} role="tablist" aria-label="Services filter categories">
                    {categories.map(cat => (
                        <Nav.Item key={cat}>
                            <Nav.Link eventKey={cat} className="rounded-pill px-3 py-2 mx-1 fw-medium" role="tab" aria-selected={activeTab === cat}>
                                {cat}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
            </div>

            <Row className="align-items-center">
                <Col lg={12} data-aos="fade-left" data-aos-delay="300">
                    <div className="services-content">
                        <div className="skills-grid d-grid gap-4 mb-0" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                            {filteredServices.map((service, index) => {
                                const IconComponent = getServiceIcon(service.icon);
                                return (
                                    <div className="skill-item" key={index} data-aos="zoom-in" data-aos-delay={100 + (index * 30)}>
                                        <div className="skill-icon"><IconComponent className='tech-icon' title={service.title} /></div>
                                        <h3 className="h6 fw-bold">{service.title}</h3>
                                        <p className="text-secondary small">{service.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default Services;
