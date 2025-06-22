import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

import data from "../database/localDB.json";
import myImage from "../../assets/images/mradulsharma_1.png";
import {
  FaGithubSquare,
  FaGitlab,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitterSquare,
} from "react-icons/fa";

const About = () => {
  const about = data.about;
  return (
    <Row>
        <Col md={5} className="myAvtar">
            <Tilt>
                <img src={myImage} className="img-fluid" alt="avatar" />
            </Tilt>
        </Col>
        <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.5em", fontWeight: "600" }}>About me</h1>
            <p style={{ color: "#B8B8B8" }}>{about.expandedAbout}</p>
        </Col>
        <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p> Please don't hesitate to reach out to me and{" "}<span className="yellow">connect.</span></p>
            <ul className="home-about-social-links">
                <li className="social-icons"><a href="https://www.linkedin.com/in/mradulsharma" target="_blank" rel="noreferrer" title="LinkedIn" ><FaLinkedin size={35} /></a></li>
                <li className="social-icons"><a href="https://github.com/ermradulsharma" target="_blank" rel="noreferrer" title="GitHub"><FaGithubSquare size={35} /></a></li>
                <li className="social-icons"><a href="https://github.com/ermradulsharma" target="_blank" rel="noreferrer" title="GitHub"><FaGitlab size={35} /></a></li>
                <li className="social-icons"><a href="https://x.com/" target="_blank" rel="noreferrer" title="X"><FaTwitterSquare size={35} /></a></li>
            </ul>
        </Col>
    </Row>
  );
};

export default About;
