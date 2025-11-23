import React from "react";
import useSEO from "../../../hooks/useSEO";
import "../Blogs/Blogs.css";

const Blogs = () => {
    useSEO({
        title: "Blog - Tech Insights by Mradul Sharma | Web Development Tutorials",
        description: "Read articles and tutorials on web development, Laravel, React, AWS, best practices, and modern development techniques. Learn from real-world experiences and technical insights.",
        keywords: "Full Stack Development Blog, Web Development Tutorials, Laravel Best Practices, React Development Tips, AWS Cloud Tutorials, Coding Best Practices, Backend Development Guides, Frontend Development Tips, Database Optimization Tutorials, DevOps Insights, Developer Resources, Programming Articles, Software Engineering Blog, Technical Writing, Code Examples",
        ogUrl: "https://mradulsharma.vercel.app/blogs",
        canonicalUrl: "https://mradulsharma.vercel.app/blogs"
    });

    const blogs = [
        {
            id: 1,
            title: "Getting Started with React",
            excerpt: "Learn the basics of React and how to build your first component.",
            date: "October 10, 2023",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Understanding Hooks",
            excerpt: "Deep dive into React Hooks: useState, useEffect, and more.",
            date: "November 5, 2023",
            image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "CSS Grid vs Flexbox",
            excerpt: "When to use Grid and when to use Flexbox for your layouts.",
            date: "December 12, 2023",
            image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "The Future of Web Development",
            excerpt: "Trends to watch out for in 2024 and beyond.",
            date: "January 15, 2024",
            image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop"
        }
    ];

    return (
        <section className="blogs-section section">
            <div className="container">
                <div className="section-title text-start mb-5">
                    <h2>Latest Blogs</h2>
                    <p>Check out my latest articles and tutorials.</p>
                </div>
                <div className="row">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="blog-card h-100 shadow-sm">
                                <div className="blog-img-wrapper">
                                    <img src={blog.image} alt={blog.title} className="img-fluid blog-img" />
                                </div>
                                <div className="blog-content p-4">
                                    <span className="text-muted small">{blog.date}</span>
                                    <h5 className="mt-2 mb-3 fw-bold">{blog.title}</h5>
                                    <p className="text-muted">{blog.excerpt}</p>
                                    <button className="btn btn-primary btn-sm mt-2">Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Blogs;
