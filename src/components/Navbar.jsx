import { motion } from "framer-motion";
import { Github, Linkedin, MailIcon, PhoneIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const contactInfo = {
    linkedin: "https://www.linkedin.com/in/salamjillani",
    github: "https://github.com/salamjillani",
    phone: "+923302488872",
    email: "salamjillani@gmail.com",
  };

  const socialLinks = [
    {
      Icon: Linkedin,
      href: contactInfo.linkedin,
      hoverTitle: "LinkedIn Profile",
    },
    {
      Icon: Github,
      href: contactInfo.github,
      hoverTitle: "GitHub Profile",
    },
    {
      Icon: PhoneIcon,
      href: `tel:${contactInfo.phone}`,
      hoverTitle: "Phone Contact",
    },
    {
      Icon: MailIcon,
      href: `mailto:${contactInfo.email}`,
      hoverTitle: "Send Email",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-3 sm:py-4 md:py-6 px-4 sm:px-6 fixed top-0 left-0 right-0 z-50"
    >
      <div className="absolute inset-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200/50 dark:border-neutral-800/50" />

      <div className="font-mono container mx-auto relative max-w-7xl">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
              SALAM
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 sm:gap-4 md:gap-6"
          >
            <ThemeToggle />
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
              {socialLinks.map(({ Icon, href, hoverTitle }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors duration-200"
                  title={hoverTitle}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;