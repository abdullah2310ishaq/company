"use client";

import Image from "next/image";
import { useState } from "react";
import ContactForm from "./ContactForm";

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="home" className="relative w-full bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Side - Profile and Content */}
          <div className="flex flex-col justify-start space-y-3 sm:space-y-4 lg:space-y-5 lg:pt-2 order-2 lg:order-1">
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
                Hello, we are Duseca Software
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
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
          <div className="relative w-full order-1 lg:order-2 mt-2 sm:mt-3 lg:mt-4">
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

      {/* Contact Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Minimal backdrop - just for click outside */}
          <div
            className="absolute inset-0 bg-black/10 backdrop-blur-sm"
            onClick={() => setIsDialogOpen(false)}
          ></div>

          {/* Dialog Box */}
          <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto z-10">
            {/* Close Button */}
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors z-20 p-1"
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

            {/* Contact Form Component */}
            <div className="p-4 sm:p-5 lg:p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
