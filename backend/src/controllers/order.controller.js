import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";

const listOrders = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, [], "Orders fetched"));
};

const getOrder = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, null, "Order fetched"));
};

const updateOrderStatus = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Order status updated"));
};

export { listOrders, getOrder, updateOrderStatus };
