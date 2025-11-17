"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddWorkPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
    imageUrl: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/work", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Work Added Successfully!");
      router.push("/admin/dashboard");
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-xl">
      <h1 className="text-3xl font-bold mb-6">Add New Work</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="title"
          placeholder="Title"
          className="w-full p-3 border rounded"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-3 border rounded"
          value={form.description}
          onChange={handleChange}
          required
        />

        <input
          name="link"
          placeholder="Read more link"
          className="w-full p-3 border rounded"
          value={form.link}
          onChange={handleChange}
        />

        <input
          name="imageUrl"
          placeholder="Image URL"
          className="w-full p-3 border rounded"
          value={form.imageUrl}
          onChange={handleChange}
          required
        />

        <button type="submit" className="w-full bg-[#000080] text-white p-3 rounded">
          Add Work
        </button>
      </form>
    </div>
  );
}
