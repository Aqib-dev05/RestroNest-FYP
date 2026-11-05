import { Router } from "express";
import {
  registerRestaurant,
  login,
  adminLogin,
  getMe,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register-restaurant", registerRestaurant);
router.post("/login", login);
router.post("/admin-login", adminLogin);
router.get("/me", getMe);

export default router;

