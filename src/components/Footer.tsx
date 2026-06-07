import { motion } from 'framer-motion';

interface FooterProps {
  sections: { id: string; label: string }[];
  visitorCount: number;
  resumeClicks: number;
}

function Footer({ sections: navSections, visitorCount, resumeClicks }: FooterProps) {
  return (
    <motion.footer initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="border-t border-white/10 bg-[#0A0A0A] py-12 px-5 text-white/70 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Sri Chaitanya Varma</p>
          <p className="max-w-md text-sm leading-7 text-white/60">
            A recruiter-friendly portfolio built with clean motion, premium dark UI, and a focus on frontend excellence.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">Quick Links</h3>
            <div className="space-y-3 text-sm text-white/70">
              {navSections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="block transition hover:text-white">
                  {section.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">Social</h3>
            <div className="space-y-3 text-sm text-white/70">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="block transition hover:text-white">
                GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="block transition hover:text-white">
                LinkedIn
              </a>
              <a href="mailto:hello@example.com" className="block transition hover:text-white">
                Email
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">Live Metrics</h3>
            <div className="space-y-3 rounded-[1.75rem] border border-white/10 bg-white/5 p-4 text-sm text-white/70">
              <div className="flex items-center justify-between">
                <span>Visitors</span>
                <span className="font-semibold text-white">{visitorCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Resume downloads</span>
                <span className="font-semibold text-white">{resumeClicks}</span>
              </div>
            </div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/50">Support</h3>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:border-accent hover:bg-white/10">
              Back to Top
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Sri Chaitanya Varma. All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;
