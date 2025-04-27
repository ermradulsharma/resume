import React from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCardNew from "../components/Projects/ProjectCardNew";
import Particle from "../components/Particle";
import data from '../components/database/localDB.json';
import LetsConnect from '../components/LetsConnect';

const Projects = () => {
 
  const projects = data.projects;
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {/* <Button onClick={()=>{setOpen(true)}}>modell</Button> */}
        <Row style={{ justifyContent: "center"}} className="pro_data">
        {projects.projectsList.map((project, index) => (
            <div key={index} className="col-md-4 mb-4"  >
              <ProjectCardNew 
                image={project.image}
                title={project.title}
                category={project.category}
                project={project}
              />
             
            </div>
        
        ))}
          
        </Row>
      </Container>
      <Particle />
      <LetsConnect />
    
    </Container>
  )
}

export default Projects