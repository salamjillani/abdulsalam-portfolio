import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from "../constants";
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
      to_name: "Web Wizard",
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Message sent successfully! - Abdul Salam will get back to you soon!", response);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-24 bg-gradient-to-b relative overflow-hidden" id="contact">
      {/* Animated background elements - adjusted for better mobile display */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - improved mobile spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-purple-400 bg-purple-500/10 tracking-wider uppercase mb-3 sm:mb-4"
          >
            Let&apos;s Connect
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            Get In
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
              {" "}Touch
            </span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Info Section - improved for mobile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="bg-neutral-900/50 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-neutral-800/50 p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Contact Information
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {/* Contact cards - mobile optimized */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 sm:gap-6 p-3 sm:p-4 bg-neutral-800/50 rounded-lg sm:rounded-xl"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-purple-500/10 rounded-lg">
                      <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-neutral-300 font-medium mb-0.5 sm:mb-1">Location</p>
                      <p className="text-xs sm:text-sm text-neutral-400">{CONTACT.address}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 sm:gap-6 p-3 sm:p-4 bg-neutral-800/50 rounded-lg sm:rounded-xl"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-purple-500/10 rounded-lg">
                      <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-neutral-300 font-medium mb-0.5 sm:mb-1">Phone</p>
                      <p className="text-xs sm:text-sm text-neutral-400">{CONTACT.phoneNo}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 sm:gap-6 p-3 sm:p-4 bg-neutral-800/50 rounded-lg sm:rounded-xl"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-purple-500/10 rounded-lg">
                      <MailIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-neutral-300 font-medium mb-0.5 sm:mb-1">Email</p>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="text-xs sm:text-sm text-neutral-400 hover:text-purple-400 transition-colors"
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Section - mobile optimized */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.form
                onSubmit={handleSubmit}
                className="bg-neutral-900/50 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-neutral-800/50 p-6 sm:p-8 shadow-xl space-y-4 sm:space-y-6"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Send Message
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-neutral-800/50 rounded-lg sm:rounded-xl border border-neutral-700 focus:outline-none focus:border-purple-500 text-sm sm:text-base text-neutral-300 placeholder-neutral-500"
                    />
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-neutral-800/50 rounded-lg sm:rounded-xl border border-neutral-700 focus:outline-none focus:border-purple-500 text-sm sm:text-base text-neutral-300 placeholder-neutral-500"
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
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-neutral-800/50 rounded-lg sm:rounded-xl border border-neutral-700 focus:outline-none focus:border-purple-500 text-sm sm:text-base text-neutral-300 placeholder-neutral-500"
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transition-all"
                >
                  <SendIcon className="w-4 h-4 sm:w-5 sm:h-5" />
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