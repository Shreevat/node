const bcrypt = require("bcrypt");
const User = require("../models/users.model");

const salt = 10;

class UserController {
  register(req, res, next) {
    const payload = req.body;
    const user = new User(payload);
    bcrypt.hash(payload.password, salt, (err,hash) => 
    {
       user.password=hash;
       user
      .save()
      .then((data) => {
        res.json({
          msg: "user saved successfully",
          user: data,
        });
      })
      .catch((err) => {
        res.json({
          msg: "Something went wrong",
          err
        });
      });
    });
  }
  
}

module.exports = UserController;
