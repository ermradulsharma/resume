import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import "../App.css";

// Lazy load components
const About = React.lazy(() => import("../pages/frontend/About/About"));
const Portfolio = React.lazy(() => import("../pages/frontend/Portfolio/Portfolio"));
const ProjectDetail = React.lazy(() => import("../pages/frontend/Portfolio/ProjectDetail")); // Added ProjectDetail lazy import
const Services = React.lazy(() => import("../pages/frontend/Services/Services"));
const Home = React.lazy(() => import("../pages/frontend/Home"));
const Blogs = React.lazy(() => import("../pages/frontend/Blogs/Blogs"));
const BlogDetail = React.lazy(() => import("../pages/frontend/Blogs/BlogDetail"));
const NotFound = React.lazy(() => import("../pages/frontend/NotFound/NotFound"));
const PrivacyPolicy = React.lazy(() => import("../pages/frontend/PrivacyPolicy/PrivacyPolicy"));
const TermsOfService = React.lazy(() => import("../pages/frontend/TermsOfService/TermsOfService"));
const ContactPage = React.lazy(() => import("../pages/frontend/Contact/ContactPage"));

const LoadingFallback = () => (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
);

const WebRoutes = () => {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    <Route index element={<Home />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="portfolio/:slug" element={<ProjectDetail />} />
                    <Route path="services" element={<Services />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="blogs/:slug" element={<BlogDetail />} />
                    <Route path="about" element={<About />} />
                    <Route path="privacy" element={<PrivacyPolicy />} />
                    <Route path="terms" element={<TermsOfService />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default WebRoutes;
