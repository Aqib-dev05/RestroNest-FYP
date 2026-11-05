import { Router } from "express";
import {
  listTables,
  getTable,
  createTable,
  updateTable,
  deleteTable,
  downloadQrPdf,
  getTableQr,
  regenerateToken,
} from "../controllers/table.controller.js";

const router = Router();

router
  .get("/", listTables)
  .post("/", createTable)
  .get("/qr-pdf", downloadQrPdf)
  .get("/:id", getTable)
  .patch("/:id", updateTable)
  .delete("/:id", deleteTable)
  .get("/:id/qr", getTableQr)
  .post("/:id/regenerate-token", regenerateToken);

export default router;
