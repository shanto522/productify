import fs from "fs";
import path from "path";

const dataPath = path.resolve("data/items.json");


export const getItems = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  res.json(data);
};

export const addItem = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

  const newItem = {
    id: Date.now().toString(),
    ...req.body,
  };

  data.push(newItem);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  res.status(201).json(newItem);
};

export const getItemById = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  const item = data.find((item) => item.id.toString() === req.params.id);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json(item);
};
