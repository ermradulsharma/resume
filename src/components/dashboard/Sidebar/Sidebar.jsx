import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { BsSpeedometer2, BsKanban, BsGraphUp, BsGithub } from "react-icons/bs";

const Sidebar = () => {
    const location = useLocation();

    return (
        <aside className="d-flex flex-column bg-light border-end min-vh-100">
            <div className="p-3 border-bottom text-center">
                <Link to="/dashboard" className="text-decoration-none">
                    <h5 className="fw-bold text-primary mb-0">Mradul Sharma</h5>
                    <small className="text-secondary">Full-Stack Developer</small>
                </Link>
            </div>

            <Nav className="flex-column p-3">
                <div className="text-uppercase small text-secondary fw-semibold mb-2 mt-3">Main</div>

                <Nav.Item>
                    <Nav.Link
                        as={Link}
                        to="/dashboard"
                        className={`d-flex align-items-center py-2 ${location.pathname === "/dashboard" ? "active fw-bold text-primary" : "text-dark"}`}
                    >
                        <BsSpeedometer2 className="me-2" />
                        Dashboard
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link
                        as={Link}
                        to="/projects"
                        className={`d-flex align-items-center py-2 ${location.pathname === "/projects" ? "active fw-bold text-primary" : "text-dark"}`}
                    >
                        <BsKanban className="me-2" />
                        Projects
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link
                        as={Link}
                        to="/analytics"
                        className={`d-flex align-items-center py-2 ${location.pathname === "/analytics" ? "active fw-bold text-primary" : "text-dark"}`}
                    >
                        <BsGraphUp className="me-2" />
                        Analytics
                    </Nav.Link>
                </Nav.Item>

                <div className="text-uppercase small text-secondary fw-semibold mb-2 mt-4">External</div>

                <Nav.Item>
                    <Nav.Link
                        href="https://github.com/mradulsharma"
                        target="_blank"
                        className="d-flex align-items-center py-2 text-dark"
                    >
                        <BsGithub className="me-2" />
                        GitHub
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </aside>
    );
};

export default Sidebar;
