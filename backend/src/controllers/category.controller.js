import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

const listCategories = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, [], "Categories fetched"));
};

const getCategory = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Category fetched"));
};

const createCategory = async (req, res) => {
  return res
    .status(201)
    .json(new ApiResponse(201, null, "Category created"));
};

const updateCategory = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Category updated"));
};

const deleteCategory = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Category deleted"));
};

export {
  listCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
