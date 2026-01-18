import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export async function GET(req, { params }) {
  const id = params?.id;
  console.log("Fetching item with ID:", id);

  if (!id || !ObjectId.isValid(id)) {
    return new Response(JSON.stringify({ message: "Invalid item ID" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db("productify");

    const item = await db
      .collection("items")
      .findOne({ _id: new ObjectId(id) });

    if (!item) {
      return new Response(JSON.stringify({ message: "Item not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        ...item,
        _id: item._id.toString(),
        createdAt: item.createdAt?.toISOString(),
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Failed to fetch item" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
