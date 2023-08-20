const mongoose = require('mongoose');
// defining schema
const diseaseSchema = new mongoose.Schema({
    name: { type: String },
    image: { type: String },
    symptoms: { type: String },
    cure: { type: String }
});
// creating model
const diseasecreater = new mongoose.model("diseases", diseaseSchema);
module.exports = diseasecreater;