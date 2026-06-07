import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CommandPalette from "./components/CommandPalette";

import Loader from "./components/Loader";
import CursorGlow from "./components/CursorGlow";

import { Section } from "./types";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Achievements = lazy(() => import("./components/Achievements"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));

const sections: Section[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [resumeClicks, setResumeClicks] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const storedTheme = localStorage.getItem("portfolio-theme");

    setTheme(storedTheme === "light" ? "light" : "dark");

    const visitors =
      Number(localStorage.getItem("portfolio-visitors")) || 0;

    const updatedVisitors = visitors + 1;

    setVisitorCount(updatedVisitors);

    localStorage.setItem(
      "portfolio-visitors",
      String(updatedVisitors)
    );

    setResumeClicks(
      Number(localStorage.getItem("resume-downloads")) || 0
    );
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const toggleTheme = () => {
    const nextTheme =
      theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);

    localStorage.setItem(
      "portfolio-theme",
      nextTheme
    );
  };

  const onResumeDownload = () => {
    const current =
      Number(localStorage.getItem("resume-downloads")) + 1 || 1;

    setResumeClicks(current);

    localStorage.setItem(
      "resume-downloads",
      String(current)
    );
  };

  return (
    <div
      className="
      min-h-screen
      font-sans
      bg-[#0A0A0A]
      text-white
      transition-colors
      duration-500
      relative
      overflow-x-hidden
    "
    >
      {/* Background Effects */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      {/* Mouse Glow */}
      <CursorGlow />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar
        sections={sections}
        theme={theme}
        toggleTheme={toggleTheme}
        onResumeDownload={onResumeDownload}
      />

      <main className="relative">
        <AnimatePresence mode="wait">
          <Routes
            location={location}
            key={location.pathname}
          >
            <Route
              path="/"
              element={
                <motion.div
                  layout
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  <Suspense fallback={<Loader />}>
                    <Hero
                      onResumeDownload={
                        onResumeDownload
                      }
                    />

                    <About />

                    <Skills />

                    <Experience />

                    <Projects />

                    <Achievements />

                    <Testimonials />

                    <Contact />
                  </Suspense>
                </motion.div>
              }
            />

            <Route
              path="/projects"
              element={
                <motion.div
                  layout
                  className="min-h-screen pt-28"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  <Suspense fallback={<Loader />}>
                    <Projects />
                  </Suspense>
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer
        sections={sections}
        visitorCount={visitorCount}
        resumeClicks={resumeClicks}
      />

      <CommandPalette sections={sections} />
    </div>
  );
}

export default App;