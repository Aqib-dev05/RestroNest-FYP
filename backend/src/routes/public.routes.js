import { Router } from "express";
import {
  getMenuByQr,
  placeOrder,
  getMySession,
} from "../controllers/public.controller.js";

const router = Router();

router
  .get("/menu/:qrToken", getMenuByQr)
  .post("/orders", placeOrder)
  .get("/session/:sessionToken", getMySession);

export default router;
