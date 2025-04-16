"use client";
import ContactForm from "../../components/ContactForm";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import GoogleMap from "@/components/GoogleMap";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary" />,
      title: "Location",
      details: "Watford Education Center, High Street, Watford, UK",
    },
    {
      icon: <FaPhoneAlt className="text-2xl text-primary" />,
      title: "WhatsApp",
      details: "+201044381820",
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary" />,
      title: "Email",
      details: "hamza.alaydi.99@outlook.sa",
    },
    {
      icon: <FaClock className="text-2xl text-primary" />,
      title: "Office Hours",
      details: "Monday-Friday: 9am-7pm, Saturday: 10am-4pm",
    },
  ];

  return (
    <>
      <section className="pt-16 pb-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container-custom text-center">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Have questions or ready to start your academic journey? We're here
            to help you every step of the way.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 bg-blue-50 p-4 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-4">Operating Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span className="text-gray-600">9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-gray-600">Closed</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <GoogleMap />
        </div>
      </section>
    </>
  );
}
