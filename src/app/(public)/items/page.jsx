import ItemCard from "@/components/items/ItemCard";

async function getItems() {
  try {
    const res = await fetch("http://localhost:5000/items", {
      cache: "no-store", // Always fetch fresh
    });
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch items:", error);
    return [];
  }
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
        All Products
      </h1>

      <div className="container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.length > 0 ? (
          items.map((item) => <ItemCard key={item.id} item={item} />)
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No items available
          </p>
        )}
      </div>
    </div>
  );
}
