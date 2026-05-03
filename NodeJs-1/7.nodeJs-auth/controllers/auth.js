const User = require("../models/User");
const bcrypt = require("bcrypt");
//register controller
const registerUser = async (req, res) => {
  try {
    //extarct user information coming from form
    const { username, email, password, role } = req.body;
    // check if the user already exsists in DB or not
    const checkExsistingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (checkExsistingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exsists with same username or email",
      });
    }
    //hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //create a new user and save in DB
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
    });
    await newUser.save();
    if (newUser) {
      res.status(201).json({
        success: true,
        message: "User registered successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Unable to register User",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Register Failed, please try again",
    });
  }
};
//login controller
const loginUser = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Register Failed, please try again",
    });
  }
};

module.exports = { registerUser, loginUser };
