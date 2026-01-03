import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';

const SectionHeader = ({ id, title, description, linkTo, linkText, className = "", level = "h2" }) => {
    const HeadingTag = level;
    return (
        <Container id={id} className={`mb-4${className}`}>
            <Row className="align-items-center">
                <Col md={linkTo ? 10 : 12}>
                    <div className="section-title text-start p-0 m-0">
                        <HeadingTag>{title}</HeadingTag>
                        {description && <p className="text-secondary mb-0">{description}</p>}
                    </div>
                </Col>
                {linkTo && linkText && (
                    <Col md={2} className="text-md-end mt-3 mt-md-0">
                        <Link to={linkTo} className="btn btn-outline-success d-inline-flex align-items-center rounded-pill px-4">
                            {linkText} <BiRightArrowAlt className="ms-2" />
                        </Link>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default SectionHeader;
