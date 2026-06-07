import { motion } from "framer-motion";
import { experience } from "../data/content";

function Experience() {
  const internship = experience[0];

  return (
    <section
      id="experience"
      className="px-6 py-24 md:py-32"
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
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Professional experience building
            real-world software.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            My internship experience provided
            exposure to production-grade development,
            reusable architecture, API integration,
            and performance-focused frontend
            engineering.
          </p>
        </motion.div>

        {/* Experience Card */}

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
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
          "
        >
          <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
            {/* Left Side */}

            <div>
              <div className="inline-flex rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                Internship
              </div>

              <h3 className="mt-5 text-3xl font-bold text-white">
                {internship.role}
              </h3>

              <p className="mt-3 text-lg text-white/70">
                {internship.company}
              </p>

              <p className="mt-2 text-sm text-white/50">
                {internship.period}
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="font-semibold text-white">
                  Key Technologies
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "React",
                    "JavaScript",
                    "REST APIs",
                    "Git",
                    "Frontend Development",
                  ].map((tech) => (
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
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div>
              <h4 className="text-xl font-semibold text-white">
                Responsibilities & Contributions
              </h4>

              <div className="mt-6 space-y-4">
                {internship.bulletPoints.map((point) => (
                  <div
                    key={point}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      p-5
                    "
                  >
                    <p className="leading-7 text-white/70">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="
                  mt-8
                  rounded-2xl
                  border
                  border-accent/20
                  bg-accent/10
                  p-6
                "
              >
                <h4 className="font-semibold text-white">
                  Key Outcome
                </h4>

                <p className="mt-3 leading-7 text-white/70">
                  Contributed to modern React-based
                  applications while gaining practical
                  experience in scalable frontend
                  architecture, API integration, and
                  collaborative software development.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;