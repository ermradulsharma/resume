import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useSEO from "../../../hooks/useSEO";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
    useSEO({
        title: "Privacy Policy | Mradul Sharma - Data Protection & Privacy",
        description: "Review the privacy policy describing how this website collects, uses, and protects your personal information, along with your rights regarding data privacy.",
        keywords: "privacy policy, data protection, gdpr, terms",
        ogUrl: "https://mradulsharma.vercel.app/privacy",
        canonicalUrl: "https://mradulsharma.vercel.app/privacy"
    });

    return (
        <section className="privacy-policy-section">
            {/* Hero Section */}
            <div className="legal-hero">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1 className="display-4 fw-bold">Privacy Policy</h1>
                    <p className="lead">Last Updated: {new Date().toLocaleDateString()}</p>
                </div>
            </div>

            <Container className="pb-5">
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="policy-content">
                            <h2 className="h4 mb-3">1. Introduction</h2>
                            <p>
                                Welcome to Mradul Sharma's portfolio website. I respect your privacy and am committed to protecting your personal data.
                                This privacy policy will inform you as to how I look after your personal data when you visit my website and tell you
                                about your privacy rights and how the law protects you.
                            </p>

                            <h2 className="h4 mb-3 mt-4">2. Data We Collect</h2>
                            <p>
                                I may collect, use, store and transfer different kinds of personal data about you which I have grouped together follows:
                            </p>
                            <ul>
                                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data:</strong> includes email address and telephone number.</li>
                                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                                <li><strong>Usage Data:</strong> includes information about how you use my website and services.</li>
                            </ul>

                            <h2 className="h4 mb-3 mt-4">3. How We Use Your Data</h2>
                            <p>
                                I will only use your personal data when the law allows me to. Most commonly, I will use your personal data in the following circumstances:
                            </p>
                            <ul>
                                <li>Where I need to perform the contract I am about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for my legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where I need to comply with a legal or regulatory obligation.</li>
                            </ul>

                            <h2 className="h4 mb-3 mt-4">4. Data Security</h2>
                            <p>
                                I have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, I limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>

                            <h2 className="h4 mb-3 mt-4">5. Third-Party Links</h2>
                            <p>
                                This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. I do not control these third-party websites and am not responsible for their privacy statements.
                            </p>

                            <h2 className="h4 mb-3 mt-4">6. Contact Details</h2>
                            <p>
                                If you have any questions about this privacy policy or my privacy practices, please contact me at:
                                <br />
                                <strong>Email:</strong> contact@mradulsharma.com
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PrivacyPolicy;
