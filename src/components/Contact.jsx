import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

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

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      Swal.fire({
        title: "Missing Information",
        text: "Please fill in all required fields",
        icon: "warning",
        confirmButtonText: "Ok",
        confirmButtonColor: "#171717",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    Swal.fire({
      title: "Sending Message",
      text: "Please wait...",
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    const serviceId = "service_nqxbucn";
    const templateId = "template_gi8nnhx";
    const publicKey = "ASnw5-Oxz2bzG4Juj";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Abdul Salam",
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      await Swal.fire({
        title: "Message Sent!",
        text: "Abdul Salam will get back to you soon!",
        icon: "success",
        confirmButtonText: "Great!",
        confirmButtonColor: "#171717",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email", error);

      Swal.fire({
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#171717",
      });
    }
  };

  return (
    <div className="font-mono relative min-h-screen py-12 md:py-16 lg:py-20" id="contact">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-10">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-neutral-200 dark:bg-neutral-700 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-neutral-300 dark:bg-neutral-600 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto px-4">
            Have a project in mind? Let&apos;s discuss how we can work together
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-600 dark:text-neutral-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1 text-sm sm:text-base">
                      Location
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
                      {CONTACT.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-600 dark:text-neutral-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1 text-sm sm:text-base">
                      Phone
                    </h4>
                    <a
                      href={`tel:${CONTACT.phoneNo}`}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors text-sm sm:text-base"
                    >
                      {CONTACT.phoneNo}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-600 dark:text-neutral-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1 text-sm sm:text-base">
                      Email
                    </h4>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors text-sm sm:text-base break-all"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                    Send Message
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Your Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:border-neutral-900 dark:focus:border-neutral-100 focus:outline-none transition-colors text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Your Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:border-neutral-900 dark:focus:border-neutral-100 focus:outline-none transition-colors text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:border-neutral-900 dark:focus:border-neutral-100 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;