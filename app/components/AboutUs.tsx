"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
  fullDescription: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Wajahat Malek",
    title: "Chief Executive Officer",
    image: "/sallu.png",
    description: "Founder and Chief Executive Officer of Duseca Software with a demonstrated history of working in the mobile app development industry...",
    fullDescription: "Founder and Chief Executive Officer of Duseca Software with a demonstrated history of working in IT Industry. Building smarter mobile apps and digital products for my clients.",
  },
  {
    id: 2,
    name: "Zayd Rizvi",
    title: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "As the Chief Operating Officer at Duseca Software, Zayd contributed to the strategic planning and operational excellence of the company...",
    fullDescription: "As the Chief Operating Officer at Duseca Software, Zayd contributed to the strategic planning and operational excellence of the company, ensuring smooth day-to-day operations and driving business growth.",
  },
  {
    id: 3,
    name: "Huraiza Hassan",
    title: "Senior Mobile App Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    description: "Huraiza is driven by a passion for developing scalable mobile applications, bringing innovative solutions to complex problems...",
    fullDescription: "Huraiza is driven by a passion for developing scalable mobile applications, bringing innovative solutions to complex problems. With expertise in both iOS and Android development, he ensures high-quality code and optimal performance.",
  },
  {
    id: 4,
    name: "Aairah Ejaz",
    title: "Website Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    description: "Aairah Ejaz has exceptional expertise in Agile methodologies, ensuring high-quality and efficient website projects...",
    fullDescription: "Aairah Ejaz has exceptional expertise in Agile methodologies, ensuring high-quality and efficient website projects. She specializes in creating responsive and user-friendly web applications using modern technologies.",
  },
  {
    id: 5,
    name: "Esha Noor",
    title: "Project Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    description: "Esha Noor excels in overseeing project lifecycles, ensuring precision in every phase from conception to deployment...",
    fullDescription: "Esha Noor excels in overseeing project lifecycles, ensuring precision in every phase from conception to deployment. With strong organizational skills and attention to detail, she ensures timely delivery of all projects.",
  },
  {
    id: 6,
    name: "Ubaid Rehman",
    title: "App Store Optimization Strategist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Ubaid Rehman specializes in optimizing app visibility and performance in app stores, driving downloads and user engagement...",
    fullDescription: "Ubaid Rehman specializes in optimizing app visibility and performance in app stores, driving downloads and user engagement. He uses data-driven strategies to improve app rankings and increase organic downloads.",
  },
];

export default function AboutUs() {
  const [expandedDescription, setExpandedDescription] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const agencyDescription = `Duseca Software, a premier agency in Android App Development and iOS App Development, excels in creating high-quality, scalable mobile apps. Our expertise extends to AI integration, dating apps, Uber-like food delivery app development, E-Commerce solutions, and custom mobile applications tailored to your business needs. We combine cutting-edge technology with user-centric design to deliver apps that drive business growth and user engagement.`;

  const truncatedDescription = agencyDescription.substring(0, 150) + "...";

  return (
    <section className="bg-gray-100 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-0 sm:px-1 lg:px-2 xl:px-2">
        {/* Section 1: About our agency */}
        <div className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            About our agency
          </h2>

          {/* Header Meta-Information */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm text-gray-700">Pakistan</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="text-sm text-gray-700">English</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="text-sm text-gray-700">110 employees</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm text-gray-700">Established 2018</span>
            </div>
          </div>

          {/* Description Paragraph */}
          <p className="text-gray-700 leading-relaxed">
            {expandedDescription ? agencyDescription : truncatedDescription}
            {!expandedDescription && (
              <button
                onClick={() => setExpandedDescription(true)}
                className="text-blue-600 hover:underline ml-1"
              >
                Read more
              </button>
            )}
          </p>
        </div>

        {/* Section 2: Our team */}
        <div>
          {/* Header Row */}
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Our team
            </h2>
            <button
              onClick={() => setIsBottomSheetOpen(true)}
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              See all ({teamMembers.length})
            </button>
          </div>

          {/* Team Grid - Scrollable */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-0 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`flex-shrink-0 w-full md:w-1/3 p-6 ${
                    index > 0 ? "border-l border-gray-300" : ""
                  }`}
                >
                  {/* Profile Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {member.title}
                      </p>
                    </div>
                  </div>

                  {/* Bio Text */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.description}
                    <button
                      onClick={() => {
                        setSelectedMember(member);
                        setIsModalOpen(true);
                      }}
                      className="text-blue-600 hover:underline ml-1"
                    >
                      Read more
                    </button>
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination/Navigation Buttons */}
            <button
              onClick={() => {
                if (scrollContainerRef.current) {
                  const scrollAmount = scrollContainerRef.current.clientWidth;
                  scrollContainerRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: "smooth",
                  });
                }
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow-lg transition-colors z-10"
              aria-label="Previous team members"
            >
              <svg
                className="w-6 h-6 text-gray-700"
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
              onClick={() => {
                if (scrollContainerRef.current) {
                  const scrollAmount = scrollContainerRef.current.clientWidth;
                  scrollContainerRef.current.scrollBy({
                    left: scrollAmount,
                    behavior: "smooth",
                  });
                }
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow-lg transition-colors z-10"
              aria-label="Next team members"
            >
              <svg
                className="w-6 h-6 text-gray-700"
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

      {/* Divider */}
      <div className="border-t border-gray-300"></div>

      {/* Bottom Sheet */}
      <AnimatePresence>
        {isBottomSheetOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end"
              onClick={() => setIsBottomSheetOpen(false)}
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 300,
                }}
                className="bg-white w-full max-h-[90vh] rounded-t-3xl shadow-2xl overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
            {/* Bottom Sheet Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Duseca Software team members
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">Pakistan</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors flex items-center gap-2">
                  Contact us
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setIsBottomSheetOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close bottom sheet"
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

            {/* Scrollable Team Members Grid */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    {/* Profile Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {member.title}
                        </p>
                      </div>
                    </div>

                    {/* Bio Text */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {member.description}
                    </p>
                    <button
                      onClick={() => {
                        setSelectedMember(member);
                        setIsModalOpen(true);
                        setIsBottomSheetOpen(false);
                      }}
                      className="text-blue-600 hover:underline text-sm font-medium"
                    >
                      Read more
                    </button>
                  </div>
                ))}
              </div>
            </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Employee Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMember && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/10 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
              onClick={() => {
                setIsModalOpen(false);
                setSelectedMember(null);
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                }}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedMember(null);
                  }}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
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

                {/* Modal Title */}
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                  Meet the team
                </h2>

                {/* Employee Profile */}
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Profile Picture */}
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Name, Title, and Bio */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedMember.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                      {selectedMember.title}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedMember.fullDescription}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
