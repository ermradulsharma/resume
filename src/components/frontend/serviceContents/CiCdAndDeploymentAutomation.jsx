import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CiCdAndDeploymentAutomation = () => {
    return (
        <Container>
            <Row>
                <Col className="service-details">
                    <p>CI/CD & Deployment Automation streamlines your development workflow with automated testing, building, and deployment pipelines using GitHub Actions, GitLab CI, Jenkins, and modern DevOps practices.</p>

                    <h5>CI/CD Services</h5>
                    <ul>
                        <li><strong>Automated Testing:</strong> <p>Run unit, integration, and end-to-end tests on every commit automatically.</p></li>
                        <li><strong>Build Automation:</strong> <p>Automate code compilation, bundling, and optimization processes.</p></li>
                        <li><strong>Deployment Pipelines:</strong> <p>Set up multi-stage pipelines for staging, QA, and production environments.</p></li>
                        <li><strong>Rollback Strategies:</strong> <p>Implement automatic rollback on failed deployments for zero downtime.</p></li>
                        <li><strong>Environment Management:</strong> <p>Manage multiple environments with environment-specific configurations.</p></li>
                        <li><strong>Secrets Management:</strong> <p>Securely handle API keys, passwords, and sensitive data in pipelines.</p></li>
                    </ul>

                    <h5>CI/CD Tools</h5>
                    <ul>
                        <li>GitHub Actions</li>
                        <li>GitLab CI/CD</li>
                        <li>Jenkins</li>
                        <li>CircleCI</li>
                        <li>Travis CI</li>
                        <li>Bitbucket Pipelines</li>
                        <li>AWS CodePipeline</li>
                    </ul>

                    <h5>Pipeline Features</h5>
                    <ul>
                        <li>Automated code linting and formatting</li>
                        <li>Security scanning and vulnerability checks</li>
                        <li>Docker image building and pushing</li>
                        <li>Database migrations</li>
                        <li>Cache optimization for faster builds</li>
                        <li>Parallel job execution</li>
                        <li>Slack/Email notifications</li>
                        <li>Deployment approvals for production</li>
                    </ul>

                    <h5>Benefits</h5>
                    <ul>
                        <li>Deploy multiple times per day safely</li>
                        <li>Catch bugs before production</li>
                        <li>Reduce manual deployment errors</li>
                        <li>Faster time to market</li>
                        <li>Consistent deployment process</li>
                        <li>Better team collaboration</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default CiCdAndDeploymentAutomation;
