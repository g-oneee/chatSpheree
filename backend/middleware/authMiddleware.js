const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel.js");
const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      req.user = await User.findById(decoded.id).select("-password");
      console.log(decoded);
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
  console.log(req.headers.authorization);
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
