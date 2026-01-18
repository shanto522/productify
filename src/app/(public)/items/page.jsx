import ItemCard from "@/components/items/ItemCard";

async function getItems() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/items`, { cache: "no-store" });
    if (!res.ok) {
      console.error("Fetch failed status:", res.status);
      return [];
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch items:", error);
    return [];
  }
}
export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-5xl font-extrabold text-center mb-12">All Products</h1>
      <div className="container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.length > 0 ? (
          items.map((item) => <ItemCard key={item._id} item={item} />)
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">No items available</p>
        )}
      </div>
    </div>
  );
}
