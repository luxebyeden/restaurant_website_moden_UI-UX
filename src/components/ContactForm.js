import React, { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import {
  MdMail,
  MdSend,
  MdCheckCircle,
  MdAlertTriangle,
  MdPhone,
} from "react-icons/md";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("idle");
    setErrorMessage("");

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setSubmissionStatus("error");
      setErrorMessage("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      setSubmissionStatus("error");
      setErrorMessage("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }
    if (!/^\+?[0-9]{10,14}$/.test(formData.phone)) {
      setSubmissionStatus("error");
      setErrorMessage("Please enter a valid phone number.");
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData(e.target);
      formDataToSend.append(
        "access_key",
        "e4bf6180-7082-4638-87ea-2f0e0e195187"
      ); // Replace with your actual access key

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmissionStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Web3Forms Error:", data);
        setSubmissionStatus("error");
        setErrorMessage(
          data.message || "Failed to submit form. Please try again."
        );
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setSubmissionStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app__bg">
      <div className="relative p-8 rounded-xl shadow-2xl border border-gray-800/50 w-full max-w-2xl mx-auto ">
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center  mb-8 headtext__cormorant"
          >
            Contact Us
          </motion.h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <label htmlFor="name" className="text-gray-300 mb-1 block">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full px-4 py-3 bg-black/20 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-gray-400 ${
                  submissionStatus === "error" && !formData.name.trim()
                    ? "border-red-500 focus:ring-red-500/50"
                    : ""
                }`}
                aria-invalid={
                  submissionStatus === "error" && !formData.name.trim()
                }
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <label htmlFor="email" className="text-gray-300 mb-1 block">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full px-4 py-3 bg-black/20 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-gray-400 ${
                  submissionStatus === "error" && !formData.email.trim()
                    ? "border-red-500 focus:ring-red-500/50"
                    : submissionStatus === "error" &&
                      formData.email.trim() &&
                      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
                    ? "border-red-500 focus:ring-red-500/50"
                    : ""
                }`}
                aria-invalid={
                  submissionStatus === "error" &&
                  (!formData.email.trim() ||
                    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
                }
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <label htmlFor="phone" className="text-gray-300 mb-1 block">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className={`w-full px-4 py-3 bg-black/20 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-gray-400 ${
                  submissionStatus === "error" && !formData.phone.trim()
                    ? "border-red-500 focus:ring-red-500/50"
                    : submissionStatus === "error" &&
                      formData.phone.trim() &&
                      !/^\+?[0-9]{10,14}$/.test(formData.phone)
                    ? "border-red-500 focus:ring-red-500/50"
                    : ""
                }`}
                aria-invalid={
                  submissionStatus === "error" &&
                  (!formData.phone.trim() ||
                    !/^\+?[0-9]{10,14}$/.test(formData.phone))
                }
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <label htmlFor="subject" className="text-gray-300 mb-1 block">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject of your message"
                className="w-full px-4 py-3 bg-black/20 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-gray-400"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <label htmlFor="message" className="text-gray-300 mb-1 block">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className={`w-full px-4 py-3 bg-black/20 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-gray-400 resize-none ${
                  submissionStatus === "error" && !formData.message.trim()
                    ? "border-red-500 focus:ring-red-500/50"
                    : ""
                }`}
                aria-invalid={
                  submissionStatus === "error" && !formData.message.trim()
                }
              />
            </motion.div>

            {submissionStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-md border border-red-500/20"
              >
                <FiAlertTriangle className="w-5 h-5" />
                {errorMessage}
              </motion.div>
            )}

            {submissionStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="flex items-center gap-2 text-green-500 bg-green-500/10 p-3 rounded-md border border-green-500/20"
              >
                <MdCheckCircle className="w-5 h-5" />
                Message sent successfully! We'll get back to you soon.
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 text-base bg-gradient-to-r from-yellow-600 to-yellow-400 text-white font-semibold rounded-md transition-colors duration-300 hover:from-yellow-400 hover:to-yellow-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 flex items-center justify-center gap-2" // Added flex, items-center, justify-center, and gap-2
            >
              {isSubmitting ? (
                <>
                  <MdMail className="animate-spin w-5 h-5" />{" "}
                  {/* Increased icon size slightly */}
                  Sending...
                </>
              ) : (
                <>
                  <MdSend className="w-5 h-5" />{" "}
                  {/* Increased icon size slightly */}
                  Send Message
                </>
              )}
            </motion.button>
          </form>
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>
              This form is protected by hCaptcha and its
              <a
                href="https://hcaptcha.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Privacy Policy
              </a>
              and
              <a
                href="https://hcaptcha.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
