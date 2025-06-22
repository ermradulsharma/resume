import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdBusinessCenter } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

import homeLogo from "../assets/mradulsharma.png";
import Particle from "../components/Particle";
import About from "../components/Home/About";
import Type from "../components/Home/Type";
import LetsConnect from "../components/LetsConnect";
import data from "../components/database/localDB.json";

const Home = () => {
    const navigate = useNavigate();
    const home = data.home;
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 0 }} className="heading">Hello ! I'm {home.name}.{" "}</h1>
                            <div style={{ textAlign: "left" }} className="jobPos"><Type /></div>
                            <div>
                                <p style={{ color: "#B8B8B8", paddingTop: 5 }}>{home.compactAbout}</p>
                            </div>
                            <div className="downBtn" style={{ cursor: "pointer" }}>
                                <MdBusinessCenter />
                                <span style={{ marginLeft: "5px", cursor: "pointer" }} onClick={() => { navigate("/contact"); }}>Hire Me</span>
                            </div>
                            <div className="mt-4 d-flex gap-4 align-items-center">
                                <a href="https://www.linkedin.com/in/mradulsharma" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin size={26} color="#0A66C2" /></a>
                                <a href="https://github.com/ermradulsharma" target="_blank" rel="noreferrer" title="GitHub"><FaGithub size={26} color="#171515" /></a>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer" title="Twitter"><FaTwitter size={26} color="#1DA1F2" /></a>
                                <a href="mailto:mradulsharma786@gmail.com" title="Email"><FaEnvelope size={26} color="#EA4335" /></a>
                                <a href="tel:+917252933077" title="Phone"><FaPhone size={26} color="#34A853" /></a>
                            </div>
                        </Col>
                        <Col md={5} style={{ paddingBottom: 20 }} className="pic">
                            <img src={homeLogo} alt="Developer Avatar" className="img-fluid" style={{ maxHeight: "450px" }}/>
                        </Col>
                    </Row>
                </Container>
                <Particle />
            </Container>
            <About />
            <LetsConnect />
        </section>
    );
};

export default Home;
