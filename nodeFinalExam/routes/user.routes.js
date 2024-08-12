const { Router } = require("express");
const { createUser,logggedInUser ,getUsers} = require("../controller/user.controller");
const userRouter = Router();


userRouter.get("/getUsers",getUsers)
userRouter.post("/singUp",createUser)
userRouter.post("/login",logggedInUser)


module.exports = userRouter;
