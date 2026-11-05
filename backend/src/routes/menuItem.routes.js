import { Router } from "express";
import {
  listItems,
  createItem,
  updateItem,
  deleteItem,
  toggleStock,
} from "../controllers/menuItem.controller.js";

const router = Router();

router.get("/", listItems);
router.post("/", createItem);
router.patch("/:id", updateItem);
router.delete("/:id", deleteItem);
router.patch("/:id/stock", toggleStock);

export default router;

