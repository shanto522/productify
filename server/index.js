import express from "express";
import cors from "cors";
import itemsRoute from "./routes/items.route.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/items", itemsRoute);

app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
 