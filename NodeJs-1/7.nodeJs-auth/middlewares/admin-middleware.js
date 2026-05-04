const isAdminUser = (req, res, next) => {
  if (req.userInfo.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied! Admin rights required.",
    });
    next();
  }
  return res.status(200).json({
    success: true,
    message: "Admin logged in successfully.",
  });
};

module.exports = isAdminUser;
