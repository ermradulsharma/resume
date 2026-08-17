import React, { useEffect } from "react";
import { Row, Col, Pagination, Spinner } from "react-bootstrap";
import SEO from "../../../components/ui/SEO";
import "./Blogs.css";
import { useBlogPosts } from "../../../hooks/queries/useBlogData";
import { useBlogPagination } from "../../../hooks/ui/useBlogPagination";
import blogsData from "../../../data/blogs.json";
import seoData from "../../../data/seo.json";
import LetsConnect from "../../../features/home/LetsConnect";
import SectionHeader from "../../../components/ui/SectionHeader";
import Skeleton from "../../../components/ui/Skeleton/Skeleton";
import BlogSubscription from "../../../features/blog/BlogSubscription/BlogSubscription";
import BlogCard from "./BlogCard";
import BlogFilterHeader from "./BlogFilterHeader";
import { trackEvent } from "../../../utils/analytics/ga";

const Blogs = () => {
    const { title, description, categories } = blogsData.blogs;
    const { data: posts = [], isLoading } = useBlogPosts();
    const {
        selectedCategory, currentPage, viewMode, setViewMode,
        isLoadingMore, setIsLoadingMore, updateParams, currentPosts, totalPages
    } = useBlogPagination(posts, 16);

    const handleCategoryChange = (category) => {
        updateParams({ category, page: 1 });
        trackEvent({ action: "filter_blogs", category: "Engagement", label: category, value: 1 });
    };

    const handlePageChange = (pageNumber) => {
        updateParams({ page: pageNumber });
    };

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
    }, [viewMode, currentPage, totalPages, isLoadingMore, updateParams, setIsLoadingMore]);

    return (
        <section className="blogs-section section">
            <SEO
                title={seoData.blogsSeo.title}
                description={seoData.blogsSeo.description}
                keywords={seoData.blogsSeo.keywords}
                ogUrl={seoData.blogsSeo.ogUrl}
                canonicalUrl={seoData.blogsSeo.canonicalUrl}
                ogImage={seoData.blogsSeo.ogImage}
            />

            <div className="container py-5">
                <SectionHeader title={title} description={description} align="center" size="lg" />

                <BlogFilterHeader
                    categories={categories}
                    selectedCategory={selectedCategory}
                    handleCategoryChange={handleCategoryChange}
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                />

                {isLoading ? (
                    <Row className="g-4">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <Col lg={4} md={6} key={n}>
                                <Skeleton height="320px" className="w-100 rounded-4" />
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <Row className="g-4">
                        {currentPosts.map((post) => (
                            <BlogCard key={post.id} post={post} viewMode={viewMode} />
                        ))}
                    </Row>
                )}

                {isLoadingMore && (
                    <div className="text-center py-4">
                        <Spinner animation="border" variant="primary" role="status">
                            <span className="visually-hidden">Loading more blogs...</span>
                        </Spinner>
                    </div>
                )}

                {viewMode === "grid" && totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-5">
                        <Pagination className="custom-pagination">
                            <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                            {[...Array(totalPages)].map((_, index) => (
                                <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
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
