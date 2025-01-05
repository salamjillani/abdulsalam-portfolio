import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="font-mono min-h-screen py-24 bg-gradient-to-b relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
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
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 dark:bg-pink-400/10 rounded-full blur-3xl"
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
            Portfolio Showcase
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100">
            Featured
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="space-y-16 sm:space-y-20">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="flex flex-col lg:flex-row items-stretch lg:gap-12 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full lg:w-1/2 flex items-center"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-2xl w-full">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 dark:from-purple-400/20 dark:to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full lg:w-1/2 p-6 sm:p-8 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-xl shadow-purple-500/5 dark:shadow-purple-400/5 flex flex-col justify-between"
                >
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-300 rounded-full hover:bg-purple-500/20 dark:hover:bg-purple-400/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-lg transition-colors w-full sm:w-auto text-center"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </motion.a>
                    )}
                    {project.livedemo && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.livedemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto text-center"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
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

export default Projects;