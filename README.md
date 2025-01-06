# Server Health Monitoring - Frontend

This is the frontend for the **Server Health Monitoring** application, developed using **React**. The frontend connects to the **Spring Boot** backend to fetch the server health status and display it to the user.

## Features

- Display the server health status in real-time.
- Connect to the Spring Boot backend to retrieve the health status through the `/actuator/health` endpoint.
- Error handling when the server health status cannot be retrieved.

## Technologies

- **React**: for building the user interface.
- **Axios**: for making HTTP requests to the backend.
- **CSS**: for basic styling.

## Requirements

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone the frontend repository**:

   ```bash
   git clone https://github.com/your-username/server-health-monitoring-frontend.git
   cd server-health-monitoring-frontend

    Install the dependencies:

npm install

Run the application:

    npm start

    The React application will be available at http://localhost:3000 and will connect to the Spring Boot backend at http://localhost:8080 (ensure the backend is running).

Configuration

The frontend connects to the backend at http://localhost:8080/actuator/health to fetch the server health status. If your backend is running on a different port, be sure to update the URL in the HealthStatus component located at src/components/HealthStatus.js.

axios.get('http://localhost:8080/actuator/health')

Testing

You can test the application by following these steps:

    Start the Spring Boot backend (ensure it's running at http://localhost:8080).
    Start the React frontend using npm start.
    Go to http://localhost:3000 in your browser to view the server health status.

Contributing

If you'd like to contribute to the project, feel free to open a pull request. Any improvements, bug fixes, or new features are appreciated.
License

Distributed under the MIT License. See the LICENSE file for more details.


### Project Structure

Your React project structure should look like this:

server-health-monitoring-frontend/ ├── public/ ├── src/ │ ├── components/ │ │ └── HealthStatus.js │ ├── App.js │ ├── index.js ├── package.json └── README.md


### Creating React Components

#### 1. **HealthStatus Component**

Create a new component `HealthStatus.js` inside `src/components/` to fetch and display the server's health status.

```javascript
// src/components/HealthStatus.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HealthStatus = () => {
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch the health status from the backend
    axios.get('http://localhost:8080/actuator/health')
      .then((response) => {
        if (response.data.status === 'UP') {
          setStatus('Server is UP and running!');
        } else {
          setStatus('Server is DOWN!');
        }
      })
      .catch((err) => {
        setError('Error retrieving health status');
        console.error(err);
      });
  }, []);

  return (
    <div className="health-status">
      <h2>Server Health Status</h2>
      {error && <p>{error}</p>}
      {status && <p>{status}</p>}
    </div>
  );
};

export default HealthStatus;

2. Modify App.js to include HealthStatus

Update the App.js file to render the HealthStatus component:

// src/App.js
import React from 'react';
import './App.css';
import HealthStatus from './components/HealthStatus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Server Health Monitoring</h1>
      </header>
      <main>
        <HealthStatus />
      </main>
    </div>
  );
}

export default App;

Running the Frontend

    Install dependencies:

    After cloning the repository and navigating into the project directory, run:

npm install

Start the application:

To run the React frontend:

    npm start

This will start the React app on http://localhost:3000, and it will connect to the Spring Boot backend at http://localhost:8080.
Additional Features and Future Enhancements

The frontend can be extended to include the following features:

    Real-time graphs: Monitor CPU, memory, and system load.
    Authentication: Add authentication and authorization for secure access to the health endpoints.
    Error notifications: Notify users in case of server downtime or other issues.
