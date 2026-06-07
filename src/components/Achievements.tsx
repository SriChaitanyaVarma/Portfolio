import { motion } from 'framer-motion';
import { achievements } from '../data/content';

function Achievements() {
  return (
    <section id="achievements" className="px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Achievements</p>
            <h2 className="mt-3 text-4xl font-semibold text-white">Recognition from academics and hackathons.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              These achievements reflect a competitive technical mindset, academic excellence, and strong delivery under pressure.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="rounded-[2rem] border border-white/10 bg-[#111111]/90 p-8 shadow-soft"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-accent">{item.title}</p>
              <p className="mt-4 text-base leading-7 text-white/75">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
