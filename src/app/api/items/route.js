import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("productify");

    const items = await db.collection("items").find({}).toArray();

    return new Response(
      JSON.stringify(
        items.map((item) => ({
          ...item,
          _id: item._id.toString(),
          createdAt: item.createdAt?.toISOString(),
        }))
      ),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error(err);
    return new Response("Failed to fetch items", { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("productify");

    const newItem = { ...body, createdAt: new Date() };
    const result = await db.collection("items").insertOne(newItem);

    return new Response(
      JSON.stringify({ _id: result.insertedId.toString(), ...newItem }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error(err);
    return new Response("Failed to add item", { status: 500 });
  }
}
