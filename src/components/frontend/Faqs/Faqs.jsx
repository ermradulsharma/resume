import React, { useState } from "react";
import faqs from "../../database/faq.json";
import "../../frontend/Faqs/Faqs.css"
const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Default: first item open

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const data = faqs.faqs;
    return (
        <section id="faq" className="faq section mb-5">
            <div className="container section-title">
                <h2>Frequently Asked Questions</h2>
                <p>Get insights into my experience, expertise, and working style.</p>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                        <div className="faq-container">
                            {data.map((faq, index) => {
                                const isActive = activeIndex === index;
                                return (
                                <div key={index} className={`faq-item${isActive ? " faq-active" : ""}`} onClick={() => toggleFaq(index)} style={{ cursor: "pointer" }}>
                                    <h3>{faq.question}</h3>
                                    <div className="faq-content" style={{ display: isActive ? "block" : "none" }}>
                                        <p>{faq.answer}</p>
                                    </div>
                                    <i className={`faq-toggle bi ${isActive ? "bi-chevron-down" : "bi-chevron-right"}`}></i>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faqs;
