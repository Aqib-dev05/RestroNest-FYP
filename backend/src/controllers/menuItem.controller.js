import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export async function listItems(req, res) {
  return new ApiResponse(200, "Menu items fetched", []).send(res);
}

export async function createItem(req, res) {
  return new ApiResponse(201, "Menu item created", null).send(res);
}

export async function updateItem(req, res) {
  return new ApiResponse(200, "Menu item updated", null).send(res);
}

export async function deleteItem(req, res) {
  return new ApiResponse(200, "Menu item deleted", null).send(res);
}

export async function toggleStock(req, res) {
  return new ApiResponse(200, "Stock status toggled", null).send(res);
}

