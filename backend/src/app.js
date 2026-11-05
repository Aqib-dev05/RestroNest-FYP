import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_PATH || "http://localhost:3000",
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/health", (req, res) => {
  res.json({ message: "Welcome to RestroHub API" });
});

app.use("/api", routes);

export default app;