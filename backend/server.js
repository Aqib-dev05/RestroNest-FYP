import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";


// Server port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`RestroNest server running on port ${PORT}`);
});
