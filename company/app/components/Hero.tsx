import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Area */}
          <div className="space-y-8">
            {/* CEO Card */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 inline-block relative">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Muhammad Salman
                  </h3>
                  <p className="text-sm text-gray-600">CEO at Duseca</p>
                </div>
                <div className="ml-auto">
                  <div className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Google Certified
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-normal text-gray-800">
                Meet Muhammad Salman, C.E.O Behind
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your <span className="text-green-600">Trusted</span> Mobile App
                Development Company for Every Industry!
              </h2>
            </div>

            {/* Fiverr Accolade */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-green-600 p-3 rounded-lg">
                <span className="text-white font-bold text-lg">fi</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">Best Seller</span>
                  <span className="text-gray-600 font-semibold">fiverr.</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  (Click to see 458 Reviews)
                </p>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                Chat with us
              </button>
              <button className="bg-white border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
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
                Book a meeting
              </button>
            </div>
          </div>

          {/* Right Image and Services Area */}
          <div className="relative">
            {/* CEO Portrait */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
                alt="Muhammad Salman - CEO"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Services Overlay - Top Right */}
              <div className="absolute top-8 right-8 bg-green-600 bg-opacity-95 rounded-xl p-6 text-white max-w-xs">
                <h3 className="text-xl font-bold mb-4">Mobile Application</h3>
                <ul className="space-y-3">
                  {[
                    "Consultation",
                    "Design Psychology",
                    "Development",
                    "Marketing Strategy",
                  ].map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-1">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 bg-white bg-opacity-30 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Name and Certification Overlay - Bottom Left */}
              <div className="absolute bottom-8 left-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                  Muhammad Salman
                </h2>
                <p className="text-white text-sm font-medium bg-green-600 bg-opacity-90 px-4 py-2 rounded-lg inline-block">
                  GOOGLE CERTIFIED MOBILE APP DEVELOPER
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
