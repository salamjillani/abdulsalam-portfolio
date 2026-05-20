import { motion } from "framer-motion";
import { Github, Linkedin, MailIcon, PhoneIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const socialLinks = [
    { Icon: Linkedin, href: "https://www.linkedin.com/in/salamjillani", label: "LinkedIn" },
    { Icon: Github, href: "https://github.com/salamjillani", label: "GitHub" },
    { Icon: PhoneIcon, href: "tel:+923302488872", label: "Phone" },
    { Icon: MailIcon, href: "mailto:salamjillani@gmail.com", label: "Email" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
    >
      <div className="absolute inset-0 bg-white/85 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200/70 dark:border-neutral-800/70" />

      <div className="container mx-auto relative max-w-7xl">
        <div className="flex items-center justify-between px-2">
          <a href="#" className="text-lg font-bold text-neutral-900 dark:text-white tracking-tight">
            SALAM
          </a>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="flex items-center gap-0.5">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-neutral-400 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
                  title={label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
