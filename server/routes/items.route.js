import { Router } from "express";
import { getItems, addItem, getItemById } from "../controllers/items.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", getItems);
router.post("/", authMiddleware, addItem);
router.get("/:id", getItemById);

export default router;
