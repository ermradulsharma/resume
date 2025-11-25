import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FreelanceAndClientPortalSolutions = () => {
    return (
        <Container>
            <Row>
                <Col className="service-details">
                    <p>Freelance & Client Portal Solutions provide custom platforms for managing proposals, invoices, projects, communication, and file sharing between freelancers/agencies and their clients in one centralized system.</p>

                    <h5>Portal Features</h5>
                    <ul>
                        <li><strong>Project Management:</strong> <p>Track projects, tasks, milestones, and deadlines with Kanban boards and Gantt charts.</p></li>
                        <li><strong>Proposal System:</strong> <p>Create, send, and track proposals with e-signature capabilities.</p></li>
                        <li><strong>Invoice Management:</strong> <p>Generate invoices, track payments, and integrate with payment gateways.</p></li>
                        <li><strong>Time Tracking:</strong> <p>Log billable hours with timers and generate time-based invoices.</p></li>
                        <li><strong>File Sharing:</strong> <p>Securely share files, documents, and assets with clients.</p></li>
                        <li><strong>Communication Hub:</strong> <p>Built-in messaging, comments, and email notifications.</p></li>
                    </ul>

                    <h5>Key Modules</h5>
                    <ul>
                        <li>Client management and CRM</li>
                        <li>Project and task management</li>
                        <li>Proposal and contract management</li>
                        <li>Invoice and payment tracking</li>
                        <li>Time tracking and reporting</li>
                        <li>File storage and sharing</li>
                        <li>Calendar and scheduling</li>
                        <li>Expense tracking</li>
                    </ul>

                    <h5>Technologies</h5>
                    <ul>
                        <li>React for dynamic interfaces</li>
                        <li>Laravel/Node.js for backend</li>
                        <li>Stripe for payments</li>
                        <li>AWS S3 for file storage</li>
                        <li>PDF generation for invoices</li>
                        <li>Email integration (SendGrid)</li>
                    </ul>

                    <h5>Benefits</h5>
                    <ul>
                        <li>Professional client experience</li>
                        <li>Streamlined business operations</li>
                        <li>Faster payment collection</li>
                        <li>Better project organization</li>
                        <li>Reduced administrative work</li>
                        <li>Improved client communication</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default FreelanceAndClientPortalSolutions;
