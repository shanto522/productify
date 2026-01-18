import ItemCard from "@/components/items/ItemCard";

async function getItems() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items`, {
    cache: "no-store",
  });
  return res.ok ? await res.json() : [];
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-5xl font-extrabold text-center mb-12">
        All Products
      </h1>
      <div className="container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.length > 0 ? (
          items.map((item) => <ItemCard key={item._id} item={item} />)
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No items available
          </p>
        )}
      </div>
    </div>
  );
}
