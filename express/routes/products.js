const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({ name: "I am product", method: "get" });
});
router.post("/", (req, res, next) => {
  console.log("req.body", req.body);
  res.json({ method: "post", data: req.body });
});
router.get("/:id", (req, res, next) => {
  res.json({ name: "I am product", method: "get", data: req.params.id });
});

module.exports = router;
