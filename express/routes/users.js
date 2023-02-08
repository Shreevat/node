var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/login/", function (req, res, next) {
  res.send({ data: req.query.username });
});
router.get("/login/:username", function (req, res, next) {
  res.send({ data: req.params.username });
});
router.post("/login", function (req, res, next) {
  const email = "bks@gmail.com";
  const password = "ram";
  if (req.body.email === email && req.body.password === password) {
    res.send({ message: "Login Successful" });
  } else {
    res.send({ message: "Login fail" });
  }
});

module.exports = router;
