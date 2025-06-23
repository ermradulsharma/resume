import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import data from "../components/database/localDB.json";
import LetsConnect from "../components/LetsConnect";

const Projects = () => {
    const projects = data.projects.projectsList;

    return (
        <Container className="p-lg-5 p-3">
            <h1 className="text-center text-white">Recent Top <strong className="yellow">Works</strong></h1>
            <p className="text-center text-white">Here are a few projects I've worked on recently</p>
            <Row>
                {projects.map((project, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <ProjectCard imgPath={project.image} title={project.title} description={project.description} ghLink={project.ghLink} demoLink={project.demoLink} isBlog={project.isBlog} />
                    </Col>
                ))}
            </Row>
            <Particle />
            <LetsConnect />
        </Container>
    );
};

export default Projects;
