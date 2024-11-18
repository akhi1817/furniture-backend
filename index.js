const express = require('express');
const connectDB = require('./config/db.js');
const cors = require('cors');
const productRouter = require('./routes/products.js');

const app = express();

// Use Railway-assigned port or default to 8000
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// Routes
app.get('/', (req, res) => {
    res.status(200).send('Hello from home route');
});

app.use('/products', productRouter);

// Handle undefined routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong on the server!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});
