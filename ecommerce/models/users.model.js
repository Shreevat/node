const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    ward: {
      type: Number,
    },
    district: {
      type: String,  
    },
  });

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String, //Number, ObjectId, null, data
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      tempAddress: AddressSchema,
      permanentAddress: AddressSchema,
    },
    role: {
      type: String,
      enum: ["admin", "seller", "customer"],
      default: "customer",
    },
    status:{

    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
