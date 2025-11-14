export default function Legislative() {
  return (
    <section id="legislative" className="py-12">

      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-gray-900 text-center">
        विधानसभा रिकॉर्ड (Execution Over Debate)
      </h2>

      <div className="w-24 h-1 bg-[#000080] mx-auto my-4"></div>

      {/* Cards Grid */}
      <div className="mt-10 grid gap-8 md:grid-cols-3 text-center">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#000080]">
          <div className="text-6xl font-extrabold text-[#000080]">100%</div>
          <p className="mt-2 text-lg font-semibold text-gray-700">
            Assembly Attendance
          </p>
          <p className="text-sm text-gray-500 mt-1">
            कर्तव्यों के प्रति अटूट समर्पण
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#ff9933]">
          <div className="text-6xl font-extrabold text-[#ff9933]">Execution</div>
          <p className="mt-2 text-lg font-semibold text-gray-700">
            Focus on Implementation
          </p>
          <p className="text-sm text-gray-500 mt-1">
            सवाल नहीं — सीधे समाधान (जैसे PWD बहाली)
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#000080]">
          <div className="text-6xl font-extrabold text-[#000080]">Budget</div>
          <p className="mt-2 text-lg font-semibold text-gray-700">
            Strong Policy Alignment
          </p>
          <p className="text-sm text-gray-500 mt-1">
            PM आवास और महतारी वंदन योजना हेतु फंडिंग सुनिश्चित
          </p>
        </div>

      </div>
    </section>
  );
}
