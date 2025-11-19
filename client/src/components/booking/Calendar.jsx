import React, { useState, useEffect } from 'react';
import { Calendar as AntCalendar } from 'antd';
import 'antd/dist/antd.css';

const Calendar = () => {
    const [availableDates, setAvailableDates] = useState([]);

    useEffect(() => {
        // Fetch available dates from the backend
        const fetchAvailableDates = async () => {
            try {
                const response = await fetch('/api/bookings/available-dates');
                const data = await response.json();
                setAvailableDates(data);
            } catch (error) {
                console.error('Error fetching available dates:', error);
            }
        };

        fetchAvailableDates();
    }, []);

    const dateCellRender = (value) => {
        const dateString = value.format('YYYY-MM-DD');
        const isAvailable = availableDates.includes(dateString);
        return (
            <div className={isAvailable ? 'available' : 'unavailable'}>
                {isAvailable ? 'Available' : 'Unavailable'}
            </div>
        );
    };

    return (
        <div>
            <h2>Room Booking Calendar</h2>
            <AntCalendar dateCellRender={dateCellRender} />
        </div>
    );
};

export default Calendar;