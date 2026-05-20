import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTailwindcss, SiMysql, SiFigma } from "react-icons/si";
import { FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const techs = [
  { Icon: RiReactjsLine, color: "text-cyan-500", name: "React" },
  { Icon: FaNodeJs, color: "text-green-600", name: "Node.js" },
  { Icon: FaJsSquare, color: "text-yellow-500", name: "JavaScript" },
  { Icon: SiMongodb, color: "text-green-500", name: "MongoDB" },
  { Icon: SiTailwindcss, color: "text-cyan-400", name: "Tailwind CSS" },
  { Icon: FaHtml5, color: "text-orange-500", name: "HTML5" },
  { Icon: FaCss3Alt, color: "text-blue-500", name: "CSS3" },
  { Icon: SiMysql, color: "text-blue-500", name: "MySQL" },
  { Icon: SiFigma, color: "text-pink-500", name: "Figma" },
  { Icon: FaGitAlt, color: "text-orange-500", name: "Git" },
  { type: "image", src: "./assets/expjs.png", name: "Express.js" },
];

const FloatingIcon = ({ tech, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors cursor-default"
  >
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2.8 + delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {tech.type === "image" ? (
        <img src={tech.src} alt={tech.name} className="w-9 h-9 object-contain" />
      ) : (
        <tech.Icon className={`text-4xl ${tech.color}`} />
      )}
    </motion.div>
    <span className="text-[11px] font-medium text-neutral-600 dark:text-neutral-400 text-center leading-tight">
      {tech.name}
    </span>
  </motion.div>
);

const Technologies = () => {
  return (
    <section className="relative py-24 lg:py-32 border-t border-neutral-100 dark:border-neutral-900">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
            Stack &amp; Tools
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
            Technologies I work with
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {techs.map((tech, i) => (
            <FloatingIcon key={i} tech={tech} delay={(i % 7) * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
