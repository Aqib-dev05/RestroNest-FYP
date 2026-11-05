import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";

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
