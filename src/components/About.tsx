import { motion } from "framer-motion";
import { stats } from "../data/content";

function About() {
  const timeline = [
    {
      year: "2022",
      title: "Started B.Tech CSE",
      description:
        "Began my Computer Science journey with a strong interest in software development and problem solving.",
    },
    {
      year: "2025",
      title: "GATE 2025 Qualified",
      description:
        "Successfully qualified the Graduate Aptitude Test in Engineering and strengthened core CS fundamentals.",
    },
    {
      year: "2026",
      title: "Software Development Internship",
      description:
        "Worked on real-world React applications, API integrations, reusable components, and frontend optimization.",
    },
    {
      year: "2026",
      title: "GATE 2026 Qualified",
      description:
        "Qualified GATE for the second consecutive year while maintaining academic excellence and project development.",
    },
  ];

  return (
    <section
      id="about"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}

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
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Building software with curiosity,
            consistency and purpose.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            I'm a Computer Science Engineering student,
            Software Development Intern, and aspiring
            Software Engineer. My journey combines strong
            academic performance, competitive examinations,
            real-world development experience, and a
            passion for building impactful products.
          </p>
        </motion.div>

        {/* Stats */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
              "
            >
              <h3 className="text-3xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-white/60">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Journey Timeline */}

        <div className="mt-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Card */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              What drives me
            </h3>

            <div className="mt-6 space-y-5 text-white/70 leading-8">
              <p>
                I enjoy turning ideas into software that
                solves real-world problems. Whether it's
                designing modern web applications,
                building AI-powered systems, or improving
                user experiences, I focus on creating
                practical and meaningful solutions.
              </p>

              <p>
                My interests span software engineering,
                frontend development, machine learning,
                and scalable application architecture.
              </p>

              <p>
                I believe great products are built through
                continuous learning, collaboration, and
                attention to detail.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center gap-4">
                  <span className="rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                    {item.year}
                  </span>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-4 leading-7 text-white/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;