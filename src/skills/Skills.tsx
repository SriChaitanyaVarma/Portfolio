import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend Systems",
    level: 95,
    color: "from-blue-500 to-cyan-500",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
      "Redux",
    ],
  },
  {
    title: "Backend Systems",
    level: 80,
    color: "from-purple-500 to-fuchsia-500",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    title: "AI / ML",
    level: 70,
    color: "from-orange-500 to-amber-500",
    skills: [
      "NLP",
      "Scikit-learn",
      "Sentiment Analysis",
      "Data Preprocessing",
    ],
  },
  {
    title: "Database Systems",
    level: 75,
    color: "from-emerald-500 to-green-500",
    skills: [
      "MongoDB",
      "MySQL",
      "PL/SQL",
      "Firestore",
    ],
  },
  {
    title: "Tools & Workflow",
    level: 90,
    color: "from-cyan-500 to-sky-500",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Google Colab",
      "Agile",
    ],
    wide: true,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="px-5 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Engineering Dashboard
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
            A practical stack built through
            internships, hackathons, academic
            projects, and continuous learning.
          </p>
        </motion.div>

        {/* Bento Grid */}

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-white/20
                hover:shadow-[0_0_60px_rgba(59,130,246,0.08)]
                ${
                  group.wide
                    ? "lg:col-span-2"
                    : ""
                }
              `}
            >
              {/* Glow */}

              <div
                className={`
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-gradient-to-br
                  ${group.color}
                  opacity-10
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:opacity-20
                `}
              />

              {/* Header */}

              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/50">
                    Core technologies and
                    practical expertise
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-4xl font-bold text-white">
                    {group.level}%
                  </div>

                  <div className="text-xs uppercase tracking-wider text-white/40">
                    Confidence
                  </div>
                </div>
              </div>

              {/* Progress */}

              <div className="mt-8">
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${group.level}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                    }}
                    className={`
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      ${group.color}
                    `}
                  />
                </div>
              </div>

              {/* Skills */}

              <div className="mt-8 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-2
                      text-sm
                      text-white/80
                      transition-all
                      duration-300
                      hover:border-white/20
                      hover:bg-white/10
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Footer */}

              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5">
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Engineering Domain
                </span>

                <span className="text-sm text-white/50">
                  {group.skills.length} Technologies
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;