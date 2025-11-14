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

            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#000080]"
            >
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

          <p className="mt-4 text-gray-700 font-bold">
            Phone: +91-XXXXXXXXXX
          </p>

          <h3 className="text-2xl font-bold text-[#000080] mt-6 mb-3">
            Social Media
          </h3>

          <div className="flex space-x-4">

            {/* Facebook */}
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.35C0 
                23.407.593 24 1.325 24h11.498v-9.294H9.695v-3.626h3.128V8.413c0-3.1 
                1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.793.143v3.235h-1.921c-1.503 
                0-1.795.715-1.795 1.765v2.316h3.626l-.472 3.626h-3.154V24h6.116C23.407 
                24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="text-red-600 hover:text-red-800 transition"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-.788-1.052-1.66-1.176-2.597-1.318C14.798 
                1.49 13.4 1.4 12 1.4c-1.4 0-2.798.09-5.018.466-.937.142-1.809.266-2.597 
                1.318C3.004 4.36 2.8 5.763 2.8 8s.204 3.64.585 4.816c.788 1.052 1.66 
                1.176 2.597 1.318C9.202 14.51 10.6 14.6 12 14.6c1.4 0 2.798-.09 5.018-.466 
                .937-.142 1.809-.266 2.597-1.318.381-1.176.585-2.579.585-4.816s-.204-3.64-.585-4.816zM10
                9.5v-3l3.5 1.5L10 9.5z" />
              </svg>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
