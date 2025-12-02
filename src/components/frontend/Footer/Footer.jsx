import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { BsGithub, BsLinkedin, BsTwitterX, BsEnvelope, BsPhone, BsGeoAlt, BsInstagram, BsYoutube, BsWhatsapp, BsTelegram } from "react-icons/bs";
import data from "../../database/localDB.json";
import socialData from "../../database/socialMedia.json";
import "../../frontend/Footer/Footer.css";

const Footer = () => {
    const { home, contact } = data;
    const { social } = socialData;
    const currentYear = new Date().getFullYear();
    const email = contact.contacts.find(item => item.name === "mail")?.value;
    const phone = contact.contacts.find(item => item.name === "phone")?.value;
    const githubLink = social.find(item => item.name === "GitHub")?.link;
    const linkedinLink = social.find(item => item.name === "LinkedIn")?.link;
    const twitterLink = social.find(item => item.name === "X (Twitter)")?.link;
    const instagramLink = social.find(item => item.name === "Instagram")?.link;
    const youtubeLink = social.find(item => item.name === "YouTube")?.link;
    const whatsappLink = social.find(item => item.name === "WhatsApp")?.link;
    const telegramLink = social.find(item => item.name === "Telegram")?.link;
    return (
        <footer className="footer-section bg-dark text-white">
            <Container>
                <Row className="py-5 gap-4 gap-lg-0">
                    <Col lg={4} md={6}>
                        <h5 className="text-white mb-3">About {home.name}</h5>
                        <p className="text-white small">
                            {home.compactAbout}
                        </p>
                        <div className="social-links mt-3">
                            {linkedinLink && (
                                <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="LinkedIn">
                                    <BsLinkedin size={24} />
                                </a>
                            )}
                            {githubLink && (
                                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="GitHub">
                                    <BsGithub size={24} />
                                </a>
                            )}
                            {twitterLink && (
                                <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="X (Twitter)">
                                    <BsTwitterX size={24} />
                                </a>
                            )}
                            {instagramLink && (
                                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="Instagram">
                                    <BsInstagram size={24} />
                                </a>
                            )}
                            {youtubeLink && (
                                <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="YouTube">
                                    <BsYoutube size={24} />
                                </a>
                            )}
                            {whatsappLink && (
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="WhatsApp">
                                    <BsWhatsapp size={24} />
                                </a>
                            )}
                            {telegramLink && (
                                <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="Telegram">
                                    <BsTelegram size={24} />
                                </a>
                            )}

                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <h5 className="text-white mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="text-white text-decoration-none footer-link">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="text-white text-decoration-none footer-link">About Me</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/portfolio" className="text-white text-decoration-none footer-link">Portfolio</Link>
                            </li>
                            {/* <li className="mb-2">
                                <Link to="/services" className="text-white text-decoration-none footer-link">Services</Link>
                            </li> */}
                            <li className="mb-2">
                                <Link to="/blogs" className="text-white text-decoration-none footer-link">Blog</Link>
                            </li>
                        </ul>
                    </Col>
                    {/* <Col lg={3} md={6}>
                        <h5 className="text-white mb-3">Services</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/services" className="text-white text-decoration-none footer-link">Full-Stack Development</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/services" className="text-white text-decoration-none footer-link">API Development</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/services" className="text-white text-decoration-none footer-link">Cloud Solutions</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/services" className="text-white text-decoration-none footer-link">DevOps & CI/CD</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/services" className="text-white text-decoration-none footer-link">Technical Consulting</Link>
                            </li>
                        </ul>
                    </Col> */}
                    <Col lg={4} md={6}>
                        <h5 className="text-white mb-3">Get In Touch</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            {email && (
                                <li className="d-flex align-items-center gap-2">
                                    <BsEnvelope className="text-primary" />
                                    <a href={`mailto:${email}`} className="text-white text-decoration-none footer-link">
                                        {email}
                                    </a>
                                </li>
                            )}
                            {phone && (
                                <li className="d-flex align-items-center gap-2">
                                    <BsPhone className="text-primary" />
                                    <a href={`tel:${phone}`} className="text-white text-decoration-none footer-link">
                                        {phone}
                                    </a>
                                </li>
                            )}
                            <li className="d-flex align-items-center gap-2">
                                <BsGeoAlt className="text-primary" />
                                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(home.location)}`} className="text-white text-decoration-none footer-link">
                                    {home.location}
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="border-top border-secondary pt-3 pb-3">
                    <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
                        <p className="m-0 text-white small">
                            © 2016 - {currentYear} {home.name}. All Rights Reserved.
                        </p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <Link to="/privacy" className="text-white text-decoration-none footer-link small me-3">Privacy Policy</Link>
                        <Link to="/terms" className="text-white text-decoration-none footer-link small">Terms of Service</Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
