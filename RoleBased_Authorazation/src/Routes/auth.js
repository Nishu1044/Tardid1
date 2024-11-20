const express = require("express")
const postData = require("../Controllers/auth.controller")

const AuthRouter = express.Router()

AuthRouter.post("/user",postData)

module.exports = AuthRouter