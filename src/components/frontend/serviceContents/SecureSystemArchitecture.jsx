import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SecureSystemArchitecture = () => {
    return (
        <Container>
            <Row>
                <Col className="service-details">
                    <p>Secure System Architecture focuses on building applications with security as the foundation. I design and implement systems that protect against modern threats while maintaining usability and performance.</p>

                    <h5>Security Services</h5>
                    <ul>
                        <li><strong>Authentication & Authorization:</strong> <p>Implement JWT, OAuth2, SAML, multi-factor authentication (2FA/MFA), and biometric authentication.</p></li>
                        <li><strong>Role-Based Access Control (RBAC):</strong> <p>Design granular permission systems with roles, permissions, and resource-level access control.</p></li>
                        <li><strong>Data Encryption:</strong> <p>Encrypt data at rest and in transit using AES-256, TLS 1.3, and end-to-end encryption for sensitive information.</p></li>
                        <li><strong>Security Auditing:</strong> <p>Implement comprehensive logging, intrusion detection, and real-time security monitoring.</p></li>
                        <li><strong>Vulnerability Protection:</strong> <p>Protect against OWASP Top 10 threats including XSS, CSRF, SQL injection, and clickjacking.</p></li>
                        <li><strong>API Security:</strong> <p>Secure APIs with rate limiting, API keys, OAuth tokens, and request validation.</p></li>
                    </ul>

                    <h5>Security Measures</h5>
                    <ul>
                        <li>Input validation and sanitization</li>
                        <li>SQL injection prevention with prepared statements</li>
                        <li>XSS protection with content security policies</li>
                        <li>CSRF tokens for form submissions</li>
                        <li>Secure session management</li>
                        <li>Password hashing with bcrypt/Argon2</li>
                        <li>HTTPS enforcement and HSTS headers</li>
                        <li>Security headers (X-Frame-Options, X-Content-Type-Options)</li>
                    </ul>

                    <h5>Compliance & Standards</h5>
                    <ul>
                        <li>GDPR compliance for data privacy</li>
                        <li>HIPAA for healthcare applications</li>
                        <li>PCI DSS for payment processing</li>
                        <li>SOC 2 Type II certification support</li>
                        <li>ISO 27001 security standards</li>
                        <li>OWASP security guidelines</li>
                    </ul>

                    <h5>Technologies Used</h5>
                    <ul>
                        <li>Authentication: Passport.js, Laravel Sanctum, Auth0</li>
                        <li>Encryption: OpenSSL, Let's Encrypt, AWS KMS</li>
                        <li>Security Tools: Helmet.js, CORS, Rate Limiter</li>
                        <li>Monitoring: Snyk, SonarQube, OWASP ZAP</li>
                        <li>Firewalls: AWS WAF, Cloudflare, ModSecurity</li>
                    </ul>

                    <h5>Security Architecture Features</h5>
                    <ul>
                        <li>Zero-trust security model</li>
                        <li>Defense in depth strategy</li>
                        <li>Principle of least privilege</li>
                        <li>Secure by default configurations</li>
                        <li>Regular security updates and patches</li>
                        <li>Penetration testing and vulnerability assessments</li>
                        <li>Incident response planning</li>
                        <li>Security awareness training materials</li>
                    </ul>

                    <h5>Benefits</h5>
                    <ul>
                        <li>Protection against data breaches and cyber attacks</li>
                        <li>Compliance with industry regulations</li>
                        <li>Customer trust and brand protection</li>
                        <li>Reduced risk of financial and legal penalties</li>
                        <li>Peace of mind for stakeholders</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default SecureSystemArchitecture;
