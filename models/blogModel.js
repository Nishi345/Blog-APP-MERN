const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required "],
    },
    descriptions: {
      type: String,
      required: [true, "descriptions is required"],
    },
    image: {
      type: String,
      required: [true, "image is require"],
    },
  },
  { timestamps: true }
);
const blogModel = mongoose.model("blog", blogSchema);
module.exports = blogModel;
