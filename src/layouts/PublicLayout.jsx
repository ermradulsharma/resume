import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/frontend/Navbar/Navbar";
import Footer from "../components/frontend/Footer/Footer";
import Breadcrumbs from "../components/frontend/Breadcrumbs/Breadcrumbs";

const PublicLayout = () => {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    }, [pathname]);

    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default PublicLayout;
