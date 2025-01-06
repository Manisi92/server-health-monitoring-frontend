import React, { useEffect, useState } from 'react';
import { getServers, getMetrics } from '../api';
import MetricChart from './MetricChart';
import { connectWebSocket } from '../api';

const Dashboard = () => {
    const [servers, setServers] = useState([]);
    const [metrics, setMetrics] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const serversResponse = await getServers();
                const metricsResponse = await getMetrics();
                setServers(serversResponse.data);
                setMetrics(metricsResponse.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        fetchData();
        
        connectWebSocket((newMetric) => {
            setMetrics((prevMetrics) => [...prevMetrics, newMetric]);
        });
    }, []);

    return (
        <div>
            <h1>Server Health Monitoring</h1>
            <h2>Servers List</h2>
            <ul>
                {servers.map(server => (
                    <li key={server.id}>
                        {server.name} - {server.status}
                    </li>
                ))}
            </ul>

            <h2>Metrics</h2>
            <MetricChart metrics={metrics} />
        </div>
    );
};

export default Dashboard;