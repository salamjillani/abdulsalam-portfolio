import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === PROJECTS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? PROJECTS.length - 1 : prevIndex - 1
    );
  };

  const goToProject = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="font-mono relative min-h-screen py-20 overflow-hidden">
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

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800 transition-all duration-200 shadow-lg hover:shadow-xl group"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800 transition-all duration-200 shadow-lg hover:shadow-xl group"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
          </button>

          {/* Carousel Content */}
          <div className="relative h-[600px] md:h-[700px] lg:h-[600px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextProject();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevProject();
                  }
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full px-4 lg:px-8">
                  {/* Project Image */}
                  <div className={`order-2 lg:order-1 ${
                    currentIndex % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                    <div className="relative">
                      <div className="absolute -inset-4 bg-neutral-200 dark:bg-neutral-800 rounded-2xl blur-2xl opacity-50" />
                      <motion.img
                        src={PROJECTS[currentIndex].image}
                        alt={PROJECTS[currentIndex].title}
                        className="relative w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl border-4 border-white dark:border-neutral-900 shadow-2xl"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`space-y-4 lg:space-y-6 order-1 lg:order-2 ${
                    currentIndex % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                    <div className="space-y-3 lg:space-y-4">
                      <motion.h3 
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {PROJECTS[currentIndex].title}
                      </motion.h3>
                      <motion.p 
                        className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {PROJECTS[currentIndex].description}
                      </motion.p>
                    </div>

                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {PROJECTS[currentIndex].technologies.map((tech, techIndex) => (
                        <TechIcon key={techIndex} tech={tech} />
                      ))}
                    </motion.div>

                    <motion.div 
                      className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2 lg:pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {PROJECTS[currentIndex].github && (
                        <a
                          href={PROJECTS[currentIndex].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 lg:px-6 py-2 lg:py-3 border-2 border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 font-medium rounded-lg hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-neutral-900 transition-colors duration-200 text-sm lg:text-base"
                        >
                          <Github className="w-4 h-4 lg:w-5 lg:h-5" />
                          View Code
                        </a>
                      )}
                      {PROJECTS[currentIndex].livedemo && (
                        <a
                          href={PROJECTS[currentIndex].livedemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200 text-sm lg:text-base"
                        >
                          <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5" />
                          Live Demo
                        </a>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {PROJECTS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-neutral-900 dark:bg-neutral-100 scale-125'
                    : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
              {currentIndex + 1} / {PROJECTS.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;