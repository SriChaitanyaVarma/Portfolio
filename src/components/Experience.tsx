import { motion } from 'framer-motion';
import { experience } from '../data/content';

function Experience() {
  return (
    <section id="experience" className="px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Experience</p>
            <h2 className="mt-3 text-4xl font-semibold text-white">A timeline of fast-moving frontend growth.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              My internship and project experience focuses on shipping clean code, fixing UI issues, and improving frontend performance in production contexts.
            </p>
          </div>
        </motion.div>

        <div className="space-y-10">
          {experience.map((item, index) => (
            <motion.div key={item.role} initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]/90 p-8 shadow-soft before:absolute before:left-8 before:top-8 before:h-3 before:w-3 before:rounded-full before:bg-accent before:shadow-[0_0_0_10px_rgba(59,130,246,0.13)] lg:before:left-1/2 lg:before:-translate-x-1/2">
              <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:items-start">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-accent">{item.company}</p>
                  <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                  <p className="text-sm text-white/60">{item.period}</p>
                </div>
                <div className="space-y-3 text-white/75">
                  {item.bulletPoints.map((bullet) => (
                    <p key={bullet} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      {bullet}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
