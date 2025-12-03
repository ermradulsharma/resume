import React, { useState, useEffect } from "react";
import { Row, Col, Card, Badge, Button, Pagination, Spinner, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsGrid3X3Gap, BsList, BsCalendar3, BsPerson } from "react-icons/bs";
import useSEO from "../../../hooks/useSEO";
import "../Blogs/Blogs.css";
import blogsData from "../../../components/database/blogs.json";
import LetsConnect from "../../../components/LetsConnect";

const Blogs = () => {
    useSEO({
        title: "Blog | Mradul Sharma - Web Dev Tutorials",
        description: "Read articles and tutorials on web development, Laravel, React, AWS, best practices, and modern development techniques. Learn from real-world experiences and technical insights.",
        keywords: blogsData.blogs.tags ? blogsData.blogs.tags.join(", ") : "web development, programming, tutorials",
        ogUrl: "https://mradulsharma.vercel.app/blogs",
        canonicalUrl: "https://mradulsharma.vercel.app/blogs"
    });
    const { title, description, posts, categories } = blogsData.blogs;

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [viewMode, setViewMode] = useState("grid");
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const postsPerPage = 16;

    const filteredPosts = selectedCategory === "All" ? posts.filter(post => post.published) : posts.filter(post => post.published && post.category === selectedCategory);
    filteredPosts.sort((a, b) => b.id - a.id);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    useEffect(() => {
        if (viewMode !== "list") return;

        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const bottomPosition = document.documentElement.scrollHeight - 300;

            if (scrollPosition >= bottomPosition && !isLoadingMore && currentPage < totalPages) {
                setIsLoadingMore(true);
                setTimeout(() => {
                    setCurrentPage(prev => prev + 1);
                    setIsLoadingMore(false);
                }, 500);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [viewMode, currentPage, totalPages, isLoadingMore]);

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

        if (diffInSeconds < 60) {
            return diffInSeconds === 1 ? "1 second ago" : `${diffInSeconds} seconds ago`;
        }

        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) {
            return diffInMinutes === 1 ? "1 minute ago" : `${diffInMinutes} minutes ago`;
        }

        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) {
            return diffInHours === 1 ? "1 hour ago" : `${diffInHours} hours ago`;
        }

        return diffInDays === 1 ? "1 day ago" : `${diffInDays} days ago`;
    };

    return (
        <section className="blogs-section section">
            <div className="blog-hero text-white d-flex align-items-center justify-content-center text-center">
                <div className="overlay"></div>
            </div>

            <div className="container mt-5">
                <div className="section-title text-start">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>

                <div className="mb-4 d-flex flex-wrap gap-2 align-items-center justify-content-between">
                    <div className="d-none d-md-flex flex-wrap gap-2 category-filter-wrapper">
                        <Button variant={selectedCategory === "All" ? "success" : "outline-secondary"} size="sm" onClick={() => handleCategoryChange("All")}>All Posts</Button>
                        {categories.map((category) => (
                            <Button key={category} variant={selectedCategory === category ? "success" : "outline-secondary"} size="sm" onClick={() => handleCategoryChange(category)}>{category}</Button>
                        ))}
                    </div>

                    <div className="d-md-none mobile-category-dropdown-wrapper">
                        <Form.Select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)} className="mobile-category-dropdown">
                            <option value="All">All Posts</option>
                            {categories.map((category) => (<option key={category} value={category}>{category}</option>))}
                        </Form.Select>
                    </div>

                    <div className="view-toggle-buttons d-flex gap-2 m-0">
                        <Button variant={viewMode === "grid" ? "success" : "outline-secondary"} size="sm" onClick={() => setViewMode("grid")} className="d-flex align-items-center p-2" aria-label="Grid View"><BsGrid3X3Gap /></Button>
                        <Button variant={viewMode === "list" ? "success" : "outline-secondary"} size="sm" onClick={() => setViewMode("list")} className="d-flex align-items-center p-2" aria-label="List View"><BsList /></Button>
                    </div>
                </div>

                {viewMode === "grid" && (
                    <div className="blog-grid-container">
                        {currentPosts.map((post) => (
                            <Card key={post.id} className="blog-card blog-card-grid shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={post.image}
                                    alt={post.title}
                                    loading="lazy"
                                    width="100%"
                                    height="200"
                                    style={{ objectFit: 'cover' }}
                                />
                                <Card.Body className="d-flex flex-column p-2">
                                    <div className="mb-2">
                                        <Badge bg="info" className="me-2">{post.category}</Badge>
                                        {post.featured && <Badge bg="success">Featured</Badge>}
                                    </div>
                                    <Card.Title className="h5" as="h2">{post.title}</Card.Title>
                                    <Card.Text className="text-secondary small mb-2 d-flex align-items-center justify-content-between">
                                        <span className="d-flex align-items-center gap-1"><BsCalendar3 /> {getRelativeTime(post.date)}</span>
                                        <span className="d-flex align-items-center gap-1"><BsPerson /> {post.author}</span>
                                    </Card.Text>
                                    <Card.Text>{post.excerpt}</Card.Text>
                                    <div className="mt-auto">
                                        <div className="d-flex flex-wrap gap-1 mb-3">
                                            {post.tags.slice(0, 3).map((tag, index) => (<Badge key={index} bg="success-subtle" className="text-black"> {tag} </Badge>))}
                                        </div>
                                        <Link to={`/blogs/${post.slug}`} className="btn btn-success btn-sm" style={{ float: 'right' }}>Read More → </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                )}

                {viewMode === "list" && (
                    <div className="blog-list-container d-grid gap-3">
                        {currentPosts.map((post) => (
                            <Card key={post.id} className="blog-card blog-card-list shadow-sm">
                                <Row className="g-0">
                                    <Col md={4} lg={3}>
                                        <div className="blog-list-image-wrapper">
                                            <Card.Img
                                                src={post.image}
                                                alt={post.title}
                                                className="blog-list-image rounded-0"
                                                loading="lazy"
                                                width="100%"
                                                height="100%"
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </Col>
                                    <Col md={8} lg={9}>
                                        <Card.Body className="d-flex flex-column">
                                            <div className="d-flex gap-2">
                                                <Badge bg="info">{post.category}</Badge>
                                                {post.featured && <Badge bg="success">Featured</Badge>}
                                            </div>
                                            <Card.Title className="h4 my-1" as="h2">{post.title}</Card.Title>
                                            <Card.Text className="text-secondary small d-flex align-items-center gap-2 mb-1">
                                                <span className="d-flex align-items-center gap-1"><BsCalendar3 /> {getRelativeTime(post.date)}</span>
                                                <span className="d-flex align-items-center gap-1"><BsPerson /> {post.author}</span>
                                            </Card.Text>
                                            <Card.Text className="blog-list-excerpt">{post.excerpt}</Card.Text>
                                            <div className="mt-0">
                                                <div className="d-flex flex-wrap gap-1 mb-3">
                                                    {post.tags.map((tag, index) => (
                                                        <Badge key={index} bg="success-subtle" className="text-black"> {tag} </Badge>
                                                    ))}
                                                </div>
                                                <Link to={`/blogs/${post.slug}`} className="btn btn-success btn-sm">Read Full Article → </Link>
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
                                <p className="text-secondary mt-2">Loading more posts...</p>
                            </div>
                        )}

                        {/* End of Posts Message */}
                        {currentPage >= totalPages && !isLoadingMore && (
                            <div className="text-center py-4">
                                <p className="text-secondary">You've reached the end of the posts!</p>
                            </div>
                        )}
                    </div>
                )}

                {currentPosts.length === 0 && (
                    <div className="text-center py-5">
                        <p className="text-secondary">No posts found in this category.</p>
                    </div>
                )}

                {viewMode === "grid" && totalPages > 1 && (
                    <div className="d-flex justify-content-center my-3 align-items-center">
                        <Pagination className="m-0">
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
