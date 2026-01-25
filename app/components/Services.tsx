"use client";

import { useState } from "react";

interface Service {
  id: string;
  title: string;
  icon: string;
  subServices: string[];
}

const services: Service[] = [
  {
    id: "1",
    title: "Mobile App Development",
    icon: "📱",
    subServices: [
      "iOS App Development",
      "Android App Development",
      "Flutter App Development",
      "React Native Development",
      "Mobile App Marketing",
      "App Design",
      "App Store Optimization",
      "App Maintenance & Support",
    ],
  },
  {
    id: "2",
    title: "Website Development",
    icon: "🌐",
    subServices: [
      "WordPress Development",
      "Shopify Development",
      "Custom Website Development",
      "E-commerce Websites",
      "Responsive Web Design",
      "Web Application Development",
      "API Integration",
      "Website Maintenance",
    ],
  },
  {
    id: "3",
    title: "UI/UX Design",
    icon: "🎨",
    subServices: [
      "Website Design",
      "Mobile App Design",
      "Landing Page Design",
      "UX Design",
      "Prototyping",
      "Design Systems",
      "User Research",
      "Design Consultation",
    ],
  },
  {
    id: "4",
    title: "E-commerce Stores",
    icon: "🛒",
    subServices: [
      "Shopify Store Development",
      "WooCommerce Development",
      "Custom E-commerce Solutions",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Management System",
      "Multi-vendor Platforms",
      "E-commerce Marketing",
    ],
  },
  {
    id: "5",
    title: "Backend Development",
    icon: "⚙️",
    subServices: [
      "API Development",
      "Database Design",
      "Server Management",
      "Cloud Services",
      "Microservices Architecture",
      "Third-party Integrations",
      "Security Implementation",
      "Performance Optimization",
    ],
  },
  {
    id: "6",
    title: "Software Development",
    icon: "💻",
    subServices: [
      "Software Development",
      "AI Development",
      "Chatbot Development",
      "QA & Review",
      "User Testing",
      "Databases",
      "System Architecture",
      "DevOps & CI/CD",
    ],
  },
  {
    id: "7",
    title: "Product Development",
    icon: "🚀",
    subServices: [
      "Product Strategy",
      "MVP Development",
      "Product Design",
      "Agile Development",
      "Product Launch",
      "Product Analytics",
      "Feature Development",
      "Product Roadmap",
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Side - Text Content */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Services We Provide
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Discover our range of services to match your project needs.
              Provide us with your details, and we will customize a proposal just
              for you.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Request Pricing
            </button>
          </div>

          {/* Right Side - Scrollable Service Cards */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="flex-shrink-0 w-80 bg-white border-2 border-gray-100 rounded-xl p-5 hover:shadow-lg transition-shadow"
                  >
                    {/* Service Icon */}
                    <div className="text-4xl mb-3">{service.icon}</div>

                    {/* Service Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    {/* Sub Services List - Show only first 3 */}
                    <ul className="space-y-2 mb-4">
                      {service.subServices.slice(0, 3).map((subService, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <svg
                            className="w-4 h-4 text-blue-600 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm">{subService}</span>
                        </li>
                      ))}
                    </ul>

                    {/* See More Link */}
                    <button
                      onClick={() => openModal(service)}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm underline"
                    >
                      See more
                    </button>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg z-10"
                aria-label="Scroll left"
                onClick={(e) => {
                  e.stopPropagation();
                  const container = e.currentTarget.parentElement?.querySelector('.overflow-x-auto');
                  if (container) {
                    container.scrollBy({ left: -320, behavior: 'smooth' });
                  }
                }}
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg z-10"
                aria-label="Scroll right"
                onClick={(e) => {
                  e.stopPropagation();
                  const container = e.currentTarget.parentElement?.querySelector('.overflow-x-auto');
                  if (container) {
                    container.scrollBy({ left: 320, behavior: 'smooth' });
                  }
                }}
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full max-h-[80vh] overflow-hidden shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-10 flex-shrink-0">
              <h2 className="text-xl font-bold text-gray-900">
                The Services We Provide
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
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

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto flex-1">
              <div className="p-4">
                {/* Service Icon and Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{selectedService.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedService.title}
                  </h3>
                </div>

                {/* Sub Services List */}
                <ul className="space-y-2">
                  {selectedService.subServices.map((subService, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm">{subService}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
