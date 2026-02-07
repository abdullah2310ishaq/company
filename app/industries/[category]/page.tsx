"use client";

import { use } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Consultations from "../../components/Consultations";
import AppIndustries from "../../components/AppIndustries";
import Portfolio from "../../components/Portfolio";
import AboutUs from "../../components/AboutUs";

interface IndustryData {
  title: string;
  description: string;
  shortDescription: string;
  features: string[];
  uniqueSellingPoint: {
    title: string;
    description: string;
  };
  exampleApp: string;
  exampleAppDescription: string;
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
}

const industryData: Record<string, IndustryData> = {
  ecommerce: {
    title: "E-commerce Apps",
    description:
      "We create custom ecommerce mobile apps that simplify shopping experiences by offering features such as easy online browsing, product discovery, easy order tracking, and secure payment processing, effectively streamlining retail operations.",
    shortDescription:
      "We create custom ecommerce mobile apps with online browsing, product discovery, order tracking, and secure payments.",
    features: [
      "Easy online browsing",
      "Product discovery",
      "Easy order tracking",
      "Secure payment processing",
      "Social Media Integration",
      "Barcode scanning",
      "Inventory management",
      "Multi-vendor support",
    ],
    uniqueSellingPoint: {
      title: "The Romolo app helps small businesses by making it easy to promote their products, automating how orders are processed, and keeping a good track of inventory.",
      description:
        "Our e-commerce solutions empower businesses to reach customers anywhere, anytime with seamless shopping experiences.",
    },
    exampleApp: "Romolo",
    exampleAppDescription:
      "Launch your E-commerce app business with our development services.",
    steps: [
      {
        number: "one",
        title: "Your Idea",
        description:
          "Talk to our team about your app idea to see if users will like it.",
      },
      {
        number: "two",
        title: "Our Consultation",
        description:
          "A Google certified developer leads your app's detailed planning.",
      },
      {
        number: "three",
        title: "Documentation",
        description:
          "We draft an initial plan for your review and approval.",
      },
      {
        number: "four",
        title: "Development",
        description:
          "Post-approval, we begin app development, updating you throughout.",
      },
    ],
  },
  "social-media": {
    title: "Social Media Apps",
    description:
      "We develop engaging social media mobile applications that connect people, enable content sharing, and build communities. Our apps feature real-time messaging, media sharing, stories, and advanced social networking capabilities.",
    shortDescription:
      "We create social media apps with messaging, content sharing, and community features.",
    features: [
      "Real-time messaging",
      "Media sharing",
      "Stories and posts",
      "User profiles",
      "Social networking",
      "Content discovery",
      "Push notifications",
      "Privacy controls",
    ],
    uniqueSellingPoint: {
      title: "Our social media apps help businesses build engaged communities, increase brand awareness, and create meaningful connections with their audience.",
      description:
        "Connect your users with powerful social networking features.",
    },
    exampleApp: "SocialConnect",
    exampleAppDescription:
      "Build your social media platform with our expert development team.",
    steps: [
      {
        number: "one",
        title: "Your Idea",
        description:
          "Discuss your social media app concept with our team.",
      },
      {
        number: "two",
        title: "Our Consultation",
        description:
          "Muhammad Salman leads the planning session for your app.",
      },
      {
        number: "three",
        title: "Documentation",
        description:
          "We create a detailed project plan for your approval.",
      },
      {
        number: "four",
        title: "Development",
        description:
          "We build your app and keep you updated on progress.",
      },
    ],
  },
  healthcare: {
    title: "Healthcare Apps",
    description:
      "We develop comprehensive healthcare mobile applications that improve patient care, streamline medical processes, and enhance communication between patients and healthcare providers.",
    shortDescription:
      "We create healthcare apps for patient management, telemedicine, and medical services.",
    features: [
      "Patient management",
      "Telemedicine",
      "Appointment scheduling",
      "Prescription management",
      "Health records",
      "Doctor consultations",
      "Medication reminders",
      "Health tracking",
    ],
    uniqueSellingPoint: {
      title: "Our healthcare apps improve patient outcomes by making medical services more accessible and efficient.",
      description:
        "Transform healthcare delivery with our innovative mobile solutions.",
    },
    exampleApp: "MediCare",
    exampleAppDescription:
      "Launch your healthcare app to serve patients better.",
    steps: [
      {
        number: "one",
        title: "Your Idea",
        description:
          "Share your healthcare app vision with our team.",
      },
      {
        number: "two",
        title: "Our Consultation",
        description:
          "Expert consultation to plan your healthcare solution.",
      },
      {
        number: "three",
        title: "Documentation",
        description:
          "Detailed documentation for your review.",
      },
      {
        number: "four",
        title: "Development",
        description:
          "Development with regular updates and feedback.",
      },
    ],
  },
  iot: {
    title: "IOT Apps",
    description:
      "We develop IoT mobile applications that connect and control smart devices, enabling seamless automation and monitoring. Our apps integrate with various IoT ecosystems for home automation, industrial monitoring, and smart city solutions.",
    shortDescription:
      "We create IoT apps for smart device control, automation, and monitoring.",
    features: [
      "Device connectivity",
      "Remote control",
      "Automation rules",
      "Real-time monitoring",
      "Data analytics",
      "Notifications",
      "Multi-device support",
      "Cloud integration",
    ],
    uniqueSellingPoint: {
      title: "Our IoT apps enable businesses to create smart solutions that improve efficiency and user experience.",
      description:
        "Connect the physical and digital worlds with our IoT expertise.",
    },
    exampleApp: "SmartHome",
    exampleAppDescription:
      "Build your IoT ecosystem with our development services.",
    steps: [
      {
        number: "one",
        title: "Your Idea",
        description: "Share your IoT app concept with our team.",
      },
      {
        number: "two",
        title: "Our Consultation",
        description: "Expert consultation for your IoT solution.",
      },
      {
        number: "three",
        title: "Documentation",
        description: "Detailed plan for your review.",
      },
      {
        number: "four",
        title: "Development",
        description: "Development with regular updates.",
      },
    ],
  },
  ai: {
    title: "AI Apps",
    description:
      "We develop AI-powered mobile applications that leverage machine learning, natural language processing, and computer vision to deliver intelligent and personalized user experiences.",
    shortDescription:
      "We create AI apps with machine learning, NLP, and computer vision capabilities.",
    features: [
      "Machine learning",
      "Natural language processing",
      "Computer vision",
      "Predictive analytics",
      "Personalization",
      "Chatbots",
      "Image recognition",
      "Voice assistants",
    ],
    uniqueSellingPoint: {
      title: "Our AI apps provide intelligent solutions that learn and adapt to user needs.",
      description: "Harness the power of AI for your mobile application.",
    },
    exampleApp: "AI Assistant",
    exampleAppDescription:
      "Launch your AI-powered app with our expertise.",
    steps: [
      {
        number: "one",
        title: "Your Idea",
        description: "Discuss your AI app vision with us.",
      },
      {
        number: "two",
        title: "Our Consultation",
        description: "AI expert consultation session.",
      },
      {
        number: "three",
        title: "Documentation",
        description: "Comprehensive AI app documentation.",
      },
      {
        number: "four",
        title: "Development",
        description: "AI integration and development.",
      },
    ],
  },
  "ride-sharing": {
    title: "Ride Sharing Apps",
    description:
      "We develop comprehensive ride-sharing mobile applications that connect drivers and passengers, featuring real-time tracking, secure payments, and seamless booking experiences.",
    shortDescription:
      "We create ride-sharing apps with real-time tracking, payments, and booking.",
    features: [
      "Real-time tracking",
      "Driver matching",
      "Secure payments",
      "Rating system",
      "Route optimization",
      "Multiple vehicle types",
      "Scheduled rides",
      "Safety features",
    ],
    uniqueSellingPoint: {
      title: "Our ride-sharing apps provide safe, convenient, and efficient transportation solutions.",
      description: "Transform transportation with our ride-sharing platform.",
    },
    exampleApp: "Vamos",
    exampleAppDescription:
      "Launch your ride-sharing business with our app.",
    steps: [
      {
        number: "one",
        title: "Your Idea",
        description: "Share your ride-sharing concept.",
      },
      {
        number: "two",
        title: "Our Consultation",
        description: "Expert planning for your platform.",
      },
      {
        number: "three",
        title: "Documentation",
        description: "Detailed project documentation.",
      },
      {
        number: "four",
        title: "Development",
        description: "Build and deploy your app.",
      },
    ],
  },
  rental: {
    title: "Rental Apps",
    description:
      "We develop rental mobile applications for various industries including car rentals, property rentals, equipment rentals, and more, with booking management and payment processing.",
    shortDescription:
      "We create rental apps for cars, properties, equipment, and more.",
    features: [
      "Booking management",
      "Calendar integration",
      "Payment processing",
      "Inventory management",
      "User verification",
      "Reviews and ratings",
      "Notifications",
      "Multi-category support",
    ],
    uniqueSellingPoint: {
      title: "Our rental apps streamline the rental process, making it easy for owners and renters to connect.",
      description: "Simplify rentals with our comprehensive platform.",
    },
    exampleApp: "RentEasy",
    exampleAppDescription:
      "Start your rental business with our app solution.",
    steps: [
      {
        number: "one",
        title: "Your Idea",
        description: "Discuss your rental app idea.",
      },
      {
        number: "two",
        title: "Our Consultation",
        description: "Planning session for your app.",
      },
      {
        number: "three",
        title: "Documentation",
        description: "Project plan documentation.",
      },
      {
        number: "four",
        title: "Development",
        description: "Development with updates.",
      },
    ],
  },
  delivery: {
    title: "Delivery Apps",
    description:
      "We develop delivery mobile applications for food, groceries, packages, and other goods, featuring real-time tracking, multiple delivery options, and seamless user experiences.",
    shortDescription:
      "We create delivery apps for food, groceries, and packages with real-time tracking.",
    features: [
      "Real-time tracking",
      "Multiple delivery options",
      "Order management",
      "Driver assignment",
      "Payment integration",
      "Notifications",
      "Route optimization",
      "Multi-vendor support",
    ],
    uniqueSellingPoint: {
      title: "Our delivery apps ensure fast, reliable, and efficient delivery services for businesses and customers.",
      description: "Optimize your delivery operations with our platform.",
    },
    exampleApp: "QuickDeliver",
    exampleAppDescription:
      "Launch your delivery service with our app.",
    steps: [
      {
        number: "one",
        title: "Your Idea",
        description: "Share your delivery app concept.",
      },
      {
        number: "two",
        title: "Our Consultation",
        description: "Expert consultation session.",
      },
      {
        number: "three",
        title: "Documentation",
        description: "Detailed documentation.",
      },
      {
        number: "four",
        title: "Development",
        description: "Build your delivery platform.",
      },
    ],
  },
  educational: {
    title: "Educational Apps",
    description:
      "We develop educational mobile applications for learning, teaching, and skill development, featuring course management, interactive content, progress tracking, and assessment tools.",
    shortDescription:
      "We create educational apps for learning, courses, and skill development.",
    features: [
      "Course management",
      "Interactive content",
      "Progress tracking",
      "Assessments",
      "Video lessons",
      "Offline learning",
      "Certificates",
      "Student-teacher communication",
    ],
    uniqueSellingPoint: {
      title: "Our educational apps make learning accessible, engaging, and effective for students and educators.",
      description: "Transform education with our learning platform.",
    },
    exampleApp: "LearnHub",
    exampleAppDescription:
      "Build your educational platform with our app.",
    steps: [
      {
        number: "one",
        title: "Your Idea",
        description: "Discuss your educational app vision.",
      },
      {
        number: "two",
        title: "Our Consultation",
        description: "Expert planning for your platform.",
      },
      {
        number: "three",
        title: "Documentation",
        description: "Comprehensive documentation.",
      },
      {
        number: "four",
        title: "Development",
        description: "Development and deployment.",
      },
    ],
  },
  fintech: {
    title: "Fintech Apps",
    description:
      "We develop fintech mobile applications for banking, payments, investments, and financial management, featuring secure transactions, real-time updates, and comprehensive financial tools.",
    shortDescription:
      "We create fintech apps for banking, payments, investments, and finance.",
    features: [
      "Secure transactions",
      "Payment processing",
      "Account management",
      "Investment tracking",
      "Budgeting tools",
      "Bill payments",
      "Transaction history",
      "Multi-currency support",
    ],
    uniqueSellingPoint: {
      title: "Our fintech apps provide secure, convenient, and innovative financial solutions for users.",
      description: "Revolutionize finance with our fintech expertise.",
    },
    exampleApp: "FinanceHub",
    exampleAppDescription:
      "Launch your fintech solution with our app.",
    steps: [
      {
        number: "one",
        title: "Your Idea",
        description: "Share your fintech app concept.",
      },
      {
        number: "two",
        title: "Our Consultation",
        description: "Expert consultation for security.",
      },
      {
        number: "three",
        title: "Documentation",
        description: "Detailed security documentation.",
      },
      {
        number: "four",
        title: "Development",
        description: "Secure development process.",
      },
    ],
  },
  custom: {
    title: "Custom Apps",
    description:
      "We develop custom mobile applications tailored to your specific business needs, featuring unique functionality, custom design, and specialized features for your industry.",
    shortDescription:
      "We create custom apps tailored to your specific business needs.",
    features: [
      "Custom functionality",
      "Tailored design",
      "Industry-specific features",
      "Scalable architecture",
      "Third-party integrations",
      "Custom workflows",
      "Brand customization",
      "Flexible solutions",
    ],
    uniqueSellingPoint: {
      title: "Our custom apps are built specifically for your business, ensuring perfect fit and maximum value.",
      description: "Get a solution designed exactly for your needs.",
    },
    exampleApp: "Custom Solution",
    exampleAppDescription:
      "Build your custom app with our team.",
    steps: [
      {
        number: "one",
        title: "Your Idea",
        description: "Share your unique app requirements.",
      },
      {
        number: "two",
        title: "Our Consultation",
        description: "Detailed consultation for your needs.",
      },
      {
        number: "three",
        title: "Documentation",
        description: "Custom solution documentation.",
      },
      {
        number: "four",
        title: "Development",
        description: "Custom development process.",
      },
    ],
  },
};

function getIndustryData(category: string): IndustryData {
  return (
    industryData[category] ||
    industryData.ecommerce // Default to ecommerce if category not found
  );
}

export default function IndustryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = use(params);
  const data = getIndustryData(category);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Full Screen */}
      <section className="relative w-full min-h-screen bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8 lg:gap-12">
            {/* Left Side - Profile and Content */}
            <div className="flex flex-col justify-center py-12 space-y-4 lg:space-y-5">
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
                  Hello, we are Fizzup Software
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs lg:text-sm text-gray-600 font-medium">
                    Level 1
                  </span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-2 h-2 lg:w-3 lg:h-3 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-tight">
                Mobile App Development Agency for Android App and iOS App Development
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 lg:w-4 lg:h-4 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs lg:text-sm font-semibold text-gray-900">
                  4.9
                </span>
                <span className="text-xs lg:text-sm text-gray-600">(1.3k)</span>
              </div>

              {/* Contact Button */}
              <button className="bg-gray-800 text-white px-4 py-2.5 lg:px-6 lg:py-3 rounded-lg text-xs lg:text-sm font-medium hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2 w-fit mt-4">
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
            <div className="relative w-full h-full flex items-center justify-center py-8 lg:py-12">
              <div className="relative w-full h-full max-w-lg xl:max-w-xl rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl">
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
      </section>

      {/* Main Description Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
            {data.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            We Developed {data.exampleApp} with these Features:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-green-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-900 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 mt-8 text-lg">
            {data.exampleAppDescription}
          </p>
        </div>
      </section>

      {/* Unique Selling Point */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Unique Selling Point
          </h2>
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {data.uniqueSellingPoint.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {data.uniqueSellingPoint.description}
            </p>
          </div>
        </div>
      </section>

      {/* App Screens Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Check Out All App Screens!
          </h2>
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative w-full h-96">
                  <Image
                    src={`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=800&fit=crop&sig=${i}`}
                    alt={`App Screen ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Similar Projects */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Similar Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&sig=${i}`}
                    alt={`Project ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Project {i + 1}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Mobile App Case Study
                  </p>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Steps Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Four Steps to {data.title} Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch Our App Consultations */}
      <Consultations />

      {/* App Industries Section */}
      <AppIndustries />

      {/* Portfolio Section */}
      <Portfolio />

      {/* About Us Section */}
      <AboutUs />
    </div>
  );
}
