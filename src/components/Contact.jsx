import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({ title: "Missing Information", text: "Please fill in all required fields", icon: "warning", confirmButtonText: "Ok", confirmButtonColor: "#7c3aed" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    Swal.fire({ title: "Sending…", text: "Please wait.", allowOutsideClick: false, showConfirmButton: false, willOpen: () => Swal.showLoading() });
    try {
      await emailjs.send("service_nqxbucn", "template_gi8nnhx", {
        from_name: formData.name,
        from_email: formData.email,
        to_name: "Abdul Salam",
        message: formData.message,
      }, "ASnw5-Oxz2bzG4Juj");
      await Swal.fire({ title: "Message Sent!", text: "Abdul Salam will get back to you soon!", icon: "success", confirmButtonText: "Great!", confirmButtonColor: "#7c3aed" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email", error);
      Swal.fire({ title: "Oops…", text: "Something went wrong! Please try again later.", icon: "error", confirmButtonText: "Ok", confirmButtonColor: "#7c3aed" });
    }
  };

  const inputCls = "w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 focus:ring-2 focus:ring-violet-500/15 transition-all duration-200 text-sm";

  return (
    <section className="relative py-24 lg:py-32 border-t border-neutral-100 dark:border-neutral-900" id="contact">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-5xl">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Have a project in mind or want to collaborate? I&apos;m open to new opportunities and would love to hear from you.
            </p>

            <div className="space-y-4">
              {[
                { Icon: MapPin, label: "Location", value: CONTACT.address },
                { Icon: Phone, label: "Phone", value: CONTACT.phoneNo, href: `tel:${CONTACT.phoneNo}` },
                { Icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              ].map(({ Icon, label, value, href }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:text-violet-600 dark:hover:text-violet-400 transition-colors break-all">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1.5">Name</label>
                  <input name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required className={inputCls} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1.5">Email</label>
                  <input name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required className={inputCls} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1.5">Message</label>
                <textarea name="message" placeholder="Tell me about your project…" value={formData.message} onChange={handleChange} required rows={5} className={`${inputCls} resize-none`} />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-100 transition-colors duration-200 shadow-sm"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
