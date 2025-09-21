import React from "react";

// COMPONENTS
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LocomotiveScroll from "locomotive-scroll";

// PAGES
import AboutPage from "./pages/AboutPage";
import Blogs from "./pages/Blogs";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

// ANIMATION LIBRARIES
import { gsap } from "gsap";
import { motion } from "motion/react";

// ROUTER
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
  },
  {
    path: "/blogs",
    element: (
      <Layout>
        <Blogs />
      </Layout>
    ),
  },
  {
    path: "/projects",
    element: (
      <Layout>
        <ProjectsPage />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <ContactPage />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
