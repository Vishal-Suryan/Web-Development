require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("database connected successfully"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

//create user model
const User = mongoose.model("User", userSchema);

async function runQueryExample() {
  try {
    //create a new model - Method 1

    // const newUser = await User.create({
    //   name: "Bot1",
    //   email: "abc@gmail.com",
    //   age: "23",
    //   isActive: true,
    //   tags: ["developer", "gamer"],
    // });
    // console.log("Created new user", newUser);

    //method - 2

    // const newUser1 = new User({
    //   name: "Bot2",
    //   email: "xyz@gmail.com",
    //   age: "23",
    //   isActive: true,
    //   tags: ["developer", "gamer"],
    // });
    // await newUser1.save();

    //fetch all users

    // const allUsers = await User.find({});
    // console.log(allUsers);

    //fetch by specific attribute

    // const getUserOfActiveFalse = await User.find({ isActive: false });
    // console.log(getUserOfActiveFalse);

    //fetches the first record which matches the criteria

    // const getUser = await User.findOne({ name: "Bot2" });
    // console.log(getUser);

    // fetch user by ID

    // const getLastCreatedUserById = await User.findById(newUser._id);
    // console.log(getLastCreatedUserById);

    // get only few fields

    // const selectedFields = await User.find().select("name email -_id");
    // console.log(selectedFields);

    // limit records and to skip one

    // const limitUsers = await User.find().limit(5).skip(1);
    // console.log(limitUsers);

    // to sort users

    // const sortedUsers = await User.find().sort({ age: -1 });
    // console.log(sortedUsers);

    // count no. of documents

    // const countDocuments = await User.countDocuments({ isActive: false });
    // console.log(countDocuments);

    // to delete a user
    // const deletedUser = await User.findByIdAndDelete(
    //   "69e7c7a693e3aaa4c1647cd5",
    // );
    // console.log(deletedUser);

    //to update a user
    const updateUser = await User.findByIdAndUpdate(
      "69e7c3bf77922dea6b9e6e1e",
      { $set: { age: 100 }, $push: { tags: "updated" } },
      { new: true },
    );
    console.log(updateUser);
  } catch (e) {
    console.log("Error ->", e);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExample();
