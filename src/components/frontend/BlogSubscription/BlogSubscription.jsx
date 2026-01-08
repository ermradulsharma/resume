import React, { useState } from 'react';
import { Container, Form, InputGroup } from 'react-bootstrap';
import { BsEnvelopePaper } from 'react-icons/bs';
import BrandButton from '../../common/BrandButton';
import './BlogSubscription.css';

const BlogSubscription = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <section className="blog-subscription-section py-5">
            <Container>
                <div className="subscription-card p-5 rounded-4 text-center glass-morphism border shadow-lg" data-aos="fade-up">
                    <div className="icon-wrapper mb-4">
                        <BsEnvelopePaper className="display-4 text-primary" />
                    </div>
                    <h2 className="fw-bold mb-3">Stay Updated</h2>
                    <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                        Subscribe to my newsletter to get the latest articles on web development,
                        Laravel, React, and AWS delivered straight to your inbox.
                    </p>

                    <Form onSubmit={handleSubmit} className="subscription-form mx-auto" style={{ maxWidth: '450px' }}>
                        {status === 'success' ? (
                            <div className="alert alert-primary border-0 rounded-4 p-4 animate__animated animate__fadeIn">
                                <h4 className="h5 fw-bold mb-2">Thank you for subscribing!</h4>
                                <p className="mb-0 small">You'll now receive updates whenever a new article is published.</p>
                                <BrandButton onClick={() => setStatus('idle')} size="sm" className="mt-3">Subscribe another email</BrandButton>
                            </div>
                        ) : (
                            <InputGroup className="bg-white rounded-pill p-1 shadow-sm border overflow-hidden">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="border-0 bg-transparent px-4 py-2"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={status === 'loading'}
                                />
                                <BrandButton
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="rounded-pill px-4"
                                >
                                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                                </BrandButton>
                            </InputGroup>
                        )}
                        <p className="text-muted small mt-3">No spam, only high-quality technical content. Unsubscribe anytime.</p>
                    </Form>
                </div>
            </Container>
        </section>
    );
};

export default BlogSubscription;
