import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../frontend/About/About.css'
import about from '../../../assets/mradulsharma_another.JPG'
import signature from '../../../assets/signature.png'
import { FaCodepen, FaPalette } from 'react-icons/fa';
import { BsCloudCheck } from 'react-icons/bs';
import data from "../../../components/database/about.json"
import resume from '../../../assets/Resume/mradulsharma.pdf'
import { trackEvent } from "../../../utils/analytics/ga";

const About = () => {
    const { expandedAbout5 } = data.about;
    return (
        <section id="about" className="about section my-5">
            <Container className="section-title">
                <h2>About</h2>
                <p>{expandedAbout5}</p>
            </Container>
            <Container data-aos="fade-up" data-aos-delay="100">
                <Row className="align-items-center">
                    <Col lg={4} data-aos="fade-right" data-aos-delay="200">
                        <div className="profile-image-wrapper">
                            <div className="profile-image">
                                <img src={about} alt="Profile" className="img-fluid" aria-label="Mradul Sharma" loading="lazy" width="300" height="400" />
                            </div>
                            <div className="signature-section">
                                <img src={signature} alt="Signature" className="signature" loading="lazy" width="200" height="100" />
                                <p className="quote text-secondary">Building meaningful digital experiences through creative code.</p>
                                <Button variant="primary" className='rounded-5 px-4 px-lg-5 py-2 my-4' href={resume} download aria-label="Download Mradul Sharma Resume in PDF" onClick={() => trackEvent({ name: "download_resume", category: "Engagement", label: "PDF Download" })}>⚡Resume PDF Download ⚡</Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} data-aos="fade-left" data-aos-delay="300">
                        <div className="about-content">
                            <div className="intro d-none">
                                <h2 className='d-none d-lg-block'>Hi, I'm Mradul Sharma – Full-Stack Developer</h2>
                                <p>I’m a Senior Full-Stack Developer with 5+ years of experience designing, developing, and deploying secure, high-performance web applications. I specialize in Laravel, React.js, and Node.js, and work extensively with AWS, Docker, and CI/CD automation. Currently, I lead full-cycle engineering at W3 Info Solutions, building cloud-native, API-driven applications that scale.</p>
                            </div>
                            <div className="skills-grid">
                                <div className="skill-item" data-aos="zoom-in" data-aos-delay="400">
                                    <div className="skill-icon">
                                        <FaPalette className='tech-icon' title='Frontend Dev' />
                                    </div>
                                    <h3>UI/UX Design</h3>
                                    <p className="text-secondary">Translating concepts into responsive, user-friendly interfaces.</p>
                                </div>
                                <div className="skill-item" data-aos="zoom-in" data-aos-delay="450">
                                    <div className="skill-icon">
                                        <FaCodepen className='tech-icon' />
                                    </div>
                                    <h3>Full-Stack Dev</h3>
                                    <p className="text-secondary">End-to-end systems using Laravel, Node.js, React & PostgreSQL.</p>
                                </div>
                                <div className="skill-item" data-aos="zoom-in" data-aos-delay="500">
                                    <div className="skill-icon">
                                        <BsCloudCheck />
                                    </div>
                                    <h3>Cloud & DevOps</h3>
                                    <p className="text-secondary">AWS, Docker, CI/CD pipelines, and scalable microservices.</p>
                                </div>
                            </div>
                            <div className="journey-timeline" data-aos="fade-up" data-aos-delay="300">
                                <div className="timeline-item">
                                    <div className="year">2016</div>
                                    <div className="description">Graduated B.Tech from Kanpur Institute of Technology</div>
                                </div>
                                <div className="timeline-item">
                                    <div className="year">2018</div>
                                    <div className="description">Joined Programming Park InfoTech as PHP Developer</div>
                                </div>
                                <div className="timeline-item">
                                    <div className="year">2020</div>
                                    <div className="description">Joined Zaiba InfoTech as Laravel Developer</div>
                                </div>
                                <div className="timeline-item">
                                    <div className="year">2022</div>
                                    <div className="description">Joined W3 Info Solutions as Senior Full-Stack Developer</div>
                                </div>
                            </div>
                            <div className="cta-section" data-aos="fade-up" data-aos-delay="400">
                                <div className="fun-fact px-0 px-lg-5">
                                    <span className="emoji">⚡</span>
                                    <span className="text">Always exploring cloud, code, and clean architecture.</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
