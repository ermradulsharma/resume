import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

/**
 * BrandButton - A standardized button component for the portfolio.
 * Matches the "Resume" button aesthetic.
 * 
 * @param {string} variant - 'brand' (solid) or 'brand-outline'
 * @param {boolean} withArrow - Show a trailing arrow icon
 * @param {React.ReactNode} icon - Leading icon
 * @param {boolean} loading - Show a loading spinner
 * @param {string} href - External link
 * @param {string} to - Internal link (replaces href if present)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Button text/content
 */
const BrandButton = ({
    variant = 'brand',
    withArrow = false,
    icon = null,
    loading = false,
    href,
    to,
    className = '',
    children,
    ...props
}) => {
    // Determine the CSS class based on the variant
    let brandClass = 'btn-brand';
    if (variant === 'brand-outline') brandClass = 'btn-brand-outline';
    if (variant === 'brand-outline-light') brandClass = 'btn-brand-outline-light';

    // Combine classes
    const combinedClass = `${brandClass} d-inline-flex align-items-center justify-content-center gap-2 ${className}`;

    // Common content wrapper to handle icons and loading state
    const content = (
        <>
            {loading && <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />}
            {!loading && icon && <span className="d-flex align-items-center">{icon}</span>}
            <span>{children}</span>
            {withArrow && !loading && <BsArrowRight className="ms-1" />}
        </>
    );

    // If 'to' is provided, use Link (internal)
    if (to) {
        return (
            <Button as={Link} to={to} className={combinedClass} {...props}>
                {content}
            </Button>
        );
    }

    // If 'href' is provided, it's an external link or anchor
    if (href) {
        return (
            <Button href={href} className={combinedClass} {...props}>
                {content}
            </Button>
        );
    }

    // Default to a standard button
    return (
        <Button className={combinedClass} disabled={loading} {...props}>
            {content}
        </Button>
    );
};

export default BrandButton;
