import React from "react";
import { Container } from "react-bootstrap";
import { BsCalendar3, BsClock } from "react-icons/bs";
import blogsData from "../../database/blogs.json";
import "./LatestBlogs.css";
import UniversalCard from "../../common/UniversalCard/UniversalCard";

import SectionHeader from "../../common/SectionHeader";

const LatestBlogs = ({ maxPosts = 4 }) => {
    const latestPosts = blogsData.blogs.posts
        .filter(post => post.published)
        .sort((a, b) => b.id - a.id)
        .slice(0, maxPosts);

    if (latestPosts.length === 0) return null;

    return (
        <Container className="latestBlogs section" id="latestBlogs" data-aos="fade-up" data-aos-delay="100">
            <SectionHeader title="Latest from the Blog" description="Stay ahead of the curve with my latest insights, tutorials, and deep dives into modern web development. From mastering Laravel and React to exploring cloud architecture and industry best practices, my blog is dedicated to sharing knowledge that empowers developers to build better, more scalable applications." linkTo="/blogs" linkText="View All Posts" />
            <div className="latest-blogs-grid">
                {latestPosts.map((post, idx) => (
                    <div key={post.id} data-aos="fade-up" data-aos-delay={idx * 100}>
                        <UniversalCard image={post.image} title={post.title} link={`/blogs/${post.slug}`} description={post.excerpt.length > 160 ? `${post.excerpt.substring(0, 160)}...` : post.excerpt} badge={{ text: post.category, bg: "info-subtle", color: "var(--info-color)" }} tags={post.featured ? ["Featured"] : []} meta={[
                            { icon: <BsCalendar3 />, text: new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) },
                            { icon: <BsClock />, text: post.readTime }
                        ]} overlayText="Read Post" className="h-100" imageHeight="240px" />
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default LatestBlogs;
