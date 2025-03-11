import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { BriefcaseIcon } from "lucide-react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaJsSquare,
  FaNodeJs,
  FaWordpress,
  FaPhp
} from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator, SiMongodb, SiTailwindcss, SiMysql } from "react-icons/si";

const TechLogos = {
  React: () => <FaReact className="w-6 h-6 text-[#61DAFB]" />,
  JavaScript: () => <FaJsSquare className="w-6 h-6 text-[#F7DF1E]" />,
  HTML: () => <FaHtml5 className="w-6 h-6 text-[#E34F26]" />,
  CSS: () => <FaCss3Alt className="w-6 h-6 text-[#1572B6]" />,
  Figma: () => <FaFigma className="w-6 h-6 text-[#F24E1E]" />,
  MongoDB: () => <SiMongodb className="w-6 h-6 text-green-500" />,
  Nodejs: () => <FaNodeJs className="w-6 h-6 text-green-600" />,
  Expressjs: () => <img src="/assets/expjs.png" alt="Express.js" className="w-6 h-6" />,
  TailwindCSS: () => <SiTailwindcss className="w-6 h-6 text-blue-400" />,
  "Adobe Photoshop": () => (
    <SiAdobephotoshop className="w-6 h-6 text-[#31A8FF]" />
  ),
  "Adobe Illustrator": () => (
    <SiAdobeillustrator className="w-6 h-6 text-[#FF9A00]" />
  ),
  WordPress: () => <FaWordpress className="w-6 h-6 text-[#21759B]" />,
  PHP: () => <FaPhp className="w-6 h-6 text-[#777BB4]" />,
  MySQL: () => <SiMysql className="w-6 h-6 text-[#4479A1]" />
};

const Experience = () => {
  return (
    <div className="font-mono py-24 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 dark:bg-pink-400/10 rounded-full blur-3xl animate-pulse" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block px-4 py-1 rounded-full text-sm font-medium text-purple-500 dark:text-purple-400 bg-purple-500/10 dark:bg-purple-400/10 tracking-wider uppercase mb-4"
          >
            Career Path
          </motion.span>
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100">
            Work
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 lg:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-purple-500/50 dark:from-purple-400/50 dark:via-pink-400/50 dark:to-purple-400/50">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-purple-400 via-pink-500 to-purple-400 dark:from-purple-300 dark:via-pink-400 dark:to-purple-300" />
          </div>

          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-16 last:mb-0"
            >
              <div className="absolute left-[-12px] lg:left-1/2 lg:ml-[-12px] w-6 h-6">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white dark:bg-neutral-900 shadow-lg shadow-purple-500/50 dark:shadow-purple-400/50" />
              </div>

              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="lg:w-5/12 flex items-center justify-center"
                >
                  <div className="px-6 py-4 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 flex items-center gap-3 shadow-lg shadow-purple-500/5 dark:shadow-purple-400/5">
                    <div className="p-2 bg-purple-500/10 dark:bg-purple-400/10 rounded-lg">
                      <BriefcaseIcon className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                    </div>
                    <span className="text-lg font-medium bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      {experience.year}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="lg:w-5/12 p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg shadow-purple-500/5 dark:shadow-purple-400/5"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                          {experience.role}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          key={techIndex}
                          className="p-2 bg-white/50 dark:bg-neutral-800/50 rounded-lg transition-colors cursor-pointer"
                          title={tech}
                        >
                          {TechLogos[tech] && TechLogos[tech]()}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;