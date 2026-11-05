import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export async function getSummary(req, res) {
  return new ApiResponse(200, "Summary fetched", null).send(res);
}

export async function getBestSellers(req, res) {
  return new ApiResponse(200, "Best sellers fetched", []).send(res);
}

export async function getPeakHours(req, res) {
  return new ApiResponse(200, "Peak hours fetched", []).send(res);
}

export async function getPaymentSplit(req, res) {
  return new ApiResponse(200, "Payment split fetched", null).send(res);
}

