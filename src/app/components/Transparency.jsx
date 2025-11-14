export default function Transparency() {
  return (
    <section
      id="transparency"
      className="py-12 bg-white rounded-xl p-8 shadow-xl"
    >
      {/* Section Heading */}
      <h2 className="text-4xl font-extrabold text-gray-900 text-center">
        पारदर्शिता और जवाबदेही (Transparency & Accountability)
      </h2>

      <div className="w-24 h-1 bg-[#000080] mx-auto my-4"></div>

      {/* Cards Wrapper */}
      <div className="mt-10 space-y-8">

        {/* ------- Card 1: Financial Assets Summary ------- */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold text-[#000080] mb-3">
            Financial Assets Summary (Affidavit Data)
          </h3>

          <p className="text-gray-700 mb-4 leading-relaxed">
            सार्वजनिक जीवन में पारदर्शिता हमारी प्राथमिकता है।
            नीचे 2023 विधानसभा चुनाव हलफनामे के अनुसार संपत्ति का विवरण दिया गया है:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Total Immovable Assets:</strong> ₹1.1 Crore+
              (EWS-286, Vaishali Nagar शामिल)
            </li>

            <li>
              <strong>Movable Assets (Self & Spouse):</strong> लगभग ₹13.7 Lakhs
            </li>

            <li>
              <em>Source: Election Affidavit 2023</em>
            </li>
          </ul>
        </div>

        {/* ------- Card 2: Legal Case Disclosure ------- */}
        <div className="p-6 bg-red-50 rounded-lg border border-red-300 shadow-sm">
          <h3 className="text-2xl font-bold text-red-700 mb-3">
            Voluntary Legal Disclosure Summary
          </h3>

          <p className="text-gray-800 mb-4 leading-relaxed">
            सक्रिय राजनीतिक जीवन में संघर्ष और विरोध के कारण कुछ केस दर्ज हुए हैं:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
            <li>
              <strong>Case 1 (2012 FIR):</strong> IPC 186, 353, 448  
              <span className="text-red-800 font-semibold">
                — संबंधित क्षेत्रीय मुद्दों पर राजनीतिक विरोध के दौरान।
              </span>
            </li>

            <li>
              <strong>Case 2:</strong> Section 138 (Cheque Bounce Case)  
              <span className="text-red-800 font-semibold">
                — निजी वित्तीय विवाद।
              </span>
            </li>
          </ul>

          <p className="mt-4 text-sm text-red-600">
            सभी मामले अदालत में विचाराधीन हैं तथा कानून का पालन किया जा रहा है।
          </p>
        </div>

        {/* ------- Card 3: Official Statements ------- */}
        <div className="p-6 bg-blue-50 rounded-lg border border-blue-300 shadow-sm">
          <h3 className="text-2xl font-bold text-[#000080] mb-3">
            आधिकारिक वक्तव्य और मीडिया स्पष्टीकरण
          </h3>

          <p className="text-gray-700 leading-relaxed">
            <strong>BSP Bungalow Dispute:</strong> संबंधित आवासीय परिसर  
            <strong> BHILAI STEEL PLANT (BSP) प्रबंधन </strong> द्वारा  
            नियमों के तहत एक सिटिंग MLA को आवंटित किया गया है। यह व्यक्तिगत
            अधिग्रहण नहीं है।
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            <strong>Nakta Pond Renaming:</strong> सांस्कृतिक विरासत का सम्मान हमारी प्राथमिकता है। 
            नामकरण का अंतिम निर्णय  
            <strong> नगर निगम की जनरल असेंबली प्रक्रिया </strong>  
            के माध्यम से ही लिया जाएगा।
          </p>
        </div>
      </div>
    </section>
  );
}
