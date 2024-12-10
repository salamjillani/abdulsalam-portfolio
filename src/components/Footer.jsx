import { motion } from "framer-motion";
import { HeartIcon } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 relative bg-neutral-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center text-neutral-400 border-t border-neutral-800 pt-4 px-4"
      >
        <p className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base leading-relaxed">
          © {currentYear} Abdul Salam. Made with{" "}
          <HeartIcon className="text-pink-500 w-5 h-5 inline" />
          Passion and Code
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
