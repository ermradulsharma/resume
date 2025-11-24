import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft, BsHouseDoor } from "react-icons/bs";
import useSEO from "../../../hooks/useSEO";
import "./NotFound.css";

const NotFound = () => {
    const navigate = useNavigate();

    useSEO({
        title: "404 - Page Not Found | Mradul Sharma",
        description: "The page you're looking for doesn't exist. Return to the homepage to explore my portfolio.",
        keywords: "404, page not found, error",
        ogUrl: "https://mradulsharma.vercel.app/404",
        canonicalUrl: "https://mradulsharma.vercel.app/404"
    });

    return (
        <section className="not-found-section">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col lg={8} md={10} className="text-center">
                        <div className="not-found-content">
                            {/* 404 Number */}
                            <div className="error-code">
                                <h1 className="display-1 fw-bold">404</h1>
                                <div className="error-line"></div>
                            </div>

                            {/* Error Message */}
                            <div className="error-message mt-4">
                                <h2 className="h3 mb-3">Oops! Page Not Found</h2>
                                <p className="text-muted mb-4">
                                    The page you're looking for doesn't exist or has been moved.
                                    <br />
                                    Let's get you back on track!
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="error-actions d-flex gap-3 justify-content-center flex-wrap">
                                <Button variant="primary" size="lg" onClick={() => navigate("/")} className="d-flex align-items-center gap-2"><BsHouseDoor size={20} />Go to Home</Button>
                                <Button variant="outline-secondary" size="lg" onClick={() => navigate(-1)} className="d-flex align-items-center gap-2"><BsArrowLeft size={20} />Go Back</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default NotFound;
