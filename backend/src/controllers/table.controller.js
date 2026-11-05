import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";

const listTables = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, [], "Tables fetched"));
};

const getTable = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, null, "Table fetched"));
};

const createTable = async (req, res) => {
  return res.status(201).json(new ApiResponse(201, null, "Table created"));
};

const updateTable = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, null, "Table updated"));
};

const deleteTable = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, null, "Table deleted"));
};

const downloadQrPdf = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, null, "QR PDF generated"));
};

const getTableQr = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, null, "Table QR fetched"));
};

const regenerateToken = async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Table token regenerated"));
};

export {
  listTables,
  getTable,
  createTable,
  updateTable,
  deleteTable,
  downloadQrPdf,
  getTableQr,
  regenerateToken,
};
