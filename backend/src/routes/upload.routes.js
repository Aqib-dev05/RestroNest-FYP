import { Router } from "express";
import {
  uploadImage,
  getUploadSignature,
} from "../controllers/upload.controller.js";
import { upload } from "../middleware/multer.js";

const router = Router();

router
  .post("/image", upload.single("image"), uploadImage)
  .post("/sign", getUploadSignature);

export default router;
