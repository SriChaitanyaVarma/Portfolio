import { motion } from "framer-motion";
import { achievements } from "../data/content";

function Achievements() {
  return (
    <section
      id="achievements"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent">
            Achievements
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Milestones that shaped
            my engineering journey.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            A collection of academic,
            competitive, and technical
            achievements earned through
            consistency, learning, and
            problem solving.
          </p>
        </motion.div>

        {/* Featured Achievement */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-16
            rounded-[32px]
            border
            border-accent/20
            bg-accent/10
            p-8
          "
        >
          <span className="text-sm font-medium text-accent">
            Featured Achievement
          </span>

          <h3 className="mt-4 text-3xl font-bold text-white">
            GATE Qualified Twice
          </h3>

          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            Successfully qualified the
            Graduate Aptitude Test in Engineering
            in consecutive years while maintaining
            a strong academic record and actively
            developing software projects.
          </p>
        </motion.div>

        {/* Achievement Grid */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
              "
            >
              <div className="text-4xl font-bold text-accent">
                0{index + 1}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {achievement.title}
              </h3>

              <p className="mt-4 leading-7 text-white/70">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-12
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            p-8
            text-center
          "
        >
          <h3 className="text-2xl font-semibold text-white">
            Always Learning. Always Building.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/70">
            Whether it's competitive exams,
            hackathons, internships, or
            software projects, I continuously
            challenge myself to grow as an
            engineer and problem solver.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;