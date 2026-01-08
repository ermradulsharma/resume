import React, { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { initGA, trackPage } from "./utils/analytics/ga";
import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary";

// Lazy load the route components
const WebRoutes = lazy(() => import("./routes/WebRoutes"));
const AppRoutes = lazy(() => import("./routes/AppRoutes"));

const App = () => {
    const location = useLocation();
    const isDashboardRoute = location.pathname.startsWith("/dashboard");
    useEffect(() => {
        initGA();
    }, []);

    useEffect(() => {
        trackPage(location.pathname);
    }, [location]);

    const LoadingFallback = () => (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'var(--background-color)' }}>
            <Spinner animation="border" variant="primary" />
        </div>
    );

    return (
        <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
                {isDashboardRoute ? <AppRoutes /> : <WebRoutes />}
            </Suspense>
        </ErrorBoundary>
    );
};

export default App;
