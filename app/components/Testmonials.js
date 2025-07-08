"use client";
import { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Harsha Shah",
    quote: "Beautiful Hotel...  Lovely environment! ♥️",
    rating: 5,
    stayDate: "3 months ago"
  },
  {
    name: "Adity Sen",
    quote: "The banquet facilities are exceptional. Perfect for our wedding reception!",
    rating: 5,
    stayDate: "2 months ago"
  },
  {
    name: "Axar Patel",
    quote: "Such a peaceful resort. The staff went above and beyond to make our stay memorable.",
    rating: 5,
    stayDate: "1 month ago"
  },
  {
    name: "Dipika Haldar",
    quote: "Impeccable service and delicious food. Will definitely return!",
    rating: 5,
    stayDate: "2 weeks ago"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  if (!isMounted) {
    return (
      <section className="py-16 bg-[#f9f5f0]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-64 flex items-center justify-center">
            <p className="text-[#a8843b]">Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 font-corm bg-[#f9f5f0]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase text-xs tracking-widest text-[#5e4b2a]">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl text-[#a8843b] font-semibold mt-2">
            What Our Guests Say
          </h2>
          <div className="flex justify-center mt-4">
            <div className="w-16 h-px bg-[#a8843b]"></div>
          </div>
        </div>

        <div className="relative bg-white p-8 rounded-lg shadow-md border border-[#e8d8b8]">
          {/* Testimonial Content */}
          <div className="text-center transition-opacity duration-300">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-amber-500 mx-1" />
              ))}
            </div>
            <blockquote className="text-gray-700 italic text-lg mb-6">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="text-[#a8843b] font-medium">
              <p>{testimonials[currentIndex].name}</p>
              <p className="text-sm text-gray-500 mt-1">
                {testimonials[currentIndex].stayDate}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-[#a8843b] hover:text-amber-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-[#a8843b] hover:text-amber-700 transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#a8843b]" : "bg-[#e8d8b8]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}