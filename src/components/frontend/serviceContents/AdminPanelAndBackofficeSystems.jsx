import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AdminPanelAndBackofficeSystems = () => {
    return (
        <Container>
            <Row>
                <Col className="service-details">
                    <p>Admin Panel & Backoffice Systems provide powerful internal tools for managing users, content, data, and business operations with role-based access, analytics, and comprehensive CRUD operations.</p>

                    <h5>Admin Panel Features</h5>
                    <ul>
                        <li><strong>User Management:</strong> <p>Manage users, roles, permissions, and access control with detailed user profiles.</p></li>
                        <li><strong>Content Management:</strong> <p>Create, edit, and publish content with rich text editors and media management.</p></li>
                        <li><strong>Data Analytics:</strong> <p>View real-time dashboards with charts, graphs, and key performance indicators.</p></li>
                        <li><strong>CRUD Operations:</strong> <p>Full create, read, update, delete functionality for all data entities.</p></li>
                        <li><strong>Reporting Tools:</strong> <p>Generate and export reports in PDF, Excel, and CSV formats.</p></li>
                        <li><strong>Audit Logging:</strong> <p>Track all user actions and system changes for compliance and security.</p></li>
                    </ul>

                    <h5>Technologies</h5>
                    <ul>
                        <li>React Admin, AdminLTE, CoreUI</li>
                        <li>Laravel Nova, Filament</li>
                        <li>Chart.js, ApexCharts for visualizations</li>
                        <li>DataTables for data grids</li>
                        <li>Export libraries (jsPDF, ExcelJS)</li>
                    </ul>

                    <h5>Common Modules</h5>
                    <ul>
                        <li>User and role management</li>
                        <li>Product/inventory management</li>
                        <li>Order and transaction management</li>
                        <li>Customer support ticketing</li>
                        <li>Email template management</li>
                        <li>Settings and configuration</li>
                        <li>Activity logs and audit trails</li>
                        <li>Notification management</li>
                    </ul>

                    <h5>Benefits</h5>
                    <ul>
                        <li>Centralized business management</li>
                        <li>Improved operational efficiency</li>
                        <li>Better data insights and reporting</li>
                        <li>Reduced manual errors</li>
                        <li>Scalable as business grows</li>
                        <li>Customizable to specific needs</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminPanelAndBackofficeSystems;
