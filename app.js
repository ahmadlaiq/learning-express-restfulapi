const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const CategoriesRouter = require('./routes/catagories');
const morgan = require('morgan');

dotenv.config();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(morgan('dev')); // Logging middleware
app.use(cors()); // Enable CORS

// Routing
app.use('/api/v1/categories', CategoriesRouter);

// Server
const port = process.env.PORT || 3000; // Use port from environment variable or default to 3000
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});