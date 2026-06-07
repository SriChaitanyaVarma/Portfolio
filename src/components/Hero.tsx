import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { roles, socialLinks, heroBadges, heroStats, floatingTech } from '../data/content';

const iconMap = {
  FiGithub,
  FiLinkedin,
  SiLeetcode,
  FiMail
};

interface HeroProps {
  onResumeDownload: () => void;
}

function Hero({ onResumeDownload }: HeroProps) {
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveRole((current) => (current + 1) % roles.length);
    }, 2800);
    return () => window.clearTimeout(timeout);
  }, [activeRole]);

  const currentRole = useMemo(() => roles[activeRole], [activeRole]);

  return (
    <section id="home" className="relative overflow-hidden px-5 py-24 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-accent/20 to-transparent blur-3xl" />
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.32em] text-white/70 backdrop-blur-sm">
            Hello, I&apos;m
          </span>
          <h1 className="mt-6 text-[3.6rem] leading-[0.95] tracking-[-0.04em] text-white md:text-[4.8rem] lg:text-[5.2rem]">
            Sri Chaitanya Varma
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Frontend Developer | React Developer | Problem Solver. Building modern web experiences with React, JavaScript, and scalable software solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accentHover">
              View Projects <FiArrowRight className="h-4 w-4" />
            </a>
            <button onClick={onResumeDownload} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-accent hover:bg-white/10">
              <FiDownload className="h-4 w-4" /> Download Resume
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/70">
            {socialLinks.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-accent hover:text-white">
                  {Icon ? <Icon className="h-4 w-4" /> : null}
                  {item.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.85 }} className="relative w-full max-w-xl">
          <div className="absolute -left-12 top-10 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -right-10 top-32 h-40 w-40 rounded-full bg-accentAlt/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]/85 p-6 shadow-soft backdrop-blur-xl">
            <div className="mb-6 rounded-[1.75rem] border border-white/10 bg-[#0f172a]/95 p-5 text-white shadow-[0_40px_100px_rgba(15,23,42,0.35)]">
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-white/60">
                <span>React Portfolio</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Live</span>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-3xl bg-[#111827]/90 p-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-accent">Selected role</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{currentRole}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-3xl bg-white/5 p-4 text-white/80">
                      <p className="text-2xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-2 text-sm text-white/60">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {heroBadges.map((badge) => (
                <div key={badge.text} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {floatingTech.slice(0, 3).map((tech) => (
              <motion.div key={tech} whileHover={{ y: -8 }} className="rounded-3xl border border-white/10 bg-[#111111]/90 px-4 py-4 text-center text-sm text-white/80 shadow-soft">
                {tech}
              </motion.div>
            ))}
            <motion.div whileHover={{ y: -8 }} className="rounded-3xl border border-white/10 bg-[#111111]/90 px-4 py-4 text-center text-sm text-white/80 shadow-soft sm:col-span-3">
              <div className="font-semibold text-white">Modern product UI</div>
              <div className="mt-2 text-xs text-white/60">Refined layout, motion, and polished interaction tokens.</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
