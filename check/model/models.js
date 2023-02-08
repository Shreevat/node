
const mongoose = require("mongoose");

const SchemaHaru = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    information:{
        type: String,
    },
    event:{
        //type: String,
        dueDate:{
            type: Date,
            required: true,
        }
    },
    todaysProgress:{
        type: String,
    },
    
})

const data = mongoose.model("data", SchemaHaru);
module.exports = data;