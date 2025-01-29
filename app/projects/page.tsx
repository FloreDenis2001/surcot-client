"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Building,
  Users,
  Clock,
  CheckCircle,
  Network,
  Shield,
} from "lucide-react";

export default function Projects() {
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
              Our Featured
              <span className="block gradient-text mt-2">Projects</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how we've transformed digital infrastructure across
              Europe with our innovative fiber optic solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {[
              {
                title: "Smart City Network",
                location: "Munich, Germany",
                image:
                  "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description:
                  "Comprehensive citywide fiber network installation connecting over 100,000 households and businesses.",
                stats: [
                  { label: "Households Connected", value: "100,000+" },
                  { label: "Network Speed", value: "10 Gbps" },
                  { label: "Project Duration", value: "18 Months" },
                ],
              },
              {
                title: "Industrial Complex",
                location: "Stuttgart, Germany",
                image:
                  "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description:
                  "High-speed network infrastructure for advanced manufacturing automation and Industry 4.0 implementation.",
                stats: [
                  { label: "Area Covered", value: "50,000 m²" },
                  { label: "Data Centers", value: "3" },
                  { label: "Uptime", value: "99.99%" },
                ],
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="elegant-card overflow-hidden rounded-2xl">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center text-[#ae765a] mb-4">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6">{project.description}</p>
                    <div className="grid grid-cols-3 gap-4">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <p className="text-lg font-bold text-white">
                            {stat.value}
                          </p>
                          <p className="text-sm text-gray-400">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Project Categories</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore our diverse range of infrastructure projects
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Building,
                title: "Urban Development",
                description:
                  "Citywide fiber optic networks for smart city initiatives",
                projects: "25+ Completed",
              },
              {
                icon: Network,
                title: "Industrial Networks",
                description:
                  "High-performance networks for manufacturing facilities",
                projects: "40+ Completed",
              },
              {
                icon: Users,
                title: "Community Projects",
                description: "Residential and community connectivity solutions",
                projects: "100+ Completed",
              },
              {
                icon: Shield,
                title: "Security Infrastructure",
                description: "Secure networks for sensitive facilities",
                projects: "30+ Completed",
              },
              {
                icon: Building,
                title: "Commercial Complexes",
                description: "Office and retail connectivity solutions",
                projects: "50+ Completed",
              },
              {
                icon: Network,
                title: "Data Centers",
                description: "High-capacity data center infrastructure",
                projects: "15+ Completed",
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="elegant-card p-6 sm:p-8 rounded-xl h-full">
                  <div className="p-3 bg-[#7a5544]/10 rounded-lg w-fit mb-6 group-hover:bg-[#7a5544]/20 transition-colors">
                    <category.icon className="h-8 w-8 text-[#ae765a]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <p className="text-[#ae765a] font-semibold">
                    {category.projects}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Recent Projects</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A timeline of our latest infrastructure deployments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {[
                {
                  date: "2023",
                  title: "Smart City Network - Phase 2",
                  location: "Munich, Germany",
                  description:
                    "Extended fiber network coverage to suburban areas",
                },
                {
                  date: "2023",
                  title: "Industrial Complex Upgrade",
                  location: "Stuttgart, Germany",
                  description: "Network capacity expansion for Industry 4.0",
                },
                {
                  date: "2022",
                  title: "University Campus Network",
                  location: "Berlin, Germany",
                  description: "High-speed network for research facilities",
                },
                {
                  date: "2022",
                  title: "Healthcare Network Infrastructure",
                  location: "Hamburg, Germany",
                  description: "Secure medical data network deployment",
                },
              ].map((project) => (
                <div key={project.title} className="flex gap-6">
                  <div className="flex-shrink-0 w-20">
                    <div className="p-2 bg-[#7a5544]/10 rounded-lg text-center">
                      <span className="text-[#ae765a] font-bold">
                        {project.date}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-[#ae765a] mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <p className="text-gray-400">{project.description}</p>
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
                  alt="Project Timeline"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-effect p-6 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#7a5544] rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">500+</p>
                    <p className="text-sm text-gray-400">Projects Completed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Start Your Project Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-100 mb-8 sm:mb-12">
              Let's discuss how we can help you achieve your infrastructure
              goals
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#7a5544] rounded-full font-bold text-lg transition-all duration-300 button-glow flex items-center mx-auto"
            >
              Get Started
              <ArrowRight className="ml-2 h-6 w-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
