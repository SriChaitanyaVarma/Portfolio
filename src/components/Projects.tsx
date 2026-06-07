import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/content";

function Projects() {
  const featuredProject = projects.find(
    (project: any) => project.featured
  );

  const otherProjects = projects.filter(
    (project: any) => !project.featured
  );

  return (
    <section
      id="projects"
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
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Building software that solves
            real-world problems.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            A collection of projects spanning AI,
            full-stack development, productivity,
            and educational technology.
          </p>
        </motion.div>

        {/* Featured Project */}

        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
            "
          >
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <span className="rounded-full bg-accent/10 px-4 py-2 text-sm text-accent">
                  Featured Project
                </span>

                <h3 className="mt-6 text-3xl font-bold text-white">
                  {featuredProject.title}
                </h3>

                <p className="mt-5 leading-8 text-white/70">
                  {featuredProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.techStack.map(
                    (tech: string) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-white/10
                          px-3
                          py-1
                          text-sm
                          text-white/70
                        "
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="font-semibold text-white">
                    Problem
                  </h4>

                  <p className="mt-3 text-white/70">
                    Relief organizations struggle
                    to estimate demand accurately
                    during natural disasters.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="font-semibold text-white">
                    Solution
                  </h4>

                  <p className="mt-3 text-white/70">
                    Built an AI-powered prediction
                    system using machine learning
                    and NLP techniques.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="font-semibold text-white">
                    Impact
                  </h4>

                  <p className="mt-3 text-white/70">
                    Supports faster and more effective
                    resource allocation during
                    emergencies.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  px-5
                  py-3
                  text-white
                  transition
                  hover:border-accent
                "
              >
                <FiGithub />
                GitHub
              </a>

              <a
                href={featuredProject.demo}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-accent
                  px-5
                  py-3
                  font-semibold
                  text-slate-950
                  transition
                  hover:bg-accentHover
                "
              >
                <FiExternalLink />
                Live Demo
              </a>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -6 }}
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
              "
            >
              <span className="text-sm text-accent">
                {project.category}
              </span>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-white/70">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-3
                      py-1
                      text-xs
                      text-white/70
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 transition hover:text-white"
                >
                  <FiGithub size={20} />
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 transition hover:text-white"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;