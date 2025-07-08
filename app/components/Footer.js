"use client";
import { motion } from "framer-motion";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300 pt-12 pb-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Sadhukhan Banquet</h3>
            <p className="text-sm">
              Established in 1980, Sadhukhan Banquet has been serving Howrah with premium event spaces for weddings, receptions, birthdays and corporate events.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition">
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-500 transition">Home</Link>
              </li>
              <li>
                <Link href="/aboutUs" className="hover:text-amber-500 transition">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-500 transition">Services</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-500 transition">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-500 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <span>81 Lala Babu Shire Road, Belur Math, Howrah - 711202</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-amber-500 mr-3 flex-shrink-0" />
                <a href="tel:+918617737566" className="hover:text-amber-500 transition">+91 8617737566</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-amber-500 mr-3 flex-shrink-0" />
                <a href="mailto:pritamnote4g@gmail.com" className="hover:text-amber-500 transition">pritamnote4g@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9AM - 9PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>8AM - 10PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>8AM - 10PM</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright and Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sadhukhan Banquet. All Rights Reserved. <br/> Website Developed and Maintained by Digital Exposure Online Services .
          </p>
          <div className="flex space-x-6 text-xs">
            <Link href="/" className="hover:text-amber-500 transition">Privacy Policy</Link>
            <Link href="/" className="hover:text-amber-500 transition">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;