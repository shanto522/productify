import Link from "next/link";
import formatPrice from "@/utils/formatPrice";

export default function ItemCard({ item }) {
  return (
    <div className="group relative bg-white/80 rounded-3xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-500">
      <div className="h-72 w-full overflow-hidden rounded-t-3xl">
        <img src={item.image || "/images/placeholder.png"} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col justify-between">
        <h3 className="text-xl font-bold">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.description || "No description"}</p>
        <div className="flex justify-between mt-4">
          <span className="text-indigo-600 font-extrabold text-xl">{formatPrice(item.price)}</span>
          <Link href={`/items/${item._id}`}>
            <span className="text-lg font-semibold hover:text-indigo-600">View Details →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
