import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export async function getUploadSignature(req, res) {
  return new ApiResponse(200, "Upload signature generated", null).send(res);
}

