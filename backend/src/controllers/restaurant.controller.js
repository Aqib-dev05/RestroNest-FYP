import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

const getSettings = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Restaurant settings fetched"));
};

const updateSettings = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Restaurant settings updated"));
};

export { getSettings, updateSettings };
