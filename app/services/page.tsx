"use client";

import { motion } from "framer-motion";
import {
  Network,
  Ruler,
  Shield,
  Settings,
  Clock,
  CheckCircle,
  ArrowRight,
  Wifi,
  Building,
  PenTool as Tool,
  Zap,
  LineChart,
  HardDrive,
  Radio,
  Server,
  Cable,
  Construction,
} from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#030712] overflow-x-hidden pt-32">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24">
        <div
          className="absolute inset-0 z-0"
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive
              <span className="block gradient-text mt-2">
                Fiber Optic Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              From planning to implementation, we deliver end-to-end fiber optic
              infrastructure solutions tailored to your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Services</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive fiber optic solutions for modern infrastructure
              needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Network,
                title: "Network Design",
                description:
                  "Expert planning and architecture for optimal network performance",
                features: [
                  "Network Architecture Planning",
                  "Capacity Analysis",
                  "Route Optimization",
                  "Cost Estimation",
                ],
              },
              {
                icon: Construction,
                title: "Infrastructure Installation",
                description: "Professional deployment of fiber optic networks",
                features: [
                  "Micro-trenching",
                  "Underground Installation",
                  "Aerial Deployment",
                  "Quality Testing",
                ],
              },
              {
                icon: Settings,
                title: "Network Maintenance",
                description: "Comprehensive maintenance and support services",
                features: [
                  "24/7 Monitoring",
                  "Preventive Maintenance",
                  "Emergency Response",
                  "Performance Optimization",
                ],
              },
              {
                icon: Shield,
                title: "Security Solutions",
                description:
                  "Advanced security measures for network protection",
                features: [
                  "Intrusion Detection",
                  "Access Control",
                  "Data Encryption",
                  "Security Audits",
                ],
              },
              {
                icon: LineChart,
                title: "Performance Analysis",
                description: "Detailed monitoring and optimization services",
                features: [
                  "Real-time Monitoring",
                  "Performance Metrics",
                  "Bandwidth Analysis",
                  "Optimization Reports",
                ],
              },
              {
                icon: Tool,
                title: "Upgrade Services",
                description: "Network modernization and capacity expansion",
                features: [
                  "Capacity Expansion",
                  "Technology Updates",
                  "Infrastructure Upgrades",
                  "Migration Support",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="elegant-card p-6 sm:p-8 rounded-xl h-full">
                  <div className="p-3 bg-[#7a5544]/10 rounded-lg w-fit mb-6 group-hover:bg-[#7a5544]/20 transition-colors">
                    <service.icon className="h-8 w-8 text-[#ae765a]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-300"
                      >
                        <CheckCircle className="h-5 w-5 text-[#ae765a] mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Technology Stack</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              State-of-the-art technologies powering our solutions
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Cable,
                title: "Fiber Optic Cables",
                description:
                  "Latest generation fiber optic cables for maximum performance",
              },
              {
                icon: Server,
                title: "Network Equipment",
                description:
                  "Enterprise-grade networking hardware and infrastructure",
              },
              {
                icon: Radio,
                title: "Transmission Systems",
                description:
                  "Advanced optical transmission systems and equipment",
              },
              {
                icon: HardDrive,
                title: "Storage Solutions",
                description:
                  "High-capacity data storage and management systems",
              },
            ].map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="elegant-card p-6 rounded-xl text-center h-full">
                  <div className="inline-flex p-3 bg-[#7a5544]/10 rounded-lg mb-4">
                    <tech.icon className="h-8 w-8 text-[#ae765a]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Process</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A systematic approach to delivering excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description: "Understanding your needs and requirements",
                },
                {
                  step: "02",
                  title: "Site Survey & Planning",
                  description: "Detailed analysis and solution design",
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Professional installation and setup",
                },
                {
                  step: "04",
                  title: "Testing & Quality Assurance",
                  description: "Comprehensive testing and verification",
                },
                {
                  step: "05",
                  title: "Ongoing Support",
                  description: "Continuous monitoring and maintenance",
                },
              ].map((process) => (
                <div key={process.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-16">
                    <div className="p-2 bg-[#7a5544]/10 rounded-lg text-center">
                      <span className="text-[#ae765a] font-bold">
                        {process.step}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {process.title}
                    </h3>
                    <p className="text-gray-400">{process.description}</p>
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
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Service Process"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-effect p-6 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#7a5544] rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">24/7</p>
                    <p className="text-sm text-gray-400">Support Available</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-gray-100 mb-8 sm:mb-12">
              Let's discuss how our services can help transform your
              infrastructure
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#7a5544] rounded-full font-bold text-lg transition-all duration-300 button-glow flex items-center mx-auto"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-6 w-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
