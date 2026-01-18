"use client";

import formatPrice from "@/utils/formatPrice";
import Link from "next/link";

export default function ItemDetails({ item }) {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      {/* Image */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
        <img
          src={item?.image || "/images/placeholder.png"}
          alt={item?.name || "Item Image"}
          className="w-full h-[28rem] object-cover rounded-3xl transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent rounded-3xl pointer-events-none"></div>
      </div>

      {/* Details */}
      <div className="flex flex-col justify-between bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            {item?.name || "Unnamed Item"}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            {item?.description || "No description available."}
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-indigo-600 font-extrabold text-xl">
            {formatPrice(item?.price ?? 0)}
          </span>
        </div>

        {/* Go Back Button */}
        <Link
          href="/items"
          className="flex justify-center items-center mt-3 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition"
        >
          ← Go Back
        </Link>
      </div>
    </div>
  );
}
