const mongoose = require("mongoose");
// defining schema
const diseaseSchema = new mongoose.Schema({
  name: { type: String },
  url: { type: String },
  symptoms: { type: String },
  cure: { type: String },
});
// creating model
const diseasecreater = new mongoose.model("diseaselists", diseaseSchema);
module.exports = diseasecreater;
