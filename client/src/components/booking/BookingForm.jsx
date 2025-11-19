import React, { useState } from 'react';

const BookingForm = () => {
    const [eventName, setEventName] = useState('');
    const [participants, setParticipants] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="eventName">Event Name:</label>
                <input
                    type="text"
                    id="eventName"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="participants">Participants:</label>
                <input
                    type="text"
                    id="participants"
                    value={participants}
                    onChange={(e) => setParticipants(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="duration">Duration (hours):</label>
                <input
                    type="number"
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Book Room</button>
        </form>
    );
};

export default BookingForm;