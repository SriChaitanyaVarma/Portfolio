import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import type { Section } from '../types';

interface NavbarProps {
  sections: Section[];
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onResumeDownload: () => void;
}

function Navbar({ sections, theme, toggleTheme, onResumeDownload }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-lg bg-black/50 border-b border-white/10 py-3 shadow-soft' : 'bg-transparent py-5'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 xl:px-0">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-[0.12em] text-white transition hover:text-accent">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent shadow-glow">CV</span>
          Sri Chaitanya
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="text-sm text-white/70 transition hover:text-white">
              {section.label}
            </a>
          ))}
          <Link to="/projects" className="text-sm text-white/70 transition hover:text-white">
            Projects
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a href="/resume.pdf" onClick={onResumeDownload} className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-accent hover:bg-white/10 lg:inline-flex">
            <FiDownload className="mr-2 inline h-4 w-4" /> Resume
          </a>
          <button className="lg:hidden" onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden ${menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300`}>
        <div className="mx-5 rounded-3xl border border-white/10 bg-[#111111]/95 p-5 shadow-soft backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="text-sm text-white/80 transition hover:text-white" onClick={() => setMenuOpen(false)}>
                {section.label}
              </a>
            ))}
            <Link to="/projects" className="text-sm text-white/80 transition hover:text-white" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
            <a href="/resume.pdf" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-accent hover:bg-white/10">
              <FiDownload className="mr-2 h-4 w-4" /> Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
