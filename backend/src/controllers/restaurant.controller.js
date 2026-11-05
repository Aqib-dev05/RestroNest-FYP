import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export async function getSettings(req, res) {
  return new ApiResponse(200, "Restaurant settings fetched", null).send(res);
}

export async function updateSettings(req, res) {
  return new ApiResponse(200, "Restaurant settings updated", null).send(res);
}

