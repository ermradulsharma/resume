import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { BsArrowLeft, BsBookHalf, BsBriefcase, BsFolder2Open, BsHouseDoor } from "react-icons/bs";
import SEO from "../../../components/common/SEO";
import BrandButton from "../../../components/common/BrandButton";
import "./NotFound.css";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <section className="not-found-section">
            <SEO
                title="404 Error - Page Not Found | Mradul Sharma Portfolio"
                description="The page you are looking for does not exist. It might have been moved or deleted. Return to the homepage to explore my portfolio and projects."
                keywords="404, page not found, error"
                ogUrl="https://mradulsharma.vercel.app/404"
                canonicalUrl="https://mradulsharma.vercel.app/404"
            />
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col lg={10} md={12} className="text-center">
                        <div className="not-found-content py-5">
                            <div className="error-code">
                                <div className="display-1 fw-bold text-primary">404</div>
                                <div className="error-line"></div>
                            </div>
                            <div className="error-message">
                                <h1 className="h2 text-secondary">Page Not Found - 404 Error</h1>
                                <p className="lead text-secondary mb-4">
                                    The page you're looking for doesn't exist or has been moved.
                                    Don't worry, it happens to the best of us!
                                </p>

                                <div className="text-start mb-3">
                                    <h2 className="h4 mb-3 text-secondary">What might have happened?</h2>
                                    <ul className="text-secondary">
                                        <li className="mb-2">The URL might have been mistyped or is outdated</li>
                                        <li className="mb-2">The page may have been moved to a different location</li>
                                        <li className="mb-2">The content might have been removed or archived</li>
                                        <li className="mb-2">You might have followed a broken link from another website</li>
                                    </ul>
                                </div>

                                <div className="text-start mb-4">
                                    <h2 className="h4 mb-3 text-secondary">Here's what you can do:</h2>
                                    <p className="text-secondary mb-3">
                                        Explore my portfolio to discover my latest projects, read technical articles on web development,
                                        or learn more about the services I offer. You can also return to the homepage or use the navigation
                                        menu to find what you're looking for.
                                    </p>
                                </div>
                            </div>
                            <div className="error-actions d-flex gap-3 justify-content-center flex-wrap">
                                <BrandButton to="/" icon={<BsHouseDoor size={20} />}>
                                    Go to Home
                                </BrandButton>
                                <BrandButton variant="brand-outline" onClick={() => navigate(-1)} icon={<BsArrowLeft size={20} />}>
                                    Go Back
                                </BrandButton>
                            </div>
                            <div className="helpful-links">
                                <h2 className="h4 text-secondary my-4">Explore Popular Pages</h2>
                                <Row className="g-3">
                                    <Col md={3} sm={6}>
                                        <Link to="/" className="link-card p-3 border rounded h-100 d-block text-decoration-none" style={{ cursor: 'pointer' }}>
                                            <BsHouseDoor size={24} className="text-primary mb-2" />
                                            <h3 className="h6 mb-1 text-dark">Home</h3>
                                            <p className="small text-secondary mb-0">Start from the beginning</p>
                                        </Link>
                                    </Col>
                                    <Col md={3} sm={6}>
                                        <Link to="/portfolio" className="link-card p-3 border rounded h-100 d-block text-decoration-none" style={{ cursor: 'pointer' }}>
                                            <BsFolder2Open size={24} className="text-primary mb-2" />
                                            <h3 className="h6 mb-1 text-dark">Portfolio</h3>
                                            <p className="small text-secondary mb-0">View my projects</p>
                                        </Link>
                                    </Col>
                                    <Col md={3} sm={6}>
                                        <Link to="/blogs" className="link-card p-3 border rounded h-100 d-block text-decoration-none" style={{ cursor: 'pointer' }}>
                                            <BsBookHalf size={24} className="text-primary mb-2" />
                                            <h3 className="h6 mb-1 text-dark">Blog</h3>
                                            <p className="small text-secondary mb-0">Read technical articles</p>
                                        </Link>
                                    </Col>
                                    <Col md={3} sm={6}>
                                        <Link to="/services" className="link-card p-3 border rounded h-100 d-block text-decoration-none" style={{ cursor: 'pointer' }}>
                                            <BsBriefcase size={24} className="text-primary mb-2" />
                                            <h3 className="h6 mb-1 text-dark">Services</h3>
                                            <p className="small text-secondary mb-0">Explore what I offer</p>
                                        </Link>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default NotFound;
