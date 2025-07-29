const express = require("express");
const { connectDB } = require("./connect");
const urlRouter = require("./routers/urlRouter");
const URL = require("./models/url.model");
const path = require("path");
const app = express();
const PORT = 5000;

const staticRouter = require("./routers/staticRouter");

const url = "mongodb://127.0.0.1:27017/short-url";
connectDB(url);


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRouter);
app.use("/", staticRouter);

app.get("/test", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitedHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log("Server is start at PORT : ", PORT);
});
