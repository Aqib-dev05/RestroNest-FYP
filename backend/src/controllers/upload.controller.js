import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";

const getUploadSignature = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Upload signature generated"));
};

export { getUploadSignature };
