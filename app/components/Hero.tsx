"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (isDialogOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDialogOpen]);

  return (
    <section id="home" className="relative w-full bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Side - Profile and Content */}
          <div className="flex flex-col justify-start space-y-3 sm:space-y-4 lg:space-y-5 lg:pt-2 order-1">
            {/* Profile Picture */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/sallu.png"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Company Introduction */}
            <div className="space-y-1">
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-normal">
                Hello, we are Fizzup Software
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
              Mobile App Development Agency for Android App and iOS App Development
            </h1>

            {/* Contact Button */}
            <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-gray-800 text-white px-5 py-3 sm:px-6 sm:py-3.5 lg:px-6 lg:py-3 rounded-lg text-sm sm:text-base lg:text-lg font-medium hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-fit mt-4"
            >
              Contact us
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
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
          </div>

          {/* Right Side - Hero Image (parent controls clipping; Image just fills) */}
          <div className="relative w-full order-2 mt-2 sm:mt-3 lg:mt-4">
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[290px] lg:h-[310px] xl:h-[330px] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/hero.jpeg"
                alt="Mobile App Development Agency"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300"></div>

      {/* Contact Dialog - same style as portfolio modal */}
      {isDialogOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setIsDialogOpen(false)}
        >
          <div
            className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header: Contact us + Close */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between flex-shrink-0 z-10">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                Contact us
              </h2>
              <button
                onClick={() => setIsDialogOpen(false)}
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

            {/* Scrollable content - one background color */}
            <div className="overflow-y-auto flex-1 bg-white">
              <div className="p-4 sm:p-6 lg:p-8">
                <ContactForm isModal />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
