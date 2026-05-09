const express = require("express");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const uploadMiddleware = require("../middlewares/upload-middleware");
const { uploadImage, fetchImagesController } = require("../controllers/image");
const router = express.Router();

//upload the image
router.post(
  "/upload",
  authMiddleware,
  adminMiddleware,
  uploadMiddleware.single("image"),
  uploadImage,
);

// get all the images
router.get("/get", authMiddleware, fetchImagesController);

module.exports = router;
