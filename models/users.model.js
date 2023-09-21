const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: String,
    mobileNo: Number,
    address1: String,
    address2: String,
    state:String,
    city:String,
    country:String,
    zipCode:Number,
  }, {
    timestamps: true,
  });
  
  const Users = mongoose.model('Users', userSchema);
  
  module.exports = { Users };
  