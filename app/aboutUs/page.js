"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import img1 from "../../public/img/1 (4).jpeg";
import img2 from "../../public/img/1 (2).jpeg";
import img3 from "../../public/img/1 (3).jpeg";
import { FaLeaf, FaGlassCheers, FaConciergeBell, FaHeart } from "react-icons/fa";

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

const page = () => {
  const features = [
    {
      icon: <FaLeaf className="text-3xl text-[#b88c3b]" />,
      title: "Spacious Halls",
      description: "Two floors of versatile event space perfect for all occasions"
    },
    {
      icon: <FaGlassCheers className="text-3xl text-[#b88c3b]" />,
      title: "Flexible Options",
      description: "AC and non-AC halls to suit your needs and budget"
    },
    {
      icon: <FaConciergeBell className="text-3xl text-[#b88c3b]" />,
      title: "Complete Services",
      description: "End-to-end event solutions including decor and arrangements"
    },
    {
      icon: <FaHeart className="text-3xl text-[#b88c3b]" />,
      title: "Trusted Venue",
      description: "Creating memorable celebrations since 1980"
    }
  ];

  const timeline = [
    {
      year: "1980",
      title: "Our Foundation",
      description: "Sadhukhan Banquet was established in Belur Math, Howrah"
    },
    {
      year: "1995",
      title: "First Expansion",
      description: "Added second floor to accommodate growing demand"
    },
    {
      year: "2010",
      title: "Modernization",
      description: "Renovated facilities and added air-conditioning options"
    },
    {
      year: "2023",
      title: "Present Day",
      description: "Continuing to serve Howrah with quality event spaces"
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
                About Us
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

        {/* About Section */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="bg-[#f9f5f1] py-20 px-6 text-[#5e4b2a]"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.h4 variants={item} className="text-sm tracking-widest uppercase mb-3 font-medium">Our Story</motion.h4>
            <motion.h2 variants={item} className="text-4xl md:text-5xl font-semibold leading-snug mb-8 text-[#b88c3b]">
              Celebrating life's moments at Sadhukhan Banquet since 1980
            </motion.h2>

            <motion.p variants={item} className="max-w-3xl mx-auto text-sm text-gray-700 mb-10">
              Established in 1980, Sadhukhan Banquet has been a trusted venue in Belur Math, Howrah for all types of celebrations. Located at 81 Lala Babu Shire Road, we specialize in making events memorable with our spacious two-floor halls, available in both AC and non-AC options. From weddings and birthdays to conferences and receptions, our professional team ensures your events are executed flawlessly.
            </motion.p>
          </div>

          {/* Key Features */}
          <motion.div 
            variants={container}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto my-16"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#b88c3b]">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Gallery */}
          <motion.div 
            variants={container}
            className="max-w-8xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
          >
            {/* Left Column */}
            <motion.div variants={item} className="space-y-4">
              <motion.div whileHover={{ scale: 1.03 }} className="overflow-hidden shadow-lg h-48 w-full">
                <Image src={img1} alt="Event Decor" className="object-cover w-full h-full" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="overflow-hidden shadow-lg h-48 w-full">
                <Image src={img2} alt="Banquet Space" className="object-cover w-full h-full" />
              </motion.div>
            </motion.div>

            {/* Center Column */}
            <motion.div variants={item} className="col-span-1 flex flex-col justify-center items-center">
              <motion.div whileHover={{ scale: 1.03 }} className="overflow-hidden shadow-lg h-[500px] w-full">
                <Image
                  src={img3}
                  alt="Celebration at Sadhukhan Banquet"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div variants={item} className="space-y-4">
              <motion.div whileHover={{ scale: 1.03 }} className="overflow-hidden shadow-lg h-48 w-full">
                <Image src={img1} alt="Banquet Hall" className="object-cover w-full h-full" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="overflow-hidden shadow-lg h-48 w-full">
                <Image src={img2} alt="Event Setup" className="object-cover w-full h-full" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Our Timeline */}
          <motion.section 
            variants={container}
            className="max-w-4xl mx-auto mt-24"
          >
            <motion.h2 variants={item} className="text-3xl font-semibold text-center mb-12 text-[#b88c3b]">
              Our Journey
            </motion.h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 w-0.5 h-full bg-[#b88c3b] transform -translate-x-1/2"></div>
              
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={container}
                  className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <motion.div 
                    variants={item}
                    className={`w-1/2 p-4 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                  >
                    <h3 className="text-xl font-semibold text-[#b88c3b]">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                  <div className="w-1/2 flex justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-[#b88c3b] text-white flex items-center justify-center font-bold"
                    >
                      {item.year}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.div 
            variants={container}
            className="max-w-4xl mx-auto mt-24 text-center"
          >
            <motion.h2 variants={item} className="text-3xl font-semibold mb-6 text-[#b88c3b]">
              Ready to Book Your Event?
            </motion.h2>
            <motion.p variants={item} className="text-sm text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact us today at 8617737566 or visit us at 81 Lala Babu Shire Road, Belur Math, Howrah.
            </motion.p>
            <motion.button
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#b88c3b] text-white px-8 py-3 font-semibold"
            >
              GET IN TOUCH
            </motion.button>
          </motion.div>
        </motion.section>
      </div>
    </>
  )
}

export default page