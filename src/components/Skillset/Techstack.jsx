import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { categorizedSkills } from "../database/categorizedSkills";

const Techstack = () => {
    return (
        <Container className="mt-5">
            {Object.entries(categorizedSkills).map(([category, skills]) => (
                <div key={category} style={{ marginBottom: "40px" }}>
                    <h4 className="text-center mb-4" style={{ fontWeight: "bold" }}>{category}</h4>
                    <Row className="justify-content-center">{skills.map((skill) => (
                        <Col xs={4} sm={4} md={4} className="tech-icons text-center" key={skill.name}>
                            <div className="icon-data" style={{ fontSize: "2rem" }}>{skill.icon}</div>
                            <div className="icon-label" style={{ marginTop: "8px" }}>{skill.name}</div>
                        </Col>
                        ))}
                    </Row>
                </div>
            ))}
        </Container>
    );
};

export default Techstack;
