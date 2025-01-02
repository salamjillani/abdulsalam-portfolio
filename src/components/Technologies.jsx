
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTailwindcss, SiFigma } from "react-icons/si"; // Figma Icon
import {
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

const technologies = [
  { Icon: RiReactjsLine, color: "text-cyan-500", duration: 2.5, label: "React" },
  { Icon: FaNodeJs, color: "text-green-600", duration: 3, label: "Node.js" },
  { 
    type: "image", 
    src: "./assets/expjs.png", 
    duration: 1.5, 
    label: "Express.js",
    alt: "Express.js"
  },
  { Icon: SiMongodb, color: "text-green-500", duration: 5, label: "MongoDB" },
  { Icon: FaJsSquare, color: "text-yellow-500", duration: 4.5, label: "JavaScript" },
  { Icon: FaGitAlt, color: "text-orange-500", duration: 6, label: "Git" },
  { Icon: SiTailwindcss, color: "text-blue-400", duration: 4, label: "Tailwind CSS" },
  { Icon: FaHtml5, color: "text-orange-600", duration: 7, label: "HTML5" },
  { Icon: FaCss3Alt, color: "text-blue-600", duration: 3.5, label: "CSS3" },
  // Add Figma here
  { Icon: SiFigma, color: "text-purple-500", duration: 3, label: "Figma" },
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
    <div className="relative py-24 border-b border-neutral-800">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center space-y-4"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-sm font-medium text-purple-400 tracking-wider uppercase">
            Stack & Tools
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Technologies I
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              {" "}Work With
            </span>
          </h2>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={iconVariants(tech.duration)}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.1 }}
              className="group relative flex flex-col items-center"
            >
              <div className="relative p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 
                backdrop-blur-sm hover:border-neutral-700 transition-all duration-300
                hover:shadow-lg hover:shadow-purple-500/10">
                {tech.type === "image" ? (
                  <img
                    src={tech.src}
                    alt={tech.alt}
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <tech.Icon className={`text-6xl ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
                )}
                
                {/* Tooltip */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-3 py-1 text-sm text-white bg-neutral-900 rounded-md shadow-lg whitespace-nowrap">
                    {tech.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
