import { motion } from "framer-motion";
import { Github, Linkedin, MailIcon, PhoneIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const contactInfo = {
    linkedin: "https://www.linkedin.com/in/salamjillani",
    github: "https://github.com/salamjillani",
    phone: "+923302488872",
    email: "salamjillanis@gmail.com",
  };

  const socialLinks = [
    {
      Icon: Linkedin,
      href: contactInfo.linkedin,
      color:
        "hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-400",
      hoverTitle: "LinkedIn Profile",
      bgColor: "group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10",
    },
    {
      Icon: Github,
      href: contactInfo.github,
      color:
        "hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100",
      hoverTitle: "GitHub Profile",
      bgColor:
        "group-hover:bg-neutral-900/10 dark:group-hover:bg-neutral-100/10",
    },
    {
      Icon: PhoneIcon,
      href: `tel:${contactInfo.phone}`,
      color:
        "hover:text-green-500 dark:text-neutral-400 dark:hover:text-green-400",
      hoverTitle: "Phone Contact",
      bgColor: "group-hover:bg-green-500/10 dark:group-hover:bg-green-400/10",
    },
    {
      Icon: MailIcon,
      href: `mailto:${contactInfo.email}`,
      color: "hover:text-red-500 dark:text-neutral-400 dark:hover:text-red-400",
      hoverTitle: "Send Email",
      bgColor: "group-hover:bg-red-500/10 dark:group-hover:bg-red-400/10",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-4 px-6 fixed top-0 left-0 right-0 z-50"
    >
      <div className="absolute inset-0 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800" />

      <div className="font-mono container mx-auto relative">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-shrink-0 items-center"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent hover:from-purple-500 hover:via-pink-600 hover:to-purple-700 dark:hover:from-purple-400 dark:hover:via-pink-500 dark:hover:to-purple-600 transition-all duration-300">
              SALAM.
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 sm:gap-4"
          >
            <ThemeToggle />
            {socialLinks.map(
              ({ Icon, href, color, hoverTitle, bgColor }, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span
                    className={`absolute inset-0 rounded-lg ${bgColor} blur opacity-0 group-hover:opacity-100 transition-all duration-300`}
                  />
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      relative flex items-center justify-center w-10 h-10 rounded-lg
                      text-neutral-600 dark:text-neutral-400 transition-all duration-300
                      hover:shadow-lg group-hover:shadow-purple-500/20 dark:group-hover:shadow-purple-400/20
                      ${color}
                    `}
                    title={hoverTitle}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
