import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../features/contact/ContactComponent/Contact.css";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactSection = () => {
    return (
        <section id="contact" className="contact section py-5">
            <Container data-aos="fade-up" data-aos-delay="100">
                <Row className="g-4 g-lg-5">
                    <Col lg={5}>
                        <ContactInfo />
                    </Col>
                    <Col lg={7}>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
            <ContactMap />
        </section>
    );
};

export default ContactSection;
