import React from "react";
import { Container } from "react-bootstrap";

import Particle from "../components/Particle";
import Techstack from "../components/Skillset/Techstack";
import LetsConnect from "../components/LetsConnect";

const Skillset = () => {
    return (
        <Container fluid className="about-section">
            <Particle />
        <Container>
            <h1 className="project-heading">Technical <strong className="yellow">Expertise</strong> & Development <strong className="yellow">Infrastructure</strong></h1>
            <Techstack />
        </Container>
        <LetsConnect />
        </Container>
    );
};

export default Skillset;
