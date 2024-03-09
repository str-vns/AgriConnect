const { default: mongoose } = require("mongoose");
const sendEmail = require("../utility/sendEmail");

const otpSchema = new mongoose.Schema({
   email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5, 
  },
  
});

module.exports = mongoose.model("OTP", otpSchema);