import React from 'react';
import { Container, Carousel, Card } from 'react-bootstrap';
import { FaQuoteLeft } from 'react-icons/fa';
import data from '../../database/localDB.json';
import './Testimonials.css';
import SectionHeader from '../../common/SectionHeader';

const Testimonials = () => {
    const { testimonials } = data;

    return (
        <Container className='testimonials section' id="testimonials" data-aos="fade-up" data-aos-delay="100">
            <SectionHeader title="Client Testimonials" description="What partners and colleagues say about working with me" />

            <Carousel indicators={true} controls={false} interval={5000} className="testimonial-carousel" data-aos="zoom-in">
                {testimonials.map((t) => (
                    <Carousel.Item key={t.id}>
                        <div className="d-flex justify-content-center px-3 pb-5">
                            <Card className="testimonial-card border-0 shadow-lg text-center p-4">
                                <div className="quote-icon mb-3"><FaQuoteLeft size={40} className="text-primary opacity-25" /></div>
                                <Card.Body>
                                    <Card.Text className="testimonial-text mb-4 lead">"{t.comment}"</Card.Text>
                                    <div className="testimonial-author d-flex align-items-center justify-content-center">
                                        <div className="author-image me-3">
                                            <img src={t.image} alt={t.name} className="rounded-circle border border-2 border-primary" width="60" height="60" />
                                        </div>
                                        <div className="author-info text-start">
                                            <h5 className="fw-bold mb-0 text-dark">{t.name}</h5>
                                            <small className="text-primary fw-medium">{t.position}</small>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};

export default Testimonials;
