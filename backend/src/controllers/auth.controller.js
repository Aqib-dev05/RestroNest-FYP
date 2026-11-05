import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

const registerRestaurant = async (req, res) => {
  return res
    .status(201)
    .json(new ApiResponse(201, null, "Restaurant registered successfully"));
};

const login = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Login successful"));
};

const adminLogin = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Admin login successful"));
};

const logout = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Logout successful"));
};

const getMe = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "User fetched"));
};

export { registerRestaurant, login, adminLogin, logout, getMe };
