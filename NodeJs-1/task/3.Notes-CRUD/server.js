require("dotenv").config();

const express = require("express");
const connectToDB = require("./database/db");
const noteRoutes = require("./routes/noteRoutes");
const loginRoutes = require("./routes/loginRoutes");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

const PORT = process.env.PORT || 3000;

connectToDB();

app.use(express.json());
app.use("/api/notes", authMiddleware, noteRoutes);
app.use("/api", loginRoutes);
app.use("/api", loginRoutes);

app.listen(PORT, () => {
  console.log(`Notes API Server started on PORT ${PORT}`);
});
