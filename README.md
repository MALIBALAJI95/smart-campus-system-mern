# Smart Campus Resource Management System

## Overview
The Smart Campus Resource Management System is a comprehensive application designed to streamline the management of campus resources, including room bookings, inventory tracking, maintenance requests, and user notifications. This system is built using a MERN stack (MongoDB, Express.js, React, Node.js) to ensure a robust and scalable solution.

## Features
- **Room Booking System**: Users can book rooms through a calendar interface, view real-time availability, and receive QR codes for access.
- **Inventory Tracker**: Manage and request inventory items with alerts for low stock.
- **Maintenance Requests**: Report and track maintenance issues with real-time status updates.
- **Announcements and Notifications**: Admins can broadcast messages and users receive updates on bookings and maintenance.
- **Data Analytics and Reports**: Visualize usage trends and generate downloadable reports.
- **User Roles and Permissions**: Role-based access for students, faculty, admins, and IT staff.

## Project Structure
```
smart-campus-system
├── client                # Frontend application
│   ├── src
│   ├── package.json
│   └── README.md
├── server                # Backend application
│   ├── src
│   ├── package.json
│   └── README.md
└── README.md             # Overall project documentation
```

## Getting Started
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the client and server directories and install dependencies:
   ```
   cd client
   npm install
   cd ../server
   npm install
   ```
3. Start the development servers:
   ```
   cd client
   npm start
   cd ../server
   npm run dev
   ```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.