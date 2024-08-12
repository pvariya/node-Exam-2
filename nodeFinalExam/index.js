const express = require("express");
const dbConnect = require("./config/db");
const userRouter = require("./routes/user.routes");
const blogrouter = require("./routes/blog.routes");

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World!")
});

app.use("/user", userRouter)

app.use("/blog",blogrouter)

app.listen(9080, () => {
  console.log("Server is running on port 9009!")
  dbConnect()
})
