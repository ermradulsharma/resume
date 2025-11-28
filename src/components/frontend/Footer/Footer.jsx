import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { BsGithub, BsLinkedin, BsTwitterX, BsEnvelope, BsPhone, BsGeoAlt, BsInstagram, BsYoutube, BsWhatsapp, BsTelegram } from "react-icons/bs";
import data from "../../database/localDB.json";
import "../../frontend/Footer/Footer.css";

const Footer = () => {
    const { home, contact, social } = data;
    const currentYear = new Date().getFullYear();

    // Extract contact info
    const email = contact.contacts.find(item => item.name === "mail")?.value;
    const phone = contact.contacts.find(item => item.name === "phone")?.value;

    // Extract social links
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
                {/* Main Footer Content */}
                <Row className="py-5">
                    {/* About Section */}
                    <Col lg={4} md={6} className="mb-4">
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

                    {/* Quick Links */}
                    <Col lg={2} md={6} className="mb-4">
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
                            <li className="mb-2">
                                <Link to="/services" className="text-white text-decoration-none footer-link">Services</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/blogs" className="text-white text-decoration-none footer-link">Blog</Link>
                            </li>
                        </ul>
                    </Col>

                    {/* Services */}
                    <Col lg={3} md={6} className="mb-4">
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
                    </Col>

                    {/* Contact Info */}
                    <Col lg={3} md={6} className="mb-4">
                        <h5 className="text-white mb-3">Get In Touch</h5>
                        <ul className="list-unstyled">
                            {email && (
                                <li className="mb-2 d-flex align-items-start">
                                    <BsEnvelope className="text-primary me-2 mt-1" />
                                    <a href={`mailto:${email}`} className="text-white text-decoration-none footer-link">
                                        {email}
                                    </a>
                                </li>
                            )}
                            {phone && (
                                <li className="mb-2 d-flex align-items-start">
                                    <BsPhone className="text-primary me-2 mt-1" />
                                    <a href={`tel:${phone}`} className="text-white text-decoration-none footer-link">
                                        {phone}
                                    </a>
                                </li>
                            )}
                            <li className="mb-2 d-flex align-items-start">
                                <BsGeoAlt className="text-primary me-2 mt-1" />
                                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(home.location)}`} className="text-white text-decoration-none footer-link">
                                    {home.location}
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                {/* Bottom Footer */}
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
