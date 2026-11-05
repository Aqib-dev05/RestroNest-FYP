import { Router } from "express";
import {
  listItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
  toggleStock,
} from "../controllers/menuItem.controller.js";

const router = Router();

router
  .get("/", listItems)
  .post("/", createItem)
  .get("/:id", getItem)
  .patch("/:id", updateItem)
  .delete("/:id", deleteItem)
  .patch("/:id/stock", toggleStock);

export default router;
