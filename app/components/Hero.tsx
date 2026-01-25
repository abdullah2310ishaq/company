"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call here
    alert("Thank you for contacting us! We'll get back to you soon.");
    setIsDialogOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative w-full bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Profile and Content */}
          <div className="flex flex-col justify-start space-y-4 lg:space-y-5">
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
          <div className="relative w-full flex items-center justify-center">
            <div className="relative w-full h-[350px] lg:h-[400px] xl:h-[450px] rounded-3xl overflow-hidden">
              <Image
                src="/hero.jpeg"
                alt="Mobile App Development Agency"
                fill
                className="object-contain rounded-3xl"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Minimal backdrop - just for click outside */}
          <div
            className="absolute inset-0 bg-black/10 backdrop-blur-sm"
            onClick={() => setIsDialogOpen(false)}
          ></div>

          {/* Dialog Box */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10">
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

            {/* Form Content */}
            <div className="p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-6">
                Get in touch with us. We&apos;d love to hear from you!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-all duration-300 mt-6"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
