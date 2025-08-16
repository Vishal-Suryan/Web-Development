const User = require("../models/user");

// Example: GET /users
async function handleGetAllUsers(req, res) {
  try {
    const allDbUsers = await User.find({});
    return res.status(200).json(allDbUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res
      .status(500)
      .json({ message: "Server error while fetching users" });
  }
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "user not found" });
  return res.json(user);
}
async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
  return res.json({ status: "success" });
}
async function handleDeleteUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id);
  return res.json({ status: "success" });
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    console.log(body);
    return res
      .status(400)
      .json({ msg: "All Required fields are required...." });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    jobTitle: body.job_title,
    gender: body.gender,
  });
  console.log(result);
  return res.status(201).json({ msg: "success", id: result._id });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
