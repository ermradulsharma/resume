import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/common/SEO";
import "../About/About.css";
import image from "../../../assets/mradulsharma_another.webp";
import data from "../../../components/database/about.json"
import SocialLinks from "../../../components/frontend/SocialLinks/SocialLinks";
import TechStack from "../../../components/frontend/TechStack/TechStack";
import Journey from "../../../components/frontend/Journey/Journey";
import "../../../components/frontend/Journey/Journey.css";
import Faqs from "../../../components/frontend/Faqs/Faqs";
import LetsConnect from "../../../components/LetsConnect";
import Services from "../../../components/frontend/Services/Services";
import signature from '../../../assets/signature.webp'
import Button from 'react-bootstrap/Button';
import resume from '../../../assets/Resume/mradulsharma.pdf';
import { trackEvent } from "../../../utils/analytics/ga";



const About = () => {
    const { expandedAbout, expandedAbout3, expandedAbout7, } = data.about;
    const handleDownloadResume = () => {
        trackEvent({ action: "download_resume", category: "Engagement", label: "PDF Download" });
    };

    return (
        <div className="about-page">
            <SEO
                title="About Mradul Sharma | Senior Full-Stack Developer Profile"
                description="Learn about Mradul Sharma's journey, technical expertise, and experience in building enterprise-grade applications with Laravel, React, AWS, and modern tech."
                keywords="Mradul Sharma Profile, Senior Full Stack Developer, Professional Experience, Technical Expertise, Laravel React Specialist, AWS Certified Developer, Enterprise Application Developer, Software Engineer India, Remote Full Stack Developer, Freelance Developer Portfolio, Developer Background, Technical Skills, Web Development Expert, Programming Experience"
                ogUrl="https://mradulsharma.vercel.app/about"
                canonicalUrl="https://mradulsharma.vercel.app/about"
            />
            <div className="about-hero text-white d-flex align-items-center justify-content-center text-center">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1 className="display-4 fw-bold">About Me</h1>
                    <p className="lead text-white">I craft secure, scalable, and high-performance web applications using Laravel, React, and cloud-native technologies. From designing robust backend systems to building interactive front-end experiences, I turn complex ideas into seamless, reliable, and user-friendly digital solutions that drive real impact.</p>
                </div>
            </div>
            <section className="about-section py-5">
                <Container>
                    <Row className="align-items-start">
                        <Col lg={9} data-aos="fade-left" className="about-details">
                            <p style={{ color: "#B8B8B8" }}>{expandedAbout}</p>
                            <p style={{ color: "#B8B8B8" }}>{expandedAbout3}</p>
                            <p style={{ color: "#B8B8B8" }}>{expandedAbout7}</p>
                            <SocialLinks withNames platforms={['GitHub', 'LinkedIn', 'X (Twitter)', 'Medium', 'Slack']} />
                        </Col>
                        <Col lg={3} data-aos="fade-right" data-aos-delay="200">
                            <div className="profile-image-wrapper">
                                <div className="profile-image">
                                    <img src={image} alt="Profile" className="img-fluid" aria-label="Mradul Sharma" loading="lazy" width="300" height="400" />
                                </div>
                                <div className="signature-section">
                                    <img src={signature} alt="Signature" className="signature" loading="lazy" width="300" height="80" />
                                    <p className="quote text-secondary mb-1">Building meaningful digital experiences through thoughtful, creative code.</p>
                                    <Button variant="primary" className='rounded-5 px-4 px-lg-4 py-2 mt-4' href={resume} download aria-label="Download Mradul Sharma Resume in PDF" onClick={handleDownloadResume}>⚡Resume PDF Download ⚡</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <TechStack />
            <Journey />
            <Services />
            <Faqs />
            <LetsConnect />
        </div>
    );
};

export default About;
