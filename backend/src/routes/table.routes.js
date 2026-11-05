import { Router } from "express";
import {
  listTables,
  createTable,
  updateTable,
  deleteTable,
  downloadQrPdf,
  getTableQr,
  regenerateToken,
} from "../controllers/table.controller.js";

const router = Router();

router.get("/", listTables);
router.post("/", createTable);
// NOTE: /qr-pdf must come before /:id routes to avoid param conflict
router.get("/qr-pdf", downloadQrPdf);
router.patch("/:id", updateTable);
router.delete("/:id", deleteTable);
router.get("/:id/qr", getTableQr);
router.post("/:id/regenerate-token", regenerateToken);

export default router;

