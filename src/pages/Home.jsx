import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MdBusinessCenter } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaTwitterSquare,
  FaGithubSquare,
  FaGitlab,
} from "react-icons/fa";

import homeLogo from "../assets/mradulsharma.png";
// import Particle from "../components/Particle";
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
            <h1 className="fw-bolder text-white">Hello ! I'm {home.name}.{" "}</h1>
            <div className="jobPos text-start"><Type /></div>
            <p className="fs-6 text-white">{home.compactAbout}</p>
            <Button variant="outline-success" className="d-flex align-items-center gap-2 rounded-pill px-4 py-2" onClick={() => navigate("/contact")}>
                <MdBusinessCenter size={20} />
                Hire Me
            </Button>
            <div className="mt-4 d-flex gap-3 align-items-center">
                <a href="https://www.linkedin.com/in/mradulsharma" target="_blank" rel="noreferrer" title="LinkedIn">
                    <FaLinkedin size={35} />
                </a>
                <a href="https://github.com/ermradulsharma" target="_blank" rel="noreferrer" title="GitHub">
                    <FaGithubSquare size={35} />
                </a>
                <a href="https://github.com/ermradulsharma" target="_blank" rel="noreferrer" title="GitHub">
                    <FaGitlab size={35} />
                </a>
                <a href="https://x.com/" target="_blank" rel="noreferrer" title="X">
                    <FaTwitterSquare size={35} />
                </a>
                <a href="mailto:mradulsharma786@gmail.com" title="Email">
                    <FaEnvelope size={35} />
                </a>
                <a href="tel:+917252933077" title="Phone">
                    <FaPhone size={35} />
                </a>
            </div>
            </Col>
            <Col md={5} className="text-center">
                <img src={homeLogo} alt="Developer Avatar" className="img-fluid" />
            </Col>
        </Row>
        {/* <Particle /> */}
        <About />
        <LetsConnect />
      {/* <Container>

      <section>
        <Container fluid className="home-section" id="home">
          
          
      </section>
    </Container> */}
    </Container>
  );
};

export default Home;
