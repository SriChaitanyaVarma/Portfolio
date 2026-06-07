import { motion } from 'framer-motion';
import { testimonials } from '../data/content';

function Testimonials() {
  return (
    <section id="testimonials" className="px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Testimonials</p>
            <h2 className="mt-3 text-4xl font-semibold text-white">Team feedback and professional impressions.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              Recruiters and mentors appreciate clean code, fast learning, and a practical approach to delivering product-ready frontend experiences.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-[2rem] border border-white/10 bg-[#111111]/90 p-8 shadow-soft"
            >
              <p className="mb-6 text-lg leading-8 text-white/80">“{testimonial.quote}”</p>
              <div>
                <p className="text-base font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-white/60">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
