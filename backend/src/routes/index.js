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

router
  .use("/auth", authRouter)
  .use("/subscriptions", subscriptionRouter)
  .use("/restaurant", restaurantRouter)
  .use("/categories", categoryRouter)
  .use("/menu-items", menuItemRouter)
  .use("/uploads", uploadRouter)
  .use("/tables", tableRouter)
  .use("/public", publicRouter)
  .use("/orders", orderRouter)
  .use("/sessions", sessionRouter)
  .use("/reports", reportRouter);

export default router;
