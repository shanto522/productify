"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ItemDetails from "@/components/items/ItemDetails";
import { toast } from "react-hot-toast";

export default function ItemDetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/items/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch item ❌");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading item...
        </p>
      </div>
    );

  if (!item)
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-red-500 text-lg">Item not found!</p>
      </div>
    );

  return (
    <section className="px-4 py-12 md:py-20 bg-gray-50 min-h-screen">
      <ItemDetails item={item} />
    </section>
  );
}
