import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";
import {
  uploadOnCloudinary,
  generateUploadSignature,
} from "../utils/cloudinary.js";

const uploadImage = async (req, res) => {
  if (!req.file) {
    throw new ApiError(400, "Please provide an image file");
  }

  const result = await uploadOnCloudinary(req.file.path, "restronest");

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        url: result.secure_url,
        publicId: result.public_id,
      },
      "Image uploaded successfully"
    )
  );
};

const getUploadSignature = async (req, res) => {
  const data = await generateUploadSignature("restronest");
  return res
    .status(200)
    .json(new ApiResponse(200, data, "Upload signature generated successfully"));
};

export { uploadImage, getUploadSignature };
