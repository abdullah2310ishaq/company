"use client";

import Image from "next/image";
import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
  fullDescription: string;
  category: string;
}

const categories = [
  "All Members",
  "Mobile Developers",
  "Web Developers",
  "Designers",
  "Project Managers",
  "Business Developers",
];

const allTeamMembers: TeamMember[] = [
  // CEO
  {
    id: 1,
    name: "Muhammad Salman",
    title: "C.E.O & Mobile App Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Muhammad Salman, the CEO of Duseca, leads the company with a focus on new ideas and doing things well.",
    fullDescription: "Muhammad Salman, the CEO of Duseca, leads the company with a focus on new ideas and doing things well. With years of experience in mobile app development, he drives innovation and excellence across all projects.",
    category: "All Members",
  },
  // Mobile Developers
  {
    id: 2,
    name: "Huraiza Hassan",
    title: "Sr. Mobile App Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    description: "Huraiza Hassan, Sr. Mobile App Developer, creates user-friendly mobile applications.",
    fullDescription: "Huraiza Hassan, Sr. Mobile App Developer, creates user-friendly mobile applications with exceptional attention to detail and performance optimization.",
    category: "Mobile Developers",
  },
  {
    id: 3,
    name: "Shayan Iqbal",
    title: "Sr. Mobile App Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    description: "Shayan Iqbal, Sr. Mobile App Developer, creates user-friendly mobile applications.",
    fullDescription: "Shayan Iqbal, Sr. Mobile App Developer, creates user-friendly mobile applications with cutting-edge technologies and best practices.",
    category: "Mobile Developers",
  },
  {
    id: 4,
    name: "Ahmed Ali",
    title: "Mobile App Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    description: "Ahmed Ali specializes in cross-platform mobile development using Flutter and React Native.",
    fullDescription: "Ahmed Ali specializes in cross-platform mobile development using Flutter and React Native, delivering high-quality apps for both iOS and Android platforms.",
    category: "Mobile Developers",
  },
  {
    id: 5,
    name: "Hassan Raza",
    title: "Mobile App Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    description: "Hassan Raza focuses on native iOS and Android app development with modern frameworks.",
    fullDescription: "Hassan Raza focuses on native iOS and Android app development with modern frameworks, ensuring optimal performance and user experience.",
    category: "Mobile Developers",
  },
  // Web Developers
  {
    id: 6,
    name: "Muzzammil Sanzar",
    title: "Sr. Website Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Muzzammil Sanzar, Sr. Website Developer, engineers sophisticated and user-focused sites.",
    fullDescription: "Muzzammil Sanzar, Sr. Website Developer, engineers sophisticated and user-focused sites with modern web technologies and responsive design.",
    category: "Web Developers",
  },
  {
    id: 7,
    name: "Abdullah Ishaq",
    title: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Abdullah Ishaq, Full Stack Developer at Duseca, creates robust and scalable applications...",
    fullDescription: "Abdullah Ishaq, Full Stack Developer at Duseca, creates robust and scalable applications. With expertise in both frontend and backend technologies, he ensures seamless integration and optimal performance across all platforms.",
    category: "Web Developers",
  },
  {
    id: 8,
    name: "Bilal Ahmed",
    title: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    description: "Bilal Ahmed creates beautiful and responsive web interfaces using React and Next.js.",
    fullDescription: "Bilal Ahmed creates beautiful and responsive web interfaces using React and Next.js, focusing on user experience and modern design patterns.",
    category: "Web Developers",
  },
  {
    id: 9,
    name: "Usman Khan",
    title: "Backend Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    description: "Usman Khan builds scalable server-side applications and APIs with Node.js and Python.",
    fullDescription: "Usman Khan builds scalable server-side applications and APIs with Node.js and Python, ensuring robust and efficient backend systems.",
    category: "Web Developers",
  },
  // Designers
  {
    id: 10,
    name: "Usama Khan",
    title: "Sr. Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Usama Khan, Senior Designer, creates easy-to-use designs, focusing on user experience.",
    fullDescription: "Usama Khan, Senior Designer, creates easy-to-use designs, focusing on user experience and visual aesthetics that enhance usability.",
    category: "Designers",
  },
  {
    id: 11,
    name: "Aairah Ejaz",
    title: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    description: "Aairah Ejaz specializes in creating intuitive user interfaces and engaging user experiences.",
    fullDescription: "Aairah Ejaz specializes in creating intuitive user interfaces and engaging user experiences, combining creativity with user-centered design principles.",
    category: "Designers",
  },
  {
    id: 12,
    name: "Fatima Ali",
    title: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    description: "Fatima Ali creates compelling visual designs and brand identities for digital products.",
    fullDescription: "Fatima Ali creates compelling visual designs and brand identities for digital products, ensuring consistent and impactful visual communication.",
    category: "Designers",
  },
  // Project Managers
  {
    id: 13,
    name: "Zayd Rizvi",
    title: "COO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Zayd Rizvi, COO, guides the company with fresh ideas and effectiveness.",
    fullDescription: "Zayd Rizvi, COO, guides the company with fresh ideas and effectiveness, ensuring smooth operations and strategic planning.",
    category: "Project Managers",
  },
  {
    id: 14,
    name: "Muhammad Mudassir",
    title: "Project Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    description: "Muhammad Mudassir manages project timelines and ensures successful delivery of all projects.",
    fullDescription: "Muhammad Mudassir manages project timelines and ensures successful delivery of all projects, coordinating between teams and stakeholders.",
    category: "Project Managers",
  },
  {
    id: 15,
    name: "Sara Ahmed",
    title: "Senior Project Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    description: "Sara Ahmed leads complex projects with expertise in agile methodologies and team coordination.",
    fullDescription: "Sara Ahmed leads complex projects with expertise in agile methodologies and team coordination, ensuring on-time and quality deliveries.",
    category: "Project Managers",
  },
  // Business Developers
  {
    id: 16,
    name: "Ubaid-Ur-Rehman",
    title: "Sr. Business Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Ubaid-Ur-Rehman, the Sr Business Developer at Duseca, guides business growth and client relationships.",
    fullDescription: "Ubaid-Ur-Rehman, the Sr Business Developer at Duseca, guides business growth and client relationships, driving strategic partnerships and expansion.",
    category: "Business Developers",
  },
  {
    id: 17,
    name: "Hamza Sheikh",
    title: "Business Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    description: "Hamza Sheikh focuses on client acquisition and building long-term business relationships.",
    fullDescription: "Hamza Sheikh focuses on client acquisition and building long-term business relationships, identifying opportunities for growth and collaboration.",
    category: "Business Developers",
  },
  {
    id: 18,
    name: "Omar Khan",
    title: "Business Analyst",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    description: "Omar Khan analyzes market trends and helps shape business strategies for growth.",
    fullDescription: "Omar Khan analyzes market trends and helps shape business strategies for growth, providing data-driven insights for decision making.",
    category: "Business Developers",
  },
];

const teamMembers = allTeamMembers.slice(0, 2);

export default function AboutUs() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Members");

  const handleSeeMore = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const filteredMembers =
    selectedCategory === "All Members"
      ? allTeamMembers
      : allTeamMembers.filter((member) => member.category === selectedCategory);

  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Us Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Duseca is a mobile app development agency focused on making great
              apps. Our team works hard to design and build apps that are easy
              to use and meet the needs of businesses and people. We aim to
              provide services that are dependable and straightforward, helping
              our clients succeed with their digital projects.
            </p>
          </div>

          {/* CEO and Team Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* CEO Section - Large */}
            <div className="lg:col-span-1">
              <div className="relative">
                {/* Large CEO Image */}
                <div className="relative w-full aspect-square rounded-full overflow-hidden mb-6 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                    alt="Muhammad Salman - CEO"
                    fill
                    className="object-cover"
                  />
                  {/* Google G overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl font-bold text-green-600 opacity-20">
                      G
                    </div>
                  </div>
                </div>

                {/* CEO Info */}
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Muhammad Salman
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    C.E.O & Mobile App Developer
                  </p>
                  
                  {/* Google Certified Badge */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                    <div className="flex items-center gap-2 bg-green-50 border-2 border-green-200 px-4 py-2 rounded-lg">
                      <svg
                        className="w-6 h-6"
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
                      <span className="text-sm font-semibold text-gray-900">
                        Google Certified
                      </span>
                    </div>
                  </div>

                  {/* CEO Description */}
                  <p className="text-gray-600 leading-relaxed">
                    Muhammad Salman, the CEO of Duseca, leads the company with
                    a focus on new ideas and doing things well.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Members Scrollable Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Our Team</h3>
                <button
                  onClick={openBottomSheet}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  See all members (53)
                </button>
              </div>

              {/* Scrollable Team Cards */}
              <div className="relative">
                <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex-shrink-0 w-80 bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      {/* Team Member Image */}
                      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Team Member Info */}
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {member.name}
                        </h4>
                        <p className="text-green-600 font-semibold mb-3">
                          {member.title}
                        </p>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {member.description}
                        </p>
                        <button
                          onClick={() => handleSeeMore(member)}
                          className="text-green-600 hover:text-green-700 font-medium text-sm"
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors shadow-lg"
                  aria-label="Scroll left"
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
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors shadow-lg"
                  aria-label="Scroll right"
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
      </section>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative p-4 border-b border-gray-200">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
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

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex flex-col items-center mb-4">
                {/* Team Member Image */}
                <div className="relative w-32 h-32 mb-3 rounded-full overflow-hidden">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Team Member Info */}
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {selectedMember.name}
                </h3>
                <p className="text-lg text-green-600 font-semibold mb-3">
                  {selectedMember.title}
                </p>
              </div>

              {/* Full Description */}
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {selectedMember.fullDescription}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-green-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Sheet */}
      {isBottomSheetOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-50 flex items-end"
          onClick={closeBottomSheet}
        >
          <div
            className="bg-white w-full max-h-[90vh] rounded-t-3xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bottom Sheet Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-green-600">Duseca</h2>
              <button
                onClick={closeBottomSheet}
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

            {/* Category Navigation */}
            <div className="px-6 py-4 border-b border-gray-200 overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === category
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Team Members Grid */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMembers.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => {
                      handleSeeMore(member);
                      closeBottomSheet();
                    }}
                  >
                    {/* Team Member Image */}
                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Team Member Info */}
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {member.name}
                      </h4>
                      <p className="text-green-600 font-semibold mb-2 text-sm">
                        {member.title}
                      </p>
                      <p className="text-gray-600 text-xs line-clamp-2">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
