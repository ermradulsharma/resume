import React from "react";
import { useLocation } from "react-router-dom";
import WebRoutes from "./routes/WebRoutes";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");
  return isDashboardRoute ? <AppRoutes /> : <WebRoutes />;
};

export default App;
