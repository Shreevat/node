const router = require('express').Router();

const  userController = require("../controllers/userController");

const UserController = new userController();

router.post("/register", UserController.register);


module.exports = router;
