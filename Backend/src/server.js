const express = require('express'); // Import express
const dotenv = require('dotenv'); // Import dotenv to manage environment variables

dotenv.config(); // Load environment variables from .env file
const app = express(); // Initialize express app
const port = process.env.PORT || 5000; // Use the PORT from .env or default to 5000

// Route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello from the backend server!'); // Send a response
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log when server is running
});

