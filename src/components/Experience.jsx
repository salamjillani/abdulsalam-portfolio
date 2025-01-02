import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import { BriefcaseIcon } from "lucide-react";

const Experience = () => {
  return (
    <div className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">
            Career Path
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            Work
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 lg:left-1/2 h-full w-px bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-purple-500/50" />

          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12"
            >
              <div className="absolute left-[-8px] lg:left-1/2 lg:ml-[-8px] w-4 h-4">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white" />
              </div>

              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="lg:w-5/12 flex items-center justify-center"
                >
                  <div className="px-6 py-3 bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800/50 flex items-center gap-3">
                    <BriefcaseIcon className="w-5 h-5 text-purple-400" />
                    <span className="text-lg font-medium text-neutral-300">
                      {experience.year}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="lg:w-5/12 p-6 bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800/50"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        {experience.role}
                      </h3>
                      <p className="text-neutral-400">{experience.company}</p>
                    </div>

                    <p className="text-neutral-300 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-purple-500/10 text-purple-300 rounded-full hover:bg-purple-500/20 transition-colors"
                        >
                          {tech}
                        </span>
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
