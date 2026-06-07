import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="px-6 pb-10 pt-24">
      <div className="mx-auto max-w-7xl">
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
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            p-10
            backdrop-blur-xl
          "
        >
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left */}

            <div>
              <div
                className="
                  inline-flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  text-lg
                  font-bold
                  text-accent
                "
              >
                SC
              </div>

              <h3 className="mt-6 text-3xl font-bold text-white">
                Sri Chaitanya Varma
              </h3>

              <p className="mt-4 max-w-lg leading-8 text-white/70">
                Frontend Developer focused on
                building performant, scalable,
                and user-centric web applications
                using React and modern
                JavaScript technologies.
              </p>
            </div>

            {/* Right */}

            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Let's Connect
                </h4>

                <p className="mt-3 text-white/70">
                  Open to Frontend Developer
                  roles, internships, and
                  exciting software projects.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/srichaitanyavarma"
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
                  href="https://linkedin.com/in/srichaitanyavarmamudunoori"
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
                  <FiLinkedin />
                  LinkedIn
                </a>

                <a
                  href="mailto:chaitanyavarmamudunoori@gmail.com"
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
                  <FiMail />
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}

          <div
            className="
              mt-10
              flex
              flex-col
              gap-4
              border-t
              border-white/10
              pt-8
              text-sm
              text-white/50
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <p>
              © {new Date().getFullYear()} Sri
              Chaitanya Varma. All rights
              reserved.
            </p>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                inline-flex
                items-center
                gap-2
                transition
                hover:text-white
              "
            >
              Back to Top
              <FiArrowUp />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;