import { motion } from 'framer-motion';
import { skills } from '../data/content';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, SiFirebase, SiMongodb, SiGithub, SiVisualstudiocode, SiPostman } from 'react-icons/si';

const iconMap = {
  SiHtml5: SiHtml5,
  SiCss3: SiCss3,
  SiJavascript: SiJavascript,
  SiReact: SiReact,
  SiTailwindcss: SiTailwindcss,
  SiRedux: SiRedux,
  SiNodedotjs: SiNodedotjs,
  SiExpress: SiExpress,
  SiFirebase: SiFirebase,
  SiMongodb: SiMongodb,
  SiGithub: SiGithub,
  SiVisualstudiocode: SiVisualstudiocode,
  SiPostman: SiPostman
};

function Skills() {
  const categories = ['Frontend', 'Backend', 'Database', 'Tools'];

  return (
    <section id="skills" className="px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Skills</p>
            <h2 className="mt-3 text-4xl font-semibold text-white">Technical expertise in modern tooling.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              I use a streamlined stack to build polished, fast, and accessible applications. Each skill reflects the tools I rely on to deliver production-ready experiences.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category} className="rounded-[2rem] border border-white/10 bg-[#111111]/90 p-6 shadow-soft">
              <h3 className="mb-6 text-xl font-semibold text-white">{category}</h3>
              <div className="space-y-4">
                {skills.filter((item) => item.category === category).map((skill) => {
                  const Icon = iconMap[skill.icon as keyof typeof iconMap];
                  return (
                    <motion.div whileHover={{ y: -6 }} className="group rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:border-accent hover:bg-white/10" key={skill.name}>
                      <div className="flex items-center gap-4">
                        {Icon ? <Icon className="h-6 w-6 text-accent" /> : <span className="inline-block h-6 w-6 rounded-full bg-white/10" />}
                        <div>
                          <p className="font-semibold text-white">{skill.name}</p>
                          <p className="text-sm text-white/60">{skill.level}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
