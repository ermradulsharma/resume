import React, { useState } from "react";
import SEO from "../../../components/common/SEO";
import LetsConnect from "../../../components/LetsConnect";
import { Col, Container, Row } from "react-bootstrap";
import data from "../../../components/database/services.json";
import seoData from "../../../components/database/seo.json";
import "../Services/Services.css";
import ServiceModal from "../../../components/modals/ServiceModal";

import { getServiceIcon } from "../../../utils/serviceIcons";
import BrandButton from "../../../components/common/BrandButton";
import { trackEvent } from "../../../utils/analytics/ga";

const Services = () => {
    const services = data.services.filter(service => service.title);
    const [showModal, setShowModal] = useState(false);
    const [activeService, setActiveService] = useState(null);

    const handleShow = (service) => {
        console.log("Service passed to modal:", service);
        setActiveService(service);
        setShowModal(true);
        trackEvent({ action: "view_service_detail", category: "Services", label: service.title, value: 1 });
    };

    const handleClose = () => {
        setShowModal(false);
        setActiveService(null);
    };
    return (
        <Container fluid className="px-0 services" id="services" data-aos="fade-up" data-aos-delay="100">
            <SEO
                title={seoData.servicesSeo.title}
                description={seoData.servicesSeo.description}
                keywords={seoData.servicesSeo.keywords}
                ogUrl={seoData.servicesSeo.ogUrl}
                canonicalUrl={seoData.servicesSeo.canonicalUrl}
                ogImage={seoData.servicesSeo.ogImage}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": seoData.servicesSeo.title,
                    "image": seoData.servicesSeo.ogImage,
                    "author": {
                        "@type": "Person",
                        "name": "Mradul Sharma"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Mradul Sharma",
                        "logo": {
                            "@type": "ImageObject",
                            "url": seoData.servicesSeo.ogImage
                        }
                    },
                    "datePublished": "",
                    "description": seoData.servicesSeo.description,
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://mradulsharma.vercel.app`
                    }
                }}
            />
            {/* Hero Section */}
            <div className="services-hero text-white d-flex align-items-center justify-content-center text-center">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1 className="display-4 fw-bold">Services</h1>
                    <p className="lead text-white">I specialize in developing robust, scalable, and secure digital solutions that power modern businesses.</p>
                </div>
            </div>
            <Container className="section-title py-4 px-3" id="services" data-aos="fade-up" data-aos-delay="100">
                <h2>Services</h2>
                <p>I offer end-to-end development solutions that are scalable, secure, and tailored to meet the evolving needs of modern digital businesses. With expertise spanning full-stack development, cloud-native architectures, and database optimization, I design and implement systems capable of handling growth without compromising performance or security. My approach combines technical precision with strategic planning, ensuring each solution is optimized for speed, stability, and long-term maintainability. Whether building custom applications, architecting APIs, or deploying cloud infrastructure, I prioritize user experience, operational efficiency, and data protection. Every project is crafted to align with business goals, adapt to future demands, and deliver measurable value in an increasingly competitive digital landscape.</p>
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
            <ServiceModal show={showModal} handleClose={handleClose} activeService={activeService} />
        </Container>
    );
};
export default Services;