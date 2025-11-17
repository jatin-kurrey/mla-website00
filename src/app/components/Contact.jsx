"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    type: "Suggestion",
    message: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data.success) throw new Error(data.error);

      setSuccess("Message sent successfully!");
      setForm({ name: "", mobile: "", type: "Suggestion", message: "", email: "" });
    } catch (err) {
      setError("Failed to send. Try again later.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-12 bg-white rounded-xl p-8 shadow-xl">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center">
        संपर्क और शिकायत निवारण (Get In Touch)
      </h2>

      <div className="w-24 h-1 bg-[#000080] mx-auto my-4"></div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="आपका नाम"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <input
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              type="tel"
              placeholder="मोबाइल नंबर"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option>Suggestion</option>
              <option>Complaint</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="आपका संदेश/शिकायत"
              rows="4"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#000080] text-white font-bold rounded-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && <p className="text-green-600">{success}</p>}
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </div>

        {/* RIGHT SIDE (unchanged) */}
        <div>
          <h3 className="font-bold text-xl text-[#000080]">Office Contact</h3>
          <p>Yaha tum office address / phone / email rakh sakte ho.</p>
        </div>
      </div>
    </section>
  );
}
