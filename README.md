# Backend Server for Slidely Forms App

This is the backend server for the Slidely Forms App, built with Express.js and TypeScript. It handles form submissions and retrieves saved submissions.

## Features

- Ping endpoint --> to check if the server is running and able to respond to requests. When you send a GET request to this endpoint, it returns a simple response (true) to indicate that the server is up and running.
- Submit endpoint --> to save new submissions (when return status will be 201, it will send "Submission saved")
- Read endpoint --> to retrieve submissions by index (if indices runs out of bound it will throw 404 status and send "Submission not found") 

## Technologies Used

- Express.js
- TypeScript
- Node.js
- JSON for data storage

## Setup

### Prerequisites

- Node.js (version 20.13.1)
- npm (version 10.5.2)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/backend-server.git
   cd express-ts-backend

2. Install dependencies
    npm install

3. Starting server
    npm test

## API Endpoints
 1. Ping
    URL: /ping
    Method: GET
    Response: true

 2. Submit
    URL: /submit
    Method: POST
    Parameters: name, email, phone, github_link, stopwatch_time
    Response: Success or error message
 3. Read
    URL: /read
    Method: GET
    Query Parameters: index
    Response: Submission data or error message

    
## JSON Data Structure
   The data is stored in a db.json file with the following structure:

   {
  "submissions": [
    {
     "name": "Reena",
     "email": "reena@mail.com",
     "phone": "9876543210",
     "github_link": "https://github.com/reena",
     "stopwatch_time": "00:02:23"
     }
   ]
}

## Contributing
   Fork the repository
   Create a new branch (git checkout -b feature-branch)
   Commit your changes (git commit -am 'Add some feature')
   Push to the branch (git push origin feature-branch)
   Create a new Pull Request
