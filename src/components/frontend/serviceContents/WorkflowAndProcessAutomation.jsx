import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WorkflowAndProcessAutomation = () => {
    return (
        <Container>
            <Row>
                <Col className="service-details">
                    <p>Workflow & Process Automation eliminates repetitive manual tasks by automating business processes, data synchronization, notifications, and backend operations using modern automation tools and techniques.</p>

                    <h5>Automation Services</h5>
                    <ul>
                        <li><strong>Business Process Automation:</strong> <p>Automate approval workflows, document processing, data entry, and reporting tasks.</p></li>
                        <li><strong>Task Scheduling:</strong> <p>Set up cron jobs, scheduled tasks, and time-based triggers for recurring operations.</p></li>
                        <li><strong>Event-Driven Automation:</strong> <p>Create workflows triggered by specific events like user actions, database changes, or API calls.</p></li>
                        <li><strong>Data Synchronization:</strong> <p>Automate data sync between systems, databases, and third-party services.</p></li>
                        <li><strong>Email Automation:</strong> <p>Set up automated email campaigns, notifications, and transactional emails.</p></li>
                        <li><strong>Report Generation:</strong> <p>Automatically generate and distribute reports on schedules or triggers.</p></li>
                    </ul>

                    <h5>Technologies Used</h5>
                    <ul>
                        <li>Laravel Queues and Jobs</li>
                        <li>Node.js Workers and Bull Queue</li>
                        <li>Cron Jobs and Task Schedulers</li>
                        <li>Zapier and Make (Integromat)</li>
                        <li>Apache Airflow for complex workflows</li>
                        <li>AWS Step Functions</li>
                        <li>RabbitMQ, Redis Queue</li>
                    </ul>

                    <h5>Common Automations</h5>
                    <ul>
                        <li>Invoice generation and sending</li>
                        <li>Customer onboarding workflows</li>
                        <li>Data backup and archival</li>
                        <li>Social media post scheduling</li>
                        <li>Inventory management and alerts</li>
                        <li>Lead nurturing sequences</li>
                        <li>Compliance reporting</li>
                        <li>Database cleanup and optimization</li>
                    </ul>

                    <h5>Benefits</h5>
                    <ul>
                        <li>Save 10-20 hours per week on manual tasks</li>
                        <li>Reduce human errors and inconsistencies</li>
                        <li>Improve response times and efficiency</li>
                        <li>Scale operations without hiring</li>
                        <li>24/7 automated operations</li>
                        <li>Better resource allocation for strategic work</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default WorkflowAndProcessAutomation;
