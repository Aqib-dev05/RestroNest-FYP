// middleware/auth.js
// Verifies JWT from Authorization header. Attaches req.user.
// Works for both staff (type: 'staff') and super admin (type: 'admin').

import jwt from "jsonwebtoken";
import { ApiError } from "../utils/apiResponse.js";

export const auth = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    throw new ApiError(401, "UNAUTHORIZED", "No token provided.");
  }

  const token = header.slice(7);
  let payload;
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    throw new ApiError(401, "UNAUTHORIZED", "Invalid or expired token.");
  }

  req.user = payload; // { id, restaurantId, role, type }
  next();
};
