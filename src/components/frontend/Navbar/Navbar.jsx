import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import BrandButton from '../../common/BrandButton';
import logo from '../../../assets/logo.webp';
import resume from '../../../assets/resume/mradulsharma.pdf';
import { useLocation, Link } from 'react-router-dom';
import { trackEvent } from '../../../utils/analytics/ga';

import ThemeToggle from '../../common/ThemeToggle';
import { useTheme } from '../../../context/ThemeContext';

function NavBar() {
    const location = useLocation();
    const { theme } = useTheme();
    const isActive = (path) => location.pathname === path ? 'active text-success fw-bold fs-6' : 'text-body fw-bold fs-6';

    const handleResumeClick = () => {
        trackEvent({
            name: "download_resume",
            category: "User Interaction",
            label: "Navbar Resume Button"
        });
    };

    return (
        <Navbar
            sticky="top"
            expand="lg"
            collapseOnSelect
            className='p-3 transition-all'
            style={{
                backgroundColor: 'var(--surface-color)',
                transition: 'background-color 0.3s ease'
            }}
            data-bs-theme={theme}
        >
            <Container className='px-0'>
                <Navbar.Brand as={Link} to="/" className='p-0 m-0 bg-transparent' aria-label="Mradul Sharma">
                    <img
                        alt="Mradul Sharma"
                        src={logo}
                        width="218"
                        height="40"
                        loading="lazy"
                        className="theme-aware-logo"
                    />
                </Navbar.Brand>

                <div className="d-flex align-items-center gap-2 order-lg-last ms-lg-4">
                    <ThemeToggle />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </div>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto gap-lg-4 fw-medium fs-6 align-items-center">
                        <Nav.Item><Nav.Link as={Link} to="/" className={isActive('/')}>Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link as={Link} to="/about" className={isActive('/about')}>About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link as={Link} to="/services" className={isActive('/services')}>Services</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link as={Link} to="/portfolio" className={isActive('/portfolio')}>Portfolio</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link as={Link} to="/blogs" className={isActive('/blogs')}>Blogs</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link as={Link} to="/contact" className={isActive('/contact')}>Contact</Nav.Link></Nav.Item>
                        <Nav.Item className="d-none d-lg-block">
                            <BrandButton
                                variant="success"
                                size="sm"
                                href={resume}
                                target="_blank"
                                className="px-3 fw-bold"
                                onClick={handleResumeClick}
                            >
                                Download Resume
                            </BrandButton>
                        </Nav.Item>
                    </Nav>
                    {/* Mobile Resume Button */}
                    <div className="d-lg-none mt-3">
                        <BrandButton
                            variant="success"
                            size="sm"
                            href={resume}
                            target="_blank"
                            className="w-100 fw-bold"
                            onClick={handleResumeClick}
                        >
                            Download Resume
                        </BrandButton>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}
export default NavBar;
