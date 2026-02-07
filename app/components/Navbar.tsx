"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 600);

      // Determine active section based on scroll position
      const sections = ["home", "about", "portfolio", "services", "contact"];
      const sectionElements = sections.map((id) => {
        const element = document.getElementById(id);
        return element ? { id, offsetTop: element.offsetTop, offsetHeight: element.offsetHeight } : null;
      }).filter(Boolean) as Array<{ id: string; offsetTop: number; offsetHeight: number }>;

      const currentSection = sectionElements.find((section) => {
        return (
          scrollPosition >= section.offsetTop - 100 &&
          scrollPosition < section.offsetTop + section.offsetHeight - 100
        );
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else if (scrollPosition < 600) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About Us", id: "about" },
    { href: "#portfolio", label: "Portfolio", id: "portfolio" },
    { href: "#services", label: "Services", id: "services" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu on link click
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
        {!isScrolled ? (
          // Initial Navbar (Top of page)
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo - Left */}
              <div className="flex-shrink-0">
                <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="text-xl md:text-2xl font-bold text-gray-900">
                  Fizzup
                </a>
              </div>

              {/* Navigation Links - Center */}
              <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative font-medium transition-colors ${
                      activeSection === link.id
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></span>
                    )}
                  </a>
                ))}
              </div>

              {/* Request Pricing Button - Right */}
              <div className="flex items-center gap-2 md:gap-0">
                <button className="hidden sm:inline-block bg-gray-900 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm md:text-base font-medium hover:bg-gray-800 transition-colors">
                  Request Pricing
                </button>
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-gray-200 py-4">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`text-base font-medium transition-colors ${
                        activeSection === link.id
                          ? "text-gray-900"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                  <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors w-full text-left">
                    Request Pricing
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Scrolled Navbar (After hero section)
          <>
            {/* Top Section - CEO Profile and CTA Buttons */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between py-2 md:py-3 border-b border-gray-200">
                {/* CEO Profile - Left */}
                <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 min-w-0">
                  <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/sallu.png"
                      alt="Muhammad Salman"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="min-w-0 hidden sm:block">
                    <h3 className="text-sm md:text-base font-bold text-gray-900 truncate">
                      Muhammad Salman
                    </h3>
                    <p className="text-xs text-gray-600 truncate">C.E.O @ Fizzup Software</p>
                  </div>
                </div>

                {/* CTA Buttons - Right */}
                <div className="flex items-center gap-1.5 md:gap-3 flex-shrink-0">
                  <button className="hidden sm:flex bg-gray-900 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors items-center gap-1.5 md:gap-2 relative">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></div>
                    <span>Chat with us</span>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] md:text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                      2
                    </span>
                  </button>
                  <button 
                    onClick={openCalendly}
                    className="bg-gray-900 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-1.5 md:gap-2"
                  >
                    <svg
                      className="w-3.5 h-3.5 md:w-4 md:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="hidden sm:inline">Book a call</span>
                    <span className="sm:hidden">Call</span>
                  </button>
                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors ml-1"
                    aria-label="Toggle menu"
                  >
                    {isMobileMenuOpen ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Bottom Section - Navigation Links */}
              <div className="hidden md:flex items-center justify-center py-2">
                <div className="flex items-center space-x-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`relative text-sm font-medium transition-colors ${
                        activeSection === link.id
                          ? "text-gray-900"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                      {activeSection === link.id && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></span>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <div className="md:hidden border-t border-gray-200 py-4">
                  <div className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.id}
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className={`text-base font-medium transition-colors ${
                          activeSection === link.id
                            ? "text-gray-900"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {link.label}
                      </a>
                    ))}
                    <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors w-full text-left">
                      Request Pricing
                    </button>
                    <button 
                      onClick={openCalendly}
                      className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors w-full text-left flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Chat with us
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </nav>

      {/* Calendly Modal */}
      {isCalendlyOpen && (
        <div
          className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeCalendly}
        >
          <div
            className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between z-10 flex-shrink-0">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                Book a Call
              </h2>
              <button
                onClick={closeCalendly}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

              {/* Calendly Widget Container */}
              <div className="overflow-y-auto flex-1">
                <iframe
                  src={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-username/meeting"}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="min-h-[500px] sm:min-h-[600px] w-full"
                  title="Schedule a call"
                ></iframe>
              </div>
          </div>
        </div>
      )}
    </>
  );
}
