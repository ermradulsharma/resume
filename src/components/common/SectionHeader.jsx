import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BrandButton from './BrandButton';

const SectionHeader = ({ title, description, linkTo, linkText, level = "h2" }) => {
    const HeadingTag = level;
    return (
        <Row className="align-items-center">
            <Col md={linkTo ? 10 : 12}>
                <div className="section-title text-start">
                    <HeadingTag>{title}</HeadingTag>
                    {description && <p className="text-secondary mb-0">{description}</p>}
                </div>
            </Col>
            {linkTo && linkText && (
                <Col md={2} className="text-md-end mt-3 mt-md-0">
                    <BrandButton to={linkTo} variant="brand-outline" size="sm" withArrow>
                        {linkText}
                    </BrandButton>
                </Col>
            )}
        </Row>
    );
};

export default SectionHeader;
