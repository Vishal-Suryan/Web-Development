const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exsist",
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "invalid username or password",
      });
    }
    //create a user token
    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15m",
      },
    );
    res.status(200).json({
      success: true,
      message: "Login Successful",
      accessToken,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Login Failed, please try again",
    });
  }
};

module.exports = { registerUser, loginUser };
