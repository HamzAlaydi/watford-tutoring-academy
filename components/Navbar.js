"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 bg-white shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 10 }}
            className="text-primary font-bold text-2xl"
          >
            Watford Academy
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/why-choose-us">Why Choose Us</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/201044381820"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp size={20} />
            <span className="hidden sm:inline">+201044381820</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink
                href="/why-choose-us"
                onClick={() => setIsOpen(false)}
              >
                Why Choose Us
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

const NavLink = ({ href, children }) => (
  <Link href={href} className="relative group">
    <span className="text-gray-700 hover:text-primary transition-colors">
      {children}
    </span>
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    className="block py-2 text-gray-700 hover:text-primary transition-colors border-b border-gray-100"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
