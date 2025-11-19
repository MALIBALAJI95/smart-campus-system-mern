import React from 'react';
import { Bar } from 'react-chartjs-2';

const Charts = () => {
    const data = {
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
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Room Usage Analytics</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Charts;