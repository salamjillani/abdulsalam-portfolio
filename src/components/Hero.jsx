import { motion } from "framer-motion";
import { DownloadIcon } from "lucide-react";
const profilePicture = "/pic.png";

const Hero = () => {
  return (
    <div className="font-mono relative min-h-screen flex items-center mt-20">
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
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight"
              >
                Hi 👋,<br />
                <span className="block mt-4">
                  I&apos;m{" "}
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Abdul Salam
                  </span>
                </span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl lg:text-2xl font-medium text-neutral-600 dark:text-neutral-400"
              >
                Full Stack Developer
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="/Abdul Salam-CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200"
              >
                <DownloadIcon className="w-5 h-5" />
                Download CV
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 font-medium rounded-lg hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-neutral-900 transition-colors duration-200"
              >
                Let&apos;s Discuss
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-neutral-200 dark:bg-neutral-800 rounded-full blur-2xl opacity-50" />
              <img
                src={profilePicture}
                alt="Abdul Salam"
                className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white dark:border-neutral-900 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;