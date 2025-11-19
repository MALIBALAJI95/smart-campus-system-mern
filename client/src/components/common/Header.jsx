import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Smart Campus Resource Management System</h1>
            <nav>
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/bookings">Bookings</a></li>
                    <li><a href="/inventory">Inventory</a></li>
                    <li><a href="/maintenance">Maintenance</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;