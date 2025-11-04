import express from 'express';
const router = express.Router();

// Controller functions for patient operations (you'll implement these)
import {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from '../Controllers/patient.controller.js';

// Routes for patients

// Create a new patient
router.post('/', createPatient);

// Get all patients
router.get('/', getPatients);

// Get a single patient by ID
router.get('/:id', getPatientById);

// Update a patient by ID
router.put('/:id', updatePatient);

// Delete a patient by ID
router.delete('/:id', deletePatient);

export default router;
