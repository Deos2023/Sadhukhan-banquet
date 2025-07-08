"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    handleScroll(); // initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItemContainerClass = "group relative cursor-pointer";
  const underlineClass =
    "absolute left-0 -bottom-1 w-full h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left";

  const renderNavLink = (href, label, onClickHandler = null) => {
    const isActive = pathname === href;
    const activeTextClass = isActive ? "text-amber-500" : "";
    return (
      <li onClick={onClickHandler} className={navItemContainerClass}>
        <Link href={href}>
          <span className={`relative ${activeTextClass} py-1 hover:text-amber-500 transition-colors duration-300 uppercase text-sm tracking-wider`}>
            {label}
            <span className={underlineClass}></span>
          </span>
        </Link>
      </li>
    );
  };

  return (
    <div className={`absolute top-0 left-0 right-0 z-50 w-full py-7 font-semibold transition-colors duration-600`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center text-white relative">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-xl focus:outline-none">
              {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>

          {/* Centered Text Logo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold uppercase tracking-wide text-white hover:text-amber-500 transition-all leading-tight"
            >
              Sadhukhan <br /> Banquet
            </Link>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex gap-4 items-center text-white text-lg">
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

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="border border-white px-4 py-1 text-sm hover:bg-white hover:text-black transition-colors duration-300">
                BOOK NOW
              </button>
            </Link>
          </div>
        </nav>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center py-5 gap-6 text-sm mt-2">
          {renderNavLink("/", "Home")}
          {renderNavLink("/aboutUs", "About Us")}
          {renderNavLink("/services", "Services")}
          {renderNavLink("/gallery", "Gallery")}
          {renderNavLink("/contact", "Contact us")}
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-neutral-800 bg-opacity-95 text-white py-4">
            <ul className="flex flex-col items-center gap-4">
              {renderNavLink("/", "Home", toggleMenu)}
              {renderNavLink("/aboutUs", "About Us", toggleMenu)}
              {renderNavLink("/services", "Services", toggleMenu)}
              {renderNavLink("/gallery", "Gallery", toggleMenu)}
              {renderNavLink("/contact", "Contact us", toggleMenu)}
            </ul>
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-amber-500 transition text-xl" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-amber-500 transition text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-amber-500 transition text-xl" />
              </a>
            </div>
            <div className="flex justify-center mt-4">
              <Link href="/contact" onClick={toggleMenu}>
                <button className="border border-white px-4 py-1 text-sm hover:bg-white hover:text-black transition-colors duration-300">
                  BOOK NOW
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
