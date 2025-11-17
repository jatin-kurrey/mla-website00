"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function WorkSection() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/work")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setItems(data.items);
      });
  }, []);

  return (
    <section id="karya" className="py-12">

      <h2 className="text-4xl font-extrabold text-gray-900 text-center">
        वैशाली नगर में मेरा कार्य (Work Portfolio)
      </h2>

      <div className="w-24 h-1 bg-[#000080] mx-auto my-4"></div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {items.map((work, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition border-t-4 border-blue-600"
          >
            <div className="mb-4 w-full h-48 rounded-lg overflow-hidden relative">
              <Image
                src={work.imageUrl}
                alt={work.title}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-3xl font-bold text-gray-900">{work.title}</h3>

            <p className="mt-4 text-gray-600">{work.description}</p>

            {work.link && (
              <a
                href={work.link}
                className="mt-4 inline-block font-bold text-blue-600 hover:text-blue-800"
              >
                Read More →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
