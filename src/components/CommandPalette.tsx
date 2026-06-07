import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { Section } from '../types';

interface CommandPaletteProps {
  sections: Section[];
}

function CommandPalette({ sections }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const commands = useMemo(
    () => [
      ...sections.map((section) => ({ label: `Go to ${section.label}`, action: () => (window.location.href = `#${section.id}`) })),
      { label: 'Open Projects Page', action: () => navigate('/projects') }
    ],
    [sections, navigate]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const results = commands.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="absolute left-1/2 top-1/3 w-[min(95vw,640px)] -translate-x-1/2 rounded-3xl border border-white/10 bg-[#111111]/95 p-6 shadow-soft"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">Command palette</p>
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search commands..."
              className="w-full rounded-3xl border border-white/10 bg-[#0f172a] px-4 py-3 text-white outline-none transition focus:border-accent"
            />
            <div className="mt-4 max-h-72 space-y-2 overflow-y-auto pr-1">
              {results.slice(0, 6).map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action();
                    setOpen(false);
                  }}
                  className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-left text-white transition hover:border-accent hover:bg-white/10"
                >
                  {item.label}
                </button>
              ))}
              {results.length === 0 && <p className="px-4 py-3 text-sm text-white/60">No commands found.</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;
