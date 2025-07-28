const express = require("express");
const fs = require("fs");
const app = express();
const users = require("./fake_users_1_to_50.json");
const PORT = 5000;
const { connectionMongoDB } = require("./views/connection.js");
const { type } = require("os");
const userRouter = require("./routes/userRouter.js");
const logReqRes = require("./middlewares/index.js");
// mongoose.Connection
connectionMongoDB();

//middleware its is worked as a pluge in that come data from the fronted in the form format it insert into the body
// Middleware to parse URL-encoded body
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter);

app.use(logReqRes);
app.listen(PORT, () => {
  console.log("Server is Running...");
});

// Controller -> Model -> View

// connectDB -> view -> MiddleWare -> Routes -> controller -> model
