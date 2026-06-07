import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data/content';

const categories = ['All', 'AI', 'Blockchain', 'Full Stack', 'EdTech', 'Hackathon'];

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
        const matchesQuery = project.title.toLowerCase().includes(query.toLowerCase()) || project.description.toLowerCase().includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
      }),
    [activeCategory, query]
  );

  return (
    <section id="projects" className="px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Projects</p>
            <h2 className="mt-3 text-4xl font-semibold text-white">Showcasing crafted product experiences.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              This section highlights a selection of projects that blend user-centric UI, technical reliability, and practical deployment.
            </p>
          </div>
        </motion.div>

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm transition ${activeCategory === category ? 'border-accent bg-accent text-slate-950' : 'border-white/10 bg-white/5 text-white/70 hover:border-accent hover:text-white'}`}
              >
                {category}
              </button>
            ))}
          </div>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects"
            className="min-w-[240px] rounded-full border border-white/10 bg-[#111111]/90 px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
          />
        </div>

        <div className="grid gap-8 xl:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]/90 p-6 shadow-soft"
            >
              <div className="mb-5 h-56 rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_40%),_radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.12),_transparent_30%)] p-4 text-white">
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/5 bg-[#0b1120]/90 p-5">
                  <div className="space-y-3">
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.32em] text-white/50">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="text-sm leading-7 text-white/70">{project.description}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-white/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-accent hover:bg-white/10">
                  <FiGithub className="h-4 w-4" /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-accentHover">
                  <FiExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
