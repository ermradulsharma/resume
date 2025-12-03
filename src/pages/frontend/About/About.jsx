import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useSEO from "../../../hooks/useSEO";
import "../About/About.css";
import image from "../../../assets/mradulsharma_another.JPG";
import data from "../../../components/database/about.json"
import SocialLinks from "../../../components/frontend/SocialLinks/SocialLinks";
import TechStack from "../../../components/frontend/TechStack/TechStack";
import Journey from "../../../components/frontend/Journey/Journey";
import "../../../components/frontend/Journey/Journey.css";
import Faqs from "../../../components/frontend/Faqs/Faqs";
import LetsConnect from "../../../components/LetsConnect";
import Services from "../../../components/frontend/Services/Services";

const About = () => {
    useSEO({
        title: "About Mradul Sharma | Senior Full-Stack Developer Profile",
        description: "Learn about Mradul Sharma's journey, technical expertise, and experience in building enterprise-grade applications with Laravel, React, AWS, and modern tech.",
        keywords: "Mradul Sharma Profile, Senior Full Stack Developer, Professional Experience, Technical Expertise, Laravel React Specialist, AWS Certified Developer, Enterprise Application Developer, Software Engineer India, Remote Full Stack Developer, Freelance Developer Portfolio, Developer Background, Technical Skills, Web Development Expert, Programming Experience",
        ogUrl: "https://mradulsharma.vercel.app/about",
        canonicalUrl: "https://mradulsharma.vercel.app/about"
    });

    const { expandedAbout, expandedAbout6, expandedAbout7, expandedAbout8 } = data.about;
    return (
        <div className="about-page">
            <div className="about-hero text-white d-flex align-items-center justify-content-center text-center">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1 className="display-4 fw-bold">About Me</h1>
                    <p className="lead text-white">Crafting secure, scalable, and high-performance web applications using Laravel, React, and cloud-native technologies.</p>
                </div>
            </div>
            <section className="about-section py-4">
                <Container>
                    <Row className="align-items-start">
                        <Col lg={4} data-aos="fade-right" className="d-lg-block d-none">
                            <img src={image} alt="Mradul Sharma" className="img-fluid rounded-4 shadow" style={{ minHeight: "80vh" }} loading="lazy" width="600" height="400" />
                        </Col>
                        <Col lg={8} data-aos="fade-left" className="about-details">
                            {/* <h2 className="fw-bold mb-4">I'm Mradul Sharma – Full-Stack Developer</h2> */}
                            <p style={{ color: "#B8B8B8" }}>{expandedAbout}</p>
                            <p style={{ color: "#B8B8B8" }}>{expandedAbout6}</p>
                            <p style={{ color: "#B8B8B8" }}>{expandedAbout7}</p>
                            <p style={{ color: "#B8B8B8" }}>{expandedAbout8}</p>
                            <SocialLinks withNames platforms={['GitHub', 'LinkedIn', 'X (Twitter)', 'GitLab', 'Telegram']} />
                            {/* <Button variant="primary" href="/Mradul_Sharma_Resume.pdf" className="mt-3">Download Resume <BsArrowRight className="ms-2" /> </Button> */}
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
