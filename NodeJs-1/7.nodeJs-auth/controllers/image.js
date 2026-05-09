const { uploadToCloudinary } = require("../helpers/cloudinaryHelper");
const Image = require("../models/Image");
const fs = require("fs");

const uploadImage = async (req, res) => {
  try {
    //check if file is missing in req Object
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "File is required. Please uplaod an image.",
      });
    }
    //uplaod to cloudinary
    const { url, publicId } = await uploadToCloudinary(req.file.path);

    //store image url and public id in DB
    const newImage = new Image({
      url,
      publicId,
      uploadedBy: req.userInfo.userId,
    });
    await newImage.save();

    //delete the file from local storage
    // fs.unlinkSync(req.file.path);

    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      image: newImage,
    });
  } catch (error) {
    console.log("error");
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const fetchImagesController = async (req, res) => {
  try {
    const images = await Image.find({});
    if (images) {
      res.status(200).json({
        success: true,
        data: images,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again",
    });
  }
};

module.exports = { uploadImage, fetchImagesController };
