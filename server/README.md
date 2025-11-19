# Smart Campus Resource Management System - Server

This README file provides an overview of the server-side implementation of the Smart Campus Resource Management System.

## Project Structure

The server-side application is structured as follows:

```
server
├── src
│   ├── controllers       # Contains the logic for handling API requests
│   ├── models            # Defines the data models for MongoDB
│   ├── routes            # Defines the API routes
│   ├── middleware        # Contains middleware for authentication and role checking
│   ├── utils             # Utility functions for email and notifications
│   ├── config            # Configuration files (e.g., database connection)
│   └── app.js            # Main entry point for the server application
├── package.json          # Server dependencies and scripts
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the server directory:
   ```
   cd server
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Configuration

- Update the database configuration in `src/config/db.js` to connect to your MongoDB instance.

## Running the Server

To start the server, run the following command:
```
npm start
```

The server will run on the specified port (default is 5000).

## API Endpoints

The server exposes several API endpoints for managing room bookings, inventory, maintenance requests, and user authentication. Refer to the individual route files in `src/routes` for detailed information on each endpoint.

## License

This project is licensed under the MIT License.