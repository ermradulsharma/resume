import React, { useState, useEffect, useCallback } from "react";
import { Row, Col, Card, Badge, Pagination, Spinner, Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { BsGrid3X3Gap, BsList, BsCalendar3, BsPerson } from "react-icons/bs";
import SEO from "../../../components/common/SEO";
import "../Blogs/Blogs.css";
import blogsData from "../../../components/database/blogs.json";
import seoData from "../../../components/database/seo.json";
import LetsConnect from "../../../components/LetsConnect";
import SectionHeader from "../../../components/common/SectionHeader";
import BrandButton from "../../../components/common/BrandButton";
import Skeleton from "../../../components/common/Skeleton/Skeleton";
import BlogSubscription from "../../../components/frontend/BlogSubscription/BlogSubscription";
import UniversalCard from "../../../components/common/UniversalCard/UniversalCard";

const Blogs = () => {
    const { title, description, posts, categories } = blogsData.blogs;
    const [searchParams, setSearchParams] = useSearchParams();
    const [isInitialLoading, setIsInitialLoading] = useState(true);

    // Derive state from URL params
    const selectedCategory = searchParams.get("category") || "All";
    const currentPage = parseInt(searchParams.get("page") || "1", 10);

    const [viewMode, setViewMode] = useState("grid");
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const postsPerPage = 16;

    const filteredPosts = selectedCategory === "All" ? posts.filter(post => post.published) : posts.filter(post => post.published && post.category === selectedCategory);
    filteredPosts.sort((a, b) => b.id - a.id);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const updateParams = useCallback((newParams) => {
        setSearchParams({ category: selectedCategory, page: currentPage, ...newParams });
        window.scrollTo(0, 0);
    }, [selectedCategory, currentPage, setSearchParams]);

    const handleCategoryChange = (category) => {
        updateParams({ category, page: 1 });
    };

    const handlePageChange = (pageNumber) => {
        updateParams({ page: pageNumber });
    };

    useEffect(() => {
        setIsInitialLoading(true);
        const timer = setTimeout(() => {
            setIsInitialLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [selectedCategory]);

    useEffect(() => {
        if (viewMode !== "list") return;

        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const bottomPosition = document.documentElement.scrollHeight - 300;

            if (scrollPosition >= bottomPosition && !isLoadingMore && currentPage < totalPages) {
                setIsLoadingMore(true);
                setTimeout(() => {
                    updateParams({ page: currentPage + 1 });
                    setIsLoadingMore(false);
                }, 500);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [viewMode, currentPage, totalPages, isLoadingMore, updateParams]);

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

    const getCanonicalUrl = () => {
        const baseUrl = "https://mradulsharma.vercel.app/blogs";
        const params = new URLSearchParams();
        if (selectedCategory !== "All") params.set("category", selectedCategory);
        if (currentPage > 1) params.set("page", currentPage);
        const query = params.toString();
        return query ? `${baseUrl}?${query}` : baseUrl;
    };

    const getPrevUrl = () => {
        if (currentPage <= 1) return null;
        const baseUrl = "https://mradulsharma.vercel.app/blogs";
        const params = new URLSearchParams();
        if (selectedCategory !== "All") params.set("category", selectedCategory);
        if (currentPage > 2) params.set("page", currentPage - 1);
        const query = params.toString();
        return query ? `${baseUrl}?${query}` : baseUrl;
    };

    const getNextUrl = () => {
        if (currentPage >= totalPages) return null;
        const baseUrl = "https://mradulsharma.vercel.app/blogs";
        const params = new URLSearchParams();
        if (selectedCategory !== "All") params.set("category", selectedCategory);
        params.set("page", currentPage + 1);
        const query = params.toString();
        return `${baseUrl}?${query}`;
    };

    return (
        <section className="blogs-section section">
            <SEO
                title={seoData.blogsSeo.title}
                description={seoData.blogsSeo.description}
                keywords={seoData.blogsSeo.keywords}
                ogUrl={seoData.blogsSeo.ogUrl}
                canonicalUrl={seoData.blogsSeo.canonicalUrl}
                ogImage={seoData.blogsSeo.ogImage}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": seoData.blogsSeo.title,
                    "image": seoData.blogsSeo.ogImage,
                    "author": {
                        "@type": "Person",
                        "name": "Mradul Sharma"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Mradul Sharma",
                        "logo": {
                            "@type": "ImageObject",
                            "url": seoData.blogsSeo.ogImage
                        }
                    },
                    "datePublished": "",
                    "description": seoData.blogsSeo.description,
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://mradulsharma.vercel.app`
                    }
                }}
            />
            <div className="blog-hero text-white d-flex align-items-center justify-content-center text-center">
                <div className="overlay"></div>
            </div>

            <div className="container">
                <SectionHeader title={title} description={description} className=" pt-4 px-3" level="h1" />
                <div className="mb-4 d-flex flex-wrap gap-2 align-items-center justify-content-between">
                    <div className="d-none d-md-flex flex-wrap gap-2 category-filter-wrapper">
                        <BrandButton variant={selectedCategory === "All" ? "brand" : "brand-outline"} size="sm" onClick={() => handleCategoryChange("All")}>All Posts</BrandButton>
                        {categories.map((category) => (
                            <BrandButton key={category} variant={selectedCategory === category ? "brand" : "brand-outline"} size="sm" onClick={() => handleCategoryChange(category)}>{category}</BrandButton>
                        ))}
                    </div>

                    <div className="d-md-none mobile-category-dropdown-wrapper">
                        <Form.Select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)} className="mobile-category-dropdown">
                            <option value="All">All Posts</option>
                            {categories.map((category) => (<option key={category} value={category}>{category}</option>))}
                        </Form.Select>
                    </div>

                    <div className="view-toggle-buttons d-flex gap-2 m-0">
                        <BrandButton variant={viewMode === "grid" ? "brand" : "brand-outline"} size="sm" onClick={() => setViewMode("grid")} aria-label="Grid View"><BsGrid3X3Gap /></BrandButton>
                        <BrandButton variant={viewMode === "list" ? "brand" : "brand-outline"} size="sm" onClick={() => setViewMode("list")} aria-label="List View"><BsList /></BrandButton>
                    </div>
                </div>

                {viewMode === "grid" && (
                    <div className="blog-grid-container">
                        {isInitialLoading ? (
                            [...Array(postsPerPage)].map((_, index) => (
                                <Card key={`skeleton-grid-${index}`} className="blog-card blog-card-grid shadow-sm border-0">
                                    <Skeleton height="200px" borderRadius="0" />
                                    <Card.Body className="p-2 d-flex flex-column">
                                        <Skeleton width="40%" height="16px" className="mb-2" />
                                        <Skeleton width="100%" height="24px" className="mb-3" />
                                        <div className="d-flex justify-content-between mb-3">
                                            <Skeleton width="30%" height="16px" />
                                            <Skeleton width="30%" height="16px" />
                                        </div>
                                        <Skeleton width="100%" height="40px" className="mb-3" />
                                        <div className="mt-auto">
                                            <div className="d-flex gap-1 mb-3">
                                                <Skeleton width="50px" height="20px" />
                                                <Skeleton width="50px" height="20px" />
                                            </div>
                                            <Skeleton width="100px" height="32px" className="ms-auto" />
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))
                        ) : (
                            currentPosts.map((post) => (
                                <UniversalCard key={post.id} image={post.image} title={post.title} link={`/blogs/${post.slug}`} description={post.excerpt} badge={{ text: post.featured ? "Featured" : null, bg: "primary", color: "white" }} tags={post.tags.slice(0, 3)} meta={[
                                    { icon: <BsCalendar3 />, text: getRelativeTime(post.date) },
                                    { icon: <BsPerson />, text: post.author }
                                ]} overlayText="Read Article" className="h-100" imageHeight="200px" />
                            ))
                        )}
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
                                                {post.featured && <Badge bg="primary">Featured</Badge>}
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
                                                        <Badge key={index} bg="primary-subtle" className="border border-primary-subtle" style={{ color: 'var(--primary-color)' }}> {tag} </Badge>
                                                    ))}
                                                </div>
                                                <BrandButton to={`/blogs/${post.slug}`} size="sm" withArrow>Read Full Article</BrandButton>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        ))}

                        {isLoadingMore && (
                            <div className="text-center py-4">
                                <Spinner animation="border" variant="primary" />
                                <p className="text-secondary mt-2">Loading more posts...</p>
                            </div>
                        )}

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
                            <Pagination.Prev
                                href={`?category=${selectedCategory}&page=${Math.max(currentPage - 1, 1)}`}
                                onClick={(e) => { e.preventDefault(); handlePageChange(Math.max(currentPage - 1, 1)); }}
                                disabled={currentPage === 1}
                            />
                            {[...Array(totalPages)].map((_, index) => (
                                <Pagination.Item
                                    key={index + 1}
                                    active={index + 1 === currentPage}
                                    href={`?category=${selectedCategory}&page=${index + 1}`}
                                    onClick={(e) => { e.preventDefault(); handlePageChange(index + 1); }}
                                >
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next
                                href={`?category=${selectedCategory}&page=${Math.min(currentPage + 1, totalPages)}`}
                                onClick={(e) => { e.preventDefault(); handlePageChange(Math.min(currentPage + 1, totalPages)); }}
                                disabled={currentPage === totalPages}
                            />
                        </Pagination>
                    </div>
                )}
            </div>
            <BlogSubscription />
            <LetsConnect />
        </section>
    );
};

export default Blogs;
