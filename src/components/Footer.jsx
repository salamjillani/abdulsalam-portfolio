import { motion } from "framer-motion";
import { Heart, Github, Linkedin, MailIcon, PhoneIcon } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/codesofsalam", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/abdulsalamshah", label: "LinkedIn" },
    { icon: MailIcon, href: "mailto:codesofsalam@gmail.com", label: "Email" },
    { icon: PhoneIcon, href: "tel:+923302488872", label: "Phone" }, 
  ];

  return (
    <footer className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8"
        >
        
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-800"></div>
            </div>
            <div className="relative flex justify-center">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-neutral-900 px-3 py-1"
              >
                <Heart className="w-6 h-6 text-pink-500" />
              </motion.div>
            </div>
          </div>

   
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-sm md:text-base text-neutral-400">
              <span className="font-medium">© {currentYear} Abdul Salam.</span>
              <br className="sm:hidden" />
              <span className="inline-block sm:ml-2">
                Crafted with Passion & Code
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>


      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 rounded-full blur-3xl"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2  rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
