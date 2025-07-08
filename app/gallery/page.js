
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
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

// Option 1: If keeping current filenames

const images = Array.from({ length: 44 }, (_, i) => `/img/1 (${i + 1}).jpeg`);

// Option 2: Better - use simpler filenames (recommended)
// const images = Array.from({ length: 20 }, (_, i) => `/img/gallery-${i}.jpeg`);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Debug: Log the first image path
  console.log("First image path:", images[0]);

  return (
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
                Gallery
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
    <section className="bg-[#f9f5f0] py-16">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {images.map((src, index) => {
          // Debug: Log each image path
          console.log(`Image ${index}:`, src);
          
          return (
            <div key={index} className="cursor-pointer" onClick={() => setSelectedImage(src)}>
              <Image
                src={src}
                alt={`Gallery image ${index}`}
                width={500}
                height={300}
                className="w-full h-64 object-cover  shadow-md transition-transform hover:scale-105 duration-300"
                loading={index > 3 ? "lazy" : "eager"} // Load first few images eagerly
                onError={(e) => {
                  console.error(`Failed to load image: ${src}`);
                  e.target.style.display = 'none'; // Hide broken images
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Lightbox remains same */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}>
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Enlarged"
              fill
              style={{ objectFit: 'contain' }}
              className=" shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
    </div>
  );
}