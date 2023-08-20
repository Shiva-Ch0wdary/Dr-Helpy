const mongoose = require("mongoose");
// defining schema
const otpSchema = new mongoose.Schema({
  otpno: { type: String, require: true },
  etime: { type: String, require: true },
});
// creating model
const otpcreater = new mongoose.model("otps", otpSchema);

module.exports = otpcreater;
