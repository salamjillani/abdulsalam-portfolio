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
  React: () => <FaReact className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#61DAFB]" />,
  JavaScript: () => <FaJsSquare className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#F7DF1E]" />,
  HTML: () => <FaHtml5 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#E34F26]" />,
  CSS: () => <FaCss3Alt className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#1572B6]" />,
  Figma: () => <FaFigma className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#F24E1E]" />,
  MongoDB: () => <SiMongodb className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-500" />,
  Nodejs: () => <FaNodeJs className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-600" />,
  Expressjs: () => <img src="/assets/expjs.png" alt="Express.js" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
  TailwindCSS: () => <SiTailwindcss className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400" />,
  "Adobe Photoshop": () => (
    <SiAdobephotoshop className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#31A8FF]" />
  ),
  "Adobe Illustrator": () => (
    <SiAdobeillustrator className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FF9A00]" />
  ),
  WordPress: () => <FaWordpress className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#21759B]" />,
  PHP: () => <FaPhp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#777BB4]" />,
  MySQL: () => <SiMysql className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#4479A1]" />
};

const Experience = () => {
  return (
    <div className="font-mono relative min-h-screen flex items-center py-12 md:py-16 lg:py-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-10">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-neutral-200 dark:bg-neutral-700 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-neutral-300 dark:bg-neutral-600 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12 md:space-y-16">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight"
            >
              Work{" "}
              <span className="text-neutral-700 dark:text-neutral-300">
                Experience
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-600 dark:text-neutral-400"
            >
              Career Path
            </motion.p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line - Hidden on mobile, visible on larger screens */}
            <div className="hidden md:block absolute left-1/2 ml-[-1px] top-0 bottom-0 w-0.5 bg-neutral-300 dark:bg-neutral-700"></div>
            
            {/* Mobile timeline line */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-300 dark:bg-neutral-700"></div>

            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative mb-12 md:mb-16 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 md:ml-[-8px] w-4 h-4 rounded-full bg-neutral-900 dark:bg-neutral-100 border-4 border-white dark:border-neutral-900 shadow-lg z-10"></div>

                {/* Mobile Layout */}
                <div className="md:hidden ml-12 space-y-4">
                  {/* Year Badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-medium"
                  >
                    <BriefcaseIcon className="w-4 h-4" />
                    <span className="text-sm">{experience.year}</span>
                  </motion.div>

                  {/* Experience Content */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 sm:p-6 bg-white dark:bg-neutral-900 rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 shadow-lg"
                  >
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                          {experience.role}
                        </h3>
                        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-medium">
                          {experience.company}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            key={techIndex}
                            className="p-2 sm:p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                            title={tech}
                          >
                            {TechLogos[tech] && TechLogos[tech]()}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-2 gap-8">
                  {/* Year Badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`${index % 2 === 0 ? 'text-right' : 'text-left col-start-2'} flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-medium">
                      <BriefcaseIcon className="w-5 h-5" />
                      <span>{experience.year}</span>
                    </div>
                  </motion.div>

                  {/* Experience Content */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`${index % 2 === 0 ? 'col-start-2' : 'col-start-1'} p-6 lg:p-8 bg-white dark:bg-neutral-900 rounded-2xl border-4 border-white dark:border-neutral-900 shadow-2xl`}
                  >
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                          {experience.role}
                        </h3>
                        <p className="text-base lg:text-lg text-neutral-600 dark:text-neutral-400 font-medium">
                          {experience.company}
                        </p>
                      </div>

                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            key={techIndex}
                            className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
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
    </div>
  );
};

export default Experience;