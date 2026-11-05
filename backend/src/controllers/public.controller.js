import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

const getMenuByQr = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Menu fetched"));
};

const placeOrder = async (req, res) => {
  return res
    .status(201)
    .json(new ApiResponse(201, null, "Order placed"));
};

const getMySession = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Session fetched"));
};

export { getMenuByQr, placeOrder, getMySession };
