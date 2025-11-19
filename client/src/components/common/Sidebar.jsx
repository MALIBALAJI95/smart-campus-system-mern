import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Smart Campus</h2>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/bookings">Room Bookings</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/maintenance">Maintenance Requests</Link></li>
                <li><Link to="/analytics">Analytics</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;