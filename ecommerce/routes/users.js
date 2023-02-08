const router = require("express").Router();
const UserController = require("../controllers/users.controller");

const userController = new UserController();

router.post("/register", userController.register);

module.exports = router;
