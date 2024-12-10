import { HERO_CONTENT } from "../constants";
import profilePicture from "../assets/mypicture1.jpg";
import { motion } from "framer-motion";
import { DownloadIcon, ArrowRightIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center py-24 pt-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-2/3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="text-5xl lg:text-6xl font-bold"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Abdul Salam
                </span>
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl lg:text-3xl font-medium text-neutral-300 mb-4">
                Full Stack Developer
              </h2>

              <p className="text-neutral-400 max-w-xl leading-relaxed mb-6">
                {HERO_CONTENT}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                <DownloadIcon className="w-5 h-5" />
                Download CV
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 border border-neutral-700 text-neutral-300 rounded-xl hover:bg-neutral-800 transition-all"
              >
                Contact Me
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-full lg:w-1/3 mt-12 lg:mt-0 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50" />
              <img
                src={profilePicture}
                alt="Abdul Salam"
                className="relative z-10 rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover border-4 border-neutral-800 shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
