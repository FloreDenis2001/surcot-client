'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin as LinkedIn, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <footer className="bg-[#030712] border-t border-[#7a5544]/20 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05
        }}
      />

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-[#7a5544]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <motion.div 
            className="elegant-card p-6 sm:p-8 md:p-12 rounded-3xl"
            {...fadeInUp}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated</h3>
                <p className="text-gray-400 text-base sm:text-lg">Subscribe to our newsletter for the latest updates and innovations in fiber optic technology.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-[#1e293b] border border-[#7a5544]/30 rounded-xl focus:outline-none focus:border-[#ae765a] transition-colors"
                />
                <button className="px-6 py-3 sm:py-4 bg-gradient-to-r from-[#7a5544] to-[#ae765a] rounded-xl hover:shadow-lg hover:shadow-[#7a5544]/20 transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap">
                  <span className="hidden sm:inline">Subscribe</span>
                  <span className="sm:hidden">Join Now</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 gradient-text">SURCOT GMBH</h3>
            <p className="text-gray-400 mb-8 text-sm sm:text-base">Transforming cities through state-of-the-art fiber optic networks, combining precision engineering with environmental consciousness.</p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="p-2 bg-[#1e293b] rounded-lg hover:bg-[#7a5544]/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Projects", path: "/projects" },
                { label: "Our Team", path: "/team" },
                { label: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm sm:text-base"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Fiber Optic Installation",
                "Network Planning",
                "Infrastructure Design",
                "Maintenance Services",
                "Emergency Response",
                "Quality Assurance"
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm sm:text-base"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#ae765a] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">
                  Technologiepark 1<br />
                  85354 Munich, Germany
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#ae765a] flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">+49 (89) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#ae765a] flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base break-all">contact@surcot.de</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-[#7a5544]/20 mt-12 lg:mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6"
          {...fadeInUp}
        >
          <p className="text-gray-400 text-center sm:text-left text-sm sm:text-base">
            &copy; {new Date().getFullYear()} SURCOT GMBH. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Terms of Service</Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Cookie Policy</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}