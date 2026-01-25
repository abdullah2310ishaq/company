"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero section (approximately 600px)
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      {!isScrolled ? (
        // Initial Navbar (Top of page)
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-green-600">
                Duseca
              </Link>
            </div>

            {/* Navigation Links - Center */}
            <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                href="/consultations"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Consultations
              </Link>
              {/* App Industries with Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center gap-1 font-medium transition-colors ${
                    isDropdownOpen
                      ? "text-green-600"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  App Industries
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    <div className="grid grid-cols-2 gap-4 px-4">
                      {/* Left Column */}
                      <div className="space-y-2">
                        <Link
                          href="/industries/ecommerce"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          E-commerce Apps
                        </Link>
                        <Link
                          href="/industries/iot"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          IOT Apps
                        </Link>
                        <Link
                          href="/industries/healthcare"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Healthcare Apps
                        </Link>
                        <Link
                          href="/industries/ai"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          AI Apps
                        </Link>
                        <Link
                          href="/industries/ride-sharing"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Ride Sharing Apps
                        </Link>
                        <Link
                          href="/industries/custom"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Custom Apps
                        </Link>
                      </div>
                      {/* Right Column */}
                      <div className="space-y-2">
                        <Link
                          href="/industries/social-media"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Social Media Apps
                        </Link>
                        <Link
                          href="/industries/rental"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Rental Apps
                        </Link>
                        <Link
                          href="/industries/delivery"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Delivery Apps
                        </Link>
                        <Link
                          href="/industries/educational"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Educational Apps
                        </Link>
                        <Link
                          href="/industries/fintech"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Fintech Apps
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/portfolio"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Portfolio
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="/reviews"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Reviews
              </Link>
            </div>

            {/* Request Pricing Button - Right */}
            <div className="flex-shrink-0">
              <button className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Request Pricing
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Scrolled Navbar (After hero section)
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section - CEO Profile and CTA Buttons */}
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            {/* CEO Profile - Left */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="Muhammad Salman"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Muhammad Salman
                </h3>
                <p className="text-xs text-gray-600">C.E.O @ Duseca Software</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs font-semibold text-gray-700">
                      G Certified
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">•</span>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-700">
                      5.0 (458)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Right */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2 relative">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Chat with us</span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2">
                <svg
                  className="w-4 h-4"
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
                <span className="text-sm">Book a call</span>
              </button>
            </div>
          </div>

          {/* Bottom Section - Navigation Links */}
          <div className="flex items-center justify-center py-2">
            <div className="flex items-center space-x-6">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-green-600 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-green-600 hover:text-green-700 transition-colors font-medium border-b-2 border-green-600 pb-1"
              >
                About Us
              </Link>
              <Link
                href="/consultations"
                className="text-sm text-gray-600 hover:text-green-600 transition-colors font-medium"
              >
                Consultations
              </Link>
              {/* App Industries with Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    isDropdownOpen
                      ? "text-green-600"
                      : "text-gray-600 hover:text-green-600"
                  }`}
                >
                  App Industries
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    <div className="grid grid-cols-2 gap-4 px-4">
                      {/* Left Column */}
                      <div className="space-y-2">
                        <Link
                          href="/industries/ecommerce"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          E-commerce Apps
                        </Link>
                        <Link
                          href="/industries/iot"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          IOT Apps
                        </Link>
                        <Link
                          href="/industries/healthcare"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Healthcare Apps
                        </Link>
                        <Link
                          href="/industries/ai"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          AI Apps
                        </Link>
                        <Link
                          href="/industries/ride-sharing"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Ride Sharing Apps
                        </Link>
                        <Link
                          href="/industries/custom"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Custom Apps
                        </Link>
                      </div>
                      {/* Right Column */}
                      <div className="space-y-2">
                        <Link
                          href="/industries/social-media"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Social Media Apps
                        </Link>
                        <Link
                          href="/industries/rental"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Rental Apps
                        </Link>
                        <Link
                          href="/industries/delivery"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Delivery Apps
                        </Link>
                        <Link
                          href="/industries/educational"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Educational Apps
                        </Link>
                        <Link
                          href="/industries/fintech"
                          className="block text-gray-700 hover:text-green-600 transition-colors text-sm py-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Fintech Apps
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/portfolio"
                className="text-sm text-gray-600 hover:text-green-600 transition-colors font-medium"
              >
                Portfolio
              </Link>
              <Link
                href="/services"
                className="text-sm text-gray-600 hover:text-green-600 transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="/reviews"
                className="text-sm text-gray-600 hover:text-green-600 transition-colors font-medium"
              >
                Reviews
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
