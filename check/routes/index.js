
const express = require("express");

const router = express.Router();
 
const userData = require("./users")

router.use("/user", userData)

module.exports = router
