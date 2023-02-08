const mongoose = require("mongoose");
const mongoUrl = "mongodb://localhost:27017/test-db";

mongoose.connect(mongoUrl, (err) => {
  if (err) console.log("err >>", err);
  else console.log("Connected to DB");
});
