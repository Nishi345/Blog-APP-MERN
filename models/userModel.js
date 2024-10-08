const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is requied"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is requied"],
    },
    password: {
      type: String,
      required: [true, "password is requied"],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
