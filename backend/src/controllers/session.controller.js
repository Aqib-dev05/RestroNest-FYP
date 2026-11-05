import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export async function listSessions(req, res) {
  return new ApiResponse(200, "Sessions fetched", []).send(res);
}

export async function getBill(req, res) {
  return new ApiResponse(200, "Bill fetched", null).send(res);
}

export async function paySession(req, res) {
  return new ApiResponse(200, "Session paid", null).send(res);
}

export async function downloadReceipt(req, res) {
  return new ApiResponse(200, "Receipt generated", null).send(res);
}

