import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';

const Charts = () => {

    const data = useMemo(() => ({
        labels: ['Room A', 'Room B', 'Room C', 'Room D'],
        datasets: [
            {
                label: 'Room Usage',
                data: [12, 19, 3, 5],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    }), []);

    const options = useMemo(() => ({
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
        },
    }), []);

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <h2>Room Usage Analytics</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Charts;
