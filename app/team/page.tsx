"use client";

import { motion } from "framer-motion";
import {
  Users,
  Award,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
} from "lucide-react";

export default function Team() {
  return (
    <div className="min-h-screen bg-[#030712] overflow-x-hidden pt-32">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our
              <span className="block gradient-text mt-2">Expert Team</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              A dedicated group of professionals committed to excellence in
              fiber optic infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Leadership Team</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Meet the visionaries guiding our company towards excellence
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Dr. Michael Weber",
                role: "Chief Executive Officer",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                description:
                  "20+ years of experience in telecommunications infrastructure",
                education: "Ph.D. in Electrical Engineering",
                linkedin: "#",
              },
              {
                name: "Dr. Anna Schmidt",
                role: "Chief Technology Officer",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                description: "Pioneer in fiber optic network architecture",
                education: "Ph.D. in Computer Science",
                linkedin: "#",
              },
              {
                name: "Thomas Mueller",
                role: "Chief Operations Officer",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                description: "Expert in large-scale project management",
                education: "MBA in Operations Management",
                linkedin: "#",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="elegant-card rounded-xl overflow-hidden">
                  <div className="aspect-square relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent opacity-60" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#ae765a] mb-4">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-4">
                      {member.description}
                    </p>
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <GraduationCap className="h-4 w-4 mr-2 text-[#ae765a]" />
                      {member.education}
                    </div>
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center text-[#ae765a] hover:text-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Teams */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Departments</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Specialized teams working together to deliver excellence
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Engineering Team",
                count: "25+ Engineers",
                description:
                  "Network architecture and implementation specialists",
                expertise: [
                  "Fiber Optic Design",
                  "Network Architecture",
                  "Quality Assurance",
                  "Technical Support",
                ],
              },
              {
                title: "Project Management",
                count: "15+ Managers",
                description:
                  "Experienced project coordination and delivery experts",
                expertise: [
                  "Project Planning",
                  "Resource Allocation",
                  "Risk Management",
                  "Timeline Optimization",
                ],
              },
              {
                title: "Research & Development",
                count: "10+ Researchers",
                description: "Innovation and technology advancement team",
                expertise: [
                  "Technology Research",
                  "Product Development",
                  "Innovation Strategy",
                  "Technical Documentation",
                ],
              },
              {
                title: "Field Operations",
                count: "50+ Technicians",
                description:
                  "On-site installation and maintenance professionals",
                expertise: [
                  "Installation",
                  "Maintenance",
                  "Troubleshooting",
                  "Emergency Response",
                ],
              },
              {
                title: "Quality Control",
                count: "12+ Specialists",
                description: "Ensuring highest standards in all deployments",
                expertise: [
                  "Quality Testing",
                  "Standards Compliance",
                  "Performance Monitoring",
                  "Certification",
                ],
              },
              {
                title: "Customer Support",
                count: "20+ Experts",
                description: "Dedicated client service and support team",
                expertise: [
                  "Technical Support",
                  "Client Communication",
                  "Problem Resolution",
                  "Service Monitoring",
                ],
              },
            ].map((department, index) => (
              <motion.div
                key={department.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="elegant-card p-6 sm:p-8 rounded-xl h-full">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {department.title}
                  </h3>
                  <p className="text-[#ae765a] mb-4">{department.count}</p>
                  <p className="text-gray-400 mb-6">{department.description}</p>
                  <div className="space-y-3">
                    {department.expertise.map((item) => (
                      <div key={item} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-[#ae765a] mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7a5544] to-[#ae765a] opacity-90" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 text-glow">
              Join Our Growing Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-100 mb-8 sm:mb-12">
              We're always looking for talented individuals to join our mission
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#7a5544] rounded-full font-bold text-lg transition-all duration-300 button-glow flex items-center mx-auto"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-6 w-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
