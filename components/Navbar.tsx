'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Team", path: "/team" },
    { label: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#030712]/[0.7] backdrop-blur-md border-b border-[#7a5544]/[0.15]"
            : "bg-transparent"
        }`}
      >
        <div className="px-6 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="relative w-32 h-16 md:w-48 md:h-24 cursor-pointer"
              onClick={() => router.push("/")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={logo}
                alt="FiberCo"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </motion.div>

            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  href={item.path}
                  key={item.label}
                  className="group relative px-2 py-1 xl:px-4 xl:py-2 text-sm lg:text-base text-gray-300 transition-colors rounded-lg font-medium overflow-hidden"
                >
                  <span className="relative z-10 transition-colors group-hover:text-white">
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-[#7a5544]/[0.15] rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <motion.button
                onClick={() => router.push("/contact")}
                className="relative group px-4 py-1.5 xl:px-6 xl:py-2.5 bg-gradient-to-r from-[#7a5544] to-[#ae765a] text-white rounded-full text-sm lg:text-base lg:font-semibold transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem] hover:shadow-[#7a5544]/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ae765a] to-[#7a5544] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/[0.03] rounded-lg transition-colors relative z-50"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="fixed right-0 top-0 h-full w-full bg-[#030712] z-50 md:hidden overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.div 
                className="p-6 h-full flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="flex items-center justify-between mb-12"
                  variants={itemVariants}
                >
                  <div className="relative w-32 h-16">
                    <Image
                      src={logo}
                      alt="FiberCo"
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 768px) 100vw"
                      priority
                    />
                  </div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white p-2 hover:bg-white/[0.03] rounded-lg transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={24} />
                  </motion.button>
                </motion.div>

                <nav className="flex-1 flex flex-col  space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      variants={itemVariants}
                      custom={index}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => {
                          router.push(item.path);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full px-4 py-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#7a5544]/10 hover:to-[#ae765a]/10 rounded-xl transition-all duration-300 text-left text-lg font-medium"
                      >
                        {item.label}
                      </button>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  variants={itemVariants}
                  className="mt-8 pt-8 border-t border-[#7a5544]/20"
                >
                  <motion.button
                    onClick={() => {
                      router.push("/contact");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-4 bg-gradient-to-r from-[#7a5544] to-[#ae765a] text-white rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem] hover:shadow-[#7a5544]/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}