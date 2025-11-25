import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ProgressiveWebAppDevelopment = () => {
    return (
        <Container>
            <Row>
                <Col className="service-details">
                    <p>Progressive Web App (PWA) Development creates fast, reliable, and engaging web applications that work offline, can be installed on devices, and provide native app-like experiences across all platforms.</p>

                    <h5>PWA Features</h5>
                    <ul>
                        <li><strong>Offline Functionality:</strong> <p>Use service workers to cache assets and enable offline access to your application.</p></li>
                        <li><strong>Installable:</strong> <p>Allow users to install your web app on their home screen without app stores.</p></li>
                        <li><strong>Push Notifications:</strong> <p>Send push notifications to re-engage users even when the app is closed.</p></li>
                        <li><strong>Fast Loading:</strong> <p>Implement app shell architecture for instant loading and smooth performance.</p></li>
                        <li><strong>Responsive Design:</strong> <p>Work seamlessly across all devices and screen sizes.</p></li>
                        <li><strong>Background Sync:</strong> <p>Sync data in the background when connection is restored.</p></li>
                    </ul>

                    <h5>Technologies</h5>
                    <ul>
                        <li>Service Workers for offline caching</li>
                        <li>Web App Manifest for installability</li>
                        <li>Workbox for PWA tooling</li>
                        <li>Push API for notifications</li>
                        <li>IndexedDB for local storage</li>
                        <li>React, Next.js, or Vue.js</li>
                    </ul>

                    <h5>Benefits</h5>
                    <ul>
                        <li>70% lower development cost than native apps</li>
                        <li>Single codebase for all platforms</li>
                        <li>No app store approval process</li>
                        <li>Instant updates without user action</li>
                        <li>Better SEO than native apps</li>
                        <li>Reduced data usage with caching</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default ProgressiveWebAppDevelopment;
