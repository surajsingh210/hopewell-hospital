import jwt from 'jsonwebtoken';
import DoctorModel from '../Models/doctor.model.js';

/**
 * Middleware to protect routes for authenticated doctors.
 * Verifies JWT token from cookies, checks if the associated doctor exists,
 * and attaches the doctor to the request object.
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const doctorProtectRoute = async (req, res, next) => {
    try {
        // Extract JWT token from cookies
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" });
        }

        // Verify the JWT token
        const decodedToken = jwt.verify(token, process.env.JWT_Doct);
        
        // If token verification fails, decodedToken will be undefined
        if (!decodedToken) {
            return res.status(401).json({ message: "Invalid Token" });
        }

        // Find doctor associated with the token
        const doctor = await DoctorModel.findById(decodedToken.user);
        if (!doctor) {
            return res.status(401).json({ message: "No Doctor Found" });
        }

        // Attach doctor to request object for route handlers
        req.doctor = doctor;

        next();
    } catch (error) {
        // Handle server errors
        res.status(500).json({ message: "An error occurred in Doctor Protect Route" });
        console.error("Error in Doctor Protect Route:", error.message);
    }
};

export default doctorProtectRoute;
