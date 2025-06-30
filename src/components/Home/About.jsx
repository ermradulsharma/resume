import React from "react";
import { Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

import data from "../database/localDB.json";
import myImage from "../../assets/images/mradulsharma_1.png";
import {
  FaGithubSquare,
  FaGitlab,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const About = () => {
    const { expandedAbout, expandedAbout2, expandedAbout3, expandedAbout4 } = data.about;
    const name = data.home.name;
    return (
        <Row>
            <Col md={5} className="myAvtar">
                <Tilt>
                    <img src={myImage} className="img-fluid" alt="avatar" />
                </Tilt>
            </Col>
            <Col md={7} className="home-about-description">
                <h1 style={{ fontSize: "2.5em", fontWeight: "600" }}>About me</h1>
                <p style={{ color: "#B8B8B8" }}>{expandedAbout}</p>
                <p style={{ color: "#B8B8B8" }}>{expandedAbout2}</p>
                <p style={{ color: "#B8B8B8" }}>{expandedAbout3}</p>
                <p style={{ color: "#B8B8B8" }}>{expandedAbout4}</p>
                <div className="text-end"><h1 className="fs-4 yellow jobPos">-- {name}</h1></div>
            </Col>
            <Col md={12} className="home-about-social p-5">
                <h1>Connect With Me</h1>
                <p>I’m always open to discussing new opportunities, collaborations, or simply connecting with like-minded professionals.{" "} <span className="yellow">Feel free to reach out!</span></p>
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
