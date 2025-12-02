import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../frontend/Services/Services.css';
import data from "../../database/services.json";
import {
    BiCode, BiPlug, BiCloudUpload, BiGrid, BiBox, BiTachometer,
    BiGlobe, BiLock, BiTrendingUp, BiMicrochip, BiCloud, BiCog,
    BiPhone, BiLink, BiHdd, BiNetworkChart, BiSearch, BiBoltCircle,
    BiShield, BiBroadcast, BiIdCard, BiSync, BiWallet, BiGroup
} from "react-icons/bi";

const iconMapping = {
    "bi-code-slash": BiCode,
    "bi-plug": BiPlug,
    "bi-cloud-upload": BiCloudUpload,
    "bi-kanban": BiGrid,
    "bi-boxes": BiBox,
    "bi-speedometer2": BiTachometer,
    "bi-globe": BiGlobe,
    "bi-shield-lock": BiLock,
    "bi-graph-up": BiTrendingUp,
    "bi-cpu": BiMicrochip,
    "bi-cloud-check": BiCloud,
    "bi-gear": BiCog,
    "bi-phone": BiPhone,
    "bi-link": BiLink,
    "bi-hdd-rack": BiHdd,
    "bi-diagram-3": BiNetworkChart,
    "bi-search": BiSearch,
    "bi-lightning-charge": BiBoltCircle,
    "bi-shield-shaded": BiShield,
    "bi-broadcast-pin": BiBroadcast,
    "bi-person-badge": BiIdCard,
    "bi-arrow-repeat": BiSync,
    "bi-wallet": BiWallet,
    "bi-people": BiGroup
};

const Services = () => {
    return (
        <section id="services" className="about section mb-5">
            <Container className="section-title">
                <h2>Services</h2>
                <p>{data.description}</p>
            </Container>
            <Container data-aos="fade-up" data-aos-delay="100">
                <Row className="align-items-center">
                    <Col lg={12} data-aos="fade-left" data-aos-delay="300">
                        <div className="about-content">
                            <div className="skills-grid d-grid gap-4 mb-0" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                                {data.services.map((service, index) => {
                                    const IconComponent = iconMapping[service.icon] || BiCode;
                                    return (
                                        <div className="skill-item" key={index} data-aos="zoom-in" data-aos-delay={100 + (index * 50)}>
                                            <div className="skill-icon">
                                                <IconComponent className='tech-icon' title={service.title} />
                                            </div>
                                            <h3>{service.title}</h3>
                                            <p>{service.description}</p>
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
