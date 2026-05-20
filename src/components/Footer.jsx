import { motion } from "framer-motion";
import { Github, Linkedin, MailIcon, PhoneIcon } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/salamjillani", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/salamjillani", label: "LinkedIn" },
    { icon: MailIcon, href: "mailto:salamjillani@gmail.com", label: "Email" },
    { icon: PhoneIcon, href: "tel:+923302488872", label: "Phone" },
  ];

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <span className="text-lg font-bold text-neutral-900 dark:text-white tracking-tight">
            Abdul Salam
          </span>

          <div className="flex items-center gap-1">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -1 }}
                className="flex items-center justify-center w-9 h-9 rounded-lg text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            © {currentYear} Abdul Salam
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
