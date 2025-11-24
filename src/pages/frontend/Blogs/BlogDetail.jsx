import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { BsArrowLeft, BsClock, BsCalendar, BsTag } from "react-icons/bs";
import useSEO from "../../../hooks/useSEO";
import blogsData from "../../../components/database/blogs.json";
import "./Blogs.css";

const BlogDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Find the blog post by slug
    const post = blogsData.blogs.posts.find(p => p.slug === slug);

    // Set SEO (must be called before any conditional returns)
    useSEO({
        title: post ? `${post.title} | Mradul Sharma Blog` : "Blog Post | Mradul Sharma",
        description: post ? post.excerpt : "Read technical articles and tutorials on web development.",
        keywords: post ? post.tags.join(", ") : "web development, programming, tutorials",
        ogUrl: post ? `https://mradulsharma.vercel.app/blogs/${post.slug}` : "https://mradulsharma.vercel.app/blogs",
        canonicalUrl: post ? `https://mradulsharma.vercel.app/blogs/${post.slug}` : "https://mradulsharma.vercel.app/blogs",
        ogImage: post ? post.image : "https://mradulsharma.vercel.app/preview.png"
    });

    // If post not found, show error
    if (!post) {
        return (
            <Container className="py-5">
                <div className="text-center">
                    <h1>Blog Post Not Found</h1>
                    <p className="text-muted">The blog post you're looking for doesn't exist.</p>
                    <Button variant="primary" onClick={() => navigate('/blogs')}>
                        Back to Blogs
                    </Button>
                </div>
            </Container>
        );
    }

    // Get related posts (same category, excluding current post)
    const relatedPosts = blogsData.blogs.posts
        .filter(p => p.category === post.category && p.id !== post.id && p.published)
        .slice(0, 3);

    return (
        <article className="blog-detail-page section">
            {/* Hero Section with Featured Image */}
            <div className="blog-hero" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${post.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                color: 'white'
            }}>
                <Container>
                    <Button
                        variant="outline-light"
                        size="sm"
                        className="mb-3"
                        onClick={() => navigate('/blogs')}
                    >
                        <BsArrowLeft className="me-2" />
                        Back to Blogs
                    </Button>
                    <Badge bg="primary" className="mb-3">{post.category}</Badge>
                    {post.featured && <Badge bg="success" className="ms-2 mb-3">Featured</Badge>}
                    <h1 className="display-4 fw-bold mb-3">{post.title}</h1>
                    <div className="d-flex flex-wrap gap-3 text-white-50">
                        <span><BsCalendar className="me-2" />{post.date}</span>
                        <span><BsClock className="me-2" />{post.readTime}</span>
                        <span>By {post.author}</span>
                    </div>
                </Container>
            </div>

            {/* Blog Content */}
            <Container className="py-5">
                <Row>
                    <Col lg={8} className="mx-auto">
                        {/* Excerpt */}
                        <div className="lead text-muted mb-4 p-4 bg-light rounded">
                            {post.excerpt}
                        </div>

                        {/* Main Content */}
                        <div className="blog-content mb-5">
                            {post.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="mb-4" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Tags */}
                        <div className="mb-5">
                            <h5 className="mb-3"><BsTag className="me-2" />Tags</h5>
                            <div className="d-flex flex-wrap gap-2">
                                {post.tags.map((tag, index) => (
                                    <Badge key={index} bg="secondary" className="px-3 py-2">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Author Info */}
                        <div className="p-4 bg-light rounded mb-5">
                            <h5 className="mb-3">About the Author</h5>
                            <div className="d-flex align-items-center">
                                <div className="me-3">
                                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                                        style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                                        MS
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-1">{post.author}</h6>
                                    <p className="text-muted mb-0">
                                        Senior Full-Stack Developer specializing in Laravel, React, Node.js, and AWS.
                                        Passionate about building scalable applications and sharing knowledge.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Related Posts */}
                        {relatedPosts.length > 0 && (
                            <div>
                                <h4 className="mb-4">Related Articles</h4>
                                <Row className="g-4">
                                    {relatedPosts.map((relatedPost) => (
                                        <Col key={relatedPost.id} md={4}>
                                            <div
                                                className="card h-100 blog-card shadow-sm cursor-pointer"
                                                onClick={() => navigate(`/blogs/${relatedPost.slug}`)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <img
                                                    src={relatedPost.image}
                                                    alt={relatedPost.title}
                                                    className="card-img-top"
                                                    style={{ height: '150px', objectFit: 'cover' }}
                                                />
                                                <div className="card-body">
                                                    <Badge bg="primary" className="mb-2">{relatedPost.category}</Badge>
                                                    <h6 className="card-title">{relatedPost.title}</h6>
                                                    <p className="card-text small text-muted">{relatedPost.readTime}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </article>
    );
};

export default BlogDetail;
