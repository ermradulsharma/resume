import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MdBusinessCenter } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaPhone, FaTwitterSquare, FaGithubSquare, FaGitlab } from "react-icons/fa";
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
        <Container className="p-lg-5 p-3">
            <Row className="flex-column-reverse flex-lg-row">
                <Col md={7} className="p-lg-5 p-3">
                    <h1 className="fw-bolder text-white">Hi there! I'm {home.name}.</h1>
                    <div className="jobPos text-start"><Type /></div>
                    <p className="fs-6 text-white">{home.compactAbout}</p>
                    <Button variant="outline-success" className="d-flex align-items-center gap-2 rounded-pill px-4 py-2" onClick={() => navigate("/contact")}>
                        <MdBusinessCenter size={20} /> Let's Work Together
                    </Button>
                    <div className="mt-4 d-flex gap-3 align-items-center">
                        <a href="https://www.linkedin.com/in/mradulsharma" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin size={35} /></a>
                        <a href="https://github.com/ermradulsharma" target="_blank" rel="noreferrer" title="GitHub"><FaGithubSquare size={35} /></a>
                        <a href="https://gitlab.com/mradulsharma" target="_blank" rel="noreferrer" title="GitLab"><FaGitlab size={35} /></a>
                        <a href="https://x.com/ermradulsharma" target="_blank" rel="noreferrer" title="X (formerly Twitter)"><FaTwitterSquare size={35} /></a>
                        <a href="mailto:mradulsharma786@gmail.com" title="Email"><FaEnvelope size={35} /></a>
                        <a href="tel:+917252933077" title="Phone"><FaPhone size={35} /></a>
                    </div>
                </Col>
                <Col md={5} className="text-center">
                    <img src={homeLogo} alt="Mradul Sharma Full-Stack Developer" className="img-fluid"/>
                </Col>
            </Row>

            <Particle />
            <About />
            <LetsConnect />
        </Container>
    );
};

export default Home;
