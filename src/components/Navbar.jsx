import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const contactInfo = {
    linkedin: "https://www.linkedin.com/in/abdulsalamshah",
    github: "https://github.com/codesofsalam",
    phone: "+923302488872",
    email: "codesofsalam@gmail.com",
  };

  const socialLinks = [
    {
      Icon: FaLinkedin,
      href: contactInfo.linkedin,
      color: "hover:text-blue-500",
      hoverTitle: "LinkedIn Profile",
    },
    {
      Icon: FaGithub,
      href: contactInfo.github,
      color: "hover:text-neutral-100",
      hoverTitle: "GitHub Profile",
    },
    {
      Icon: FaPhone,
      href: `tel:${contactInfo.phone}`,
      color: "hover:text-green-500",
      hoverTitle: "Call Me",
    },
    {
      Icon: FaEnvelope,
      href: `mailto:${contactInfo.email}`,
      color: "hover:text-red-500",
      hoverTitle: "Send Email",
    },
  ];

  return (
    <nav className="py-6 px-8 fixed top-0 left-0 right-0 z-50 bg-neutral-950/50 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-shrink-0 items-center"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            ABDUL SALAM.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          {socialLinks.map(({ Icon, href, color, hoverTitle }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`
                text-neutral-400 transition-all duration-300 
                ${color} cursor-pointer
              `}
              title={hoverTitle}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
