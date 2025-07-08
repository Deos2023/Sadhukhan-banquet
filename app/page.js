"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import img1 from "../public/img/1 (6).jpeg";
import img2 from "../public/img/1 (8).jpeg";
import img3 from "../public/img/1 (9).jpeg";
import room from "../public/img/1 (10).jpeg";
import food from "../public/food.png";
// import logo from "../public/logogld.png";
import { FaFacebookF, FaGoogle, FaInstagram, FaTripadvisor, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Testimonials from "./components/Testmonials";


// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

export default function Home() {
  const places = [
    { title: "Banquet Halls", image: room, desc: "Spacious halls perfect for weddings and parties" },
    { title: "Function Spaces", image: img2, desc: "Versatile spaces for all kinds of celebrations" },
    { title: "Conference Areas", image: img3, desc: "Professional spaces for meetings and events" },
    { title: "Decor Options", image: img1, desc: "Beautiful lighting and floral arrangements" },
  ];

  const stats = [
    { icon: <FaGoogle />, value: "4.5+", label: "Google Rating", sub: "Based on customer reviews" },
    { icon: <FaTripadvisor />, value: "40+", label: "Years Experience", sub: "Since 1980" },
    { icon: <FaFacebookF />, value: "500+", label: "Events Hosted", sub: "Weddings, Parties & More" },
    { icon: <FaInstagram />, value: "100+", label: "Happy Clients", sub: "Join our family" },
  ];

  const services = [
    { title: "Weddings", desc: "Complete wedding solutions with decor and catering options" },
    { title: "Birthdays", desc: "Memorable birthday parties for all ages" },
    { title: "Receptions", desc: "Elegant spaces for wedding receptions" },
    { title: "Anniversaries", desc: "Perfect venues for anniversary celebrations" },
    { title: "Conferences", desc: "Professional spaces for meetings and seminars" },
    { title: "Religious Events", desc: "Spaces for pujas and other ceremonies" },
  ];

  const pricing = [
    { type: "Non-AC Hall", price: "₹30,000", details: "2 floors, electricity ₹10/unit, includes 200 chairs & 20 tables" },
    { type: "AC Hall", price: "₹40,000", details: "2 floors with air conditioning" },
    { type: "Decorations", price: "₹30,000", details: "Includes lighting and flower arrangements" }
  ];

  return (
    <>
      <div className="relative bg-[#f9f5f0] font-corm overflow-hidden">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeIn}
          className="relative h-[80vh] min-h-[700px] w-full"
        >
           <Image
        src="/img/1 (9).jpeg" 
        alt="Hero Background"
        fill
        className="object-cover object-center z-0"
        priority
      />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white px-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl px-4"
            >
              <h1 className="text-lg font-bold mb-4 md:mb-6">
                Welcome to
              </h1>
              <p className="text-6xl sm:text-8xl font-bold mb-6 md:mb-8">
                Sadhukhan Banquet
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-amber-500 w-1/2 mx-auto"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 -mt-16 sm:-mt-20 mx-auto max-w-4xl bg-white shadow-xl p-4 sm:p-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-4 sm:gap-0">
            {/* <div>
              <Link href="/" className="flex flex-col items-center">
                <Image src={logo} alt="Sadhukhan Banquet Logo" width={140} height={140} />
              </Link>
            </div> */}

            <div>
              <h1 className="text-neutral-600 max-w-lg text-start">
                Belur&apos;s premier banquet hall serving Howrah since 1980, providing perfect venues for all celebrations.
              </h1>
            </div>

            <div>
              <Link href="/booking">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-amber-500 px-5 py-3 text-sm hover:bg-white hover:text-black text-yellow-600 transition-colors duration-300"
                >
                  BOOK NOW
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* About Us */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="bg-[#f9f5f0] text-[#a8843b] py-24 px-4 text-center"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h3 variants={item} className="text-sm sm:text-lg tracking-widest uppercase text-black mb-4 font-semibold">About Us</motion.h3>
            <motion.h2 variants={item} className="text-4xl md:text-7xl leading-snug mb-6">
              A Trusted Venue Since 1980
            </motion.h2>
            <motion.div variants={item} className="flex justify-center items-center mb-6">
              <span className="w-12 h-px bg-[#a8843b] mr-2" />
              <span className="text-2xl text-[#a8843b]">❧</span>
              <span className="w-12 h-px bg-[#a8843b] ml-2" />
            </motion.div>
            <motion.div variants={item} className="text-[#333] text-sm max-w-3xl mx-auto leading-relaxed">
              <p className="mb-4">
                Sadhukhan Banquet has been a cornerstone of celebrations in Howrah since our establishment in 1980. Located at 81 Lala Babu Shire Road near Belur Math, we&apos;ve been dedicated to creating unforgettable experiences for weddings, birthdays, receptions, anniversaries, and conferences.
              </p>
              <p>
                Our venue features spacious banquet halls across two floors, available in both AC and non-AC options. With professional event services and customizable decor packages, we handle every detail so you can enjoy your special occasion.
              </p>
            </motion.div>
            <motion.div variants={item} className="mt-8">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="border border-[#a8843b] px-6 py-2 uppercase text-xs tracking-wider hover:bg-[#a8843b] hover:text-white transition"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Info Banner */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#a8843b] text-white py-12 px-4"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <FaPhone className="text-2xl mb-3" />
              <h3 className="font-semibold mb-1">Call Us</h3>
              <p>8617737566</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaMapMarkerAlt className="text-2xl mb-3" />
              <h3 className="font-semibold mb-1">Visit Us</h3>
              <p>81 Lala Babu Shire Road</p>
              <p>Belur Math, Howrah - 711202</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaEnvelope className="text-2xl mb-3" />
              <h3 className="font-semibold mb-1">Email Us</h3>
              <p>pritamnote4g@gmail.com</p>
            </div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="py-20 px-4 bg-[#f2ece4]"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={item} className="text-center mb-12">
              <p className="uppercase text-sm tracking-widest text-[#5e4b2a]">Our Rates</p>
              <h2 className="text-4xl font-semibold text-[#a8843b] mt-2 mb-4">Banquet Hall Pricing</h2>
              <p className="text-[#555] text-sm max-w-2xl mx-auto">
                Transparent pricing for all your event needs
              </p>
            </motion.div>

            <motion.div variants={container} className="grid md:grid-cols-3 gap-8">
              {pricing.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <h3 className="text-xl text-[#a8843b] font-semibold mb-2">{item.type}</h3>
                  <p className="text-2xl font-bold mb-4 text-neutral-700">{item.price}</p>
                  <p className="text-[#555] text-sm">{item.details}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Our Services */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="py-20 px-4 bg-[#f2ece4]"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div variants={item} className="text-center mb-12">
              <p className="uppercase text-sm tracking-widest text-[#5e4b2a]">What We Offer</p>
              <h2 className="text-4xl font-semibold text-[#a8843b] mt-2 mb-4">Our Event Services</h2>
              <p className="text-[#555] text-sm max-w-2xl mx-auto">
                Comprehensive solutions for all your event needs at one convenient location
              </p>
            </motion.div>

            <motion.div variants={container} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl text-[#a8843b] font-semibold mb-2">{service.title}</h3>
                  <p className="text-[#555] text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Facilities Section */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="bg-[#f2ece4] py-20 px-4"
        >
          <div className="mx-auto grid md:grid-cols-2 gap-10 items-center max-w-7xl">
            <motion.div variants={item} className="relative h-[400px] md:h-[500px] w-full overflow-hidden shadow-md">
              <Image src={img1} alt="Banquet Hall" fill className="object-cover w-auto h-auto" />
            </motion.div>
            <motion.div variants={item} className="text-[#a8843b]">
              <p className="text-xs uppercase tracking-widest mb-2">Our Venue</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-2">Spacious Banquet Halls</h2>
              <p className="text-sm font-semibold text-[#333] mb-4">
                Two floors of flexible event space for all occasions
              </p>
              <p className="text-sm text-[#333] leading-relaxed mb-6">
                Our property features versatile venue options to suit events of all sizes. The two-floor banquet space can be configured for weddings, parties, or conferences. We offer both air-conditioned and non-AC options to match your needs and budget. All spaces come with essential amenities including lighting, sound systems, and comfortable seating arrangements.
              </p>
              <motion.a 
                whileHover={{ x: 5 }}
                href="#" 
                className="text-xs uppercase tracking-wider text-[#a8843b] hover:underline flex items-center gap-1"
              >
                Explore Spaces →
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Decor Section */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="bg-[#f2ece4] py-20 px-4"
        >
          <div className="max-w-7xl mx-auto text-center mb-12">
            <motion.p variants={item} className="uppercase text-sm tracking-widest text-[#5e4b2a]">Decorations</motion.p>
            <motion.h2 variants={item} className="text-4xl font-semibold text-[#a8843b] mt-2 mb-4">Beautiful Event Styling</motion.h2>
            <motion.p variants={item} className="text-[#555] text-sm max-w-2xl mx-auto">
              We offer professional decoration services to make your event truly special
            </motion.p>
          </div>

          <motion.div variants={container} className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { title: "Lighting", description: "Elegant lighting arrangements to create the perfect ambiance", image: img1 },
              { title: "Floral Decor", description: "Beautiful flower arrangements for all occasions", image: img2 },
              { title: "Theme Decor", description: "Custom decor to match your event theme", image: img3 },
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="relative h-96 group overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover w-auto h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                  <p className="text-white text-sm mb-1">{item.description}</p>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="#" 
                    className="text-sm text-[#e8c87a] uppercase tracking-wider hover:underline flex items-center gap-1"
                  >
                    View Details →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Testimonials */}
        <Testimonials />

        {/* Local Attractions */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="bg-[#f9f5f1] px-4 py-20"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.p variants={item} className="text-xs uppercase tracking-widest text-[#5e4b2a]">Around Us</motion.p>
            <motion.h2 variants={item} className="text-3xl md:text-4xl text-[#a8843b] font-semibold mt-2 mb-4">
              Nearby Attractions
            </motion.h2>
            <motion.p variants={item} className="text-sm text-gray-600">
              Located conveniently near Belur Math in Howrah, with great connectivity to Kolkata. Easily accessible from all parts of the city and nearby areas.
            </motion.p>
          </div>

          <motion.div variants={container} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-8xl mx-auto mb-16">
            {places.map((place, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="text-center bg-white p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-60 relative overflow-hidden shadow-sm mb-4">
                  <Image
                    src={place.image}
                    alt={place.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300 w-auto h-auto"
                  />
                </div>
                <h4 className="text-[#a8843b] font-semibold">{place.title}</h4>
                <p className="text-xs text-gray-600 mt-2">{place.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={container} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto">
            {stats.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center text-[#a8843b] text-2xl mb-2">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#111]">{item.value}</h3>
                <p className="text-xs uppercase text-[#5e4b2a] mt-1">{item.label}</p>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Map Section */}
        <section className="h-[60vh] w-full relative border-t border-b border-gray-800">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.6839096493113!2d88.35356589999999!3d22.6282759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d71e5cf8dbb%3A0x843827a1836ac2!2sSadhukhan%20banquet!5e0!3m2!1sen!2sin!4v1751957003926!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="filter grayscale(50%) contrast(110%)"
            ></iframe>
          </motion.div>
        </section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-96 bg-[#a8843b] text-white"
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center max-w-2xl px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Book Your Event?</h2>
              <p className="mb-8 text-lg">Contact us today to reserve your date or visit our venue</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#a8843b] px-8 py-3 font-semibold"
              >
                GET IN TOUCH
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}