"use client";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Watford Tutoring Academy</h3>
            <p className="text-gray-300">
              Excellence in education. Transforming students through
              personalized learning and academic support.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/why-choose-us"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-green-500" />
                <a
                  href="https://wa.me/201044381820"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +201044381820
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <a
                  href="mailto:hamza.alaydi.99@outlook.sa"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  hamza.alaydi.99@outlook.sa
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span className="text-gray-300">Watford, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Watford Tutoring Academy. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
