import React from 'react';

const NotificationPanel = () => {
    const notifications = [
        { id: 1, message: 'Booking confirmed for Room 101', timestamp: '2023-10-01 10:00 AM' },
        { id: 2, message: 'Maintenance request for WiFi issue has been resolved', timestamp: '2023-10-01 09:30 AM' },
        { id: 3, message: 'New inventory item added: Projector', timestamp: '2023-10-01 09:00 AM' },
    ];

    return (
        <div className="notification-panel">
            <h2>Notifications</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>
                        <p>{notification.message}</p>
                        <small>{notification.timestamp}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationPanel;