import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaStar } from 'react-icons/fa';
import data from '../../../data/localDB.json';
import SectionHeader from '../../../components/ui/SectionHeader';
import './Testimonials.css';

const Testimonials = () => {
    const { testimonials } = data;
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Container className="testimonials section" id="testimonials" data-aos="fade-up" data-aos-delay="100">
            <SectionHeader title="Client Testimonials" description="What partners and colleagues say about working with me" />
            <div className="testimonial-stage" data-aos="zoom-in">
                <div className="testimonial-stage-mark" aria-hidden="true">
                    <span>01</span>
                    <span className="testimonial-stage-line" />
                    <span>{String(testimonials.length).padStart(2, '0')}</span>
                </div>

                <Carousel activeIndex={activeIndex} onSelect={(selectedIndex) => setActiveIndex(selectedIndex)} interval={6000} controls={false} indicators={false} className="testimonial-carousel" aria-label="Client testimonials">
                    {testimonials.map((testimonial, index) => (
                        <Carousel.Item key={testimonial.id}>
                            <article className="testimonial-slide" aria-roledescription="slide" aria-label={`${index + 1} of ${testimonials.length}`}>
                                <div className="testimonial-quote-icon" aria-hidden="true"><FaQuoteLeft /></div>
                                <div className="testimonial-copy">
                                    <p className="testimonial-eyebrow">Client perspective</p>
                                    <blockquote className="testimonial-text">“{testimonial.comment}”</blockquote>
                                    <div className="testimonial-rating" role="img" aria-label="5 out of 5 stars">{[1, 2, 3, 4, 5].map((star) => <FaStar key={star} aria-hidden="true" />)}</div>
                                </div>
                                <footer className="testimonial-author">
                                    <img src={testimonial.image} alt="" className="author-image" width="64" height="64" />
                                    <div className="author-info">
                                        <cite>{testimonial.name}</cite>
                                        <span>{testimonial.position}</span>
                                    </div>
                                </footer>
                            </article>
                        </Carousel.Item>
                    ))}
                </Carousel>

                <div className="testimonial-controls">
                    <button type="button" className="testimonial-control" onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)} aria-label="Show previous testimonial"><FaArrowLeft aria-hidden="true" /></button>
                    <div className="testimonial-indicators" role="group" aria-label="Testimonial navigation indicators">
                        {testimonials.map((testimonial, index) => (
                            <button key={testimonial.id} type="button" className={`testimonial-indicator ${index === activeIndex ? 'is-active' : ''}`} onClick={() => setActiveIndex(index)} aria-label={`Show testimonial ${index + 1} from ${testimonial.name}`} />
                        ))}
                    </div>
                    <button type="button" className="testimonial-control" onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)} aria-label="Show next testimonial"> <FaArrowRight aria-hidden="true" /> </button>
                </div>
            </div>
        </Container>
    );
};

export default Testimonials;
