import { Router } from "express";
import {
  listOrders,
  getOrder,
  updateOrderStatus,
} from "../controllers/order.controller.js";

const router = Router();

router
  .get("/", listOrders)
  .get("/:id", getOrder)
  .patch("/:id/status", updateOrderStatus);

export default router;
