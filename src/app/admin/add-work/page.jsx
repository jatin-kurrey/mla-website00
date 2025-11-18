'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddWorkPage() {
  const router = useRouter();
  
  // State for text inputs
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
  });

  // Separate state for the image file
  const [imageFile, setImageFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handler for text input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handler for file input change
  const handleFileChange = (e) => {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please select an image file to upload.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Upload the image to Vercel Blob
      const uploadResponse = await fetch(`/api/upload?filename=${imageFile.name}`,
        {
          method: "POST",
          body: imageFile,
        }
      );

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload image.");
      }

      const newBlob = await uploadResponse.json();

      // 2. Create the complete form data with the new image URL
      const finalFormData = {
        ...form,
        imageUrl: newBlob.url, // Use the URL from the uploaded blob
      };

      // 3. Submit the final form data to the /api/work endpoint
      const res = await fetch("/api/work", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalFormData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Work Added Successfully!");
        router.push("/admin/manage-work"); // Redirect to the manage page
      } else {
        throw new Error(data.error || "Something went wrong.");
      }

    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
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
          disabled={isSubmitting}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-3 border rounded"
          value={form.description}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />

        <input
          name="link"
          placeholder="Read more link (optional)"
          className="w-full p-3 border rounded"
          value={form.link}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Work Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            disabled={isSubmitting}
          />
          {imageFile && <p className="text-xs text-gray-500 mt-1">Selected: {imageFile.name}</p>}
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-3 rounded-lg shadow hover:bg-blue-700 transition disabled:bg-gray-400"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Uploading & Saving...' : 'Add Work'}
        </button>
      </form>
    </div>
  );
}
