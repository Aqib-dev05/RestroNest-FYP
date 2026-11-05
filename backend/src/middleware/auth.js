import verifyToken from "../utils/jwt.js";
import ApiError from "../utils/apiError.js";

export const auth = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    throw new ApiError(401, "No token provided. Please log in.");
  }

  let payload;
  try {
    payload = verifyToken(token);
  } catch {
    throw new ApiError(401, "Invalid or expired token.");
  }

  req.user = payload; // { id, restaurantId, role, type }
  next();
};
