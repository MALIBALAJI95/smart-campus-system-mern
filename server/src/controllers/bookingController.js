const Booking = require('../models/Booking');

// Create a new booking
exports.createBooking = async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        return res.status(201).send(booking);
    } catch (error) {
        return res.status(400).send(error);
    }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        return res.status(200).send(bookings);
    } catch (error) {
        return res.status(500).send(error);
    }
};

// Get a booking by ID
exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).send();
        }

        return res.status(200).send(booking);
    } catch (error) {
        return res.status(500).send(error);
    }
};

// Update a booking by ID
exports.updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!booking) {
            return res.status(404).send();
        }

        return res.status(200).send(booking);
    } catch (error) {
        return res.status(400).send(error);
    }
};

// Delete a booking by ID
exports.deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);

        if (!booking) {
            return res.status(404).send();
        }

        return res.status(200).send(booking);
    } catch (error) {
        return res.status(500).send(error);
    }
};
