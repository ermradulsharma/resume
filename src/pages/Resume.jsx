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

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const [numPages, setNumPages] = useState(null);
  const [pdfError, setPdfError] = useState("");

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPdfError("");
  };

  const onDocumentLoadError = (error) => {
    console.error("PDF Load Error:", error.message);
    setPdfError("Unable to load resume. Please try downloading it directly.");
  };

  return (
    <div className="resume-wrapper">
      <Particle />

      <Container fluid className="resume-section py-5">
        <Row className="resume">
          {/* Left Column: GitHub & LeetCode */}
          <Col md={6} className="achieve mb-4">
            <div style={{ overflowX: "auto", color: "white" }}>
              <Leetcode />
              <Github />
            </div>
          </Col>

          {/* Right Column: PDF Viewer */}
          <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
            {pdfError ? (
              <div className="text-danger text-center mb-3">{pdfError}</div>
            ) : (
              <Document
                file={ResumePDF}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                className="d-flex justify-content-center pdf-preview"
              >
                <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.7} />
              </Document>
            )}

            <Button
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 download-btn"
            >
              <AiOutlineDownload style={{ marginBottom: "3px" }} />
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
