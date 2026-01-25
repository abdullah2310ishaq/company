"use client";

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
    title: "Digital Marketing",
    icon: "📈",
    subServices: [
      "SEO Services",
      "Social Media Marketing",
      "Content Marketing",
      "PPC Advertising",
      "Email Marketing",
      "Analytics & Reporting",
      "Brand Strategy",
      "Marketing Automation",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Side - Text Content */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Services We Provide
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Discover our range of services to match your project needs.
              Provide us with your details, and we'll customize a proposal just
              for you.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
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
                    className="flex-shrink-0 w-80 bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    {/* Service Icon */}
                    <div className="text-5xl mb-4">{service.icon}</div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    {/* Sub Services List */}
                    <ul className="space-y-3 mb-6">
                      {service.subServices.map((subService, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <svg
                            className="w-5 h-5 text-green-600 flex-shrink-0"
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
                    <a
                      href="#"
                      className="text-green-600 hover:text-green-700 font-medium text-sm"
                    >
                      See more
                    </a>
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
