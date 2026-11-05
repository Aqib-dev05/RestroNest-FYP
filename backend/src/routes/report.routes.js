import { Router } from "express";
import {
  getSummary,
  getBestSellers,
  getPeakHours,
  getPaymentSplit,
} from "../controllers/report.controller.js";

const router = Router();

router.get("/summary", getSummary);
router.get("/best-sellers", getBestSellers);
router.get("/peak-hours", getPeakHours);
router.get("/payment-split", getPaymentSplit);

export default router;

