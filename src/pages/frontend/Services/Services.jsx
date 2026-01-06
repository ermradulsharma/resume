import React, { useState } from "react";
import SEO from "../../../components/common/SEO";
import LetsConnect from "../../../components/LetsConnect";
import { Col, Container, Row } from "react-bootstrap";
import data from "../../../components/database/services.json";
import "../Services/Services.css";
import ServiceModal from "../../../components/modals/ServiceModal";

import { getServiceIcon } from "../../../utils/serviceIcons";
import BrandButton from "../../../components/common/BrandButton";

const Services = () => {
    const services = data.services.filter(service => service.title);
    const [showModal, setShowModal] = useState(false);
    const [activeService, setActiveService] = useState(null);

    const handleShow = (service) => {
        console.log("Service passed to modal:", service);
        setActiveService(service);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setActiveService(null);
    };
    return (
        <section id="services" className="services section">
            <SEO
                title="Services | Full-Stack Development by Mradul Sharma"
                description="Professional web development and cloud solutions covering Laravel, React, Node.js, API design, DevOps, and AWS infrastructure for scalable applications."
                keywords="Full Stack Development Services, Laravel Development Services, React Development Services, AWS Cloud Consulting, Custom API Development, Database Optimization Services, DevOps Consulting, Cloud Architecture Design, Microservices Development, Enterprise SaaS Development, Payment Gateway Integration, Performance Optimization, Web Application Development, Mobile Backend Development, Technical Consulting, Code Review Services"
                ogUrl="https://mradulsharma.vercel.app/services"
                canonicalUrl="https://mradulsharma.vercel.app/services"
            />
            {/* Hero Section */}
            <div className="services-hero text-white d-flex align-items-center justify-content-center text-center">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1 className="display-4 fw-bold">Services</h1>
                    <p className="lead text-white">I specialize in developing robust, scalable, and secure digital solutions that power modern businesses.</p>
                </div>
            </div>
            <Container className="section-title py-4 px-3">
                <h2>Services</h2>
                <p>I offer end-to-end development solutions that are scalable, secure, and tailored to meet the evolving needs of modern digital businesses. With expertise spanning full-stack development, cloud-native architectures, and database optimization, I design and implement systems capable of handling growth without compromising performance or security. My approach combines technical precision with strategic planning, ensuring each solution is optimized for speed, stability, and long-term maintainability. Whether building custom applications, architecting APIs, or deploying cloud infrastructure, I prioritize user experience, operational efficiency, and data protection. Every project is crafted to align with business goals, adapt to future demands, and deliver measurable value in an increasingly competitive digital landscape.</p>
            </Container>
            <Container data-aos="fade-up" data-aos-delay="100" className="mb-3">
                <Row className="g-4">
                    {services.filter(service => service.title && service.description).map((service, index) => {
                        const IconComponent = getServiceIcon(service.icon);
                        return (
                            <Col key={index} lg={4} md={6} data-aos="fade-up" data-aos-delay={`${100 * (index % 3 + 1)}`}>
                                <div className="service-item">
                                    <div className="stat-circle mb-2"><IconComponent /></div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <BrandButton className="link-item px-4 py-2" withArrow onClick={() => handleShow(service)}>Learn More</BrandButton>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
            <LetsConnect />
            <ServiceModal show={showModal} handleClose={handleClose} title={activeService?.title} icon={activeService?.icon} content={activeService?.content} />
        </section>
    );
};
export default Services;