import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getSafeProjectImage } from '../../../utils/imageUtils';
import BrandButton from '../BrandButton';
import './UniversalCard.css';

const UniversalCard = ({
    image,
    title,
    link,
    description,
    badge,
    tags = [],
    meta = [],
    overlayText = "View Details",
    onClick,
    className = "",
    imageHeight = "220px"
}) => {
    const getCardImageSrc = (img) => {
        if (!img) return null;
        // Check if it's an external URL or a path relative to public directory
        if (img.startsWith('http') || img.startsWith('/')) {
            return img;
        }
        // Otherwise assume it's a project asset
        return getSafeProjectImage(img);
    };

    return (
        <Card className={`universal-card shadow-lg border-0 overflow-hidden ${className}`}>
            <Link to={link} className="text-decoration-none" onClick={onClick}>
                <div className="card-img-wrapper position-relative overflow-hidden" style={{ height: imageHeight }}>
                    <Card.Img src={getCardImageSrc(image)} alt={title} height="100%" style={{ objectFit: "cover", width: '100%' }} loading="lazy" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x220?text=Image+Not+Found'; }} />
                    <div className="overlay d-flex justify-content-center align-items-center">
                        <BrandButton as="span" className="fw-bold">{overlayText}</BrandButton>
                    </div>
                </div>
            </Link>
            <Card.Body className="p-4 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <Link to={link} className="text-decoration-none text-dark flex-grow-1" onClick={onClick}>
                        <Card.Title as="h3" className="h6 fw-bold mb-0 card-title-text" style={{ minHeight: "40px" }}>{title}</Card.Title>
                    </Link>
                    {badge && (typeof badge === 'string' || badge.text) && (
                        <Badge bg={badge.bg || "primary-subtle"} className={`border border-${badge.bg || "primary-subtle"}`} style={{ color: badge.color || 'var(--primary-color)' }}>{typeof badge === 'string' ? badge : badge.text}</Badge>
                    )}
                </div>

                {description && (
                    <Card.Text className="text-secondary small mb-3 description-text">{description} </Card.Text>
                )}

                {/* Meta Information (Dates, Author, etc for Blogs) */}
                {meta.length > 0 && (
                    <div className="d-flex align-items-center justify-content-between text-secondary small mb-3 meta-info">
                        {meta.map((item, idx) => (
                            <div key={idx} className="d-flex align-items-center gap-1"> {item.icon}
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tags (Technologies for Projects, Tags for Blogs) */}
                {tags.length > 0 && (
                    <div className="d-flex flex-wrap gap-2 mt-auto">
                        {tags.slice(0, 4).map((tag, index) => (
                            <Badge key={index} bg="primary-subtle" className="fw-normal border border-primary-subtle" style={{ color: 'var(--primary-color)' }}>{tag}</Badge>
                        ))}
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default UniversalCard;
