import React, { useState } from "react";
import faqs from "../../database/faq.json";
import "../../frontend/Faqs/Faqs.css"
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "../../common/SectionHeader";

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const data = faqs.faqs;
    return (
        <section id="faq" className="faq section">
            <SectionHeader title={faqs.title} description={faqs.description} />
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12} data-aos="fade-up" data-aos-delay="100">
                        <div className="faq-container">
                            {data.map((faq, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <div key={index} className={`faq-item${isActive ? " faq-active" : ""}`} onClick={() => toggleFaq(index)} style={{ cursor: "pointer" }}>
                                        <h3>{faq.question}</h3>
                                        <div className="faq-content" style={{ display: isActive ? "block" : "none" }}>
                                            <p>{faq.answer}</p>
                                        </div>
                                        {isActive ? <BsChevronDown className="faq-toggle" /> : <BsChevronRight className="faq-toggle" />}
                                    </div>
                                );
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Faqs;
