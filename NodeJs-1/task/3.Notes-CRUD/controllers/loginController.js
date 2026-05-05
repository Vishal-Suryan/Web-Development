const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const checkUserExsist = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (checkUserExsist) {
      return res.status(400).json({
        success: false,
        message: "User already exsists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
    });
    console.log(newUser);
    if (!newUser) {
      return res.status(400).json({
        success: false,
        message: "unable to signup, try again!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "User created successfully!",
      });
    }
  } catch (e) {
    console.log("Something went wrong, try again!");
    res.status(500).json({
      success: false,
      message: "Something went wrong, try again!",
    });
  }
};
const loginUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exsist",
      });
    }
    const passwordMatch = bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({
        success: false,
        message: "invalid username or password",
      });
    }
    const accessToken = jwt.sign(
      {
        userId: user._id,
        username,
        role,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "30m" },
    );
    res.status(200).json({
      success: true,
      message: "Login Successful",
      accessToken,
    });
  } catch (e) {
    console.log("Something went wrong, login failed, try again!");
    res.status(500).json({
      success: false,
      message: "Something went wrong, login failed, try again!",
    });
  }
};

module.exports = { signupUser, loginUser };
