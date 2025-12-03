import React, { Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

// Lazy load the route components
const WebRoutes = lazy(() => import("./routes/WebRoutes"));
const AppRoutes = lazy(() => import("./routes/AppRoutes"));

const App = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  const LoadingFallback = () => (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'var(--background-color)' }}>
      <Spinner animation="border" variant="primary" />
    </div>
  );

  return (
    <Suspense fallback={<LoadingFallback />}>
      {isDashboardRoute ? <AppRoutes /> : <WebRoutes />}
    </Suspense>
  );
};

export default App;
