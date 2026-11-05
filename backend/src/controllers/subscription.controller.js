import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export async function listPlans(req, res) {
  return new ApiResponse(200, "Plans fetched", []).send(res);
}

