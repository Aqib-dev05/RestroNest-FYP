import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export async function registerRestaurant(req, res) {
  return new ApiResponse(201, "Restaurant registered successfully", null).send(res);
}

export async function login(req, res) {
  return new ApiResponse(200, "Login successful", null).send(res);
}

export async function adminLogin(req, res) {
  return new ApiResponse(200, "Admin login successful", null).send(res);
}

export async function getMe(req, res) {
  return new ApiResponse(200, "User fetched", null).send(res);
}

