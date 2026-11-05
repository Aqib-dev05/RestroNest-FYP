import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";

const getSummary = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, null, "Summary fetched"));
};

const getBestSellers = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, [], "Best sellers fetched"));
};

const getPeakHours = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, [], "Peak hours fetched"));
};

const getPaymentSplit = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Payment split fetched"));
};

export { getSummary, getBestSellers, getPeakHours, getPaymentSplit };
