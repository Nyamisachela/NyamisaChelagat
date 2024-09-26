const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');
require('dotenv').config();

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Connect to the database
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', projectRoutes);

// Listen to a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
