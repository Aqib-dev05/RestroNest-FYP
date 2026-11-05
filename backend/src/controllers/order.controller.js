import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export async function listOrders(req, res) {
  return new ApiResponse(200, "Orders fetched", []).send(res);
}

export async function getOrder(req, res) {
  return new ApiResponse(200, "Order fetched", null).send(res);
}

export async function updateOrderStatus(req, res) {
  return new ApiResponse(200, "Order status updated", null).send(res);
}

