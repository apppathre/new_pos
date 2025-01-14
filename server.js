import express from 'express';
// import { json } from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
import itemRoutes from './Routes/mst_item_routes.js';
// const jobRoutes = require('./');

// Initialize environment variables
config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/item', itemRoutes);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));