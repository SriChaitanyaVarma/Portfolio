import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import type { Section } from "../types";

interface NavbarProps {
  sections: Section[];
  onResumeDownload: () => void;
}

function Navbar({
  sections,
  onResumeDownload,
}: NavbarProps) {
  const [scrolled, setScrolled] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const current = sections.find((section) => {
        const element = document.getElementById(
          section.id
        );

        if (!element) return false;

        const rect =
          element.getBoundingClientRect();

        return (
          rect.top <= 150 &&
          rect.bottom >= 150
        );
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [sections]);

  return (
    <>
      <header
        className={`
          fixed
          top-0
          inset-x-0
          z-50
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-black/70 backdrop-blur-xl border-b border-white/10 py-4"
              : "bg-transparent py-6"
          }
        `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Logo */}

          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/5
                font-bold
                text-accent
                backdrop-blur-xl
              "
            >
              SC
            </div>

            <div>
              <p className="font-semibold text-white">
                Sri Chaitanya Varma
              </p>

              <p className="text-xs text-white/50">
                Software Developer
              </p>
            </div>
          </a>

          {/* Desktop Nav */}

          <nav className="hidden items-center gap-8 lg:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`
                  text-sm
                  transition
                  ${
                    activeSection ===
                    section.id
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }
                `}
              >
                {section.label}
              </a>
            ))}
          </nav>

          {/* Right Side */}

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download
              onClick={onResumeDownload}
              className="
                hidden
                lg:inline-flex
                items-center
                gap-2
                rounded-full
                bg-accent
                px-5
                py-3
                text-sm
                font-semibold
                text-slate-950
                transition
                hover:bg-accentHover
              "
            >
              <FiDownload />
              Resume
            </a>

            <button
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className="lg:hidden text-white"
            >
              {menuOpen ? (
                <FiX size={24} />
              ) : (
                <FiMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`
          fixed
          left-4
          right-4
          top-24
          z-40
          rounded-[28px]
          border
          border-white/10
          bg-[#111111]/95
          backdrop-blur-xl
          transition-all
          duration-300
          ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "pointer-events-none opacity-0 -translate-y-4"
          }
        `}
      >
        <div className="flex flex-col p-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() =>
                setMenuOpen(false)
              }
              className={`
                rounded-xl
                px-4
                py-3
                text-sm
                transition
                ${
                  activeSection ===
                  section.id
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white"
                }
              `}
            >
              {section.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            onClick={() => {
              onResumeDownload();
              setMenuOpen(false);
            }}
            className="
              mt-4
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-accent
              px-5
              py-3
              font-semibold
              text-slate-950
            "
          >
            <FiDownload />
            Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;