"use client";
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import { FaChalkboardTeacher, FaLaptop, FaUserGraduate, FaCertificate } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Tutors",
      description: "Learn from highly qualified tutors with years of teaching experience in their subjects."
    },
    {
      icon: <FaLaptop />,
      title: "Online & In-Person",
      description: "Flexible learning options with both virtual and face-to-face tutoring sessions."
    },
    {
      icon: <FaUserGraduate />,
      title: "Personalized Learning",
      description: "Customized lesson plans tailored to your specific learning needs and goals."
    },
    {
      icon: <FaCertificate />,
      title: "Guaranteed Results",
      description: "Our proven methodology ensures improved academic performance and confidence."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4">What We Offer</h2>
          <p className="text-xl text-gray-600">
            Comprehensive academic support designed to help students achieve excellence
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;