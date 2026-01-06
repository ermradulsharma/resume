import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCalendar3, BsClock } from "react-icons/bs";
import blogsData from "../../database/blogs.json";
import "./LatestBlogs.css";

import SectionHeader from "../../common/SectionHeader";

const LatestBlogs = ({ maxPosts = 4 }) => {
    const latestPosts = blogsData.blogs.posts
        .filter(post => post.published)
        .sort((a, b) => b.id - a.id)
        .slice(0, maxPosts);

    if (latestPosts.length === 0) return null;

    return (
        <section id="latestBlogs" className="latestBlogs">
            <SectionHeader title="Latest from the Blog" description="Stay ahead of the curve with my latest insights, tutorials, and deep dives into modern web development. From mastering Laravel and React to exploring cloud architecture and industry best practices, my blog is dedicated to sharing knowledge that empowers developers to build better, more scalable applications." linkTo="/blogs" linkText="View All Posts" />
            <Container data-aos="fade-up" data-aos-delay="100">
                <Row className="g-4">
                    {latestPosts.map((post) => (
                        <Col key={post.id} lg={3} md={6}>
                            <Card className="blog-card h-100 shadow-sm border-0 border-top border-primary border-3">
                                <Link to={`/blogs/${post.slug}`} className="text-decoration-none">
                                    <div className="card-img-wrapper" style={{ height: "200px", overflow: "hidden" }}>
                                        <Card.Img variant="top" src={post.image} alt={post.title} style={{ objectFit: "cover", height: "100%" }} loading="lazy" />
                                    </div>
                                </Link>
                                <Card.Body className="d-flex flex-column">
                                    <div className="mb-2">
                                        <Badge bg="info-subtle" className="me-2" style={{ color: 'var(--info-color)' }}>{post.category}</Badge>
                                        {post.featured && <Badge bg="primary-subtle" style={{ color: 'var(--primary-color)' }}>Featured</Badge>}
                                    </div>
                                    <Link to={`/blogs/${post.slug}`} className="text-decoration-none">
                                        <Card.Title className="h5 fw-bold mb-3" as="h3" style={{ color: 'var(--text-dark)' }}>{post.title}</Card.Title>
                                    </Link>
                                    <Card.Text className="small mb-3" style={{ color: 'var(--text-secondary)' }}>
                                        {post.excerpt.length > 160 ? `${post.excerpt.substring(0, 160)}...` : post.excerpt}
                                    </Card.Text>
                                    <div className="mt-auto pt-3 border-top d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-2 small" style={{ color: 'var(--text-muted)' }}>
                                            <BsCalendar3 />
                                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 small" style={{ color: 'var(--text-muted)' }}>
                                            <BsClock />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default LatestBlogs;
