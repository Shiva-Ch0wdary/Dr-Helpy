const mongoose = require('mongoose');
// defining schema
const orderSchema = new mongoose.Schema({
    email: { type: String },
    order: { type: String }
},{
    timestamps: { currentTime: ()=> Date.now() },
});
// creating model
const ordercreater = new mongoose.model("orders", orderSchema);
module.exports = ordercreater;