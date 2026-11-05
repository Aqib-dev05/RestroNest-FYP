import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";

const listSessions = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, [], "Sessions fetched"));
};

const getSession = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, null, "Session fetched"));
};

const getBill = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, null, "Bill fetched"));
};

const paySession = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, null, "Session paid"));
};

const downloadReceipt = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, null, "Receipt generated"));
};

export { listSessions, getSession, getBill, paySession, downloadReceipt };
