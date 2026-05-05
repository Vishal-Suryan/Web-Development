const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (!token) {
    return res.status(404).json({
      success: false,
      message: "Login to access site",
    });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decodedToken);
    req.userInfo = decodedToken;
    next();
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Access Denied, try again",
    });
  }
};

module.exports = authMiddleware;
