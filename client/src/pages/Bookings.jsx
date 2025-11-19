import React from 'react';
import Calendar from '../components/booking/Calendar';
import BookingForm from '../components/booking/BookingForm';
import QRGenerator from '../components/booking/QRGenerator';

const Bookings = () => {
    return (
        <div>
            <h1>Room Booking System</h1>
            <Calendar />
            <BookingForm />
            <QRGenerator />
        </div>
    );
};

export default Bookings;