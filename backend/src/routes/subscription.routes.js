import { Router } from "express";
import { listPlans, getPlan } from "../controllers/subscription.controller.js";

const router = Router();

router
  .get("/", listPlans)
  .get("/:id", getPlan);

export default router;
