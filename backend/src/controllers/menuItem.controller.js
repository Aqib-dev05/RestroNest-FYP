import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";

const listItems = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, [], "Menu items fetched"));
};

const getItem = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, null, "Menu item fetched"));
};

const createItem = async (req, res) => {
  return res.status(201).json(new ApiResponse(201, null, "Menu item created"));
};

const updateItem = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, null, "Menu item updated"));
};

const deleteItem = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, null, "Menu item deleted"));
};

const toggleStock = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Stock status toggled"));
};

export { listItems, getItem, createItem, updateItem, deleteItem, toggleStock };
