const mongoose = require("mongoose");
// defining schema
const userSchema = new mongoose.Schema({
  fname: { type: String, require: true },
  lname: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  phno: { type: String, require: true },
  password: { type: String, require: true },
  allow: { type: Boolean, default: true, require: true },
  admin: { type: Boolean, default: false },
});
// creating model
const creater = new mongoose.model("users", userSchema);

module.exports = creater;
