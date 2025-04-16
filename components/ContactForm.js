"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS IDs
      const serviceId = "service_2xdhuaa";
      const templateId = "template_r9sc4r8";
      const publicKey = "8_U_jnqZ9hjg825Om";

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || "Not provided",
        message: data.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
          Thank you for your message! We'll get back to you shortly.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
          There was an error sending your message. Please try again or contact
          us directly.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className={`w-full rounded-lg border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary`}
            placeholder="Your name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className={`w-full rounded-lg border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary`}
            placeholder="your.email@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            placeholder="Your phone number"
            {...register("phone")}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className={`w-full rounded-lg border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary`}
            placeholder="How can we help you?"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full btn btn-primary flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
