import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="mt-auto py-3">
            <Container fluid="xxl">
                <Row className="flex-wrap justify-content-between flex-md-row flex-column">
                    <Col className="mb-2 mb-md-0">© {new Date().getFullYear()}, made with ❤️ by{" "}
                        <a href="https://themeselection.com" target="_blank" rel="noreferrer" className="fw-medium text-decoration-none" aria-label="go to themeselection">ThemeSelection</a>, Refactor{" "}
                        <i className="bx bx-code-alt" style={{ color: "rgb(105, 108, 255)" }}></i>{" "} by{" "}
                        <a href="https://github.com/11Dwiwijaya/react-sneat-bootstrap-admin-template" target="_blank" rel="noreferrer" className="fw-medium text-decoration-none" aria-label="go to developer github Dwiwijaya">Dwiwijaya</a>
                    </Col>
                    <Col className="d-none d-lg-flex justify-content-end gap-4">
                        <a href="https://themeselection.com/license/" target="_blank" rel="noreferrer" className="text-decoration-none text-body"aria-label="go to themeselection license">License</a>
                        <a href="https://themeselection.com/" target="_blank" rel="noreferrer" className="text-decoration-none text-body" aria-label="go to themeselection for More Themes">More Themes</a>
                        <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/" target="_blank" rel="noreferrer" className="text-decoration-none text-body" aria-label="go to themeselection Documentation">Documentation</a>
                        <a href="https://github.com/themeselection/sneat-html-admin-template-free/issues" target="_blank" rel="noreferrer" className="text-decoration-none text-body" aria-label="go to themeselection Support">Support</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
