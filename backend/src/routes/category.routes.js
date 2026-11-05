import { Router } from "express";
import {
  listCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

const router = Router();

router
  .get("/", listCategories)
  .post("/", createCategory)
  .get("/:id", getCategory)
  .patch("/:id", updateCategory)
  .delete("/:id", deleteCategory);

export default router;
