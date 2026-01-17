"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export default function AddItemPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.description || !form.price) {
      toast.error("Please fill all required fields ❌");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "true", // middleware check হবে
        },
        body: JSON.stringify({
          name: form.name,
          description: form.description,
          price: parseFloat(form.price),
          image: form.image || "/images/placeholder.png",
        }),
      });

      if (!res.ok) throw new Error("Failed to add item");

      toast.success("Item added successfully ✅");

      // Reset form
      setForm({ name: "", description: "", price: "", image: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to add item ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl border space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600">
          Add New Item
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Item Name"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Item Description"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none h-24"
          required
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price (TK)"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          required
        />

        {/* Image URL */}
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        {/* Preview Image */}
        {form.image && (
          <div className="w-full h-64 overflow-hidden rounded-xl shadow-md">
            <img
              src={form.image}
              alt="Preview"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold text-white transition shadow-md hover:shadow-lg ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {loading ? "Adding..." : "Add Item"}
        </button>
      </form>
    </div>
  );
}
