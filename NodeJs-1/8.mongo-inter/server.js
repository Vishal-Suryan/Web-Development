require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoute");
const bookRoutes = require("./routes/bookRoute");

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((e) => console.log(e));

app.use(express.json());

app.use("/products", productRoutes);
app.use("/book", bookRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port ${process.env.PORT}`);
});
