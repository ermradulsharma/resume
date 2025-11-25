import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ServerlessAndMicroservicesArchitecture = () => {
    return (
        <Container>
            <Row>
                <Col className="service-details">
                    <p>Serverless & Microservices Architecture designs scalable, decoupled systems using AWS Lambda, containers, API gateways, and event-driven patterns for maximum flexibility and cost efficiency.</p>

                    <h5>Architecture Services</h5>
                    <ul>
                        <li><strong>Serverless Functions:</strong> <p>Build event-driven applications using AWS Lambda, Azure Functions, or Google Cloud Functions.</p></li>
                        <li><strong>Microservices Design:</strong> <p>Break monolithic applications into independent, deployable microservices.</p></li>
                        <li><strong>API Gateway:</strong> <p>Implement API gateways for routing, authentication, and rate limiting.</p></li>
                        <li><strong>Event-Driven Architecture:</strong> <p>Use message queues and event buses for asynchronous communication.</p></li>
                        <li><strong>Container Orchestration:</strong> <p>Deploy with Docker, Kubernetes, or AWS ECS for container management.</p></li>
                        <li><strong>Service Mesh:</strong> <p>Implement Istio or Linkerd for service-to-service communication.</p></li>
                    </ul>

                    <h5>Technologies</h5>
                    <ul>
                        <li>AWS Lambda, S3, API Gateway, DynamoDB</li>
                        <li>Docker, Kubernetes, ECS, Fargate</li>
                        <li>Message Queues: SQS, SNS, RabbitMQ, Kafka</li>
                        <li>Service Discovery: Consul, Eureka</li>
                        <li>API Gateway: Kong, AWS API Gateway</li>
                    </ul>

                    <h5>Benefits</h5>
                    <ul>
                        <li>Pay only for actual usage (serverless)</li>
                        <li>Auto-scaling without configuration</li>
                        <li>Independent deployment of services</li>
                        <li>Better fault isolation</li>
                        <li>Technology flexibility per service</li>
                        <li>Easier team scalability</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default ServerlessAndMicroservicesArchitecture;
