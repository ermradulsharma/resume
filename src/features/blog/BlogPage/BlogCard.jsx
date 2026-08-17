import React from "react";
import { Col, Card, Badge } from "react-bootstrap";
import { BsCalendar3, BsPerson } from "react-icons/bs";
import BrandButton from "../../../components/ui/BrandButton";
import UniversalCard from "../../../components/ui/UniversalCard/UniversalCard";
import { trackEvent } from "../../../utils/analytics/ga";

const getRelativeTime = (dateString) => {
    const postDate = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - postDate) / 1000);
    const diffInDays = Math.floor(diffInSeconds / (60 * 60 * 24));

    if (diffInDays > 2) {
        return postDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    }
    if (diffInSeconds < 60) return diffInSeconds === 1 ? "1 second ago" : `${diffInSeconds} seconds ago`;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return diffInMinutes === 1 ? "1 minute ago" : `${diffInMinutes} minutes ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return diffInHours === 1 ? "1 hour ago" : `${diffInHours} hours ago`;
    return diffInDays === 1 ? "1 day ago" : `${diffInDays} days ago`;
};

const BlogCard = ({ post, viewMode }) => {
    if (viewMode === "grid") {
        return (
            <Col lg={4} md={6} key={post.id} className="d-flex" data-aos="fade-up" data-aos-delay="200">
                <UniversalCard
                    image={post.image}
                    title={post.title}
                    category={post.category}
                    badge={post.category}
                    link={`/blogs/${post.slug}`}
                    description={post.excerpt}
                    overlayText="Read Article"
                    footer={
                        <div className="d-flex align-items-center justify-content-between text-muted small w-100 border-top pt-2">
                            <span><BsCalendar3 className="me-1" /> {getRelativeTime(post.date)}</span>
                            <span>{post.readTime}</span>
                        </div>
                    }
                />
            </Col>
        );
    }

    return (
        <Col xs={12} key={post.id} data-aos="fade-up" data-aos-delay="100">
            <Card className="border-0 shadow-sm rounded-4 overflow-hidden mb-4 blog-list-card hover-lift">
                <Card.Body className="p-4">
                    <div className="d-flex flex-column flex-md-row gap-4 align-items-center">
                        <div className="blog-list-image-wrapper rounded-3 overflow-hidden flex-shrink-0" style={{ width: "220px", height: "140px" }}>
                            <img src={post.image} alt={post.title} className="w-100 h-100 object-fit-cover" loading="lazy" />
                        </div>
                        <div className="flex-grow-1">
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <Badge bg="primary" className="px-3 py-2 rounded-pill fw-medium">{post.category}</Badge>
                                <span className="text-muted small"><BsCalendar3 className="me-1" /> {getRelativeTime(post.date)}</span>
                                <span className="text-muted small"><BsPerson className="me-1" /> {post.author}</span>
                            </div>
                            <h3 className="h4 fw-bold mb-2">
                                <a href={`/blogs/${post.slug}`} className="text-decoration-none text-dark">{post.title}</a>
                            </h3>
                            <p className="text-secondary mb-3 line-clamp-2">{post.excerpt}</p>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="text-muted small fw-medium">{post.readTime}</span>
                                <BrandButton to={`/blogs/${post.slug}`} size="sm" withArrow onClick={() => trackEvent({ action: "view_blog", category: "Blogs", label: post.title, value: 1 })}>Read Full Article</BrandButton>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BlogCard;
