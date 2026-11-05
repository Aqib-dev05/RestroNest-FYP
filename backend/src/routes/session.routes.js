import { Router } from "express";
import {
  listSessions,
  getSession,
  getBill,
  paySession,
  downloadReceipt,
} from "../controllers/session.controller.js";

const router = Router();

router
  .get("/", listSessions)
  .get("/:id", getSession)
  .get("/:id/bill", getBill)
  .post("/:id/pay", paySession)
  .get("/:id/receipt.pdf", downloadReceipt);

export default router;
