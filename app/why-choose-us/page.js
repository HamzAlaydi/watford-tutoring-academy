"use client";
import WhyChooseSection from "../../components/WhyChooseSection";
import { FaTrophy, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhyChooseUs() {
  const achievements = [
    {
      icon: <FaTrophy className="text-4xl text-yellow-500" />,
      title: "95% Success Rate",
      description: "95% of our students show marked improvement in grades within the first 3 months of tutoring.",
    },
    {
      icon: <FaUserGraduate className="text-4xl text-primary" />,
      title: "University Acceptances",
      description: "Our A-Level students have gone on to attend top universities including Oxford, Cambridge, and Imperial College.",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-secondary" />,
      title: "Expert Educators",
      description: "Our tutoring team includes PhD holders, experienced teachers, and industry professionals.",
    },
  ];

  return (
    <>
      {/* Header Section - Responsive Padding */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Why Choose Watford Tutoring Academy</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-blue-100">
            Excellence, personalization, and proven results make us the premier choice for academic support
          </p>
        </div>
      </section>

      {/* Vision & Mission - Stack on Mobile */}
      <section className="py-12 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-blue-50 p-6 sm:p-8 rounded-xl relative">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Vision</h2>
                <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                  To create a world where every student has access to the highest quality education that nurtures their unique talents and abilities.
                </p>
                <p className="text-base sm:text-lg text-gray-700">
                  We envision a future where learning is personalized, engaging, and transformative, enabling students to reach their full potential.
                </p>
                <div className="absolute -top-4 -right-4 h-8 w-8 sm:h-12 sm:w-12 bg-primary rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 h-6 w-6 sm:h-8 sm:w-8 bg-accent rounded-full"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 md:mt-0"
            >
              <div className="bg-blue-50 p-6 sm:p-8 rounded-xl relative">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Mission</h2>
                <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                  To provide exceptional, personalized tutoring that builds confidence, fosters critical thinking, and instills a lifelong love of learning.
                </p>
                <p className="text-base sm:text-lg text-gray-700">
                  We are committed to creating a supportive environment where students develop the skills and knowledge they need to excel academically and beyond.
                </p>
                <div className="absolute -top-3 -left-3 h-8 w-8 sm:h-10 sm:w-10 bg-secondary rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 h-10 w-10 sm:h-14 sm:w-14 bg-primary/20 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements - Single Column on Mobile */}
      <section className="py-12 sm:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl sm:text-3xl mb-3 sm:mb-4">Our Achievements</h2>
            <p className="text-base sm:text-xl text-gray-600">
              Our track record speaks for itself - see the results we've helped our students achieve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-md sm:shadow-lg text-center"
              >
                <div className="mb-3 sm:mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Main Content */}
      <WhyChooseSection />

      {/* Our Approach - Responsive Timeline */}
      <section className="py-12 sm:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl mb-3 sm:mb-4">Our Educational Approach</h2>
            <p className="text-base sm:text-xl text-gray-600">
              We believe in a holistic approach to learning that addresses each student's unique needs
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {/* Timeline items - Stacked on mobile */}
            <div className="space-y-12 sm:space-y-24 relative">
              {[
                {
                  step: "1",
                  title: "Assessment & Planning",
                  description: "We begin with a thorough assessment to understand your strengths, areas for improvement, and learning style. This forms the foundation for a customized learning plan.",
                  align: "left"
                },
                {
                  step: "2",
                  title: "Targeted Instruction",
                  description: "Our tutors use proven teaching methods tailored to your needs, focusing on both core concepts and application techniques that lead to deeper understanding.",
                  align: "right"
                },
                {
                  step: "3",
                  title: "Regular Practice & Feedback",
                  description: "Consistent practice with immediate feedback helps solidify learning and build confidence, with tutors providing constructive guidance along the way.",
                  align: "left"
                },
                {
                  step: "4",
                  title: "Progress Monitoring",
                  description: "We track your improvement with regular assessments and adjust teaching strategies as needed to ensure continued growth and achievement.",
                  align: "right"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col ${item.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-full md:w-1/2 ${item.align === 'right' ? 'md:pl-6 lg:pl-12' : 'md:pr-6 lg:pr-12'} mb-4 md:mb-0`}>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                  </div>
                  <div className="w-full md:w-0 flex items-center justify-center my-4 md:my-0">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary text-white flex items-center justify-center text-lg sm:text-xl font-bold z-10">
                      {item.step}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 hidden md:block">
                    {/* Empty spacer for desktop layout */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive Padding */}
      <section className="py-12 sm:py-16 bg-primary text-white px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Ready to Excel Academically?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
            Join hundreds of successful students who have transformed their academic performance with Watford Tutoring Academy.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-white text-primary hover:bg-blue-50 rounded-lg font-medium transition-colors text-sm sm:text-base"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}