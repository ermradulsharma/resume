import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/frontend/Navbar/Navbar";
import Footer from "../components/frontend/Footer/Footer";
import "../App.css";
import About from "../pages/frontend/About/About";
import Portfolio from "../pages/frontend/Portfolio/Portfolio";
import Services from "../pages/frontend/Services/Services";
import Home from "../pages/frontend/Home";
import Blogs from "../pages/frontend/Blogs/Blogs";
import BlogDetail from "../pages/frontend/Blogs/BlogDetail";

const PublicLayout = () => (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
);

const WebRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="services" element={<Services />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="blogs/:slug" element={<BlogDetail />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
};

export default WebRoutes;
