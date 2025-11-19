const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
    issueDescription: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['WiFi', 'Electrical', 'Plumbing', 'Other'],
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Resolved'],
        default: 'Pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

maintenanceSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Maintenance = mongoose.model('Maintenance', maintenanceSchema);

module.exports = Maintenance;