"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../public/img/1 (4).jpeg";
import img2 from "../../public/img/1 (2).jpeg";
import img3 from "../../public/img/1 (3).jpeg";
import { FaGlassCheers, FaBirthdayCake, FaUsers, FaHandshake, FaCalendarAlt } from "react-icons/fa";

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

const ServicesPage = () => {
  const services = [
    {
      icon: <FaGlassCheers className="text-3xl text-[#b88c3b]" />,
      title: "Wedding Receptions",
      description: "Elegant spaces for your special day with customizable decor options",
      image: img1,
      pricing: "Starting from ₹30,000 (Non-AC) / ₹40,000 (AC)"
    },
    {
      icon: <FaBirthdayCake className="text-3xl text-[#b88c3b]" />,
      title: "Birthday Parties",
      description: "Celebrate milestones in our spacious halls with full customization",
      image: img2,
      pricing: "Starting from ₹25,000"
    },
    {
      icon: <FaUsers className="text-3xl text-[#b88c3b]" />,
      title: "Corporate Events",
      description: "Professional setting for meetings, conferences and seminars",
      image: img3,
      pricing: "Custom pricing available"
    },
    {
      icon: <FaHandshake className="text-3xl text-[#b88c3b]" />,
      title: "Anniversary Celebrations",
      description: "Create lasting memories with your loved ones in our beautiful halls",
      image: img1,
      pricing: "Starting from ₹30,000"
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-[#b88c3b]" />,
      title: "Religious Functions",
      description: "Sacred spaces for pujas, jagrans and other religious ceremonies",
      image: img2,
      pricing: "Starting from ₹20,000"
    }
  ];

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
              <p className="text-6xl sm:text-8xl font-bold mb-6 md:mb-8">
                Our Services
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-white w-1/2 mx-auto"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="py-20 px-6 bg-[#f9f5f1]"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={item} className="text-center mb-12">
              <h2 className="text-4xl font-semibold text-[#b88c3b] mb-4">Event Services</h2>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                Sadhukhan Banquet offers versatile event spaces for all your special occasions at our Belur Math location
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-center mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-center text-[#b88c3b] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      {service.description}
                    </p>
                    <p className="text-sm font-medium text-center text-[#b88c3b]">
                      {service.pricing}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="py-20 px-6 bg-[#f2ece4]"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div variants={item} className="text-center mb-12">
              <h2 className="text-4xl font-semibold text-[#b88c3b] mb-4">Pricing Options</h2>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                Transparent pricing for our premium banquet halls
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                variants={item}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-semibold text-[#b88c3b] mb-4">Non-AC Hall</h3>
                <div className="text-3xl font-bold mb-4 text-neutral-700">₹30,000</div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#b88c3b] mr-2">✓</span>
                    <span>Two floors of event space</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#b88c3b] mr-2">✓</span>
                    <span>Includes 200 chairs & 20 tables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#b88c3b] mr-2">✓</span>
                    <span>Electricity charged at ₹10/unit</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                variants={item}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-semibold text-[#b88c3b] mb-4">AC Hall</h3>
                <div className="text-3xl font-bold mb-4 text-neutral-700">₹40,000</div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#b88c3b] mr-2">✓</span>
                    <span>Two floors with air conditioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#b88c3b] mr-2">✓</span>
                    <span>Includes 200 chairs & 20 tables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#b88c3b] mr-2">✓</span>
                    <span>Premium decor options available</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div 
              variants={item}
              className="mt-8 bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-semibold text-[#b88c3b] mb-4 text-center">Decor Packages</h3>
              <div className="text-3xl font-bold mb-4 text-center text-neutral-700">₹30,000</div>
              <p className="text-sm text-gray-600 text-center mb-6">
                Beautiful lighting and floral arrangements to enhance your event
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-neutral-500">
                <div className="flex items-start">
                  <span className="text-[#b88c3b] mr-2">✓</span>
                  <span>Elegant lighting setup</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#b88c3b] mr-2">✓</span>
                  <span>Floral decorations</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#b88c3b] mr-2">✓</span>
                  <span>Stage decoration</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#b88c3b] mr-2">✓</span>
                  <span>Entrance decor</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="py-20 px-6 bg-[#f9f5f1]"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 variants={item} className="text-4xl font-semibold text-[#b88c3b] mb-6">
              Ready to Book Your Event?
            </motion.h2>
            <motion.p variants={item} className="text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to check availability and schedule a venue tour at our Belur Math location
            </motion.p>
            <motion.div variants={item}>
              <a 
                href="/contact"
                className="inline-block bg-[#b88c3b] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a57c35] transition"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default ServicesPage;