import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const RealTimeApplications = () => {
    return (
        <Container>
            <Row>
                <Col className="service-details">
                    <p>Real-Time Applications enable instant, bidirectional communication using WebSockets, Socket.IO, Laravel Echo, and Firebase for features like live chat, notifications, collaborative editing, and real-time dashboards.</p>

                    <h5>Real-Time Features</h5>
                    <ul>
                        <li><strong>Live Chat:</strong> <p>Build instant messaging systems with typing indicators, read receipts, and file sharing.</p></li>
                        <li><strong>Push Notifications:</strong> <p>Send real-time notifications for events, updates, and user actions.</p></li>
                        <li><strong>Collaborative Editing:</strong> <p>Enable multiple users to edit documents simultaneously like Google Docs.</p></li>
                        <li><strong>Live Dashboards:</strong> <p>Display real-time analytics, metrics, and data visualizations that update automatically.</p></li>
                        <li><strong>Presence Detection:</strong> <p>Show online/offline status and active users in real-time.</p></li>
                        <li><strong>Live Updates:</strong> <p>Push content updates, news feeds, and social media feeds in real-time.</p></li>
                    </ul>

                    <h5>Technologies</h5>
                    <ul>
                        <li>WebSockets for bidirectional communication</li>
                        <li>Socket.IO for real-time events</li>
                        <li>Laravel Echo and Pusher</li>
                        <li>Firebase Realtime Database</li>
                        <li>Redis Pub/Sub</li>
                        <li>Server-Sent Events (SSE)</li>
                    </ul>

                    <h5>Use Cases</h5>
                    <ul>
                        <li>Customer support chat systems</li>
                        <li>Social media feeds and notifications</li>
                        <li>Collaborative project management tools</li>
                        <li>Live sports scores and updates</li>
                        <li>Stock trading platforms</li>
                        <li>Multiplayer games</li>
                        <li>Live auction systems</li>
                        <li>Real-time monitoring dashboards</li>
                    </ul>

                    <h5>Benefits</h5>
                    <ul>
                        <li>Instant user engagement</li>
                        <li>Better user experience</li>
                        <li>Reduced server polling</li>
                        <li>Lower bandwidth usage</li>
                        <li>Scalable to thousands of connections</li>
                        <li>Cross-platform compatibility</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default RealTimeApplications;
