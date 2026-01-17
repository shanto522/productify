import clientPromise from "../../../../server/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("productify");
    const items = await db.collection("items").find({}).toArray();
    return new Response(JSON.stringify(items), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response("Failed to fetch items", { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("productify");
    const newItem = { ...body, createdAt: new Date() };
    const result = await db.collection("items").insertOne(newItem);
    return new Response(
      JSON.stringify({ _id: result.insertedId, ...newItem }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error(err);
    return new Response("Failed to add item", { status: 500 });
  }
}
