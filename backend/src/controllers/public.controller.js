import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export async function getMenuByQr(req, res) {
  return new ApiResponse(200, "Menu fetched", null).send(res);
}

export async function placeOrder(req, res) {
  return new ApiResponse(201, "Order placed", null).send(res);
}

export async function getMySession(req, res) {
  return new ApiResponse(200, "Session fetched", null).send(res);
}

