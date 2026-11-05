import { Router } from "express";
import { listPlans } from "../controllers/subscription.controller.js";

const router = Router();

router.get("/", listPlans);

export default router;

