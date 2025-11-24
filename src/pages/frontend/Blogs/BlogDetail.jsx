import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Badge, Button } from "react-bootstrap";
import { BsArrowLeft, BsClock, BsCalendar3, BsTag, BsPerson } from "react-icons/bs";
import useSEO from "../../../hooks/useSEO";
import blogsData from "../../../components/database/blogs.json";
import "./Blogs.css";
import "./BlogDetail.css";
import LetsConnect from "../../../components/LetsConnect";

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

    // Calculate relative time
    const getRelativeTime = (dateString) => {
        const postDate = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now - postDate) / 1000);

        if (diffInSeconds < 60) return diffInSeconds === 1 ? '1 second ago' : `${diffInSeconds} seconds ago`;
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) return diffInMinutes === 1 ? '1 minute ago' : `${diffInMinutes} minutes ago`;
        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`;
        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays < 30) return diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`;
        const diffInMonths = Math.floor(diffInDays / 30);
        if (diffInMonths < 12) return diffInMonths === 1 ? '1 month ago' : `${diffInMonths} months ago`;
        const diffInYears = Math.floor(diffInMonths / 12);
        return diffInYears === 1 ? '1 year ago' : `${diffInYears} years ago`;
    };

    // If post not found, show error
    if (!post) {
        return (
            <Container className="py-5">
                <div className="text-center">
                    <h1>Blog Post Not Found</h1>
                    <p className="text-muted">The blog post you're looking for doesn't exist.</p>
                    <Button variant="primary" onClick={() => navigate('/blogs')}>Back to Blogs</Button>
                </div>
            </Container>
        );
    }

    // Get related posts (same category, excluding current post)
    const relatedPosts = blogsData.blogs.posts.filter(p => p.category === post.category && p.id !== post.id && p.published).slice(0, 5);

    return (
        <article className="blog-detail-page">
            {/* Hero Section with Featured Image */}
            <div className="blog-detail-hero" style={{ backgroundImage: `url(${post.image})` }}>
                <Container>
                    <Button variant="outline-light" size="sm" className="mb-3 back-button" onClick={() => navigate('/blogs')} ><BsArrowLeft className="me-2" />Back to Blogs</Button>
                    <div className="mb-3">
                        <Badge bg="primary">{post.category}</Badge>
                        {post.featured && <Badge bg="success" className="ms-2">Featured</Badge>}
                    </div>
                    <h1>{post.title}</h1>
                    <div className="blog-detail-meta">
                        <span><BsCalendar3 />{getRelativeTime(post.date)}</span>
                        <span><BsClock />{post.readTime}</span>
                        <span><BsPerson />By {post.author}</span>
                    </div>
                </Container>
            </div>

            {/* Blog Content */}
            <Container className="py-5">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-detail-content-wrapper">
                            {/* Excerpt */}
                            <div className="blog-detail-excerpt">{post.excerpt}</div>

                            {/* Main Content */}
                            <div className="blog-detail-content">{post.content.split('\n\n').map((paragraph, index) => (<p key={index}>{paragraph}</p>))}</div>

                            {/* Tags */}
                            <div className="blog-detail-tags">
                                <h5><BsTag className="me-2" />Tags</h5>
                                <div className="d-flex flex-wrap gap-2">{post.tags.map((tag, index) => (<Badge key={index} bg="secondary">{tag}</Badge>))}</div>
                            </div>

                            {/* Author Info */}
                            <div className="author-card">
                                <div className="d-flex align-items-center gap-2">
                                    <div>
                                        <div className="author-avatar">MS</div>
                                    </div>
                                    <div className="author-info">
                                        <h6>{post.author}</h6>
                                        <p>Senior Full-Stack Developer specializing in Laravel, React, Node.js, and AWS. Passionate about building scalable applications and sharing knowledge.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Related Posts */}
                    <div className="col-lg-4">
                        {relatedPosts.length > 0 && (
                            <div className="related-posts-sidebar">
                                <h5 className="sidebar-title">Related Articles</h5>
                                <div className="related-posts-list">
                                    {relatedPosts.map((relatedPost) => (
                                        <div key={relatedPost.id} className="related-post-sidebar-card" onClick={() => navigate(`/blogs/${relatedPost.slug}`)}>
                                            <img src={relatedPost.image} alt={relatedPost.title} loading="lazy" />
                                            <div className="card-content">
                                                <Badge bg="primary" className="mb-1">{relatedPost.category}</Badge>
                                                <h6 className="card-title">{relatedPost.title}</h6>
                                                <p className="card-text small text-muted">{relatedPost.readTime}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>

            <LetsConnect />
        </article>
    );
};

export default BlogDetail;
