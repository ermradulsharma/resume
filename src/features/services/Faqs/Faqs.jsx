import React, { useState } from "react";
import faqs from "../../../data/faq.json";
import "./Faqs.css"
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "../../../components/ui/SectionHeader";

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const data = faqs.faqs;
    return (
        <Container id="faq" className="faq section" data-aos="fade-up" data-aos-delay="100">
            <SectionHeader title={faqs.title} description={faqs.description} />
            <Row className="justify-content-center">
                <Col lg={12} data-aos="fade-up" data-aos-delay="100">
                    <div className="faq-container">
                        {data.map((faq, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div key={index} className={`faq-item${isActive ? " faq-active" : ""}`}>
                                    <button
                                        id={`faq-question-${index}`}
                                        type="button"
                                        className="faq-question"
                                        aria-expanded={isActive}
                                        aria-controls={`faq-answer-${index}`}
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <h3>{faq.question}</h3>
                                        {isActive ? <BsChevronDown className="faq-toggle" aria-hidden="true" /> : <BsChevronRight className="faq-toggle" aria-hidden="true" />}
                                    </button>
                                    <div
                                        id={`faq-answer-${index}`}
                                        className="faq-content"
                                        role="region"
                                        aria-labelledby={`faq-question-${index}`}
                                        aria-hidden={!isActive}
                                    >
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Faqs;
