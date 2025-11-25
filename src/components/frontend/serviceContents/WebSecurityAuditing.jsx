import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WebSecurityAuditing = () => {
    return (
        <Container>
            <Row>
                <Col className="service-details">
                    <p>Web Security Auditing provides comprehensive security assessments to identify and fix vulnerabilities including XSS, CSRF, SQL injection, and other OWASP Top 10 threats with detailed reports and remediation guidance.</p>

                    <h5>Security Audit Services</h5>
                    <ul>
                        <li><strong>Vulnerability Assessment:</strong> <p>Scan for common vulnerabilities like XSS, CSRF, SQL injection, and insecure configurations.</p></li>
                        <li><strong>Penetration Testing:</strong> <p>Simulate real-world attacks to identify security weaknesses before hackers do.</p></li>
                        <li><strong>Code Review:</strong> <p>Manual code review to identify security flaws and insecure coding practices.</p></li>
                        <li><strong>Compliance Audit:</strong> <p>Ensure compliance with GDPR, HIPAA, PCI DSS, and other regulations.</p></li>
                        <li><strong>Security Hardening:</strong> <p>Implement security best practices and configurations across your stack.</p></li>
                        <li><strong>Remediation Support:</strong> <p>Provide detailed fix recommendations and implementation assistance.</p></li>
                    </ul>

                    <h5>OWASP Top 10 Coverage</h5>
                    <ul>
                        <li>Injection attacks (SQL, NoSQL, Command)</li>
                        <li>Broken authentication and session management</li>
                        <li>Sensitive data exposure</li>
                        <li>XML external entities (XXE)</li>
                        <li>Broken access control</li>
                        <li>Security misconfiguration</li>
                        <li>Cross-site scripting (XSS)</li>
                        <li>Insecure deserialization</li>
                        <li>Using components with known vulnerabilities</li>
                        <li>Insufficient logging and monitoring</li>
                    </ul>

                    <h5>Security Tools</h5>
                    <ul>
                        <li>OWASP ZAP for penetration testing</li>
                        <li>Burp Suite for security scanning</li>
                        <li>Snyk for dependency vulnerabilities</li>
                        <li>SonarQube for code quality and security</li>
                        <li>Nmap for network scanning</li>
                        <li>Metasploit for penetration testing</li>
                    </ul>

                    <h5>Deliverables</h5>
                    <ul>
                        <li>Comprehensive security audit report</li>
                        <li>Vulnerability severity ratings</li>
                        <li>Detailed remediation recommendations</li>
                        <li>Code examples for fixes</li>
                        <li>Compliance checklist</li>
                        <li>Follow-up verification testing</li>
                    </ul>

                    <h5>Benefits</h5>
                    <ul>
                        <li>Prevent data breaches and cyber attacks</li>
                        <li>Protect customer data and privacy</li>
                        <li>Avoid legal and financial penalties</li>
                        <li>Build customer trust and confidence</li>
                        <li>Meet compliance requirements</li>
                        <li>Reduce security incident costs</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default WebSecurityAuditing;
