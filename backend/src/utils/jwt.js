import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secure-kro-account-ko";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

function generateToken(user) {
  if (!user || !user._id) {
    throw new Error("Valid user with _id is required to generate token");
  }

  const payload = {
    id: user.id,
    role: user.role,
    email: user.email,
  };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

export { generateToken, verifyToken };
