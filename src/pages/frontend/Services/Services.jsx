import React, { useState } from "react";
import LetsConnect from "../../../components/LetsConnect";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import data from "../../../components/database/services.json";
import "../Services/Services.css";
import ServiceModal from "../../../components/modals/ServiceModal";
import ContactSection from "../../../components/frontend/Contact/Contact";

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
    return(
        <section id="services" className="services section">
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
                <p>I offer scalable and secure development solutions tailored to modern digital businesses.</p>
            </Container>
            <Container data-aos="fade-up" data-aos-delay="100" className="mb-3">
                <Row className="g-4">
                    {services.filter(service => service.title && service.description).map((service, index) => {
                        return (
                        <Col key={index} lg={4} md={6} data-aos="fade-up" data-aos-delay={`${100 * (index % 3 + 1)}`}>
                            <div className="service-item">
                                <div className="icon"><i className={`bi ${service.icon}`}></i></div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <button className="link-item btn btn-primary px-4 py-2 text-white" onClick={() => handleShow(service)}>Learn More <BsArrowRight /></button>
                            </div>
                        </Col>
                        );
                    })}
                </Row>
            </Container>
            <ContactSection />
            <LetsConnect />
            <ServiceModal show={showModal} handleClose={handleClose} title={activeService?.title} icon={activeService?.icon} content={activeService?.content} />
        </section>
    );
};
export default Services;