"use client";

import Image from "next/image";
import { useState } from "react";
import ContactForm from "./ContactForm";

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="home" className="relative w-full bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-0 sm:px-1 lg:px-2 xl:px-2 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Profile and Content */}
          <div className="flex flex-col justify-start space-y-4 lg:space-y-5 lg:pt-2">
            {/* Profile Picture */}
            <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden flex-shrink-0">
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
              <p className="text-xs lg:text-sm text-gray-600 font-normal">
                Hello, we are Duseca Software
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-tight">
              Mobile App Development Agency for Android App and iOS App Development
            </h1>

            {/* Contact Button */}
            <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-gray-800 text-white px-4 py-2.5 lg:px-6 lg:py-3 rounded-lg text-xs lg:text-sm font-medium hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2 w-fit mt-4"
            >
              Contact us
              <svg
                className="w-3 h-3 lg:w-4 lg:h-4"
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

          {/* Right Side - Hero Image */}
          <div className="relative w-full -mt-4 lg:-mt-8 -mr-2 sm:-mr-4 lg:-mr-6 xl:-mr-8">
            <div className="relative w-full h-[350px] lg:h-[400px] xl:h-[450px] rounded-3xl overflow-hidden">
              <Image
                src="/hero.jpeg"
                alt="Mobile App Development Agency"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300"></div>

      {/* Contact Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Minimal backdrop - just for click outside */}
          <div
            className="absolute inset-0 bg-black/10 backdrop-blur-sm"
            onClick={() => setIsDialogOpen(false)}
          ></div>

          {/* Dialog Box */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10">
            {/* Close Button */}
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-20"
            >
              <svg
                className="w-6 h-6"
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
            <div className="p-4 lg:p-6">
              <ContactForm />


            </div>
          </div>
        </div>
      )}
    </section>
  );
}
