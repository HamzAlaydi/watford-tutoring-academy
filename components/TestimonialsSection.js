"use client";
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "My son's grades improved dramatically after just a few months with Watford Tutoring Academy. The personalized approach made all the difference.",
      author: "Sarah J.",
      role: "Parent of GCSE Student"
    },
    {
      quote: "The tutors here genuinely care about their students' success. They're not just knowledgeable but also passionate about teaching.",
      author: "Michael T.",
      role: "A-Level Student"
    },
    {
      quote: "As a struggling math student, I never thought I'd enjoy the subject. Thanks to my tutor at Watford, I now look forward to every session!",
      author: "Emma P.",
      role: "Year 10 Student"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our students and parents
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl relative"
            >
              <FaQuoteLeft className="text-primary/20 text-4xl absolute top-4 left-4" />
              <div className="relative z-10">
                <p className="italic text-gray-700 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;