const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
    location: {
        type: String,
        required: true,
    },
    lowStockThreshold: {
        type: Number,
        default: 5,
    },
    requests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Request',
    }],
}, { timestamps: true });

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;