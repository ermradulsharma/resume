import React from "react";
import { Container } from "react-bootstrap";

import Techstack from "../../components/Skillset/Techstack";
import LetsConnect from "../../components/LetsConnect";

const Skillset = () => {
    return (
        <Container className="p-lg-5 p-3">
            <h1 className="text-center text-white">Technical <strong className="yellow">Expertise</strong> & Development{" "}<strong className="yellow">Infrastructure</strong></h1>
            <Techstack />
            <LetsConnect />
        </Container>
    );
};

export default Skillset;
