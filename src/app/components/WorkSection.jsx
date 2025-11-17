"use client"; 
// because later we will add image generation logic (optional)
import Image from 'next/image';
import img1 from '../images/shakti_yojana_image.png';
import img2 from '../images/pwd.png';




export default function WorkSection() {
  return (
    <section id="karya" className="py-12">

      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-gray-900 text-center">
        वैशाली नगर में मेरा कार्य (Work Portfolio)
      </h2>

      <div className="w-24 h-1 bg-[#000080] mx-auto my-4"></div>

      {/* 2 Cards Grid */}
      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        {/* Card 1: Shakti Yojana */}
        <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition border-t-4 border-pink-500">
          
          {/* Dynamic Image Container */}
          <div
  id="shakti-image-container"
  className="mb-4 w-full h-48 rounded-lg overflow-hidden relative"
>
  <Image 
    src={img1} 
    alt="Shakti Yojana ke participants"
    layout="fill" // Ye image ko container mein fit karne ke liye
    objectFit="cover" // Ye image ko crop karke poore container mein cover karega
    className="skeleton" // Skeleton class agar loading state dikhani hai
  />
</div>

          {/* Icon + Title */}
          <div className="flex items-center">

            <svg
              className="h-10 w-10 text-pink-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>

            <h3 className="ml-4 text-3xl font-bold text-gray-900">
              शक्ति योजना - Empowering Women
            </h3>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">
            यह हमारा सबसे बड़ा सामाजिक कार्यक्रम है, जो महिलाओं को शिक्षा, 
            कंप्यूटर ट्रेनिंग और स्वरोजगार के लिए तैयार करता है।
          </p>

          <a
            href="#shakti-details"
            className="mt-4 inline-block font-bold text-pink-600 hover:text-pink-800"
          >
            योजना के बारे में और जानें →
          </a>
        </div>

        {/* Card 2: PWD Bahali */}
        <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition border-t-4 border-green-600">
          
          {/* Dynamic Image Container */}
           <div
  id="shakti-image-container"
  className="mb-4 w-full h-48 rounded-lg overflow-hidden relative"
>
  <Image 
    src={img2} 
    alt="PWD कर्मचारियों की बहाली"
    layout="fill" // Ye image ko container mein fit karne ke liye
    objectFit="cover" // Ye image ko crop karke poore container mein cover karega
    className="skeleton" // Skeleton class agar loading state dikhani hai
  />
</div>

          {/* Icon + Title */}
          <div className="flex items-center">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2zM9 17a3 3 0 000 6h6a3 3 0 000-6"
              />
            </svg>

            <h3 className="ml-4 text-3xl font-bold text-gray-900">
              200+ PWD कर्मचारियों को पुनः सम्मान और रोजगार
            </h3>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">
           200+ ठेका कर्मचारियों को पुनः रोजगार प्रदान करना—मजदूर वर्ग को स्थिरता, सम्मान और सुरक्षित आजीविका देने की हमारी प्रतिबद्धता है।
          </p>

          <a
            href="#labour-success"
            className="mt-4 inline-block font-bold text-green-600 hover:text-green-800"
          >
            पूरी केस स्टडी पढ़ें →
          </a>
        </div>

      </div>
    </section>
  );
}
