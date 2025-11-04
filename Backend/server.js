import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Database connection
import connectDB from './Database/connect.js';

// Routers
import authRouter from './Routers/auth.routes.js';
import profileRouter from './Routers/profile.routes.js';
import hospitalRouter from './Routers/hospital.routes.js';
import userRouter from './Routers/user.routes.js';
import doctorRouter from './Routers/doctor.routes.js';

// NEW: Import patient router
import patientRouter from './Routers/patient.routes.js';

// Load environment variables from .env file
dotenv.config({ path: '../.env' });

// Define the port for the server
const port = process.env.PORT || '8000';

const app = express();

// Initialize middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser()); // Parse cookies from requests

// Define API routes
app.use('/api/auth', authRouter); // Authentication routes
app.use('/api/profile', profileRouter); // User profile routes
app.use('/api/hospital', hospitalRouter); // Hospital management routes
app.use('/api/user', userRouter); // User management routes
app.use('/api/doctor', doctorRouter); // Doctor management routes

// NEW: Use patient router
app.use('/api/patient', patientRouter); // Patient management routes

// Basic health check endpoint
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server and connect to database
app.listen(port, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${port}`);
});
