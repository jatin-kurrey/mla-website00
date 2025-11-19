'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ComplaintsPage() {
    const router = useRouter();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const isAdmin = localStorage.getItem("isAdmin");
            if (!isAdmin) {
                router.push("/admin/login");
                return;
            }

            const res = await fetch("/api/admin/contacts");
            if (!res.ok) throw new Error("Failed to fetch messages");
            
            const data = await res.json();
            if (data.success) setMessages(data.data);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [router]);

    const handleDeleteMessage = async (id) => {
        if (!confirm("Are you sure you want to delete this message?")) return;
        try {
            const res = await fetch(`/api/admin/contacts?id=${id}`, { method: 'DELETE' });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to delete message");
            }

            fetchData(); // Re-fetch data to update the list
        } catch (err) {
            alert(`Error: ${err.message}`);
        }
    };

    if (loading) return <div className="text-center p-10">Loading messages...</div>;
    if (error) return <div className="text-center p-10 text-red-500">Error: {error}</div>;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-5">📩 Complaints & Suggestions</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {messages.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center py-10">No messages yet.</td>
                            </tr>
                        ) : (
                            messages.map(msg => (
                                <tr key={msg._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="font-semibold">{msg.name}</div>
                                        <div className="text-sm text-gray-600">{msg.email || msg.mobile}</div>
                                    </td>
                                    <td className="px-6 py-4 max-w-sm">
                                        <p className="text-sm text-gray-800 whitespace-pre-wrap">{msg.message}</p>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${ msg.type === 'Complaint' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800' }`}>
                                            {msg.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(msg.createdAt).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button onClick={() => handleDeleteMessage(msg._id)} className="text-red-600 hover:text-red-900">Delete</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
