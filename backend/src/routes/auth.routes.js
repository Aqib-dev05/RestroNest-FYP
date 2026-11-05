import { Router } from "express";
import {
  registerRestaurant,
  login,
  adminLogin,
  logout,
  getMe,
} from "../controllers/auth.controller.js";

const router = Router();

router
  .post("/register-restaurant", registerRestaurant)
  .post("/login", login)
  .post("/admin-login", adminLogin)
  .post("/logout", logout)
  .get("/me", getMe);

export default router;
