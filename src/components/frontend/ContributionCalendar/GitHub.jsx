import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

const GitHub = () => {
  return (
    <Row className="justify-content-center pb-4">
      <Col xs={12} className="text-center">
        <GitHubCalendar username="ermradulsharma" />
      </Col>
    </Row>
  );
};

export default GitHub;
