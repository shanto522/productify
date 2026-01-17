import fs from "fs";
import path from "path";

const dataPath = path.resolve("data/items.json");

export async function GET() {
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
}

export async function POST(req) {
  const body = await req.json();
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  const newItem = { id: Date.now().toString(), ...body };
  data.push(newItem);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  return new Response(JSON.stringify(newItem), { status: 201, headers: { "Content-Type": "application/json" } });
}
