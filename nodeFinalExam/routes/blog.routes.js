const {Router} = require("express");
const {
 createBlog,
  getBlog,
  getBlogPostById,
  updateBlogById,
  deleteBlogById,
} = require("../controller/blog.controller");
const blogrouter =Router();

blogrouter.post("/", createBlog);
blogrouter.get("/", getBlog);
blogrouter.get("/:id", getBlogPostById);
blogrouter.patch("/:id", updateBlogById);
blogrouter.delete("/:id", deleteBlogById);

module.exports = blogrouter;
