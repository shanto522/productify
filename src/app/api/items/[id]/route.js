import { ObjectId } from "mongodb";
import clientPromise from "../../../../../server/lib/mongodb";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const client = await clientPromise;
    const db = client.db("productify");
    const item = await db
      .collection("items")
      .findOne({ _id: new ObjectId(id) });
    if (!item) return new Response("Item not found", { status: 404 });
    return new Response(JSON.stringify(item), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response("Failed to fetch item", { status: 500 });
  }
}
