import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { categorizedSkills } from "../database/categorizedSkills";

const Toolstack = () => {
  // Extract the tools category from categorizedSkills
  const tools = categorizedSkills["Tools & IDEs"];

  return (
    <Container>
      <h4 className="text-center mb-4" style={{ fontWeight: "bold" }}>
        Tools & IDEs
      </h4>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {tools.map((tool) => (
          <Col
            xs={6}
            md={2}
            className="tech-icons text-center mb-4"
            key={tool.name}
          >
            <div className="icon-data" style={{ fontSize: "2rem" }}>
              {tool.icon}
            </div>
            <div className="icon-label" style={{ marginTop: "8px" }}>
              {tool.name}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Toolstack;
