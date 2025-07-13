import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTailwindcss, SiWordpress, SiWebflow, SiPhp, SiMysql, SiFigma } from "react-icons/si";
import {
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

const technologies = [
  {
    Icon: RiReactjsLine,
    color: "text-cyan-500",
    duration: 2.5,
    label: "React",
  },
  {
    Icon: FaJsSquare,
    color: "text-yellow-500",
    duration: 4.5,
    label: "JavaScript",
  },

  { Icon: FaNodeJs, color: "text-green-600", duration: 3, label: "Node.js" },
  {
    type: "image",
    src: "./assets/expjs.png",
    duration: 1.5,
    label: "Express.js",
    alt: "Express.js",
  },
  { Icon: SiPhp, color: "text-indigo-500", duration: 4.2, label: "PHP" },
  { Icon: SiMongodb, color: "text-green-500", duration: 5, label: "MongoDB" },
  { Icon: SiMysql, color: "text-blue-500", duration: 3.7, label: "MySQL" },
  { Icon: SiWordpress, color: "text-blue-700", duration: 5.5, label: "WordPress" },
  { Icon: SiWebflow, color: "text-blue-400", duration: 6.5, label: "Webflow" },
  {
    Icon: SiTailwindcss,
    color: "text-blue-400",
    duration: 4,
    label: "Tailwind CSS",
  },
  { Icon: FaHtml5, color: "text-orange-600", duration: 7, label: "HTML5" },
  { Icon: FaCss3Alt, color: "text-blue-600", duration: 3.5, label: "CSS3" },
  { Icon: SiFigma, color: "text-pink-600", duration: 5.8, label: "Figma" },
  { Icon: FaGitAlt, color: "text-orange-500", duration: 6, label: "Git" },
];

const Technologies = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="font-mono relative min-h-screen flex items-center">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-200 dark:bg-neutral-700 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-neutral-300 dark:bg-neutral-600 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="text-center space-y-12">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight"
            >
              Technologies{" "}
              <span className="text-neutral-700 dark:text-neutral-300">
                I Work With
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl lg:text-2xl font-medium text-neutral-600 dark:text-neutral-400"
            >
              Stack & Tools
            </motion.p>
          </motion.div>

          {/* Technologies Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={iconVariants(tech.duration)}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.05 }}
                className="group relative flex flex-col items-center"
              >
                <div className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border-4 border-white dark:border-neutral-900 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  {tech.type === "image" ? (
                    <img
                      src={tech.src}
                      alt={tech.alt}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                    />
                  ) : (
                    <tech.Icon
                      className={`text-4xl sm:text-5xl ${tech.color} transition-transform duration-300 group-hover:scale-110`}
                    />
                  )}

                  {/* Tooltip */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    <div className="px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg whitespace-nowrap">
                      {tech.label}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white dark:bg-neutral-900 border-l-2 border-t-2 border-neutral-200 dark:border-neutral-800 rotate-45"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;