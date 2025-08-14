import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../../components/Contact/Contact";
import { Box } from "@mui/material";
import SocialNew from "../../components/Contact/SocialNew";
import '../../App.css';

const Contact = () => {
  return (
    <Container className="p-lg-5 p-3">
        <Row className="g-4">
            <Col md={12} className="text-center">
                <h1 style={{ color: "white", fontWeight: "600", fontSize: "2.5rem", }}>Let's Connect!</h1>
                <p style={{ color: "#B8B8B8", fontSize: "1rem", marginTop: "1rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto", lineHeight: "1.6",}}>I'm always open to new opportunities and conversations. Whether you have a project idea, want to collaborate, or just want to chat, feel free to reach out. Let's connect and make great things happen together! </p>
            </Col>
            <Col md={6}>
                <Box sx={{background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(10px)", padding: "2rem", borderRadius: "16px", height: "100%"}}>
                    <ContactForm />
                </Box>
            </Col>
            <Col md={6}>
                <Box sx={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(10px)", padding: "2rem", borderRadius: "16px", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <SocialNew />
                </Box>
            </Col>
        </Row>
    </Container>
  );
};

export default Contact;
