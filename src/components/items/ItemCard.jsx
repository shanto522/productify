"use client";

import formatPrice from "@/utils/formatPrice";
import Link from "next/link";

export default function ItemCard({ item }) {
  return (
    <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
      {/* Image */}
      <div className="h-72 w-full overflow-hidden rounded-t-3xl relative">
        <img
          src={item.image || "/images/placeholder.png"}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none rounded-t-3xl"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 truncate">
            {item.name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mt-1">
            {item.description || "No description available."}
          </p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-indigo-600 font-extrabold text-xl">
            {formatPrice(item.price)}
          </span>
          <Link href={`/items/${item.id}`}>
            <span className="text-sm text-gray-400 font-medium transition group-hover:text-indigo-600">
              View Details →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
