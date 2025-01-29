"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageSquare,
  Building,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#030712] overflow-x-hidden pt-32">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
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
              Get in
              <span className="block gradient-text mt-2">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Have a question or ready to start your project? We're here to
              help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="elegant-card p-6 sm:p-8 rounded-2xl"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#1e293b] border border-[#7a5544]/30 rounded-xl focus:outline-none focus:border-[#ae765a] transition-colors text-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#1e293b] border border-[#7a5544]/30 rounded-xl focus:outline-none focus:border-[#ae765a] transition-colors text-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[#1e293b] border border-[#7a5544]/30 rounded-xl focus:outline-none focus:border-[#ae765a] transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-[#1e293b] border border-[#7a5544]/30 rounded-xl focus:outline-none focus:border-[#ae765a] transition-colors text-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-[#1e293b] border border-[#7a5544]/30 rounded-xl focus:outline-none focus:border-[#ae765a] transition-colors text-white resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#7a5544] to-[#ae765a] text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center group"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="elegant-card p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#7a5544]/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-[#ae765a]" />
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Visit Us</p>
                      <p className="text-gray-400">
                        Technologiepark 1<br />
                        85354 Munich, Germany
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#7a5544]/10 rounded-lg">
                      <Mail className="h-6 w-6 text-[#ae765a]" />
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Email Us</p>
                      <p className="text-gray-400">contact@surcot.de</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#7a5544]/10 rounded-lg">
                      <Phone className="h-6 w-6 text-[#ae765a]" />
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Call Us</p>
                      <p className="text-gray-400">+49 (89) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#7a5544]/10 rounded-lg">
                      <Clock className="h-6 w-6 text-[#ae765a]" />
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">
                        Business Hours
                      </p>
                      <p className="text-gray-400">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="elegant-card p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-6">
                  Global Presence
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#7a5544]/10 rounded-lg">
                      <Building className="h-6 w-6 text-[#ae765a]" />
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">
                        Regional Offices
                      </p>
                      <p className="text-gray-400">
                        Berlin • Stuttgart • Hamburg • Frankfurt
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#7a5544]/10 rounded-lg">
                      <Globe className="h-6 w-6 text-[#ae765a]" />
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">
                        International
                      </p>
                      <p className="text-gray-400">
                        Austria • Switzerland • Netherlands
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="elegant-card p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-6">
                  Quick Support
                </h3>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#7a5544]/10 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-[#ae765a]" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-2">
                      24/7 Emergency Support
                    </p>
                    <p className="text-gray-400 mb-4">
                      For urgent technical support and emergency services
                    </p>
                    <p className="text-[#ae765a] font-bold">
                      +49 (89) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="elegant-card p-2 sm:p-4 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.4616559098!2d11.5731163!3d48.1371079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA4JzEzLjYiTiAxMcKwMzQnMjMuMiJF!5e0!3m2!1sen!2sde!4v1635959145784!5m2!1sen!2sde"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
