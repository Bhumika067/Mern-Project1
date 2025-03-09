import User from "../models/User.js";

export const authenticateUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.headers.userid);
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid request" });
  }
};
