import { motion } from 'framer-motion';
import { stats } from '../data/content';

function About() {
  return (
    <section id="about" className="px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">About</p>
            <h2 className="mt-3 text-4xl font-semibold text-white">A thoughtful approach to modern frontend systems.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              I am a Computer Science Engineering student with internship experience and full-stack project delivery. I focus on transforming design systems into responsive, accessible, and performance-minded products.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[360px_1fr] lg:items-start">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-white/10 bg-[#111111]/95 p-6 shadow-soft backdrop-blur-xl">
            <div className="h-[420px] rounded-[1.75rem] bg-gradient-to-br from-accent/10 via-transparent to-white/5 p-6">
              <div className="flex h-full flex-col items-center justify-center gap-5 rounded-[1.5rem] border border-white/10 bg-[#0b1120]/90 p-6 text-center">
                <div className="h-32 w-32 rounded-full bg-white/5 ring-1 ring-white/10" />
                <div>
                  <h3 className="text-2xl font-semibold text-white">Sri Chaitanya</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/50">Computer Science Student</p>
                </div>
                <p className="text-sm leading-7 text-white/70">
                  I build frontend systems with a premium product mindset, polished animation, and careful performance tuning.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-[#111111]/90 p-6 text-white shadow-soft">
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-3 text-sm text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[#111111]/90 p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-white">Why I build products this way</h3>
              <div className="mt-6 space-y-5 text-sm leading-7 text-white/75">
                <p>
                  I approach engineering with both design sensitivity and technical discipline, delivering interfaces that look premium and behave reliably across devices.
                </p>
                <p>
                  My workflow includes rapid prototyping, performance-first development, and close collaboration with cross-functional teams to ship polished features.
                </p>
                <p>
                  I enjoy solving problems with elegant code, progressive enhancement, and a strong focus on recruiter-facing clarity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
