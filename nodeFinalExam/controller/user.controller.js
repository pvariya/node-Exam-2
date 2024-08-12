const User = require("../models/user.models");

const getUsers = async (req, res) => {
  let users = await User.find(); 
  res.send(users);
}
const createUser = async (req, res) => {
  let { email } = req.body;

  let isUser = await User.findOne({ email: email });

  if (isUser) {
    return res.status(400).send({ message: "User already exists" });
  }

  let data = await User.create(req.body);

  // Combine the response data and success message in one call
  res.status(201).send({
    message: "User created successfully",
    user: data,
  });
};

const logggedInUser = async (req, res) => {
  let { email, password } = req.body;

  let isUser = await User.findOne({ email: email });

  if (!isUser) {
    return res.status(404).send({ message: "User not found" });
  }

  if (isUser.password !== password) {
    return res.status(401).send({ message: "Incorrect password" });
  }

  res.status(200).send({
    message: "User logged in successfully",
    user: isUser,
  });
};

module.exports = { createUser, logggedInUser,getUsers };
