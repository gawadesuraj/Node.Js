const mongoose = require("mongoose");

const connectionMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/user_information");
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB is not Connected:", err.message);
  }
};

module.exports = {
  connectionMongoDB,
};
