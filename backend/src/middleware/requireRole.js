// middleware/requireRole.js
// Use after auth middleware. Pass one or more allowed roles.
// Example: requireRole('OWNER', 'MANAGER')

import { ApiError } from "../utils/apiResponse.js";

export const requireRole = (...roles) => (req, res, next) => {
  if (req.user?.type === "admin") {
    // Super admin bypasses role checks (they have their own routes)
    throw new ApiError(403, "FORBIDDEN", "Super admin cannot access staff routes.");
  }
  if (!roles.includes(req.user?.role)) {
    throw new ApiError(403, "FORBIDDEN", "You do not have permission to do this.");
  }
  next();
};
