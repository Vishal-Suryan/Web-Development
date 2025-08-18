const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { restrictToLoggedInUserOnly, checkAuth } = require("./middlewares/auth");
const connectToMongoDB = require("./connect");
const URL = require("./models/url");
const app = express();
const PORT = 8000;
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("MongoDB Connected")
);
const userRoute = require("./routes/user");
app.set("view engine", "ejs");
//app.set("views", path.resolve("./views"));
app.set("views", path.resolve(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.get("/test", async (req, res) => {
//   const allUrls = await URL.find({});
//   return res.render("home", {
//     urls: allUrls,
//   });
// });
app.use("/url", restrictToLoggedInUserOnly, urlRoute);
app.use("/", checkAuth, staticRoute);
app.use("/user", userRoute);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitedHistory: { timestamp: Date.now() },
      },
    }
  );
  if (!entry) {
    return res.status(404).json({ error: "Short url not found" });
  }
  res.redirect(entry.redirectURL);
});
app.listen(PORT, () => console.log("Server Started"));
