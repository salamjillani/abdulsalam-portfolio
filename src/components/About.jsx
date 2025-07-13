import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";

const About = () => {

  return (
    <div className="font-mono relative min-h-screen flex items-center" id="about">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-200 dark:bg-neutral-700 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-neutral-300 dark:bg-neutral-600 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-neutral-200 dark:bg-neutral-800 rounded-2xl blur-2xl opacity-50" />
              <img
                src="assets/about.jpg"
                alt="Software development workspace"
                className="relative w-72 h-96 lg:w-96 lg:h-[500px] rounded-2xl object-cover border-4 border-white dark:border-neutral-900 shadow-2xl"
              />
              
              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-neutral-900 p-6 rounded-2xl border-4 border-white dark:border-neutral-900 shadow-2xl"
              >
                <div className="text-center">
                  <span className="block text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                    1+
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    Years Experience
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight"
              >
                About{" "}
                <span className="text-neutral-700 dark:text-neutral-300">
                  Me
                </span>
              </motion.h2>
              
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed max-w-xl"
            >
              {ABOUT_TEXT}
            </motion.p>

   
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;