import { Router } from "express";
import {
  getSummary,
  getBestSellers,
  getPeakHours,
  getPaymentSplit,
} from "../controllers/report.controller.js";

const router = Router();

router
  .get("/summary", getSummary)
  .get("/best-sellers", getBestSellers)
  .get("/peak-hours", getPeakHours)
  .get("/payment-split", getPaymentSplit);

export default router;
