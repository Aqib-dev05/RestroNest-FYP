// middleware/requireRole.js
// Use AFTER auth middleware. Pass one or more allowed roles.
// Example: router.patch('/settings', auth, requireRole('OWNER'), updateSettings)

import ApiError from "../utils/apiError.js";

export const requireRole =
  (...roles) =>
  (req, res, next) => {
    if (req.user?.type === "admin") {
      throw new ApiError(403, "Super admin cannot access staff routes.");
    }
    if (!roles.includes(req.user?.role)) {
      throw new ApiError(403, "You do not have permission to do this.");
    }
    next();
  };
