"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface Project {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Angelus Law",
    subtitle: "Guiding You Through Legal Paths: Angelus Law, Your Reliable Legal Companion",
    description: "Law firm, Legal Partner",
    category: "Mobile App Case Study",
    image: "/portfolio.png",
  },
  {
    id: 2,
    name: "VAMOS",
    subtitle: "RideSharing Mobile Application",
    description: "Vamos",
    category: "Mobile App Case Study",
    image: "/portfolio.png",
  },
  {
    id: 3,
    name: "iMechano",
    subtitle: "Automotive Service Booking Platform",
    description: "Mechanic Services, Auto Repair",
    category: "Mobile App Case Study",
    image: "/portfolio.png",
  },
];

export default function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <section id="portfolio" className="bg-gray-100 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-0 sm:px-1 lg:px-2 xl:px-2">
        {/* Header Row */}
        <div className="flex items-start justify-between mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Portfolio
          </h2>
          <button className="text-blue-600 hover:underline text-sm font-medium">
            See all projects
          </button>
        </div>

        {/* Main Wrapper - Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
          {/* Left Column - Content & CTA (35-40% width) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Duseca has successfully made over 700+ mobile apps, with a team
                of 50+ people. Our customers love us, giving 450+ reviews and a
                5-star rating. We&apos;re proud to help bring your app ideas to
                life with care and quality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Book a meeting with Wajahat Malek for a simple chat on how to
                build your app. He and our Duseca team will show you each step
                to make your app idea real.
              </p>
            </div>
            <button 
              onClick={openCalendly}
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2 mt-8 w-fit"
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
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Book free consultation
            </button>
          </div>

          {/* Right Column - Carousel (remaining width) */}
          <div className="lg:col-span-7 relative">
            {/* Scrollable Container */}
            <div className="relative overflow-hidden">
              <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="flex-shrink-0 w-full sm:w-72 lg:w-80 bg-white rounded-3xl overflow-hidden shadow-lg"
                  >
                    {/* Visual Asset Section */}
                    <div className="relative w-full h-64 bg-gray-50 p-3">
                      <div className="relative w-full h-full">
                        <Image
                          src="/portfolio.png"
                          alt={project.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {/* Case Study Badge */}
                      <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold text-gray-700">
                        Case Study
                      </div>
                      {/* Duseca Logo */}
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-gray-900">
                        Duseca
                      </div>
                    </div>

                    {/* Footer Meta - White Background */}
                    <div className="bg-white p-4 flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-gray-900 mb-1 truncate">
                          {project.name === "Angelus Law" 
                            ? `${project.name}: ${project.description}`
                            : project.name}
                        </h3>
                        <p className="text-xs text-gray-400">
                          {project.category}
                        </p>
                      </div>
                      <button 
                        onClick={() => openModal(project)}
                        className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors ml-3 flex-shrink-0"
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10 flex-shrink-0">
                <div className="flex items-center gap-4">
                  <div className="text-lg font-bold text-gray-900">
                    Duseca
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
                    Request pricing
                  </button>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close modal"
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
                </div>
              </div>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto flex-1">
                <div className="p-6">
                  {/* Project Title */}
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedProject.name === "Angelus Law" 
                        ? `${selectedProject.name}: ${selectedProject.description}`
                        : selectedProject.name}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {selectedProject.subtitle}
                    </p>
                  </div>

                  {/* Project Description */}
                  <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed text-base">
                      {selectedProject.name === "Angelus Law" 
                        ? "Angelus Law is a comprehensive legal solution designed to guide you through your legal journey with confidence. Our platform provides expert legal guidance, connects you with experienced attorneys, and offers seamless access to legal services. Whether you need assistance with document preparation, legal consultations, or case management, Angelus Law is your trusted legal partner. We understand that legal matters can be complex and overwhelming, which is why we've created an intuitive platform that simplifies the legal process. Our team of legal experts is dedicated to providing you with the support and resources you need to navigate your legal challenges successfully."
                        : selectedProject.name === "VAMOS"
                        ? "VAMOS is a revolutionary ride-sharing mobile application that transforms the way people travel. With VAMOS, users can easily book rides, track their driver in real-time, and enjoy a seamless transportation experience. Our platform connects passengers with verified drivers, ensuring safety and reliability. Whether you need a quick ride across town or a longer journey, VAMOS provides convenient, affordable, and efficient transportation solutions. The app features intuitive navigation, secure payment options, and 24/7 customer support to ensure a smooth experience for all users."
                        : "iMechano is an innovative automotive service booking platform that connects vehicle owners with trusted mechanics and service providers. With iMechano, you can easily schedule appointments, get quotes, and track service progress all from your mobile device. Our platform features a comprehensive network of certified mechanics, transparent pricing, and real-time service updates. Whether you need routine maintenance, emergency repairs, or specialized automotive services, iMechano makes it easy to find and book the right service provider for your needs. Experience hassle-free automotive service management with iMechano."}
                    </p>
                  </div>

                  {/* Project Image */}
                  <div className="relative w-full h-96 mb-6 rounded-xl overflow-hidden bg-gray-50">
                    <Image
                      src="/portfolio.png"
                      alt={selectedProject.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Additional Details */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Project Details
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-gray-700">Category: </span>
                        <span className="text-gray-600">{selectedProject.category}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Type: </span>
                        <span className="text-gray-600">Mobile Application</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Platform: </span>
                        <span className="text-gray-600">iOS & Android</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Calendly Modal */}
        {isCalendlyOpen && (
          <div
            className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeCalendly}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10 flex-shrink-0">
                <h2 className="text-xl font-bold text-gray-900">
                  Book a Call
                </h2>
                <button
                  onClick={closeCalendly}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close modal"
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
              </div>

              {/* Calendly Widget Container */}
              <div className="overflow-y-auto flex-1">
                <iframe
                  src={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-username/meeting"}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="min-h-[600px] w-full"
                  title="Schedule a call"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Chat Widget */}
        <div className="fixed bottom-6 right-6 z-40">
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs">
            <p className="text-sm text-gray-900 leading-relaxed">
              Hi! We Are Online. Please Let us Know How We May Assist You?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
