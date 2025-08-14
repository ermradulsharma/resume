import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

const GitHub = () => {
    return (
        <Row className="justify-content-center pb-4">
            <Col xs={12} className="text-center">
                <h2 className="project-heading mb-4">GitHub Stats</h2>
            </Col>
            <Col xs={12} md={8} lg={6} className="d-flex justify-content-center">
                <div style={{ width: "100%", maxWidth: "500px" }}>
                    <GitHubCalendar username="ermradulsharma" blockSize={15} blockMargin={5} color="#4CE6A6" fontSize={16} />
                </div>
            </Col>
        </Row>
    );
};

export default GitHub;
