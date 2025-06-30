import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/Layout";
import Index from "../pages/dashboard/Index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Index />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
