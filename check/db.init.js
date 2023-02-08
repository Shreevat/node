
const mongoose = require("mongoose");

const urlDatabase = "mongodb://0.0.0.0:27017/sujalCheck"

mongoose.connect(urlDatabase, (err)=>{
    if(err){
        console.log("database ma bigriyo");
    }
    else{
        console.log("database vayo");
    }
})
