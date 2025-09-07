import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebsiteLayout from "./WebsiteLayout";

import Home from "./pages/Home";
import AboutSection from "./components/AboutSection";
import CoursesSection from "./components/CoursesSection";     // List
import CourseDetailPage from "./pages/CourseDetailPage";      // Detail
import StudentProjectsSection from "./components/StudentProjectsSection";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import LearningPathsSection from "./components/LearningPathsSection";
import ContactSection from "./components/ContactSection";
import GetQuotePage from "./components/GetQuotePage";
import JourneySection from "./components/JourneySection";
import Consultation from "./components/Consultation";
import GallerySection from "./components/GallerySection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutSection /> },

      // Courses
      { path: "courses", element: <CoursesSection /> },
      { path: "courses/:slug", element: <CourseDetailPage /> },

      // Projects (student work)
      { path: "projects", element: <StudentProjectsSection /> },
      { path: "projects/:slug", element: <ProjectDetailPage /> },

      // Learning paths (formerly tenders)
      { path: "paths", element: <LearningPathsSection /> },

      // Others
      { path: "gallery", element: <GallerySection /> },
      { path: "contact", element: <ContactSection /> },
      { path: "get-quote", element: <GetQuotePage /> },
      { path: "journey", element: <JourneySection /> },
      { path: "consultation", element: <Consultation /> },
    ],
  },
  {
    path: "*",
    element: (
      <div className="min-h-[60vh] flex items-center justify-center text-center p-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">404</h1>
          <p className="text-slate-300 mt-2">Page Not Found</p>
        </div>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;