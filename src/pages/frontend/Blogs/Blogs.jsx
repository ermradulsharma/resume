import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Button, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import useSEO from "../../../hooks/useSEO";
import "../Blogs/Blogs.css";
import blogsData from "../../../components/database/blogs.json";

const Blogs = () => {
    useSEO({
        title: "Blog | Mradul Sharma - Web Dev Tutorials",
        description: "Read articles and tutorials on web development, Laravel, React, AWS, best practices, and modern development techniques. Learn from real-world experiences and technical insights.",
        keywords: "Full Stack Development Blog, Web Development Tutorials, Laravel Best Practices, React Development Tips, AWS Cloud Tutorials, Coding Best Practices, Backend Development Guides, Frontend Development Tips, Database Optimization Tutorials, DevOps Insights, Developer Resources, Programming Articles, Software Engineering Blog, Technical Writing, Code Examples",
        ogUrl: "https://mradulsharma.vercel.app/blogs",
        canonicalUrl: "https://mradulsharma.vercel.app/blogs"
    });

    const { title, description, posts, categories } = blogsData.blogs;

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    // Filter posts by category
    const filteredPosts = selectedCategory === "All"
        ? posts.filter(post => post.published)
        : posts.filter(post => post.published && post.category === selectedCategory);

    // Pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    // Reset to page 1 when category changes
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    return (
        <section className="blogs-section section">
            <div className="container">
                <div className="section-title text-start mb-5">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>

                {/* Category Filter */}
                <div className="mb-4 d-flex flex-wrap gap-2">
                    <Button
                        variant={selectedCategory === "All" ? "primary" : "outline-primary"}
                        size="sm"
                        onClick={() => handleCategoryChange("All")}
                    >
                        All Posts
                    </Button>
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "primary" : "outline-primary"}
                            size="sm"
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Blog Posts Grid */}
                <Row className="g-4">
                    {currentPosts.map((post) => (
                        <Col key={post.id} lg={4} md={6}>
                            <Card className="h-100 blog-card shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={post.image}
                                    alt={post.title}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <Card.Body className="d-flex flex-column">
                                    <div className="mb-2">
                                        <Badge bg="primary" className="me-2">{post.category}</Badge>
                                        {post.featured && <Badge bg="success">Featured</Badge>}
                                    </div>
                                    <Card.Title className="h5">{post.title}</Card.Title>
                                    <Card.Text className="text-muted small mb-2">
                                        {post.date} • {post.readTime}
                                    </Card.Text>
                                    <Card.Text>{post.excerpt}</Card.Text>
                                    <div className="mt-auto">
                                        <div className="d-flex flex-wrap gap-1 mb-3">
                                            {post.tags.slice(0, 3).map((tag, index) => (
                                                <Badge key={index} bg="secondary" className="text-white">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        <Link to={`/blogs/${post.slug}`} className="btn btn-outline-primary btn-sm">
                                            Read More →
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* No Posts Message */}
                {currentPosts.length === 0 && (
                    <div className="text-center py-5">
                        <p className="text-muted">No posts found in this category.</p>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-5">
                        <Pagination>
                            <Pagination.Prev
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                            />
                            {[...Array(totalPages)].map((_, index) => (
                                <Pagination.Item
                                    key={index + 1}
                                    active={index + 1 === currentPage}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                            />
                        </Pagination>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blogs;
