"use client";

import Image from "next/image";
import { useRef } from "react";

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gray-100 py-12 lg:py-20">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Content & CTA (4/12 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
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
            <button className="bg-[#2582CA] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1e6ba5] transition-colors inline-flex items-center gap-2 mt-8 w-fit">
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

          {/* Right Column - Scrollable Cards (8/12 columns) */}
          <div className="lg:col-span-8 relative">
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
                    className="flex-shrink-0 w-80 bg-white rounded-3xl overflow-hidden shadow-lg"
                  >
                    {/* Visual Asset Section */}
                    <div className="relative w-full aspect-square bg-gray-50 p-4">
                      <div className="relative w-full h-full">
                        <Image
                          src="/portfolio.png"
                          alt={project.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {/* Case Study Badge */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-semibold text-gray-700">
                        Case Study
                      </div>
                      {/* Duseca Logo */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-gray-900">
                        Duseca
                      </div>
                    </div>

                    {/* Footer Meta - Title Below */}
                    <div className="bg-gray-50 p-6">
                      <div className="mb-3">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {project.name}: {project.description}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {project.category}
                        </p>
                      </div>
                      <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors w-full">
                        Learn more
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-[#2582CA] text-white flex items-center justify-center shadow-lg hover:bg-[#1e6ba5] transition-colors z-10"
              aria-label="Previous project"
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
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-[#2582CA] text-white flex items-center justify-center shadow-lg hover:bg-[#1e6ba5] transition-colors z-10"
              aria-label="Next project"
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
    </section>
  );
}
