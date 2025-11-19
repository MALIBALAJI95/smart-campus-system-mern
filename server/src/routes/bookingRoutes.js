const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Route to create a new booking
router.post('/', bookingController.createBooking);

// Route to get all bookings
router.get('/', bookingController.getAllBookings);

// Route to get a specific booking by ID
router.get('/:id', bookingController.getBookingById);

// Route to update a booking by ID
router.put('/:id', bookingController.updateBooking);

// Route to delete a booking by ID
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;