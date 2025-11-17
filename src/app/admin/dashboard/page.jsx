"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
    const router = useRouter();
    const [messages, setMessages] = useState([]);
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isAdmin = localStorage.getItem("isAdmin");

        if (!isAdmin) {
            router.push("/admin/login");
            return;
        }

        // Fetch Contact Messages
        fetch("/api/admin/contacts")
            .then((r) => r.json())
            .then((res) => {
                if (res.success) setMessages(res.data);
            });

        // Fetch Work Items
        fetch("/api/work")
            .then((r) => r.json())
            .then((res) => {
                if (res.success) setWorks(res.items);
            })
            .finally(() => setLoading(false));
    }, [router]);

    return (
        <div className="p-6 max-w-6xl mx-auto space-y-10">

            {/* Dashboard Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold">Admin Dashboard</h1>
                <button
                    onClick={() => {
                        localStorage.removeItem("isAdmin");
                        router.push("/admin/login");
                    }}
                    className="px-4 py-2 bg-red-600 text-white rounded"
                >
                    Logout
                </button>
            </div>
{/* ---- SECTION 1: CONTACT MESSAGES ---- */}
<div className="bg-white p-6 rounded-xl shadow">
  <div className="flex justify-between items-center">
    <h2 className="text-2xl font-bold">📩 Complaints & Suggestions</h2>
  </div>

  <div className="mt-4 space-y-4">
    {messages.length === 0 ? (
      <p>No messages yet.</p>
    ) : (
      messages.map((msg) => (
        <div
          key={msg._id}
          className="p-5 border rounded-lg shadow bg-gray-50 hover:shadow-md transition"
        >
          {/* Type Badge */}
          <span
            className={`px-3 py-1 text-sm font-bold rounded-full ${
              msg.type === "Complaint"
                ? "bg-red-100 text-red-700"
                : msg.type === "Suggestion"
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {msg.type || "Message"}
          </span>

          {/* Title + User Info */}
          <div className="flex justify-between mt-3">
            <div>
              <h3 className="font-semibold text-lg">{msg.name}</h3>
              <p className="text-gray-600 text-sm">
                {msg.email || msg.mobile}
              </p>
            </div>

            {/* Date */}
            <p className="text-gray-500 text-sm">
              {new Date(msg.createdAt).toLocaleString()}
            </p>
          </div>

          {/* Message Text */}
          <p className="mt-3 text-gray-800 leading-relaxed">{msg.message}</p>
        </div>
      ))
    )}
  </div>
</div>


            {/* ---- SECTION 2: WORK ITEMS ---- */}
            <div className="bg-white p-6 rounded-xl shadow">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">📌 Work / Projects</h2>

                    <button
                        onClick={() => router.push("/admin/add-work")}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        + Add New Work
                    </button>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {works.length === 0 ? (
                        <p>No work items added yet.</p>
                    ) : (
                        works.map((work) => (
                            <div key={work._id} className="p-4 border rounded-lg shadow">
                                <h3 className="text-xl font-bold">{work.title}</h3>
                                <p className="text-gray-600 mt-2">{work.description}</p>

                                {work.link && (
                                    <a href={work.link} className="text-blue-500 text-sm mt-2 inline-block">
                                        Read More →
                                    </a>
                                )}

                                <img
                                    src={work.imageUrl}
                                    alt="work"
                                    className="mt-4 rounded-lg w-full h-40 object-cover"
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>

        </div>
    );
}
