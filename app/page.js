import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata = {
  title: "Watford Tutoring Academy | Home",
  description:
    "Watford Tutoring Academy provides expert tutoring services to help students reach their full academic potential.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-blue-100">Students Taught</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">95%</h3>
              <p className="text-blue-100">Grade Improvements</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">30+</h3>
              <p className="text-blue-100">Expert Tutors</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="text-blue-100">Subjects Covered</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Academic Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join Watford Tutoring Academy today and take the first step toward
            academic excellence and confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn bg-white text-primary hover:bg-blue-50"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/why-choose-us"
              className="btn border-2 border-white text-white hover:bg-white/10"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
