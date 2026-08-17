import React, { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { initGA, trackPage } from "./utils/analytics/ga";
import ErrorBoundary from "./components/ui/ErrorBoundary/ErrorBoundary";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from "./store/ThemeContext";

const queryClient = new QueryClient();

// Lazy load the route components
const WebRoutes = lazy(() => import("./routes/WebRoutes"));

const App = () => {
    const location = useLocation();

    useEffect(() => {
        initGA();
    }, []);

    useEffect(() => {
        trackPage(location.pathname);
    }, [location]);

    const LoadingFallback = () => (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'var(--background-color)' }} role="status" aria-live="polite">
            <Spinner animation="border" variant="primary" aria-hidden="true" />
            <span className="visually-hidden">Loading page...</span>
        </div>
    );

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <ErrorBoundary>
                    <Suspense fallback={<LoadingFallback />}>
                        <WebRoutes />
                    </Suspense>
                </ErrorBoundary>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;
