import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../../../assets/logo.webp';
import { useLocation, Link } from 'react-router-dom';
import { trackEvent } from '../../../utils/analytics/ga';
import { useTheme } from '../../../store/ThemeContext';
import './Navbar.css';

const NAV_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/blogs', label: 'Blogs' },
];

function NavBar() {
    const location = useLocation();
    const { theme } = useTheme();
    const isActive = (path) => {
        const matchesPath = path === '/' ? location.pathname === path : location.pathname === path || location.pathname.startsWith(`${path}/`);
        return matchesPath ? 'active text-success fw-bold fs-6' : 'text-body fw-bold fs-6';
    };
    const handleHireClick = () => trackEvent({ action: 'click_hire_me', category: 'Navbar', label: 'Hire Me Button', value: 1 });
    return (
        <Navbar fixed="top" expand="lg" data-bs-theme={theme} bg="white" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/" aria-label="Mradul Sharma"><img alt="Mradul Sharma Logo - Senior FullStack Developer" src={logo} width="250" height="50" decoding="async" className="theme-aware-logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav" aria-label="Toggle navigation" />
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="ms-auto align-items-lg-center gap-lg-3 fw-medium fs-6">
                        {NAV_LINKS.map(({ to, label }) => (<Nav.Item key={to}> <Nav.Link as={Link} to={to} className={isActive(to)}>{label}</Nav.Link> </Nav.Item>))}
                        <Nav.Item className="d-lg-block"><Link to="/contact" className="hire-me-btn" id="navbar-hire-me-btn" onClick={handleHireClick}> <span className="hire-me-dot" aria-hidden="true" />Hire Me </Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;
