import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <section className="relative py-24 lg:py-32 border-t border-neutral-100 dark:border-neutral-900" id="about">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Left — sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4">
              About Me
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
              Building products<br />people love<br />to use
            </h2>
          </motion.div>

          {/* Right — bio + stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3 space-y-10"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base lg:text-lg leading-relaxed">
              {ABOUT_TEXT}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
