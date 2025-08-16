const express = require("express");
const { connectMongoDb } = require("./connection");

const { logRequestResponse } = require("./middlewares");

const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

connectMongoDb("mongodb://127.0.0.1:27017/practice").then(() =>
  console.log("MongoDb Connected")
);

app.use(express.urlencoded({ extended: false }));
app.use(logRequestResponse("log.txt"));

app.use("/api/users", userRouter);
app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
