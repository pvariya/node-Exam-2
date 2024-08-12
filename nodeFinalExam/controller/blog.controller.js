const BlogPost = require("../models/blog.schema");

const createBlog = async (req, res) => {
  let data = await BlogPost.create(req.body);
  res.send(data);
};

const getBlog = async (req, res) => {
  let data = await BlogPost.find();
  res.send(data);
};

const getBlogById = async (req, res) => {
  let { id } = req.params;
  let data = await BlogPost.findById(id);
  res.send(data);
};

const updateBlogById = async (req, res) => {
  let { id } = req.params;
  let data = await BlogPost.findByIdAndUpdate(id,req.body);
  res.send(data);
};

const deleteBlogById = async (req, res) => {
  let { id } = req.params;
  let data = await BlogPost.findByIdAndDelete(id);
  res.send(data);
};

module.exports = { createBlog, getBlog, getBlogById, updateBlogById, deleteBlogById  };