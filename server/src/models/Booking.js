const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    participants: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true // duration in hours
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    qrCode: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;