import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import logo from '../../../assets/logo.png';
import resume from '../../../assets/Resume/mradulsharma.pdf';
import { useLocation, Link } from 'react-router-dom';
import { trackEvent } from '../../../utils/analytics/ga';

function NavBar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'active text-success fw-bold fs-6' : 'text-dark fw-bold fs-6';

    const handleResumeClick = () => {
        trackEvent({
            name: "download_resume",
            category: "User Interaction",
            label: "Navbar Resume Button"
        });
    };

    return (
        <Navbar sticky="top" expand="lg" collapseOnSelect bg="light" className='p-3' data-bs-theme="light">
            <Container className='px-0'>
                <Navbar.Brand as={Link} to="/" className='p-0 m-0' aria-label="Mradul Sharma">
                    <img alt="Mradul Sharma" src={logo} width="218" height="40" loading="lazy" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto gap-lg-4 fw-medium fs-6">
                        <Nav.Item><Nav.Link as={Link} to="/" className={isActive('/')}>Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link as={Link} to="/about" className={isActive('/about')}>About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link as={Link} to="/services" className={isActive('/services')}>Services</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link as={Link} to="/portfolio" className={isActive('/portfolio')}>Portfolio</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link as={Link} to="/blogs" className={isActive('/blogs')}>Blogs</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="#contact" className="text-dark fw-bold fs-6">Contact</Nav.Link></Nav.Item>
                        <Nav.Item className="d-flex align-items-center">
                            <Button
                                variant="success"
                                size="sm"
                                href={resume}
                                target="_blank"
                                className="rounded-pill px-3 fw-bold"
                                onClick={handleResumeClick}
                            >
                                Download Resume
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}
export default NavBar;
