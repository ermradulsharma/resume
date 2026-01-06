import React from "react";
import { Container, Card, Col, Row, Badge } from "react-bootstrap";
import SectionHeader from "../../common/SectionHeader";
import { Link } from "react-router-dom";
import { BsClock, BsCalendar3 } from "react-icons/bs";
import blogsData from "../../database/blogs.json";
import "./RelatedPosts.css";

/**
 * RelatedPosts component - displays related blog posts based on category and tags
 * Helps reduce orphan pages by creating internal links between blog posts
 */
const RelatedPosts = ({ currentPostId, category, tags = [], maxResults = 4 }) => {
    // Get all published blogs except the current one
    const allBlogs = blogsData.blogs.posts.filter(
        blog => blog.published && blog.id !== currentPostId
    );

    // Calculate relevance score for each blog
    const scoredBlogs = allBlogs.map(blog => {
        let score = 0;

        // Same category gets highest score
        if (blog.category === category) {
            score += 10;
        }

        // Matching tags increase score
        const blogTags = blog.tags || [];
        const matchingTags = blogTags.filter(tag => tags.includes(tag));
        score += matchingTags.length * 3;

        // Featured blogs get slight boost
        if (blog.featured) {
            score += 1;
        }

        return { ...blog, relevanceScore: score };
    });

    // Sort by relevance score and get top results
    const relatedPosts = scoredBlogs
        .sort((a, b) => b.relevanceScore - a.relevanceScore)
        .slice(0, maxResults);

    // Don't render if no related posts
    if (relatedPosts.length === 0) {
        return null;
    }

    return (
        <section id="relatedPosts" className="relatedPosts">
            <SectionHeader title="Related Posts" description="" />
            <Container data-aos="fade-up" data-aos-delay="100">
                <Row className="g-4">
                    {relatedPosts.map(post => (
                        <Col key={post.id} xs={12} sm={6} lg={3}>
                            <Link to={`/blogs/${post.slug}`} className="text-decoration-none">
                                <Card className="related-post-card h-100 shadow-sm">
                                    <div className="post-image-wrapper">
                                        <Card.Img
                                            variant="top"
                                            src={post.image}
                                            alt={post.title}
                                            loading="lazy"
                                            className="related-post-image"
                                        />
                                        {post.featured && (
                                            <Badge bg="primary" className="featured-badge">
                                                Featured
                                            </Badge>
                                        )}
                                    </div>
                                    <Card.Body className="d-flex flex-column">
                                        <Badge bg="primary" className="mb-2 align-self-start category-badge">
                                            {post.category}
                                        </Badge>
                                        <Card.Title className="related-post-title">
                                            {post.title}
                                        </Card.Title>
                                        <Card.Text className="related-post-excerpt text-muted small">
                                            {post.excerpt.slice(0, 160)}...
                                        </Card.Text>
                                        <div className="mt-auto pt-2">
                                            <small className="text-muted d-flex align-items-center gap-2 justify-content-between">
                                                <span className="d-flex align-items-center gap-1">
                                                    <BsCalendar3 />
                                                    {new Date(post.date).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                                <span className="d-flex align-items-center gap-1">
                                                    <BsClock />
                                                    {post.readTime}
                                                </span>
                                            </small>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section >
    );
};

export default RelatedPosts;
