'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ManageWorkPage() {
    const router = useRouter();
    const [works, setWorks] = useState([]);
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

            const res = await fetch("/api/work");
            if (!res.ok) throw new Error("Failed to fetch work items");

            const data = await res.json();
            if (data.success) setWorks(data.items);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [router]);

    const handleDeleteWork = async (id) => {
        if (!confirm("Are you sure you want to delete this work item?")) return;
        try {
            const res = await fetch(`/api/work?id=${id}`, { method: 'DELETE' });
            
            if (!res.ok) {
                // Get the actual error message from the server
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to delete work item");
            }
            
            fetchData(); // Re-fetch data
        } catch (err) {
            alert(`Error: ${err.message}`);
        }
    };

    if (loading) return <div className="text-center p-10">Loading work items...</div>;
    if (error) return <div className="text-center p-10 text-red-500">Error: {error}</div>;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl font-bold text-gray-800">🏗️ Manage Work / Projects</h2>
                <button onClick={() => router.push("/admin/add-work")} className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">+ Add New Work</button>
            </div>
            <div className="overflow-x-auto">
                 <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {works.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center py-10">No work items yet.</td>
                            </tr>
                        ) : (
                            works.map(work => (
                                <tr key={work._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Image src={work.imageUrl} alt={work.title} width={100} height={60} className="object-cover rounded-md" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{work.title}</td>
                                    <td className="px-6 py-4 max-w-sm">
                                        <p className="text-sm text-gray-800 truncate">{work.description}</p>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button onClick={() => handleDeleteWork(work._id)} className="text-red-600 hover:text-red-900">Delete</button>
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
