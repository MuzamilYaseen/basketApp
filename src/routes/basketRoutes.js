import express from "express";
import {
  createBasketItems,
  deleteBasketById,
  getAllBasketItems,
  updateItemQuantity,
} from "../controllers/basketController.js";

const router = express.Router();

router.post("/basket/items", createBasketItems);
router.get("/basket/:id", getAllBasketItems);
router.delete("/basket/:id", deleteBasketById);
router.patch("/basket/items/:id", updateItemQuantity);

export default router;
