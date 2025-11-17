export default function Parichay() {
  return (
    <section
      id="parichay"
      className="py-12 bg-gray-50 rounded-xl p-8 shadow-inner"
    >
      {/* Section Heading */}
      <h2 className="text-4xl font-extrabold text-gray-900 text-center">
        मेरा परिचय: Aspirational Common Man
      </h2>

      <div className="w-24 h-1 bg-[#000080] mx-auto my-4"></div>

      {/* Main Content Row */}
      <div className="mt-10 lg:flex lg:space-x-10">
        {/* LEFT SIDE TEXT */}
        <div className="lg:w-2/3">
          {/* Sub-heading */}
          <h3 className="text-2xl font-bold text-[#000080] mb-4">
            जमीन से संसद तक का सफर
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Shri Rikesh Sen का जीवन संघर्ष, समर्पण और जनता की सेवा का प्रतीक है।
            साधारण पृष्ठभूमि से आगे बढ़ते हुए, उन्होंने निरंतर मेहनत, ईमानदारी
            और जनसेवा को अपना मार्ग बनाया। यही प्रतिबद्धता उन्हें &nbsp;
            <strong>सार्वजनिक जीवन के महत्वपूर्ण पद &nbsp;</strong>
            तक लेकर आई है, जहाँ वे समाज के हर वर्ग के लिए कार्य कर रहे हैं।
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            उनकी शिक्षा
            <strong> B.S.P. Higher Secondary School, Bhilai </strong>
            में हुई थी — जो उन्हें अपने क्षेत्र और लोगों से गहराई से जोड़ती है।
          </p>

          {/* Sub-heading */}
          <h3 className="text-2xl font-bold text-[#000080] mb-4">
            अनुभव ही सबसे बड़ी शिक्षा
          </h3>

          <p className="text-gray-700 leading-relaxed">
            MLA Sen अपनी 'Elite Academic Credentials' के बजाय
            <strong> 'A Lifetime of Education in Public Service' </strong>
            पर जोर देते हैं। उनका मानना है कि जनता के बीच रहकर काम करने का
            अनुभव, किसी भी किताब से ज्यादा महत्वपूर्ण होता है।
          </p>
        </div>

        {/* RIGHT SIDE FACTS CARD */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-[#000080] p-6 rounded-lg text-white shadow-lg">
            <h4 className="text-xl font-bold mb-3">Quick Facts</h4>

            <ul className="space-y-2 text-lg">
              <li>
                <strong>Constituency:</strong> Vaishali Nagar, Durg (CG)
              </li>

              <li>
                <strong>Party:</strong> Bharatiya Janata Party (BJP)
              </li>

              <li>
                <strong>Winning Margin (2023):</strong> 40,074 Votes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
