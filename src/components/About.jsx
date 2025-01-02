
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  const skills = [
    { name: "Frontend", color: "from-purple-500/20 to-purple-600/20" },
    { name: "Backend", color: "from-pink-500/20 to-pink-600/20" },
  ];

  return (
    <div className="py-24 relative" id="about">
      {/* Enhanced background gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center space-y-4"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-sm font-medium text-purple-400 tracking-wider uppercase">
            Get to know me
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            About
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              {" "}Me
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center gap-16 lg:gap-24">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12"
          >
            <div className="relative">
              {/* Decorative borders */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-purple-500/20 rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-pink-500/20 rounded-2xl" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-purple-500/50 via-pink-500/50 to-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10 animate-pulse" />
                <img
                  src="/assets/about.jpg"
                  alt="About me"
                  className="relative rounded-xl w-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-8 -right-8 bg-neutral-900/90 backdrop-blur-md p-6 rounded-2xl border border-neutral-800 shadow-xl hover:shadow-purple-500/20 transition-shadow duration-300"
              >
                <div className="text-center">
                  <span className="block text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    2+
                  </span>
                  <span className="text-sm text-neutral-300">
                    Years Experience
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-6/12 space-y-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-neutral-300 leading-relaxed"
            >
              {ABOUT_TEXT}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`
                    px-6 py-3 rounded-full text-neutral-200
                    bg-gradient-to-r ${skill.color}
                    border border-neutral-800
                    hover:border-neutral-700
                    shadow-lg hover:shadow-purple-500/20
                    transition-all duration-300 cursor-default
                  `}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;