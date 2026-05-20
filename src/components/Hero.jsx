import { motion } from "framer-motion";
import { DownloadIcon, ArrowRight } from "lucide-react";

const profilePicture = "/pic.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest"
              >
                Full Stack Developer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-neutral-900 dark:text-white"
              >
                <span className="block mb-2">Hi, I&apos;m</span>
                <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Abdul Salam
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/Abdul Salam-CV.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 px-7 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-100 transition-all duration-200 shadow-sm"
              >
                <DownloadIcon className="w-4 h-4" />
                Download CV
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold rounded-lg hover:border-neutral-900 dark:hover:border-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-200"
              >
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex gap-10 pt-2 border-t border-neutral-200 dark:border-neutral-800"
            >
              {[
                { value: "1+", label: "Years Exp." },
                { value: "20+", label: "Projects" },
                { value: "27+", label: "5★ Reviews" },
              ].map((stat, i) => (
                <div key={i} className="pt-5">
                  <div className="text-2xl font-bold text-neutral-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-violet-500 to-cyan-400 rounded-full opacity-30 blur-lg" />
              <img
                src={profilePicture}
                alt="Abdul Salam"
                className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover ring-4 ring-white dark:ring-neutral-950"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
