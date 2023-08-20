const mongoose = require('mongoose');
// defining schema
const diseaseSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: String },
    desc: { type: String },
    uses: { type: String },
    img: { type: String },
    rating: { type: String }
});
// creating model
const productcreater = new mongoose.model("products", diseaseSchema);
module.exports = productcreater;