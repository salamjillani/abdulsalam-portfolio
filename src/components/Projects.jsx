import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "../constants";
import { FaReact, FaNodeJs, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiExpress, SiSocketdotio, SiMongodb, SiTailwindcss, SiTensorflow, SiFramer, SiWebrtc, SiThreedotjs } from "react-icons/si";

const TechIcon = ({ tech }) => {
  const cls = "w-3.5 h-3.5";
  const map = {
    React: <FaReact className={`${cls} text-[#61DAFB]`} />,
    "Express.js": <SiExpress className={`${cls} text-neutral-500`} />,
    "Socket.io": <SiSocketdotio className={`${cls} text-neutral-700 dark:text-neutral-300`} />,
    MongoDB: <SiMongodb className={`${cls} text-green-600`} />,
    Tailwind: <SiTailwindcss className={`${cls} text-cyan-500`} />,
    "Tensorflow.js": <SiTensorflow className={`${cls} text-orange-500`} />,
    WebRTC: <SiWebrtc className={`${cls} text-neutral-500`} />,
    "Node.js": <FaNodeJs className={`${cls} text-green-600`} />,
    CSS: <FaCss3Alt className={`${cls} text-blue-500`} />,
    "Framer Motion": <SiFramer className={`${cls} text-purple-500`} />,
    "Three.js": <SiThreedotjs className={`${cls} text-neutral-700 dark:text-neutral-300`} />,
  };
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-[11px] text-neutral-600 dark:text-neutral-400 font-medium">
      {map[tech] || <FaDatabase className={cls} />}
      {tech}
    </span>
  );
};

TechIcon.propTypes = { tech: PropTypes.string.isRequired };

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index, dir) => {
    setDirection(dir);
    setCurrent((index + PROJECTS.length) % PROJECTS.length);
  }, []);

  const prev = () => goTo(current - 1, -1);
  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => next(), 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const project = PROJECTS[current];

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section className="relative py-24 lg:py-32 border-t border-neutral-100 dark:border-neutral-900">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
              My Work
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
              Featured Projects
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Image */}
              <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 aspect-[16/10] group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <TechIcon key={i} tech={tech} />
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium rounded-lg text-sm hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.livedemo && (
                    <a
                      href={project.livedemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium rounded-lg text-sm hover:bg-neutral-700 dark:hover:bg-neutral-100 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-10">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-neutral-900 dark:bg-white"
                  : "w-2 h-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-500"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
