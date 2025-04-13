const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const postRoutes = require('./routes/posts');

// Load env variables
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/posts', postRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📡 API Endpoints:
    ➕ POST    /posts
    📥 GET     /posts
    📝 PUT     /posts/:id
    ❌ DELETE  /posts/:id`);
});
