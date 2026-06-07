import { FiMoon, FiSun } from 'react-icons/fi';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-accent hover:text-accent"
    >
      {theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </button>
  );
}

export default ThemeToggle;
