import { Router } from "express";
import {
  getMenuByQr,
  placeOrder,
  getMySession,
} from "../controllers/public.controller.js";

const router = Router();

router.get("/menu/:qrToken", getMenuByQr);
router.post("/orders", placeOrder);
router.get("/session/:sessionToken", getMySession);

export default router;

