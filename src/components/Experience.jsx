import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaFigma, FaJsSquare, FaNodeJs, FaWordpress, FaPhp } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator, SiMongodb, SiTailwindcss, SiMysql } from "react-icons/si";

const TechLogos = {
  React: () => <FaReact className="w-4 h-4 text-[#61DAFB]" />,
  JavaScript: () => <FaJsSquare className="w-4 h-4 text-[#F7DF1E]" />,
  HTML: () => <FaHtml5 className="w-4 h-4 text-[#E34F26]" />,
  CSS: () => <FaCss3Alt className="w-4 h-4 text-[#1572B6]" />,
  Figma: () => <FaFigma className="w-4 h-4 text-[#F24E1E]" />,
  MongoDB: () => <SiMongodb className="w-4 h-4 text-green-500" />,
  Nodejs: () => <FaNodeJs className="w-4 h-4 text-green-600" />,
  Expressjs: () => <img src="/assets/expjs.png" alt="Express.js" className="w-4 h-4" />,
  TailwindCSS: () => <SiTailwindcss className="w-4 h-4 text-cyan-400" />,
  "Adobe Photoshop": () => <SiAdobephotoshop className="w-4 h-4 text-[#31A8FF]" />,
  "Adobe Illustrator": () => <SiAdobeillustrator className="w-4 h-4 text-[#FF9A00]" />,
  WordPress: () => <FaWordpress className="w-4 h-4 text-[#21759B]" />,
  PHP: () => <FaPhp className="w-4 h-4 text-[#777BB4]" />,
  MySQL: () => <SiMysql className="w-4 h-4 text-[#4479A1]" />,
};

const Experience = () => {
  return (
    <section className="relative py-24 lg:py-32 border-t border-neutral-100 dark:border-neutral-900">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
            Career
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
            Work Experience
          </h2>
        </motion.div>

        {/* Experience list */}
        <div className="max-w-4xl">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative pl-6 lg:pl-0"
            >
              {/* Left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 lg:hidden" />
              <div className="absolute left-0 top-4 w-[5px] h-[5px] -translate-x-[2px] rounded-full bg-violet-500 lg:hidden" />

              <div className="lg:grid lg:grid-cols-4 lg:gap-8 pb-12 last:pb-0">
                {/* Year */}
                <div className="mb-2 lg:mb-0 lg:pt-0.5">
                  <span className="text-sm text-neutral-500 dark:text-neutral-500 tabular-nums">
                    {exp.year}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-violet-600 dark:text-violet-400 font-medium mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.technologies.map((tech, i) => (
                      <div
                        key={i}
                        title={tech}
                        className="flex items-center gap-1.5 px-2.5 py-1 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md text-xs font-medium text-neutral-600 dark:text-neutral-400"
                      >
                        {TechLogos[tech] && TechLogos[tech]()}
                        {tech}
                      </div>
                    ))}
                  </div>

                  {index < EXPERIENCES.length - 1 && (
                    <div className="pt-8 border-b border-neutral-100 dark:border-neutral-900" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
