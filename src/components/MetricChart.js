import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MetricChart = ({ metrics }) => {
    const data = {
        labels: metrics.map(metric => metric.timestamp),
        datasets: [
            {
                label: 'CPU Usage',
                data: metrics.map(metric => metric.value),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    return (
        <div>
            <Line data={data} />
        </div>
    );
};

export default MetricChart;