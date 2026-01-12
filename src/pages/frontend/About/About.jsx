import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/common/SEO";
import image from "../../../assets/mradulsharma_another.webp";
import data from "../../../components/database/about.json"
import seoData from "../../../components/database/seo.json";
import SocialLinks from "../../../components/frontend/SocialLinks/SocialLinks";
import TechStack from "../../../components/frontend/TechStack/TechStack";
import Journey from "../../../components/frontend/Journey/Journey";
import Faqs from "../../../components/frontend/Faqs/Faqs";
import LetsConnect from "../../../components/LetsConnect";
import Services from "../../../components/frontend/Services/Services";
import signature from '../../../assets/signature.webp'
import resume from '../../../assets/resume/mradulsharma.pdf';
import BrandButton from "../../../components/common/BrandButton";
import { trackEvent } from "../../../utils/analytics/ga";
import "../About/About.css";
import "../../../components/frontend/Journey/Journey.css";



const About = () => {
    const { expandedAbout, expandedAbout3, expandedAbout7, } = data.about;
    const handleDownloadResume = () => {
        trackEvent({ action: "download_resume", category: "Engagement", label: "PDF Download" });
    };

    return (
        <Container fluid className="px-0 about-page" id="about" data-aos="fade-up" data-aos-delay="100">
            <SEO
                title={seoData.aboutSeo.title}
                description={seoData.aboutSeo.description}
                keywords={seoData.aboutSeo.keywords}
                ogUrl={seoData.aboutSeo.ogUrl}
                canonicalUrl={seoData.aboutSeo.canonicalUrl}
                ogImage={seoData.aboutSeo.ogImage}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": seoData.aboutSeo.title,
                    "image": seoData.aboutSeo.ogImage,
                    "author": {
                        "@type": "Person",
                        "name": "Mradul Sharma"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Mradul Sharma",
                        "logo": {
                            "@type": "ImageObject",
                            "url": seoData.aboutSeo.ogImage
                        }
                    },
                    "datePublished": "",
                    "description": seoData.aboutSeo.description,
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://mradulsharma.vercel.app`
                    }
                }}
            />
            <div className="about-hero text-white d-flex align-items-center justify-content-center text-center">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1 className="display-4 fw-bold">About Me</h1>
                    <p className="lead text-white">I craft secure, scalable, and high-performance web applications using Laravel, React, and cloud-native technologies. From designing robust backend systems to building interactive front-end experiences, I turn complex ideas into seamless, reliable, and user-friendly digital solutions that drive real impact.</p>
                </div>
            </div>
            <Container className="about-content" id="about" data-aos="fade-up" data-aos-delay="100">
                <Row className="align-items-start">
                    <Col lg={9} data-aos="fade-left" className="about-details">
                        <p>{expandedAbout}</p>
                        <p>{expandedAbout3}</p>
                        <p>{expandedAbout7}</p>
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
                                <BrandButton className='mt-4' href={resume} download aria-label="Download Mradul Sharma Resume in PDF" onClick={handleDownloadResume} icon={<span>⚡</span>}>Resume PDF Download ⚡</BrandButton>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <TechStack />
            <Journey />
            <Services />
            <Faqs />
            <LetsConnect />
        </Container>
    );
};

export default About;
