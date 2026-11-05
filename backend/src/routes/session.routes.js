import { Router } from "express";
import {
  listSessions,
  getBill,
  paySession,
  downloadReceipt,
} from "../controllers/session.controller.js";

const router = Router();

router.get("/", listSessions);
router.get("/:id/bill", getBill);
router.post("/:id/pay", paySession);
router.get("/:id/receipt.pdf", downloadReceipt);

export default router;

