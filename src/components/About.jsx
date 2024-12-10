import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">
            Get to know me
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            About
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Me
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-purple-500/20 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-pink-500/20 rounded-2xl" />
              =
              <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-purple-500/50 via-pink-500/50 to-purple-500/50">
                <img
                  src={aboutImage}
                  alt="About me"
                  className="rounded-xl w-full object-cover"
                />
              </div>
              =
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-neutral-900/90 backdrop-blur-sm p-4 rounded-2xl border border-neutral-800"
              >
                <div className="text-center">
                  <span className="block text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    2
                  </span>
                  <span className="text-sm text-neutral-400">
                    Years Experience
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-6/12"
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-neutral-300 leading-relaxed"
              >
                {ABOUT_TEXT}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2 pt-4"
              >
                {["Frontend", "Backend"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-neutral-800/50 rounded-full text-sm text-neutral-300 hover:bg-neutral-700/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
