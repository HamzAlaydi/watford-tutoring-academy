"use client";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

const WhyChooseSection = () => {
  const reasons = [
    {
      title: "Experienced & Qualified Tutors",
      description:
        "Our tutors are not only subject experts but also experienced educators who know how to effectively communicate complex concepts.",
    },
    {
      title: "Personalized Learning Approach",
      description:
        "We create customized learning plans based on each student's unique needs, learning style, and academic goals.",
    },
    {
      title: "Proven Track Record",
      description:
        "Our students consistently achieve outstanding results, with 95% improving their grades within the first term.",
    },
    {
      title: "Comprehensive Subject Coverage",
      description:
        "From mathematics and sciences to languages and humanities, we provide expert tutoring across the curriculum.",
    },
    {
      title: "Flexible Learning Options",
      description:
        "Choose between in-person sessions at our academy or convenient online tutoring from the comfort of your home.",
    },
    {
      title: "Regular Progress Reports",
      description:
        "Stay informed about your academic journey with detailed feedback and progress assessments.",
    },
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
          <h2 className="mb-4">Why Choose Watford Tutoring Academy?</h2>
          <p className="text-xl text-gray-600">
            We're committed to helping students achieve academic excellence
            through our comprehensive approach to education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="bg-primary/10 text-primary rounded-full p-2">
                  <FaCheck />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="/contact" className="btn btn-primary inline-block">
            Start Your Academic Journey Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
