import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

const listPlans = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, [], "Plans fetched"));
};

const getPlan = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Plan fetched"));
};

export { listPlans, getPlan };
