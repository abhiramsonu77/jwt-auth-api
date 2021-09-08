const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
    {
    id: {
        type : Number,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    }
    });

const items = new mongoose.model('items', itemSchema);
module.exports = items;