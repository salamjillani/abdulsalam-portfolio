import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import { BriefcaseIcon } from "lucide-react";

const Experience = () => {
  return (
    <div className="py-24 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
            className="inline-block px-4 py-1 rounded-full text-sm font-medium text-purple-400 bg-purple-500/10 tracking-wider uppercase mb-4"
          >
            Career Path
          </motion.span>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Work
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 lg:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-purple-500/50">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-purple-400 via-pink-500 to-purple-400" />
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
                <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg shadow-purple-500/50" />
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
                  <div className="px-6 py-4 bg-neutral-900/80 backdrop-blur-xl rounded-2xl border border-neutral-800/50 flex items-center gap-3 shadow-lg shadow-purple-500/5">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <BriefcaseIcon className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-lg font-medium bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      {experience.year}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="lg:w-5/12 p-6 bg-neutral-900/80 backdrop-blur-xl rounded-2xl border border-neutral-800/50 shadow-lg shadow-purple-500/5"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                          {experience.role}
                        </h3>
                        <p className="text-neutral-400 flex items-center gap-2">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-neutral-300 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-purple-500/10 text-purple-300 rounded-full hover:bg-purple-500/20 transition-colors cursor-pointer"
                        >
                          {tech}
                        </motion.span>
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
