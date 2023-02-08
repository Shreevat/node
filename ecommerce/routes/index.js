var express = require("express");
var router = express.Router();

const UserRoute = require("./users");
const authRoute = require("./auth");

router.use("/user", UserRoute);
router.use("/auth",authRoute);
module.exports = router;
