"use client";

import Image from "next/image";
import { useState } from "react";

interface ConsultationVideo {
  id: string;
  title: string;
  description: string;
  targetMarket: string;
  flag: string;
  thumbnail: string;
  youtubeId: string;
}

const consultations: ConsultationVideo[] = [
  {
    id: "1",
    title: "HEALTH & WELLNESS MOBILE APP",
    description: "Health Coaching App Consultation",
    targetMarket: "France",
    flag: "🇫🇷",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=450&fit=crop",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
  },
  {
    id: "2",
    title: "VEHICLE MANAGEMENT MOBILE APP",
    description: "Vehicle Management App Consultation",
    targetMarket: "United States",
    flag: "🇺🇸",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
    youtubeId: "jNQXAC9IVRw", // Replace with actual video ID
  },
  {
    id: "3",
    title: "SUPPLY CHAIN & LOGISTICS MOBILE APP",
    description: "Inventory Management Consultation",
    targetMarket: "United States",
    flag: "🇺🇸",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop",
    youtubeId: "9bZkp7q19f0", // Replace with actual video ID
  },
  {
    id: "4",
    title: "E-COMMERCE MOBILE APP",
    description: "E-Commerce Platform Consultation",
    targetMarket: "United Kingdom",
    flag: "🇬🇧",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    youtubeId: "kJQP7kiw5Fk", // Replace with actual video ID
  },
  {
    id: "5",
    title: "FITNESS & TRAINING MOBILE APP",
    description: "Fitness App Development Consultation",
    targetMarket: "Canada",
    flag: "🇨🇦",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=450&fit=crop",
    youtubeId: "L_jWHffIx5E", // Replace with actual video ID
  },
];

export default function Consultations() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoClick = (youtubeId: string) => {
    setSelectedVideo(youtubeId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Credibility Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Looking for App Development Experts?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  6k+ followers
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">fi</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  883 Orders Completed
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  Presence Since 2018
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  53+ Employees
                </span>
              </div>
            </div>
          </div>

          {/* Watch Our App Consultations Section */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              Watch Our App Consultations
            </h2>

            {/* Scrollable Video Carousel */}
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
                {consultations.map((consultation) => (
                  <div
                    key={consultation.id}
                    className="flex-shrink-0 w-80 cursor-pointer group"
                    onClick={() => handleVideoClick(consultation.youtubeId)}
                  >
                    <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                      {/* Video Thumbnail */}
                      <div className="relative w-full h-48 bg-gradient-to-br from-green-600 to-green-800">
                        <Image
                          src={consultation.thumbnail}
                          alt={consultation.title}
                          fill
                          className="object-cover opacity-80"
                        />
                        
                        {/* Duseca Logo Overlay */}
                        <div className="absolute top-4 left-4">
                          <span className="text-white font-bold text-lg">
                            DuSeca
                          </span>
                        </div>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                            <svg
                              className="w-8 h-8 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>

                        {/* Title Bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <h3 className="text-white font-bold text-sm">
                            {consultation.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="bg-white p-4">
                        <p className="text-gray-900 font-medium mb-2">
                          {consultation.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>Target Market:</span>
                          <span className="text-xl">{consultation.flag}</span>
                          <span>{consultation.targetMarket}</span>
                        </div>
                      </div>
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
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors shadow-lg z-10"
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
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full aspect-video relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              <svg
                className="w-8 h-8"
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
            <iframe
              className="w-full h-full rounded-2xl"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
