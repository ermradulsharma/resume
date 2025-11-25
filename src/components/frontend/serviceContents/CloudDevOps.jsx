import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CloudDevOps = () => {
    return (
        <Container>
            <Row>
                <Col className="service-details">
                    <p>Cloud & DevOps services focus on infrastructure automation, continuous integration/deployment (CI/CD), and scalable cloud architecture. I help businesses deploy, monitor, and scale applications efficiently on AWS, DigitalOcean, Firebase, and other cloud platforms.</p>

                    <h5>Core Services</h5>
                    <ul>
                        <li><strong>Cloud Infrastructure Setup:</strong> <p>Design and deploy scalable cloud infrastructure using AWS EC2, S3, RDS, Lambda, and DigitalOcean Droplets.</p></li>
                        <li><strong>CI/CD Pipelines:</strong> <p>Automate build, test, and deployment processes using GitHub Actions, GitLab CI, Jenkins, or Bitbucket Pipelines.</p></li>
                        <li><strong>Containerization:</strong> <p>Package applications using Docker and orchestrate with Kubernetes or Docker Compose for consistent deployments.</p></li>
                        <li><strong>Server Configuration:</strong> <p>Set up and configure Nginx, Apache, PM2, and load balancers for high availability and performance.</p></li>
                        <li><strong>Monitoring & Logging:</strong> <p>Implement monitoring solutions using AWS CloudWatch, Sentry, LogRocket, or custom logging systems.</p></li>
                        <li><strong>Auto-Scaling:</strong> <p>Configure auto-scaling groups and load balancers to handle traffic spikes efficiently.</p></li>
                        <li><strong>Backup & Disaster Recovery:</strong> <p>Set up automated backups, snapshots, and disaster recovery plans to ensure data safety.</p></li>
                    </ul>

                    <h5>Technologies & Tools</h5>
                    <ul>
                        <li>AWS (EC2, S3, Lambda, RDS, CloudFront, Route 53)</li>
                        <li>DigitalOcean, Firebase, Vercel, Netlify</li>
                        <li>Docker, Kubernetes, Docker Compose</li>
                        <li>GitHub Actions, GitLab CI, Jenkins</li>
                        <li>Nginx, Apache, PM2</li>
                        <li>Terraform, Ansible (Infrastructure as Code)</li>
                    </ul>

                    <h5>Benefits</h5>
                    <ul>
                        <li>Zero-downtime deployments with rollback capabilities</li>
                        <li>Automated testing and quality assurance</li>
                        <li>Scalable infrastructure that grows with your business</li>
                        <li>Cost optimization through efficient resource management</li>
                        <li>Enhanced security with SSL, firewalls, and access controls</li>
                        <li>24/7 monitoring and alerting for system health</li>
                    </ul>

                    <h5>Ideal For</h5>
                    <ul>
                        <li>Startups needing rapid deployment and scaling</li>
                        <li>Enterprises requiring high availability and reliability</li>
                        <li>Teams wanting to automate their deployment workflows</li>
                        <li>Applications with fluctuating traffic patterns</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default CloudDevOps;
