import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import formatPrice from "@/utils/formatPrice";
import ItemDetails from "@/components/items/ItemDetails";

async function getItem(id) {
  if (!ObjectId.isValid(id)) return null;
  const client = await clientPromise;
  const db = client.db("productify");
  const item = await db.collection("items").findOne({ _id: new ObjectId(id) });
  if (!item) return null;
  return {
    ...item,
    _id: item._id.toString(),
    createdAt: item.createdAt?.toISOString(),
  };
}

export default async function ItemDetailPage({ params }) {
  // 🟢 unwrap params
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const item = await getItem(id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-2xl text-gray-600">Item not found</h1>
      </div>
    );
  }

  return (
    <section className="px-4 py-12 md:py-20 bg-gray-50 min-h-screen">
      <ItemDetails item={item} />
    </section>
  );
}
