const mongoose = require("mongoose");
const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("BlogPost", blogPostSchema);
