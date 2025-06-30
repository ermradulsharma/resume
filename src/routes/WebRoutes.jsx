import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/user/Navbar/Navbar";
import Footer from "../components/user/Footer/Footer";

import Home from "../pages/Home";
import Skill from "../pages/Skillset";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import "../App.css";

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
        <Route path="tech-stack" element={<Skill />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default WebRoutes;
