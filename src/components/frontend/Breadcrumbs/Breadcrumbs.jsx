import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { BsHouseDoor, BsChevronRight } from 'react-icons/bs';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Don't show breadcrumbs on homepage
    if (location.pathname === '/') {
        return null;
    }

    // Format breadcrumb labels
    const formatLabel = (str) => {
        return str
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <Container fluid className="breadcrumbs-container py-2 bg-light">
            <Container>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <Link to="/" className="breadcrumb-link">
                                <BsHouseDoor className="me-1" />
                                Home
                            </Link>
                        </li>
                        {pathnames.map((name, index) => {
                            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                            const isLast = index === pathnames.length - 1;

                            return isLast ? (
                                <li key={name} className="breadcrumb-item active px-0" aria-current="page">
                                    {formatLabel(name)}
                                </li>
                            ) : (
                                <li key={name} className="breadcrumb-item px-0">
                                    <Link to={routeTo} className="breadcrumb-link">
                                        {formatLabel(name)}
                                    </Link>
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </Container>
        </Container>
    );
};

export default Breadcrumbs;
