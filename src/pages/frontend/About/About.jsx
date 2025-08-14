import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../About/About.css";
import image from "../../../assets/mradulsharma_another.JPG";
import data from "../../../components/database/about.json"
import SocialLinks from "../../../components/frontend/SocialLinks/SocialLinks";
import TechStack from "../../../components/frontend/TechStack/TechStack";
import Journey from "../../../components/frontend/Journey/Journey";
import "../../../components/frontend/Journey/Journey.css";
import Faqs from "../../../components/frontend/Faqs/Faqs";
import LetsConnect from "../../../components/LetsConnect";

const About = () => {
    const { expandedAbout, expandedAbout2, expandedAbout3, expandedAbout4 } = data.about;
    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="about-hero text-white d-flex align-items-center justify-content-center text-center">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1 className="display-4 fw-bold">About Me</h1>
                    <p className="lead">Crafting secure, scalable, and high-performance web applications using Laravel, React, and cloud-native technologies.</p>
                </div>
            </div>

            {/* About Content Section */}
            <section className="about-section py-5">
                <Container>
                    <Row className="align-items-start">
                        <Col lg={4} data-aos="fade-right">
                            <img src={image} alt="Mradul Sharma" className="img-fluid rounded-4 shadow" style={{ minHeight: "80vh"}}/>
                        </Col>
                        <Col lg={8} data-aos="fade-left" className="about-details">
                            <h2 className="fw-bold mb-4">I'm Mradul Sharma – Full-Stack Developer</h2>
                            <p style={{ color: "#B8B8B8" }}>{expandedAbout}</p>
                            <p style={{ color: "#B8B8B8" }}>{expandedAbout2}</p>
                            <p style={{ color: "#B8B8B8" }}>{expandedAbout3}</p>
                            <p style={{ color: "#B8B8B8" }}>{expandedAbout4}</p>
                            <SocialLinks withNames platforms={['GitHub', 'LinkedIn', 'X (Twitter)', 'GitLab', 'Telegram']} />
                            {/* <Button variant="primary" href="/Mradul_Sharma_Resume.pdf" className="mt-3">Download Resume <BsArrowRight className="ms-2" /> </Button> */}
                        </Col>
                    </Row>
                </Container>
            </section>
            <TechStack />
            <Journey />
            <Faqs />
            {/* <section className="about-section py-5">
                <Container>
                    <GitHub />
                </Container>
            </section> */}
            <LetsConnect />
        </div>
    );
};

export default About;
