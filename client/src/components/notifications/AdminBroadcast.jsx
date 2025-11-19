import React, { useState } from 'react';

const AdminBroadcast = () => {
    const [announcement, setAnnouncement] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleBroadcast = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/announcements', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: announcement }),
            });

            if (response.ok) {
                setSuccessMessage('Announcement broadcasted successfully!');
                setAnnouncement('');
            } else {
                throw new Error('Failed to broadcast announcement');
            }
        } catch (error) {
            console.error(error);
            setSuccessMessage('Error broadcasting announcement');
        }
    };

    return (
        <div>
            <h2>Broadcast Announcement</h2>
            <form onSubmit={handleBroadcast}>
                <textarea
                    value={announcement}
                    onChange={(e) => setAnnouncement(e.target.value)}
                    placeholder="Enter your announcement here"
                    required
                />
                <button type="submit">Broadcast</button>
            </form>
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
};

export default AdminBroadcast;