import { Router } from "express";
import { getUploadSignature } from "../controllers/upload.controller.js";

const router = Router();

router.post("/sign", getUploadSignature);

export default router;

