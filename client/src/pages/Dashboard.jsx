import React from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import BookingForm from '../components/booking/BookingForm';
import InventoryList from '../components/inventory/InventoryList';
import StatusTracker from '../components/maintenance/StatusTracker';
import NotificationPanel from '../components/notifications/NotificationPanel';
import Charts from '../components/analytics/Charts';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header />
            <Sidebar />
            <main>
                <h1>Dashboard</h1>
                <BookingForm />
                <InventoryList />
                <StatusTracker />
                <NotificationPanel />
                <Charts />
            </main>
        </div>
    );
};

export default Dashboard;