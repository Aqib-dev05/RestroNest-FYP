import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export async function listTables(req, res) {
  return new ApiResponse(200, "Tables fetched", []).send(res);
}

export async function createTable(req, res) {
  return new ApiResponse(201, "Table created", null).send(res);
}

export async function updateTable(req, res) {
  return new ApiResponse(200, "Table updated", null).send(res);
}

export async function deleteTable(req, res) {
  return new ApiResponse(200, "Table deleted", null).send(res);
}

export async function downloadQrPdf(req, res) {
  return new ApiResponse(200, "QR PDF generated", null).send(res);
}

export async function getTableQr(req, res) {
  return new ApiResponse(200, "Table QR fetched", null).send(res);
}

export async function regenerateToken(req, res) {
  return new ApiResponse(200, "Table token regenerated", null).send(res);
}

