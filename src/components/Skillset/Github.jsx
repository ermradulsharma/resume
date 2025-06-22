import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Github stat
      </h1>
      <div style={{width:'35em'}}>
      <GitHubCalendar
        username="ermradulsharma"
        blockSize={15}
        blockMargin={5}
        color="#4CE6A6"
        fontSize={16}
      />
      </div>
    </Row>
  );
}

export default Github;
