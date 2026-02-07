"use client";

import Image from "next/image";

interface AppCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  appImage: string;
  teamImage: string;
  label: string;
}

const appCategories: AppCategory[] = [
  {
    id: "1",
    title: "E-commerce",
    subtitle: "E-commerce flutter application",
    description: "E-commerce Mobile Apps",
    appImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=800&fit=crop",
    teamImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    label: "E-commerce Mobile Apps",
  },
  {
    id: "2",
    title: "Social Media",
    subtitle: "Social Media flutter application",
    description: "Social Media Mobile Apps",
    appImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&fit=crop",
    teamImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    label: "Social Media Mobile Apps",
  },
  {
    id: "3",
    title: "Healthcare",
    subtitle: "Healthcare flutter application",
    description: "Healthcare Mobile Apps",
    appImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=800&fit=crop",
    teamImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    label: "Healthcare Mobile Apps",
  },
  {
    id: "4",
    title: "Education",
    subtitle: "Education flutter application",
    description: "Education Mobile Apps",
    appImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=800&fit=crop",
    teamImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    label: "Education Mobile Apps",
  },
  {
    id: "5",
    title: "IoT App",
    subtitle: "IoT flutter application",
    description: "IoT Mobile Apps",
    appImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=800&fit=crop",
    teamImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    label: "IoT Mobile Apps",
  },
];

export default function AppIndustries() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            App Industries
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Fizzup makes apps for every industry. Our skilled professionals
            create applications for education, healthcare, e-commerce,
            entertainment, and more. Each app is designed to meet specific
            needs and deliver great results. With Fizzup, every industry gets
            top-quality apps.
          </p>
        </div>

        {/* Scrollable Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
            {appCategories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 w-full md:w-96 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Card Content */}
                <div className="p-6">
                  {/* Category Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-green-400 text-sm mb-4">
                    {category.subtitle}
                  </p>
                  <a
                    href="#"
                    className="text-green-400 hover:text-green-300 text-sm underline mb-6 inline-block"
                  >
                    Case study - App features
                  </a>

                  {/* Stats Section */}
                  <div className="mb-6 space-y-3">
                    <div className="text-white">
                      <p className="text-2xl font-bold mb-1">
                        MOBILE APP DEVELOPMENT AGENCY
                      </p>
                    </div>

                    {/* Fiverr Rating */}
                    <div className="flex items-center gap-2">
                      <div className="bg-green-600 px-2 py-1 rounded">
                        <span className="text-white font-bold text-xs">fi</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-white text-xs">
                        Based on 125 Reviews
                      </span>
                    </div>

                    {/* Apps Developed */}
                    <div className="text-white">
                      <p className="text-3xl font-bold">700+ APPS DEVELOPED</p>
                    </div>
                  </div>

                  {/* App Screenshot */}
                  <div className="relative mb-6">
                    <div className="relative w-32 h-64 mx-auto bg-gray-800 rounded-3xl p-2 shadow-2xl">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src={category.appImage}
                          alt={category.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Team Photo */}
                  <div className="mb-6">
                    <div className="relative w-full h-32 rounded-lg overflow-hidden">
                      <Image
                        src={category.teamImage}
                        alt="Team"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-white text-xs mt-2 text-center">
                      MUHAMMAD SALMAN (CEO)
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="bg-gray-800 px-6 py-4 border-t border-gray-700">
                  <p className="text-white font-semibold mb-3 text-center">
                    {category.label}
                  </p>
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors shadow-lg z-10"
            aria-label="Scroll left"
            onClick={(e) => {
              e.stopPropagation();
              const container = e.currentTarget.parentElement?.querySelector('.overflow-x-auto');
              if (container) {
                container.scrollBy({ left: -400, behavior: 'smooth' });
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors shadow-lg z-10"
            aria-label="Scroll right"
            onClick={(e) => {
              e.stopPropagation();
              const container = e.currentTarget.parentElement?.querySelector('.overflow-x-auto');
              if (container) {
                container.scrollBy({ left: 400, behavior: 'smooth' });
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
    </section>
  );
}
