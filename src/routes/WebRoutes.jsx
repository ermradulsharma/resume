import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../components/layout/PublicLayout";
import "../App.css";

// Lazy load components
const About = React.lazy(() => import("../features/about/AboutPage/About"));
const Portfolio = React.lazy(() => import("../features/portfolio/PortfolioPage/Portfolio"));
const ProjectDetail = React.lazy(() => import("../features/portfolio/PortfolioPage/ProjectDetail")); // Added ProjectDetail lazy import
const Services = React.lazy(() => import("../features/services/ServicesPage/Services"));
const Home = React.lazy(() => import("../features/home/Home"));
const Blogs = React.lazy(() => import("../features/blog/BlogPage/Blogs"));
const BlogDetail = React.lazy(() => import("../features/blog/BlogPage/BlogDetail"));
const NotFound = React.lazy(() => import("../features/home/NotFound/NotFound"));
const PrivacyPolicy = React.lazy(() => import("../features/legal/PrivacyPolicy/PrivacyPolicy"));
const TermsOfService = React.lazy(() => import("../features/legal/TermsOfService/TermsOfService"));
const ContactPage = React.lazy(() => import("../features/contact/ContactPage/ContactPage"));
const Resume = React.lazy(() => import("../features/about/Resume/ResumeViewer"));
const ResumeLivePreview = React.lazy(() => import("../features/about/Resume/ResumeLivePreview"));
const CompanyDocGenerator = React.lazy(() => import("../features/about/Resume/company/CompanyDocGenerator"));

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
                <Route path="/resume" element={<Resume />} />
                <Route path="/resume-preview" element={<ResumeLivePreview />} />
                <Route path="/company-docs" element={<CompanyDocGenerator />} />
                <Route path="/resume/company" element={<CompanyDocGenerator />} />
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
