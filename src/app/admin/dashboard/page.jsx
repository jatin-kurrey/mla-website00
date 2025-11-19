'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// A single statistic card component
const StatCard = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-between">
        <div>
            <p className="text-gray-500 font-medium">{title}</p>
            <p className="text-4xl font-bold text-gray-900">{value}</p>
        </div>
        <div className="text-4xl text-blue-500">{icon}</div>
    </div>
);

export default function AdminDashboard() {
    const router = useRouter();
    const [messages, setMessages] = useState([]);
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const isAdmin = localStorage.getItem("isAdmin");
                if (!isAdmin) {
                    router.push("/admin/login");
                    return;
                }

                const [messagesRes, worksRes] = await Promise.all([
                    fetch("/api/admin/contacts"),
                    fetch("/api/work"),
                ]);

                if (!messagesRes.ok || !worksRes.ok) {
                    throw new Error("Failed to fetch data");
                }

                const messagesData = await messagesRes.json();
                const worksData = await worksRes.json();

                if (messagesData.success) setMessages(messagesData.data);
                if (worksData.success) setWorks(worksData.items);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [router]);

    if (loading) return <div className="text-center p-10">Loading Dashboard...</div>;
    if (error) return <div className="text-center p-10 text-red-500">Error: {error}</div>;

    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Messages" value={messages.length} icon="📩" />
                <StatCard title="Complaints" value={messages.filter(m => m.type === 'Complaint').length} icon="😠" />
                <StatCard title="Suggestions" value={messages.filter(m => m.type === 'Suggestion').length} icon="💡" />
                <StatCard title="Work Items" value={works.length} icon="🏗️" />
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the Admin Panel</h2>
                <p className="text-gray-600">
                    Use the sidebar navigation to manage complaints, suggestions, and work portfolio items.
                </p>
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
                                    className={`px-3 py-1 text-sm font-bold rounded-full ${msg.type === "Complaint"
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
                            <div key={work._id} className="relative p-4 border rounded-lg shadow">
                                console.log(work);
                                console.log("ID:", work._id);

                                {/* Delete Button */}
                                <button
                                    onClick={async () => {
                                        if (!confirm("Are you sure?")) return;

                                        console.log("Deleting ID:", work._id); // DEBUG

                                        const res = await fetch(`/api/work/${work._id}`, {
                                            method: "DELETE",
                                        });

                                        const data = await res.json();
                                        if (data.success) {
                                            alert("Deleted!");
                                            location.reload();
                                        } else {
                                            alert("Delete failed: " + data.error);
                                        }
                                    }}
                                    className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>





                                <h3 className="text-xl font-bold">{work.title}</h3>
                                <p className="text-gray-600 mt-2">{work.description}</p>

                                {work.link && (
                                    <a href={work.link} className="text-blue-500 text-sm mt-2 inline-block">
                                        Read More →
                                    </a>
                                )}

                                <img
                                    src={work.imageUrl}
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
