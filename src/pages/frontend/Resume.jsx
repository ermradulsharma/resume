import React from "react";
import { Container, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import ResumePDF from "../../assets/Resume/ResumeLink.pdf";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-wrapper">
      <Container className="text-center py-5">
        <h1 className="resume-heading">My Resume</h1>
        <p className="resume-subheading">Click below to download the latest version</p>

        <Button
          href={ResumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn mt-4"
        >
          <AiOutlineDownload style={{ marginBottom: "3px" }} />
          &nbsp;Download Resume
        </Button>
      </Container>
    </div>
  );
};

export default Resume;
