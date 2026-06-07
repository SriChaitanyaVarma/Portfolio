import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiDownload,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";

const SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "";

const TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";

const PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        form
      );

      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}

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
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Interested in working together?
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Whether it's a frontend role,
            internship opportunity, freelance
            project, or collaboration, I'd love
            to hear from you.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              x: -20,
            }}
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
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Name
                </label>

                <input
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    px-4
                    py-4
                    text-white
                    outline-none
                    transition
                    focus:border-accent
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Email
                </label>

                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    px-4
                    py-4
                    text-white
                    outline-none
                    transition
                    focus:border-accent
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Message
                </label>

                <textarea
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    px-4
                    py-4
                    text-white
                    outline-none
                    transition
                    focus:border-accent
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  rounded-2xl
                  bg-accent
                  py-4
                  font-semibold
                  text-slate-950
                  transition
                  hover:bg-accentHover
                "
              >
                Send Message
              </button>

              {status === "sending" && (
                <p className="text-sm text-white/60">
                  Sending...
                </p>
              )}

              {status === "success" && (
                <p className="text-sm text-green-400">
                  Message sent successfully.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong.
                </p>
              )}
            </div>
          </motion.form>

          {/* Contact Card */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
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
              Let's Build Something Great
            </h3>

            <p className="mt-4 leading-8 text-white/70">
              I enjoy building modern web
              applications with React,
              JavaScript, TypeScript, and
              scalable frontend architecture.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <FiMail className="text-accent" />

                <span className="text-white/80">
                  chaitanyavarmamudunoori@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FiMapPin className="text-accent" />

                <span className="text-white/80">
                  Andhra Pradesh, India
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="text-sm text-white/50">
                  Availability
                </p>

                <p className="mt-2 text-white">
                  Open to Full-Time Roles,
                  Frontend Positions &
                  Internships.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
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
                  px-4
                  py-3
                  text-white
                "
              >
                <FiLinkedin />
                LinkedIn
              </a>

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
                  px-4
                  py-3
                  text-white
                "
              >
                <FiGithub />
                GitHub
              </a>

              <a
                href="/resume.pdf"
                download
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-accent
                  px-4
                  py-3
                  font-semibold
                  text-slate-950
                "
              >
                <FiDownload />
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;