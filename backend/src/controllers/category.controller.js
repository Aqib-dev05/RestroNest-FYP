import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export async function listCategories(req, res) {
  return new ApiResponse(200, "Categories fetched", []).send(res);
}

export async function createCategory(req, res) {
  return new ApiResponse(201, "Category created", null).send(res);
}

export async function updateCategory(req, res) {
  return new ApiResponse(200, "Category updated", null).send(res);
}

export async function deleteCategory(req, res) {
  return new ApiResponse(200, "Category deleted", null).send(res);
}

