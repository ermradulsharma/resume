import { Row, Col, Button, Container } from 'react-bootstrap';
import logo from '../../../assets/mradulsharma.jpeg';
import '../../frontend/HeroSection/HeroSection.css'
import data from "../../database/localDB.json";
import Type from '../../Home/Type';
import SocialLinks from '../SocialLinks/SocialLinks';
import { FaCode, FaDocker, FaLaravel, FaNodeJs, FaReact } from 'react-icons/fa';

const HeroSection = () => {
    const home = data.home;
    return (
        <section id="hero" className="hero section">
            <Container>
                <Row className="g-0 align-items-center">
                    <Col lg={6} className="hero-content" data-aos="fade-right" data-aos-delay="100">
                        <div className="content-wrapper">
                        <h1 className="d-flex gap-3"> Creative <Type /></h1>
                        <p>{home.compactAbout}</p>
                        <div className="hero-stats" data-aos="fade-up" data-aos-delay="200">
                            <div className="stat-item">
                                <span className="purecounter" data-purecounter-start="0" data-purecounter-end="500" data-purecounter-duration="2">75+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="purecounter" data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="2">5+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                        </div>
                        <div className="hero-actions my-4" data-aos="fade-up" data-aos-delay="300">
                            <Button variant="primary" href="/portfolio">View My Work</Button>{' '}
                            <Button variant="outline-secondary" href="#contact">Get In Touch</Button>
                        </div>
                        <SocialLinks platforms={['GitHub', 'LinkedIn', 'X (Twitter)', 'GitLab', 'Telegram']} />
                        </div>
                    </Col>
                    <Col lg={6} className="hero-image text-end" data-aos="fade-left" data-aos-delay="200">
                        <div className="image-container">
                            <div className="floating-elements">
                                <div className="floating-card card-1" data-aos="zoom-in" data-aos-delay="300">
                                    <FaReact className="tech-icon" title="React" />
                                    <span>React Developer</span>
                                </div>
                                <div className="floating-card card-2" data-aos="zoom-in" data-aos-delay="400">
                                    <FaCode className="tech-icon" title="Next.js" />
                                    <span>NextJs Development</span>
                                </div>
                                <div className="floating-card card-3" data-aos="zoom-in" data-aos-delay="500">
                                    <FaLaravel className="tech-icon" title="Laravel" />
                                    <span>Laravel Developer</span>
                                </div>
                                <div className="floating-card card-4" data-aos="zoom-in" data-aos-delay="500">
                                    <FaDocker className="tech-icon" title="Docker" />
                                    <span>DevOps Enthusiast</span>
                                </div>
                                <div className="floating-card card-5" data-aos="zoom-in" data-aos-delay="500">
                                    <FaNodeJs className="tech-icon" title="Node.js" />
                                    <span>NodeJs Developer</span>
                                </div>
                            </div>
                            <img src={logo} alt="Portfolio Hero" className="img-fluid hero-main-image" />
                            <div className="image-overlay"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
