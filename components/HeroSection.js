"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-20 overflow-hidden">
      <div className="container-custom relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Premier Academic Support
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Unlock Your
              <span className="block text-primary">Academic Potential</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              At Watford Tutoring Academy, we provide personalized learning experiences to help students excel in their academic journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Get Started
              </Link>
              <Link href="/why-choose-us" className="btn bg-white border border-gray-200 text-gray-800 hover:bg-gray-50">
                Learn More
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white p-6 rounded-2xl shadow-xl relative z-10">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-4">Specialized Tutoring</h3>
                  <p className="mb-4">Mathematics • Science • Languages • Humanities</p>
                  <div className="inline-flex items-center gap-4 mt-4">
                    <div className="h-20 w-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl font-bold">95%</span>
                    </div>
                    <p className="text-left">of our students improve their grades within 3 months</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-accent/20 rounded-full blur-lg"></div>
            <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-primary/20 rounded-full blur-lg"></div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;