const BASE_URL = "/api/items";

export async function getItems() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function getItemById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
}

export async function addItem(data) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}
