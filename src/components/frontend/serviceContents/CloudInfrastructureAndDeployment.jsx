import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CloudInfrastructureAndDeployment = () => {
    return (
        <Container>
            <Row>
                <Col className="service-details">
                    <p>Cloud Infrastructure & Deployment services provide comprehensive cloud solutions including setup, migration, CI/CD pipelines, monitoring, and optimization across AWS, Azure, Google Cloud, and DigitalOcean.</p>

                    <h5>Cloud Services</h5>
                    <ul>
                        <li><strong>Cloud Migration:</strong> <p>Migrate existing applications from on-premise or other clouds to AWS, Azure, or GCP with minimal downtime.</p></li>
                        <li><strong>Infrastructure as Code:</strong> <p>Use Terraform, CloudFormation, or Pulumi to define and manage infrastructure programmatically.</p></li>
                        <li><strong>Serverless Architecture:</strong> <p>Build cost-effective solutions using AWS Lambda, Azure Functions, or Google Cloud Functions.</p></li>
                        <li><strong>Container Orchestration:</strong> <p>Deploy and manage containerized applications using Kubernetes, ECS, or Docker Swarm.</p></li>
                        <li><strong>Auto-Scaling:</strong> <p>Configure automatic scaling based on traffic, CPU, memory, or custom metrics.</p></li>
                        <li><strong>Multi-Region Deployment:</strong> <p>Set up global infrastructure for low latency and high availability worldwide.</p></li>
                    </ul>

                    <h5>AWS Services</h5>
                    <ul>
                        <li>EC2, ECS, EKS for compute</li>
                        <li>S3, EBS, EFS for storage</li>
                        <li>RDS, DynamoDB, Aurora for databases</li>
                        <li>Lambda for serverless functions</li>
                        <li>CloudFront for CDN</li>
                        <li>Route 53 for DNS</li>
                        <li>VPC, Security Groups for networking</li>
                        <li>CloudWatch for monitoring</li>
                    </ul>

                    <h5>CI/CD Pipeline</h5>
                    <ul>
                        <li>Automated testing on every commit</li>
                        <li>Staging and production environments</li>
                        <li>Blue-green and canary deployments</li>
                        <li>Rollback capabilities</li>
                        <li>Environment-specific configurations</li>
                        <li>Secrets management with AWS Secrets Manager or Vault</li>
                        <li>Build optimization and caching</li>
                        <li>Deployment notifications via Slack/Email</li>
                    </ul>

                    <h5>Monitoring & Logging</h5>
                    <ul>
                        <li>Application performance monitoring (APM)</li>
                        <li>Log aggregation and analysis</li>
                        <li>Real-time alerts and notifications</li>
                        <li>Custom dashboards and metrics</li>
                        <li>Error tracking and debugging</li>
                        <li>Cost monitoring and optimization</li>
                    </ul>

                    <h5>Security & Compliance</h5>
                    <ul>
                        <li>IAM roles and policies</li>
                        <li>Network security with VPC and security groups</li>
                        <li>SSL/TLS certificates management</li>
                        <li>Encryption at rest and in transit</li>
                        <li>Regular security audits</li>
                        <li>Compliance with SOC 2, HIPAA, PCI DSS</li>
                    </ul>

                    <h5>Cost Optimization</h5>
                    <ul>
                        <li>Right-sizing instances and resources</li>
                        <li>Reserved instances and savings plans</li>
                        <li>Spot instances for non-critical workloads</li>
                        <li>S3 lifecycle policies</li>
                        <li>CloudFront caching strategies</li>
                        <li>Resource tagging and cost allocation</li>
                    </ul>

                    <h5>Benefits</h5>
                    <ul>
                        <li>99.99% uptime SLA</li>
                        <li>Global reach with low latency</li>
                        <li>Pay-as-you-go pricing model</li>
                        <li>Automatic backups and disaster recovery</li>
                        <li>Scalability from startup to enterprise</li>
                        <li>Reduced operational overhead</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default CloudInfrastructureAndDeployment;
