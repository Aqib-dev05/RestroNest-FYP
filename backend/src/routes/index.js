import { Router } from "express";
import authRouter from "./auth.routes.js";
import subscriptionRouter from "./subscription.routes.js";
import restaurantRouter from "./restaurant.routes.js";
import categoryRouter from "./category.routes.js";
import menuItemRouter from "./menuItem.routes.js";
import uploadRouter from "./upload.routes.js";
import tableRouter from "./table.routes.js";
import publicRouter from "./public.routes.js";
import orderRouter from "./order.routes.js";
import sessionRouter from "./session.routes.js";
import reportRouter from "./report.routes.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/subscriptions", subscriptionRouter);
router.use("/restaurant", restaurantRouter);
router.use("/categories", categoryRouter);
router.use("/menu-items", menuItemRouter);
router.use("/uploads", uploadRouter);
router.use("/tables", tableRouter);
router.use("/public", publicRouter);
router.use("/orders", orderRouter);
router.use("/sessions", sessionRouter);
router.use("/reports", reportRouter);

export default router;

