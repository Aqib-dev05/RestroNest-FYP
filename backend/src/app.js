import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ZodError } from "zod";
import routes from "./routes/index.js";
import ApiError from "./utils/apiError.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_PATH || "http://localhost:3000",
    credentials: true,
  }),
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/health", (req, res) => {
  res.json({ message: "Welcome to RestroNest API" });
});

app.use("/api", routes);

// 404 for unknown routes
app.use((req, res, next) => {
  next(new ApiError(404, `Route not found: ${req.method} ${req.originalUrl}`));
});

// Global error handler (sab se last mein, 4 arguments zaroori hain)
app.use((err, req, res, next) => {
  const send = (statusCode, message, errors = []) =>
    res.status(statusCode).json({
      statusCode,
      success: false,
      message,
      errors,
      data: null,
    });

  // 1. Zod validation error
  if (err instanceof ZodError) {
    const errors = err.issues.map((i) => ({
      field: i.path.join("."),
      message: i.message,
    }));
    return send(400, "Validation error", errors);
  }

  // 2. Bad JSON body
  if (err.type === "entity.parse.failed") {
    return send(400, "Invalid JSON body");
  }

  // 3. Tumhara ApiError
  if (err instanceof ApiError) {
    return send(err.statusCode, err.message, err.errors);
  }

  // 4. Baaki sab (Prisma, bugs)
  console.error(err);
  return send(500, "Internal Server Error");
});

export default app;
