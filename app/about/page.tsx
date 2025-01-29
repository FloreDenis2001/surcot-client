'use client';

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  Lightbulb,
  Clock,
  CheckCircle,
  Building,
  Globe,
  MapPin,
  Network,
  Shield,
  ArrowRight
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#030712] overflow-x-hidden pt-32">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
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
              Our Story of
              <span className="block gradient-text mt-2">Innovation & Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Since 2010, SURCOT GMBH has been pioneering the future of digital infrastructure,
              combining German engineering precision with innovative fiber optic solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="elegant-card p-6 sm:p-8 rounded-2xl"
            >
              <div className="p-3 bg-[#7a5544]/10 rounded-lg w-fit mb-6">
                <Target className="h-8 w-8 text-[#ae765a]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To revolutionize digital connectivity through cutting-edge fiber optic infrastructure,
                ensuring sustainable and efficient network solutions that empower communities and businesses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="elegant-card p-6 sm:p-8 rounded-2xl"
            >
              <div className="p-3 bg-[#7a5544]/10 rounded-lg w-fit mb-6">
                <Lightbulb className="h-8 w-8 text-[#ae765a]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be the leading force in digital infrastructure development, setting industry standards
                for innovation, sustainability, and service excellence across Europe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Journey</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A decade of innovation, growth, and technological advancement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {[
                {
                  year: "2010",
                  title: "Company Foundation",
                  description: "SURCOT GMBH was established in Munich, Germany"
                },
                {
                  year: "2013",
                  title: "First Major Project",
                  description: "Completed citywide fiber network in Stuttgart"
                },
                {
                  year: "2016",
                  title: "International Expansion",
                  description: "Extended operations to neighboring European countries"
                },
                {
                  year: "2019",
                  title: "Innovation Award",
                  description: "Recognized for pioneering micro-trenching technology"
                },
                {
                  year: "2023",
                  title: "Digital Transformation",
                  description: "Launched advanced network monitoring systems"
                }
              ].map((milestone) => (
                <div key={milestone.year} className="flex gap-4">
                  <div className="flex-shrink-0 w-20">
                    <div className="p-2 bg-[#7a5544]/10 rounded-lg text-center">
                      <span className="text-[#ae765a] font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Company History"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-effect p-4 sm:p-6 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="p-2 sm:p-3 bg-[#7a5544] rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-white">13+ Years</p>
                    <p className="text-sm text-gray-400">of Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Core Values</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Excellence",
                description: "Unwavering commitment to the highest standards in every project"
              },
              {
                icon: Users,
                title: "Customer Focus",
                description: "Dedicated to exceeding client expectations and building lasting relationships"
              },
              {
                icon: Globe,
                title: "Sustainability",
                description: "Environmentally conscious practices in all our operations"
              },
              {
                icon: Network,
                title: "Innovation",
                description: "Continuously pushing technological boundaries"
              },
              {
                icon: Award,
                title: "Integrity",
                description: "Transparent and ethical business practices"
              },
              {
                icon: Building,
                title: "Reliability",
                description: "Consistent delivery of premium services and solutions"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="elegant-card p-6 sm:p-8 rounded-xl h-full">
                  <div className="p-3 bg-[#7a5544]/10 rounded-lg w-fit mb-6">
                    <value.icon className="h-6 w-6 text-[#ae765a]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet the experts driving our vision forward
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Dr. Michael Weber",
                role: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Dr. Anna Schmidt",
                role: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Thomas Mueller",
                role: "Chief Operations Officer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="elegant-card rounded-xl overflow-hidden group">
                  <div className="aspect-square relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent opacity-60" />
                  </div>
                  <div className="p-6 relative">
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-[#ae765a]">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Join Our Journey
            </h2>
            <p className="text-lg sm:text-xl text-gray-100 mb-8 sm:mb-12">
              Be part of our mission to transform digital infrastructure. Let's create the future together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#7a5544] rounded-full font-bold text-lg transition-all duration-300 button-glow flex items-center mx-auto"
            >
              Join Our Team
              <ArrowRight className="ml-2 h-6 w-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}