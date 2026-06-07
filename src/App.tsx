import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CommandPalette from "./components/CommandPalette";
import Loader from "./components/Loader";

import { Section } from "./types";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Achievements = lazy(() => import("./components/Achievements"));
const Contact = lazy(() => import("./components/Contact"));

const sections: Section[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const location = useLocation();

  useEffect(() => {
    const storedTheme =
      localStorage.getItem("portfolio-theme");

    setTheme(
      storedTheme === "light" ? "light" : "dark"
    );
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(
      "dark",
      "light"
    );

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

  const onResumeDownload = () => {};

  return (
    <div
      className="
      min-h-screen
      bg-[#0A0A0A]
      text-white
      font-sans
      overflow-x-hidden
      relative
    "
    >
      {/* Background Blobs */}

      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <ScrollProgress />

      <Navbar
        sections={sections}
        onResumeDownload={onResumeDownload}
      />

      <main>
        <AnimatePresence mode="wait">
          <Routes
            location={location}
            key={location.pathname}
          >
            <Route
              path="/"
              element={
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <Suspense fallback={<Loader />}>
                    <Hero
                      onResumeDownload={
                        onResumeDownload
                      }
                    />

                    <About />

                    <Experience />

                    <Projects />

                    <Skills />

                    <Achievements />

                    <Contact />
                  </Suspense>
                </motion.div>
              }
            />

            <Route
              path="/projects"
              element={
                <motion.div
                  className="min-h-screen pt-28"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
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

      <Footer/>

      <CommandPalette sections={sections} />
    </div>
  );
}

export default App;