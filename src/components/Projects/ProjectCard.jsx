import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaBlog } from "react-icons/fa";

const ProjectCard = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src={"../../assets/projects/" + props.imgPath} alt="card-img" style={{ minHeight: 250, }}/>
            <Card.Body>
                <Card.Title style={{ minHeight: 48}}>{props.title}</Card.Title>
                <Card.Text style={{ minHeight: 96 }}>{props.description.slice(0, 165)}{props.description.length > 165 && "..."}</Card.Text>
                <div className="d-flex align-items-center justify-content-center gap-3">
                    <Button variant="primary" className="d-inline-flex gap-2 align-items-center justify-content-center" href={props.ghLink} target="_blank" ><BsGithub />Github</Button>
                    <Button variant="primary" className="d-inline-flex gap-2 align-items-center justify-content-center" href={props.ghLink} target="_blank" ><FaBlog />Blog</Button>
                    <Button variant="primary" className="d-inline-flex gap-2 align-items-center justify-content-center" href={props.demoLink} target="_blank" ><CgWebsite />Website</Button>
                </div>
                
            </Card.Body>
        </Card>
    );
};
export default ProjectCard;
