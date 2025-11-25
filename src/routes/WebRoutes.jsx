import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import "../App.css";
import About from "../pages/frontend/About/About";
import Portfolio from "../pages/frontend/Portfolio/Portfolio";
import Services from "../pages/frontend/Services/Services";
import Home from "../pages/frontend/Home";
import Blogs from "../pages/frontend/Blogs/Blogs";
import BlogDetail from "../pages/frontend/Blogs/BlogDetail";
import NotFound from "../pages/frontend/NotFound/NotFound";

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
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default WebRoutes;
