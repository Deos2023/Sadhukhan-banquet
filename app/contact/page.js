"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

const ContactPage = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `New Website Enquiry:%0A%0AName: ${encodeURIComponent(form.firstname)} ${encodeURIComponent(form.lastname)}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/918617737566?text=${text}`, '_blank');
  };

  return (
    <>
      <div className="relative bg-[#f9f5f0] font-corm overflow-hidden">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeIn}
          className="relative h-[80vh] max-h-[450px] w-full"
        >
          <div className="absolute inset-0 bg-[#C29A5C] flex items-center justify-center text-white px-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl px-4"
            >
              <p className="text-6xl sm:text-8xl font-bold mb-6 md:mb-8">Contact Us</p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-white w-1/2 mx-auto"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div 
              variants={item}
              className="p-6 sm:p-8 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-3xl sm:text-2xl font-semibold mb-6 text-neutral-600">Reach Out to Us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div 
                  variants={container}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <motion.div variants={item}>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={form.firstname}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                      required
                    />
                  </motion.div>
                  <motion.div variants={item}>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={form.lastname}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                      required
                    />
                  </motion.div>
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                    required
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                  ></textarea>
                </motion.div>

                <motion.button
                  variants={item}
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition duration-300"
                >
                  Submit Via WhatsApp
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div 
              variants={container}
              className="space-y-6"
            >
              <motion.div 
                variants={item}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-4 text-neutral-600">Contact Information</h3>
                <motion.div 
                  variants={container}
                  className="space-y-4 text-sm"
                >
                  <motion.div 
                    variants={item}
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <FaMapMarkerAlt className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800">Address:</p>
                      <p className="text-gray-600">
                        81 Lala Babu Shire Road,<br />
                        Belur Math, Howrah - 711202, India
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={item}
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <FaPhone className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 font-medium">Phone:</p>
                      <p className="text-gray-600">+91 8617737566</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={item}
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <FaEnvelope className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 font-medium">Email:</p>
                      <p className="text-gray-600">pritamnote4g@gmail.com</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Embedded Google Map */}
              <motion.div 
                variants={item}
                className="h-64 sm:h-80 overflow-hidden shadow-md rounded-xl"
                whileHover={{ scale: 1.01 }}
              >

                
                <iframe
                  title="Sadhukhan Banquet Location"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.6839096493113!2d88.35356589999999!3d22.6282759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d71e5cf8dbb%3A0x843827a1836ac2!2sSadhukhan%20banquet!5e0!3m2!1sen!2sin!4v1751957003926!5m2!1sen!2sin"
                  className="border-0"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>

          {/* Business Hours */}
          <motion.div 
            variants={item}
            className="max-w-3xl mx-auto mt-16 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-4 text-neutral-600 text-center">Business Hours</h3>
            <motion.div 
              variants={container}
              className="grid md:grid-cols-3 gap-6 text-center"
            >
              {[
                { day: "Monday - Friday", time: "9:00 AM - 9:00 PM" },
                { day: "Saturday", time: "8:00 AM - 10:00 PM" },
                { day: "Sunday", time: "8:00 AM - 10:00 PM" },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="p-4 border border-yellow-100 rounded-lg"
                >
                  <h4 className="font-medium text-gray-800">{item.day}</h4>
                  <p className="text-yellow-600">{item.time}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Social Media CTA */}
          <motion.div 
            variants={item}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-semibold mb-4 text-neutral-600">Connect With Us</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Follow us on social media for updates and event photos.
            </p>
            <motion.div
              variants={container}
              className="flex justify-center gap-4"
            >
              <div className="hidden md:flex gap-4 items-center text-orange-400 text-lg">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="hover:text-amber-500 transition" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="hover:text-amber-500 transition" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-amber-500 transition" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};

export default ContactPage;