import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ResumePage from "./pages/resumePage/ResumePage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import BlogPage from "./pages/blogPage/BlogPage";
import ContactPage from "./pages/contactPage/ContactPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
