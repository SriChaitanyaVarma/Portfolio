import { motion } from "framer-motion";
import { skills } from "../data/content";

function Skills() {
  const categories = [
    "Frontend",
    "Backend",
    "Database",
    "Tools",
  ];

  return (
    <section
      id="skills"
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
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Technologies I use to build
            modern software.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            My toolkit spans frontend
            development, backend services,
            databases, cloud platforms, and
            developer productivity tools.
          </p>
        </motion.div>

        {/* Skill Categories */}

        <div className="mt-16 space-y-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
              }}
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
              "
            >
              <h3 className="text-2xl font-semibold text-white">
                {category}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {skills
                  .filter(
                    (skill) =>
                      skill.category === category
                  )
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        y: -4,
                        scale: 1.03,
                      }}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-5
                        py-3
                        text-sm
                        text-white/80
                        transition
                        hover:border-accent
                      "
                    >
                      {skill.name}
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Card */}

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
            mt-12
            rounded-[32px]
            border
            border-accent/20
            bg-accent/10
            p-8
          "
        >
          <h3 className="text-2xl font-semibold text-white">
            Areas of Focus
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-5">
              <h4 className="font-semibold text-white">
                Frontend Engineering
              </h4>

              <p className="mt-3 text-sm leading-6 text-white/70">
                Building responsive,
                accessible and scalable React
                applications.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <h4 className="font-semibold text-white">
                Full Stack Development
              </h4>

              <p className="mt-3 text-sm leading-6 text-white/70">
                Creating complete web
                applications with modern APIs
                and databases.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <h4 className="font-semibold text-white">
                AI & Problem Solving
              </h4>

              <p className="mt-3 text-sm leading-6 text-white/70">
                Applying machine learning and
                software engineering to
                real-world challenges.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;