import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useSEO from "../../../hooks/useSEO";
import "../PrivacyPolicy/PrivacyPolicy.css"; // Reuse styles

const TermsOfService = () => {
    useSEO({
        title: "Terms of Service | Mradul Sharma",
        description: "Read the terms of service outlining the rules, responsibilities, and usage guidelines for accessing and using Mradul Sharma’s website and related content.",
        keywords: "terms of service, terms and conditions, legal, usage policy",
        ogUrl: "https://mradulsharma.vercel.app/terms",
        canonicalUrl: "https://mradulsharma.vercel.app/terms"
    });

    return (
        <section className="privacy-policy-section">
            {/* Hero Section */}
            <div className="legal-hero">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1 className="display-4 fw-bold">Terms of Service</h1>
                    <p className="lead">Last Updated: {new Date().toLocaleDateString()}</p>
                </div>
            </div>

            <Container className="pb-5">
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="policy-content">
                            <h2 className="h4 mb-3">1. Agreement to Terms</h2>
                            <p>
                                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Mradul Sharma ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                            </p>

                            <h2 className="h4 mb-3 mt-4">2. Intellectual Property Rights</h2>
                            <p>
                                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                            </p>

                            <h2 className="h4 mb-3 mt-4">3. User Representations</h2>
                            <p>
                                By using the Site, you represent and warrant that:
                            </p>
                            <ul>
                                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                                <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                            </ul>

                            <h2 className="h4 mb-3 mt-4">4. Prohibited Activities</h2>
                            <p>
                                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                            </p>

                            <h2 className="h4 mb-3 mt-4">5. Site Management</h2>
                            <p>
                                We reserve the right, but not the obligation, to:
                            </p>
                            <ul>
                                <li>Monitor the Site for violations of these Terms of Service.</li>
                                <li>Take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service.</li>
                                <li>Refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof.</li>
                            </ul>

                            <h2 className="h4 mb-3 mt-4">6. Contact Us</h2>
                            <p>
                                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
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

export default TermsOfService;
