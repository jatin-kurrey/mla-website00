export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-white rounded-xl p-8 shadow-xl">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-gray-900 text-center">
        संपर्क और शिकायत निवारण (Get In Touch)
      </h2>

      <div className="w-24 h-1 bg-[#000080] mx-auto my-4"></div>

      {/* Grid Layout */}
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {/* LEFT: Contact Form */}
        <div>
          <h3 className="text-2xl font-bold text-[#000080] mb-4">
            शिकायत या सुझाव दर्ज करें
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="आपका नाम"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#000080] focus:ring-[#000080]"
            />

            <input
              type="tel"
              placeholder="मोबाइल नंबर"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#000080]"
            />

            <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#000080]">
              <option>शिकायत का प्रकार (Housing, Labor, PWD, General)</option>
              <option>Housing Issue</option>
              <option>Labor/Employment Issue</option>
              <option>Infrastructure / PWD</option>
              <option>Shakti Yojana Query</option>
              <option>General Suggestion</option>
            </select>

            <textarea
              placeholder="आपका संदेश/शिकायत"
              rows="4"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#000080]"
            />

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#000080] text-white font-bold rounded-lg hover:bg-blue-900 transition text-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT: Contact Details */}
        <div className="p-6 bg-gray-50 rounded-lg shadow">
          <h3 className="text-2xl font-bold text-[#000080] mb-4">
            Official Office Address
          </h3>

          <p className="text-gray-700 text-lg font-medium">
            MLA Office, Vaishali Nagar Assembly Constituency
          </p>

          <address className="mt-2 text-gray-600 not-italic">
            Near Bhilai Steel Plant (BSP) Area, <br />
            Durg District, Chhattisgarh, India
          </address>

          <p className="mt-4 text-gray-700 font-bold">Phone: +91-XXXXXXXXXX</p>

          <h3 className="text-2xl font-bold text-[#000080] mt-6 mb-3">
            Social Media
          </h3>

          <div className="flex space-x-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/SenRikesh/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                aria-hidden="true"
                role="img"
              >
                <defs>
                  <linearGradient
                    id="fbGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#1877F2" />
                    <stop offset="100%" stop-color="#0A54C6" />
                  </linearGradient>
                </defs>

                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                  fill="url(#fbGradient)"
                />

                <path
                  fill="#ffffff"
                  d="M14.5 7H13c-1.1 0-1.5.5-1.5 1.4V10h3l-.4 3h-2.6v7h-3v-7H7v-3h1.5V8.1C8.5 5.8 9.9 5 12 5c1.2 0 2 .1 2.5.2v1.8z"
                />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@RIKESHSENBJP"
              target="_blank"
              rel="noreferrer"
              className="text-red-600 hover:text-red-800 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                aria-hidden="true"
                role="img"
              >
                <defs>
                  <linearGradient
                    id="ytGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#FF0000" />
                    <stop offset="100%" stop-color="#CC0000" />
                  </linearGradient>
                </defs>

                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="16"
                  rx="4"
                  ry="4"
                  fill="url(#ytGradient)"
                />

                <polygon points="10,8 16,12 10,16" fill="#ffffff" />
              </svg>
            </a>
            {/* instagram */}
            <a
              href="https://www.instagram.com/rikeshsenbjp/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="text-red-600 hover:text-red-800 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                aria-hidden="true"
                role="img"
              >
                <defs>
                  <linearGradient
                    id="instaGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#F58529" />
                    <stop offset="50%" stop-color="#DD2A7B" />
                    <stop offset="100%" stop-color="#515BD4" />
                  </linearGradient>
                </defs>
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                  fill="url(#instaGradient)"
                />
                <path
                  d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                  fill="#ffffff"
                />
                <circle cx="17.5" cy="6.5" r="1.1" fill="#ffffff" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
