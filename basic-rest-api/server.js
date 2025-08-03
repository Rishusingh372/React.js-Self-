// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Import user routes
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

// Root route handler
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Basic REST API!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
