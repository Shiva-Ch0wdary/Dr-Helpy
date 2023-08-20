const mongoose = require("mongoose");
// defining schema
const reviewSchema = new mongoose.Schema({
  productid: { type: String },
  name: { type: String },
  rating: { type: Number },
  description: { type: String },
});
// creating model
const reviewcreater = new mongoose.model("reviews", reviewSchema);
module.exports = reviewcreater;
