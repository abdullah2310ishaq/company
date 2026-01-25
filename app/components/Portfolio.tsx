"use client";

import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  image: string;
  playStore?: string;
  appStore?: string;
  github?: string;
  liveDemo?: string;
}

const allProjects: Project[] = [
  {
    id: "1",
    emoji: "🚗",
    title: "iMechano Admin + User App",
    subtitle: "Mobile App Case Study",
    description: "iMechano revolutionizes the automotive service industry in Qatar by providing a seamless platform for users to book mechanic services. The app includes advanced features like real-time GPS tracking, multiple payment gateways, service history, ratings and reviews, and push notifications for service updates.",
    technologies: ["Flutter", "Firebase", "REST APIs", "Payment Integration", "Google Maps", "Push Notifications"],
    keyFeatures: [
      "Real-time service tracking",
      "Secure payment processing",
      "Interactive map navigation",
      "Service history and receipts",
      "Mechanic ratings and reviews",
      "Multi-language support (Arabic/English)"
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1200&fit=crop",
  },
  {
    id: "2",
    emoji: "🕋",
    title: "Umrah Packages App",
    subtitle: "Mobile App Case Study",
    description: "A complete ecosystem for Umrah travel management featuring separate applications for travel agencies and end users. The system handles package creation, booking management, payment processing, and customer communication throughout the pilgrimage journey.",
    technologies: ["Flutter", "Firebase", "REST APIs", "Admin Dashboard", "Payment Gateway"],
    keyFeatures: [
      "Dual app architecture (Agency + User)",
      "Package browsing and comparison",
      "Secure booking and payment system",
      "Document management",
      "Real-time booking status",
      "Multi-currency support"
    ],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=1200&fit=crop",
  },
  {
    id: "3",
    emoji: "🏢",
    title: "Umrah Packages Agency App",
    subtitle: "Mobile App Case Study",
    description: "The agency counterpart of the Umrah packages system, providing travel agencies with powerful tools to create and manage packages, handle customer bookings, process payments, and maintain comprehensive customer relationships.",
    technologies: ["Flutter", "Firebase", "Admin Dashboard", "Analytics", "CRM Integration", "Payment Management"],
    keyFeatures: [
      "Package creation and management",
      "Customer booking oversight",
      "Revenue and analytics dashboard",
      "Customer relationship management",
      "Payment processing and refunds",
      "Booking status management"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1200&fit=crop",
  },
  {
    id: "4",
    emoji: "🎓",
    title: "Al Shifa Institute App",
    subtitle: "Mobile App Case Study",
    description: "A complete educational ecosystem for Al Shifa Institute featuring course management, donation processing, and premium content delivery. The app includes subscription management through RevenueCat, secure payment processing, and comprehensive user progress tracking.",
    technologies: ["Flutter", "Firebase", "RevenueCat", "Payment Integration", "Content Management"],
    keyFeatures: [
      "Course catalog and enrollment",
      "Donation management system",
      "Premium content subscriptions",
      "Progress tracking and certificates",
      "Offline content download",
      "Multi-tier access control"
    ],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=1200&fit=crop",
  },
  {
    id: "5",
    emoji: "📱",
    title: "Afghan Wireless Mobile App",
    subtitle: "Mobile App Case Study",
    description: "A full-featured telecommunications app serving Afghan Wireless customers with complete account management, service activation, bill payment, and customer support. Built with SOAP API integration and real-time service monitoring.",
    technologies: ["Flutter", "SOAP APIs", "Push Notifications", "Payment Gateway", "Customer Support"],
    keyFeatures: [
      "Account balance and usage tracking",
      "Service package browsing and activation",
      "Bill payment and recharge options",
      "Customer support chat",
      "Service outage notifications",
      "Multi-language support"
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1200&fit=crop",
  },
  {
    id: "6",
    emoji: "🎵",
    title: "Local Music Player App",
    subtitle: "Mobile App Case Study",
    description: "A sophisticated music player application that excels in local music management. Features include advanced audio format support, customizable equalizer, sleep timer, and intelligent playlist generation based on listening habits.",
    technologies: ["Flutter", "Local Storage", "Audio Processing", "File Management", "Hive DB"],
    keyFeatures: [
      "Directory-based music browsing",
      "Custom playlist creation and management",
      "Advanced audio controls and equalizer",
      "Sleep timer and repeat modes",
      "Album art and metadata display",
      "Background playback support"
    ],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=1200&fit=crop",
  },
  {
    id: "7",
    emoji: "🏥",
    title: "MEDI-CONNECT",
    subtitle: "Mobile App Case Study",
    description: "MEDI-CONNECT revolutionizes healthcare management by creating a seamless connection between doctors and patients. The app enables doctors to collect detailed patient data including habits, lifestyle, and health metrics to prescribe personalized medicines, diets, and exercise routines.",
    technologies: ["Flutter", "Firebase", "Provider", "Push Notifications", "Real-time Database", "Cloud Functions"],
    keyFeatures: [
      "Patient data collection and habit tracking",
      "Doctor dashboard with detailed patient profiles",
      "Prescription management system",
      "Daily medicine alarms and reminders",
      "Diet and exercise plan distribution",
      "Real-time health logs and monitoring"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=1200&fit=crop",
  },
  {
    id: "8",
    emoji: "🌉",
    title: "BridgeIt (Final Year Project)",
    subtitle: "Web Platform Case Study",
    description: "BridgeIt serves as a bridge between academic learning and industry expertise. The platform facilitates mentorship programs, project collaborations, and skill development through direct interaction with industry professionals. Built with modern web technologies and secure payment processing.",
    technologies: ["Next.js", "Stripe", ".NET APIs", "SQL Database", "Real-time Chat"],
    keyFeatures: [
      "Expert-student matching system",
      "Secure payment processing via Stripe",
      "Project collaboration tools",
      "Progress tracking and milestones",
      "Comprehensive user profiles"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1200&fit=crop",
  },
];

// Show only first 2 projects initially
const displayedProjects = allProjects.slice(0, 2);

export default function Portfolio() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Side - Text Content */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Portfolio
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Duseca has successfully made over 700+ mobile apps, with a team
              of 50+ people. Our customers love us, giving 450+ reviews and a
              5-star rating. We're proud to help bring your app ideas to life
              with care and quality.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Book a meeting with Muhammad Salman for a simple chat on how to
              build your app. He and our Duseca team will show you each step to
              make your app idea real.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Book free consultation
            </button>
          </div>

          {/* Right Side - Project Carousel */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Projects</h3>
              <Link
                href="/portfolio/all"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                See all projects
              </Link>
            </div>

            {/* Scrollable Project Cards */}
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
                {displayedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex-shrink-0 w-80 bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Project Image */}
                    <div className="relative w-full h-64 bg-gradient-to-br from-green-100 to-green-200">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      {/* Emoji Badge */}
                      <div className="absolute top-4 left-4 text-4xl">
                        {project.emoji}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {project.title}
                      </h4>
                      <p className="text-green-600 font-semibold mb-3 text-sm">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
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
      </div>
    </section>
  );
}

// Export all projects for use in the "See all projects" page
export { allProjects };
