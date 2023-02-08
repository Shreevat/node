
const data = require("../model/models");

class userController{
    register(req, res, next){
        const payload = req.body;
        const Data = new data(payload);
        Data.save();
        console.log("hya samma data aayo");
    }
}

module.exports = userController;