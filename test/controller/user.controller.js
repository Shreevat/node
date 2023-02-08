const User = require("../model/user.model");

class UserController {
  register(req, res, next) {
    res.status(204).json({
      msg: "success",
    });
  }
}

module.exports = UserController;
