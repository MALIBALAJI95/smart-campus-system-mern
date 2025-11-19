import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StatusTracker = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get('/api/maintenance/requests');
                setRequests(response.data);
            } catch (error) {
                console.error('Error fetching maintenance requests:', error);
            }
        };

        fetchRequests();
    }, []);

    return (
        <div>
            <h2>Maintenance Request Status Tracker</h2>
            <table>
                <thead>
                    <tr>
                        <th>Request ID</th>
                        <th>Issue</th>
                        <th>Status</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map(request => (
                        <tr key={request.id}>
                            <td>{request.id}</td>
                            <td>{request.issue}</td>
                            <td>{request.status}</td>
                            <td>{new Date(request.updatedAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StatusTracker;