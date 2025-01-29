'use client';

import {
  ArrowRight,
  Shovel,
  Shield,
  Construction,
  MapPin,
  CheckCircle,
  Ruler,
  Globe,
  Zap,
  Clock,
  Award,
  Users,
  Building,
  Lightbulb,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030712] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 md:pt-0">
        <div
          className="absolute inset-0 z-0 parallax-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/90 to-[#030712]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Shaping the Future of
                <span className="block gradient-text mt-2">
                  Digital Infrastructure
                </span>
              </h1>
            </motion.div>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At SURCOT GMBH, we transform cities through state-of-the-art fiber
              optic networks, combining precision engineering with environmental
              consciousness.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="px-6 sm:px-8 py-3 sm:py-4 text-white bg-gradient-to-r from-[#7a5544] to-[#ae765a] rounded-full font-medium transition-all duration-300 flex items-center justify-center button-glow hover:scale-105">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 text-white border border-[#7a5544] hover:border-[#ae765a] rounded-full font-medium transition-all duration-300 hover:bg-[#7a5544]/10">
                Explore Services
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-4 md:bottom-10 inset-x-0 flex justify-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex flex-row gap-4 sm:gap-8 glass-effect px-6 sm:px-8 py-4 rounded-2xl sm:rounded-full max-w-full sm:max-w-fit">
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Cities Connected", value: "50+" },
              { label: "Km of Fiber Laid", value: "10,000+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">About SURCOT GMBH</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Since our establishment in 2010, SURCOT GMBH has been at the
                forefront of digital infrastructure development. We specialize
                in precision excavation and fiber optic installation,
                transforming urban landscapes while preserving their integrity.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Industry Leadership",
                    description: "Recognized as a leading provider of fiber optic infrastructure solutions in Europe.",
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    description: "Our team of certified professionals brings decades of combined experience.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Innovation Focus",
                    description: "Continuously adopting cutting-edge technologies and methodologies.",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="p-3 bg-[#7a5544]/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-[#ae765a]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="SURCOT Team at Work"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-[#030712] p-4 sm:p-6 rounded-xl glass-effect">
                <div className="flex items-center space-x-4">
                  <div className="p-2 sm:p-3 bg-[#7a5544] rounded-lg">
                    <Building className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-white">13+ Years</p>
                    <p className="text-sm sm:text-base text-gray-400">Industry Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-16 sm:py-24 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our portfolio of successful infrastructure deployments
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Smart City Network",
                location: "Munich, Germany",
                image:
                  "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description:
                  "Citywide fiber network installation connecting 100,000+ households",
              },
              {
                title: "Industrial Complex",
                location: "Stuttgart, Germany",
                image:
                  "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "High-speed network for manufacturing automation",
              },
              {
                title: "University Campus",
                location: "Berlin, Germany",
                image:
                  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Campus-wide fiber optic infrastructure upgrade",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="elegant-card overflow-hidden rounded-2xl h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center text-[#ae765a] mb-2">
                      <MapPin className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                      <span className="text-sm sm:text-base">{project.location}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-16 sm:py-24 md:py-32 relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.05,
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Expertise</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Decades of experience in delivering cutting-edge infrastructure
              solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Shovel,
                title: "Precision Equipment",
                value: "50+",
                description: "Specialized machines",
              },
              {
                icon: Network,
                title: "Network Coverage",
                value: "10,000+",
                description: "Km of fiber installed",
              },
              {
                icon: Building,
                title: "Projects Completed",
                value: "500+",
                description: "Successful deployments",
              },
              {
                icon: Users,
                title: "Expert Team",
                value: "100+",
                description: "Certified professionals",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="elegant-card p-4 sm:p-6 rounded-xl text-center h-full">
                  <div className="inline-flex p-3 bg-[#7a5544]/10 rounded-lg mb-4">
                    <stat.icon className="h-6 sm:h-8 w-6 sm:w-8 text-[#ae765a]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-base sm:text-lg font-semibold text-[#ae765a] mb-2">
                    {stat.title}
                  </p>
                  <p className="text-sm sm:text-base text-gray-400">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 md:mt-20 grid sm:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="elegant-card p-6 sm:p-8 rounded-xl h-full"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Industry Certifications
              </h3>
              <div className="space-y-4">
                {[
                  "ISO 9001:2015 Quality Management",
                  "ISO 14001 Environmental Management",
                  "FTTH Council Europe Member",
                  "German Federal Network Agency Certified",
                ].map((cert) => (
                  <div key={cert} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#ae765a] flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="elegant-card p-6 sm:p-8 rounded-xl h-full"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Specialized Services
              </h3>
              <div className="space-y-4">
                {[
                  "Micro-trenching Technology",
                  "Non-invasive Installation Methods",
                  "Advanced Network Planning",
                  "24/7 Emergency Response",
                ].map((service) => (
                  <div key={service} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#ae765a] flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Innovative Solutions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Leveraging cutting-edge technology to deliver exceptional
              infrastructure solutions
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Globe,
                title: "Global Connectivity",
                description:
                  "Building robust networks that connect communities worldwide",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Ultra-high-speed fiber optic infrastructure for the modern age",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description:
                  "Enterprise-grade security with 99.99% uptime guarantee",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="elegant-card p-6 sm:p-8 rounded-2xl h-full">
                  <feature.icon className="h-10 sm:h-12 w-10 sm:w-12 text-[#ae765a] mb-6" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 md:py-32 relative">
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Premium Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Tailored solutions for every infrastructure need
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Network Design",
                icon: Ruler,
                price: "Custom",
                features: [
                  "Comprehensive Site Survey",
                  "Network Architecture",
                  "Capacity Planning",
                  "Cost Optimization",
                ],
              },
              {
                name: "Full Installation",
                icon: Construction,
                price: "Enterprise",
                features: [
                  "End-to-End Deployment",
                  "Quality Assurance",
                  "Environmental Compliance",
                  "Documentation & Training",
                ],
              },
              {
                name: "Managed Services",
                icon: Clock,
                price: "Subscription",
                features: [
                  "24/7 Monitoring",
                  "Preventive Maintenance",
                  "Emergency Response",
                  "Performance Analytics",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`gradient-border ${
                  index === 1 ? "sm:scale-105 sm:z-10" : ""
                }`}
              >
                <div className="p-6 sm:p-8 glass-effect rounded-xl h-full">
                  <div className="text-center mb-8">
                    <service.icon className="h-10 sm:h-12 w-10 sm:w-12 text-[#ae765a] mx-auto mb-4" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                      {service.name}
                    </h3>
                    <p className="text-base sm:text-lg font-medium gradient-text">
                      {service.price} Solution
                    </p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-300"
                      >
                        <CheckCircle className="h-5 w-5 text-[#ae765a] mr-3 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full px-6 py-3 sm:py-4 bg-gradient-to-r from-[#7a5544] to-[#ae765a] hover:from-[#ae765a] hover:to-[#7a5544] text-white rounded-xl font-medium transition-all duration-300 button-glow text-sm sm:text-base">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
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
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 text-glow">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Join the digital revolution with SURCOT GMBH's cutting-edge fiber
              optic solutions. Let's build the future of connectivity together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#7a5544] rounded-full font-bold text-base sm:text-lg transition-all duration-300 button-glow flex items-center mx-auto"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 sm:h-6 w-5 sm:w-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}