import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CustomApiIntegrations = () => {
    return (
        <Container>
            <Row>
                <Col className="service-details">
                    <p>Custom API Integrations enable seamless connectivity between your applications and third-party services, payment gateways, CRMs, marketing tools, and internal microservices. I specialize in building secure, scalable, and well-documented APIs that power modern digital ecosystems.</p>

                    <h5>What I Offer</h5>
                    <ul>
                        <li><strong>RESTful API Development:</strong> <p>Design and build clean, versioned REST APIs with proper HTTP methods, status codes, and JSON responses.</p></li>
                        <li><strong>Third-Party Integrations:</strong> <p>Connect with payment gateways (Stripe, PayPal, Razorpay), CRMs (Salesforce, HubSpot), email services (SendGrid, Mailchimp), SMS (Twilio), and more.</p></li>
                        <li><strong>Microservices Architecture:</strong> <p>Break down monolithic applications into independent, scalable microservices that communicate via APIs.</p></li>
                        <li><strong>Webhook Implementation:</strong> <p>Set up real-time event-driven webhooks for instant notifications and data synchronization.</p></li>
                        <li><strong>API Security:</strong> <p>Implement JWT/OAuth2 authentication, rate limiting, CORS policies, and encryption to protect sensitive data.</p></li>
                        <li><strong>API Documentation:</strong> <p>Provide comprehensive documentation using Swagger/OpenAPI or Postman collections for easy integration and testing.</p></li>
                    </ul>

                    <h5>Technologies Used</h5>
                    <ul>
                        <li>Node.js (Express, NestJS)</li>
                        <li>Laravel (API Resources, Sanctum, Passport)</li>
                        <li>GraphQL & Apollo</li>
                        <li>Axios, Fetch API</li>
                        <li>Postman, Swagger/OpenAPI</li>
                        <li>Redis for caching</li>
                    </ul>

                    <h5>Use Cases</h5>
                    <ul>
                        <li>Payment gateway integration for e-commerce platforms</li>
                        <li>CRM synchronization for sales and marketing automation</li>
                        <li>Social media API integration (Facebook, Twitter, LinkedIn)</li>
                        <li>SMS and email notification systems</li>
                        <li>Analytics and tracking integrations (Google Analytics, Mixpanel)</li>
                        <li>Custom internal APIs for mobile and web applications</li>
                    </ul>

                    <h5>Why Choose My API Services?</h5>
                    <ul>
                        <li>Secure and scalable API architecture</li>
                        <li>Comprehensive error handling and logging</li>
                        <li>Detailed documentation for developers</li>
                        <li>Performance optimization with caching and rate limiting</li>
                        <li>Ongoing support and maintenance</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomApiIntegrations;
