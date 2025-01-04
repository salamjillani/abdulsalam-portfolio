import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_ccm7sfw";
    const templateId = "template_m7rwozo";
    const publicKey = "8fhpfjLJAZs8-jOQw";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Abdul Salam",
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert(
          "Message sent successfully! - Abdul Salam will get back to you soon!",
          response
        );
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  return (
    <div
      className="font-mono min-h-screen py-8 md:py-12 lg:py-24 bg-gradient-to-b relative overflow-hidden px-4 sm:px-6"
      id="contact"
    >
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-36 md:w-72 lg:w-96 h-36 md:h-72 lg:h-96 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/4 w-36 md:w-72 lg:w-96 h-36 md:h-72 lg:h-96 bg-pink-500/10 dark:bg-pink-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block px-3 py-1 text-xs md:text-sm font-medium text-purple-500 dark:text-purple-400 bg-purple-500/10 dark:bg-purple-400/10 rounded-full tracking-wider uppercase mb-2"
          >
            Let&apos;s Connect
          </motion.span>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100">
            Get In
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Touch
            </span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 md:space-y-6"
            >
              <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl rounded-lg md:rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 p-4 md:p-6 lg:p-8 shadow-xl">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Contact Information
                </h3>

                <div className="space-y-3 md:space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 md:gap-4 p-3 bg-neutral-100/50 dark:bg-neutral-800/50 rounded-lg"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-purple-500/10 dark:bg-purple-400/10 rounded-lg">
                      <MapPinIcon className="w-4 h-4 md:w-5 md:h-5 text-purple-500 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 font-medium mb-0.5">
                        Location
                      </p>
                      <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                        {CONTACT.address}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 md:gap-4 p-3 bg-neutral-100/50 dark:bg-neutral-800/50 rounded-lg"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-purple-500/10 dark:bg-purple-400/10 rounded-lg">
                      <PhoneIcon className="w-4 h-4 md:w-5 md:h-5 text-purple-500 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 font-medium mb-0.5">
                        Phone
                      </p>
                      <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                        {CONTACT.phoneNo}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 md:gap-4 p-3 bg-neutral-100/50 dark:bg-neutral-800/50 rounded-lg"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-purple-500/10 dark:bg-purple-400/10 rounded-lg">
                      <MailIcon className="w-4 h-4 md:w-5 md:h-5 text-purple-500 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 font-medium mb-0.5">
                        Email
                      </p>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl rounded-lg md:rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 p-4 md:p-6 lg:p-8 shadow-xl space-y-4"
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Send Message
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-100/50 dark:bg-neutral-800/50 rounded-lg border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-purple-500 text-sm text-neutral-900 dark:text-neutral-300 placeholder-neutral-500"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-100/50 dark:bg-neutral-800/50 rounded-lg border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-purple-500 text-sm text-neutral-900 dark:text-neutral-300 placeholder-neutral-500"
                    />
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-neutral-100/50 dark:bg-neutral-800/50 rounded-lg border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-purple-500 text-sm text-neutral-900 dark:text-neutral-300 placeholder-neutral-500"
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all"
                >
                  <SendIcon className="w-4 h-4" />
                  Send Message
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
