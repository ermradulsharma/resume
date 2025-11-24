import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge, Button, Pagination, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsGrid3X3Gap, BsList, BsCalendar3, BsClock, BsPerson } from "react-icons/bs";
import useSEO from "../../../hooks/useSEO";
import "../Blogs/Blogs.css";
import blogsData from "../../../components/database/blogs.json";
import LetsConnect from "../../../components/LetsConnect";

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
    const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const postsPerPage = 16;

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

    // Infinite scroll for list view
    useEffect(() => {
        if (viewMode !== "list") return;

        const handleScroll = () => {
            // Check if user is near bottom of page (within 300px)
            const scrollPosition = window.innerHeight + window.scrollY;
            const bottomPosition = document.documentElement.scrollHeight - 300;

            if (scrollPosition >= bottomPosition && !isLoadingMore && currentPage < totalPages) {
                setIsLoadingMore(true);
                // Simulate loading delay for smooth UX
                setTimeout(() => {
                    setCurrentPage(prev => prev + 1);
                    setIsLoadingMore(false);
                }, 500);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [viewMode, currentPage, totalPages, isLoadingMore]);

    // Calculate relative time (e.g., "2 hours ago", "3 days ago")
    const getRelativeTime = (dateString) => {
        const postDate = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now - postDate) / 1000);

        if (diffInSeconds < 60) {
            return diffInSeconds === 1 ? '1 second ago' : `${diffInSeconds} seconds ago`;
        }

        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) {
            return diffInMinutes === 1 ? '1 minute ago' : `${diffInMinutes} minutes ago`;
        }

        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) {
            return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`;
        }

        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays < 30) {
            return diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`;
        }

        const diffInMonths = Math.floor(diffInDays / 30);
        if (diffInMonths < 12) {
            return diffInMonths === 1 ? '1 month ago' : `${diffInMonths} months ago`;
        }

        const diffInYears = Math.floor(diffInMonths / 12);
        return diffInYears === 1 ? '1 year ago' : `${diffInYears} years ago`;
    };

    return (
        <section className="blogs-section section">
            <div className="container">
                <div className="section-title text-start">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>

                {/* Category Filter and View Toggle */}
                <div className="mb-4 d-flex flex-wrap gap-2 align-items-center justify-content-between">
                    <div className="d-flex flex-wrap gap-2 category-filter-wrapper">
                        <Button variant={selectedCategory === "All" ? "primary" : "outline-primary"} onClick={() => handleCategoryChange("All")}>All Posts</Button>
                        {categories.map((category) => (
                            <Button key={category} variant={selectedCategory === category ? "primary" : "outline-primary"} onClick={() => handleCategoryChange(category)}>{category}</Button>
                        ))}
                    </div>

                    {/* View Toggle Buttons */}
                    <div className="view-toggle-buttons d-flex gap-2">
                        <Button variant={viewMode === "grid" ? "primary" : "outline-secondary"} onClick={() => setViewMode("grid")} className="d-flex align-items-center p-2"><BsGrid3X3Gap /></Button>
                        <Button variant={viewMode === "list" ? "primary" : "outline-secondary"} onClick={() => setViewMode("list")} className="d-flex align-items-center p-2"><BsList /></Button>
                    </div>
                </div>

                {/* Blog Posts - Grid View */}
                {viewMode === "grid" && (
                    <div className="blog-grid-container">
                        {currentPosts.map((post) => (
                            <Card key={post.id} className="blog-card blog-card-grid shadow-sm">
                                <Card.Img variant="top" src={post.image} alt={post.title} loading="lazy" />
                                <Card.Body className="d-flex flex-column">
                                    <div className="mb-2">
                                        <Badge bg="primary" className="me-2">{post.category}</Badge>
                                        {post.featured && <Badge bg="success">Featured</Badge>}
                                    </div>
                                    <Card.Title className="h5">{post.title}</Card.Title>
                                    <Card.Text className="text-muted small mb-2 d-flex align-items-center justify-content-between">
                                        <span className="d-flex align-items-center gap-1"><BsCalendar3 /> {getRelativeTime(post.date)}</span>
                                        <span className="d-flex align-items-center gap-1"><BsPerson /> {post.author}</span>
                                    </Card.Text>
                                    <Card.Text>{post.excerpt}</Card.Text>
                                    <div className="mt-auto">
                                        <div className="d-flex flex-wrap gap-1 mb-3">
                                            {post.tags.slice(0, 3).map((tag, index) => (
                                                <Badge key={index} bg="secondary" className="text-white"> {tag} </Badge>
                                            ))}
                                        </div>
                                        <Link to={`/blogs/${post.slug}`} className="btn btn-outline-primary btn-sm">Read More → </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                )}

                {/* Blog Posts - List View */}
                {viewMode === "list" && (
                    <div className="blog-list-container">
                        {currentPosts.map((post) => (
                            <Card key={post.id} className="blog-card blog-card-list shadow-sm mb-4">
                                <Row className="g-0">
                                    <Col md={4} lg={3}>
                                        <div className="blog-list-image-wrapper">
                                            <Card.Img src={post.image} alt={post.title} className="blog-list-image" loading="lazy" />
                                        </div>
                                    </Col>
                                    <Col md={8} lg={9}>
                                        <Card.Body className="d-flex flex-column h-100">
                                            <div className="mb-2">
                                                <Badge bg="primary" className="me-2">{post.category}</Badge>
                                                {post.featured && <Badge bg="success">Featured</Badge>}
                                            </div>
                                            <Card.Title className="h4">{post.title}</Card.Title>
                                            <Card.Text className="text-muted small d-flex align-items-center gap-2">
                                                <span className="d-flex align-items-center gap-1"><BsCalendar3 /> {getRelativeTime(post.date)}</span>
                                                <span className="d-flex align-items-center gap-1"><BsPerson /> {post.author}</span>
                                            </Card.Text>
                                            <Card.Text className="blog-list-excerpt">{post.excerpt}</Card.Text>
                                            <div className="mt-auto">
                                                <div className="d-flex flex-wrap gap-1 mb-3">
                                                    {post.tags.map((tag, index) => (
                                                        <Badge key={index} bg="secondary" className="text-white"> {tag} </Badge>
                                                    ))}
                                                </div>
                                                <Link to={`/blogs/${post.slug}`} className="btn btn-primary">Read Full Article → </Link>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        ))}

                        {/* Loading Indicator for Infinite Scroll */}
                        {isLoadingMore && (
                            <div className="text-center py-4">
                                <Spinner animation="border" variant="primary" />
                                <p className="text-muted mt-2">Loading more posts...</p>
                            </div>
                        )}

                        {/* End of Posts Message */}
                        {currentPage >= totalPages && !isLoadingMore && (
                            <div className="text-center py-4">
                                <p className="text-muted">You've reached the end of the posts!</p>
                            </div>
                        )}
                    </div>
                )}

                {/* No Posts Message */}
                {currentPosts.length === 0 && (
                    <div className="text-center py-5">
                        <p className="text-muted">No posts found in this category.</p>
                    </div>
                )}

                {/* Pagination - Only show in Grid View */}
                {viewMode === "grid" && totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-5">
                        <Pagination>
                            <Pagination.Prev onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} />
                            {[...Array(totalPages)].map((_, index) => (
                                <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)} >{index + 1}</Pagination.Item>
                            ))}
                            <Pagination.Next onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} />
                        </Pagination>
                    </div>
                )}
            </div>
            <LetsConnect />
        </section>
    );
};

export default Blogs;
