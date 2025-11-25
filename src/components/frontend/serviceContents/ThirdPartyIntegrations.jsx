import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ThirdPartyIntegrations = () => {
    return (
        <Container>
            <Row>
                <Col className="service-details">
                    <p>Third-Party Integrations connect your application with external services like CRMs, payment gateways, marketing platforms, analytics tools, and communication services to extend functionality and automate workflows.</p>

                    <h5>Integration Services</h5>
                    <ul>
                        <li><strong>Payment Gateways:</strong> <p>Integrate Stripe, PayPal, Razorpay, Square for secure payment processing.</p></li>
                        <li><strong>CRM Integration:</strong> <p>Connect with Salesforce, HubSpot, Zoho CRM for customer data synchronization.</p></li>
                        <li><strong>Email Services:</strong> <p>Integrate SendGrid, Mailchimp, Mailgun for transactional and marketing emails.</p></li>
                        <li><strong>SMS & Communication:</strong> <p>Add Twilio, Vonage for SMS, voice calls, and WhatsApp messaging.</p></li>
                        <li><strong>Analytics:</strong> <p>Implement Google Analytics, Mixpanel, Amplitude for user tracking and insights.</p></li>
                        <li><strong>Social Media:</strong> <p>Integrate Facebook, Twitter, LinkedIn APIs for social login and sharing.</p></li>
                    </ul>

                    <h5>Popular Integrations</h5>
                    <ul>
                        <li>Stripe for payments and subscriptions</li>
                        <li>Twilio for SMS and voice</li>
                        <li>SendGrid for email delivery</li>
                        <li>Slack for team notifications</li>
                        <li>Google Maps for location services</li>
                        <li>AWS S3 for file storage</li>
                        <li>Zapier for workflow automation</li>
                        <li>Firebase for real-time features</li>
                    </ul>

                    <h5>Benefits</h5>
                    <ul>
                        <li>Faster development with pre-built services</li>
                        <li>Reduced maintenance overhead</li>
                        <li>Access to specialized features</li>
                        <li>Improved user experience</li>
                        <li>Automated data synchronization</li>
                        <li>Scalable third-party infrastructure</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default ThirdPartyIntegrations;
