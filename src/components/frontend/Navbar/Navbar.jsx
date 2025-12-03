import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../../../assets/logo.png';
import { useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'active text-success fw-bold fs-6' : 'text-dark fw-bold fs-6';
    return (
        <Navbar sticky="top" expand="lg" collapseOnSelect bg="light" className='p-3' data-bs-theme="light">
            <Container className='px-0'>
                <Navbar.Brand href="/" className='p-0 m-0' aria-label="Mradul Sharma">
                    <img alt="Mradul Sharma" src={logo} width="218" height="40" loading="lazy" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto gap-lg-4 fw-medium fs-6">
                        <Nav.Item><Nav.Link href="/" className={isActive('/')}>Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/about" className={isActive('/about')}>About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/portfolio" className={isActive('/portfolio')}>Portfolio</Nav.Link></Nav.Item>
                        {/* <Nav.Item><Nav.Link href="/services" className={isActive('/services')}>Service</Nav.Link></Nav.Item> */}
                        <Nav.Item><Nav.Link href="/blogs" className={isActive('/blogs')}>Blogs</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;
