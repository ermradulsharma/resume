import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import "./Resume.css";
import Particle from "../components/Particle";
import ResumePDF from "../assets/Resume/ResumeLink.pdf";
import LetsConnect from "../components/LetsConnect";
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="resume-wrapper">
      <Particle />

      <Container fluid className="resume-section py-5">
        <Row className="resume">
          {/* Left: Achievements & GitHub/Leetcode */}
          <Col md={6} className="achieve mb-4">
            <div style={{ overflowX: "auto", color: "white" }}>
              <Leetcode />
              <Github />
            </div>
          </Col>

          {/* Right: Resume Viewer */}
          <Col md={6} className="d-flex flex-column align-items-center">
            <Document
              file={ResumePDF}
              className="d-flex justify-content-center pdf-preview"
            >
              <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.7} />
            </Document>

            <Button
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3"
              style={{
                maxWidth: "250px",
                color: "#4CE6A6",
                border: "1px solid #024429",
                background: "black",
              }}
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </Col>
        </Row>
      </Container>

      <LetsConnect />
    </div>
  );
};

export default Resume;
