import React, { useState, useEffect } from 'react';
import IssueForm from '../components/maintenance/IssueForm';
import StatusTracker from '../components/maintenance/StatusTracker';
import { fetchMaintenanceRequests } from '../utils/api';

const Maintenance = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const getRequests = async () => {
            const data = await fetchMaintenanceRequests();
            setRequests(data);
        };
        getRequests();
    }, []);

    return (
        <div>
            <h1>Maintenance Requests</h1>
            <IssueForm />
            <StatusTracker requests={requests} />
        </div>
    );
};

export default Maintenance;