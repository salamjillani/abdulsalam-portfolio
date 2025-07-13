import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../constants";
import { FaReact, FaNodeJs, FaCss3Alt, FaDatabase } from "react-icons/fa";
import {
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiTailwindcss,
  SiTensorflow,
  SiFramer,
  SiWebrtc,
  SiThreedotjs
} from "react-icons/si";

const TechIcon = ({ tech }) => {
  const iconProps = { className: "w-5 h-5" };

  const techMap = {
    React: <FaReact {...iconProps} className="w-5 h-5 text-[#61DAFB]" />,
    "Express.js": (
      <SiExpress {...iconProps} className="w-5 h-5 text-neutral-600" />
    ),
    "Socket.io": (
      <SiSocketdotio
        {...iconProps}
        className="w-5 h-5 text-neutral-800 dark:text-neutral-200"
      />
    ),
    MongoDB: <SiMongodb {...iconProps} className="w-5 h-5 text-green-600" />,
    Tailwind: (
      <SiTailwindcss {...iconProps} className="w-5 h-5 text-cyan-600" />
    ),
    "Tensorflow.js": (
      <SiTensorflow {...iconProps} className="w-5 h-5 text-orange-600" />
    ),
    WebRTC: <SiWebrtc {...iconProps} className="w-5 h-5 text-neutral-600" />,
    "Node.js": <FaNodeJs {...iconProps} className="w-5 h-5 text-green-600" />,
    CSS: <FaCss3Alt {...iconProps} className="w-5 h-5 text-blue-600" />,
    "Framer Motion": (
      <SiFramer {...iconProps} className="w-5 h-5 text-purple-600" />
    ),
    "Three.js": (
      <SiThreedotjs {...iconProps} className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
    ),
  };

  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300">
      {techMap[tech] || <FaDatabase {...iconProps} className="text-neutral-500" />}
      <span>{tech}</span>
    </div>
  );
};

TechIcon.propTypes = {
  tech: PropTypes.string.isRequired,
};

const Projects = () => {
  return (
    <div className="font-mono relative min-h-screen py-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neutral-200 dark:bg-neutral-700 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-neutral-300 dark:bg-neutral-600 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A collection of work that showcases my skills and passion for development
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-20">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-neutral-200 dark:bg-neutral-800 rounded-2xl blur-2xl opacity-50" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative w-full h-80 object-cover rounded-2xl border-4 border-white dark:border-neutral-900 shadow-2xl"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <TechIcon key={techIndex} tech={tech} />
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 font-medium rounded-lg hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-neutral-900 transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </a>
                    )}
                    {project.livedemo && (
                      <a
                        href={project.livedemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;