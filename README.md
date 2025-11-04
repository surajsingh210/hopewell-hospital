HopeWell Hospital Management System

A comprehensive healthcare management platform that connects patients, doctors, and hospitals for seamless care coordination. Built with modern web technologies to streamline healthcare operations and improve patient care.

🏥 Overview

HopeWell Hospital is a full-stack web application designed to digitize and streamline healthcare management processes. The platform provides separate interfaces for patients, doctors, and hospitals, enabling efficient appointment booking, medical record management, and healthcare service delivery.

✨ Features
For Patients

User Registration & Authentication: Secure signup and login system

Medical Records Access: View and manage personal health records

Appointment Booking: Schedule appointments with healthcare providers

Health Journey Tracking: Monitor health progress over time

AI-Powered Health Assistant: Get medical information and guidance

For Doctors

Professional Dashboard: Manage practice and patient interactions

Patient Record Management: Access and update patient medical histories

Appointment Scheduling: Manage appointment calendars

OPD Management: Handle outpatient department operations

Secure Authentication: Role-based access control

For Hospitals

Hospital Management Dashboard: Comprehensive hospital operations overview

Bed Management: Track bed availability and patient admissions

Staff Management: Manage doctors and healthcare staff

Patient Management: Monitor admitted patients and discharge processes

OPD Coordination: Manage multiple outpatient departments

Registry Management: Hospital registration and compliance tracking

Core Features

Multi-Role Authentication: Separate login systems for patients, doctors, and hospitals

Secure Data Management: Encrypted medical records and user data

Real-time Updates: Live updates for bed availability and appointments

AI Integration: Google Gemini AI for medical assistance and information

Responsive Design: Mobile-friendly interface using Material-UI

File Upload Support: Medical document and image upload capabilities

🛠️ Technology Stack
Frontend

React 19.0.0

Material-UI (MUI)

React Router DOM

Tailwind CSS

Vite

Date-fns

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT

bcryptjs

Multer

CORS

Cookie Parser

AI Integration

Google Generative AI: Gemini 2.0 Flash model for medical assistance

Custom AI Agent: Specialized medical information assistant

📁 Project Structure
SRM/
├── Backend/
│   ├── AiAgent/
│   ├── Controllers/
│   │   ├── User Controllers/
│   │   ├── Doctor Controllers/
│   │   └── Hospital Controllers/
│   ├── Database/
│   ├── Middleware/
│   ├── Models/
│   │   ├── user.model.js
│   │   ├── doctor.model.js
│   │   ├── hospital.model.js
│   │   ├── patients.model.js
│   │   ├── medHistory.model.js
│   │   └── opd.model.js
│   ├── Routers/
│   ├── Util/
│   ├── uploads/
│   └── server.js
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── pages/
│   │   │   ├── firstpage.jsx
│   │   │   ├── signuppatient.jsx
│   │   │   ├── signupdoctor.jsx
│   │   │   ├── signuphospital.jsx
│   │   │   ├── LoginPatient.jsx
│   │   │   ├── logindoctor.jsx
│   │   │   ├── loginhospital.jsx
│   │   │   ├── hospitalhomepage.jsx
│   │   │   ├── doctorhomepage.jsx
│   │   │   └── patientdetails.jsx
│   │   └── App.jsx
│   └── package.json
├── .env
└── README.md

🚀 Getting Started
Prerequisites

Node.js (v14 or higher)

MongoDB (local installation or MongoDB Atlas)

npm or yarn package manager

Installation

Clone the repository

git clone <repository-url>
cd SRM


Set up environment variables
Create a .env file in the root directory:

PORT=8000
MongoDB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


Install Backend Dependencies

cd Backend
npm install


Install Frontend Dependencies

cd ../Frontend
npm install

Running the Application

Start the Backend Server

cd Backend
npm run dev


Runs on http://localhost:8000

Start the Frontend Development Server

cd Frontend
npm run dev


Runs on http://localhost:5173

Access the Application
Open http://localhost:5173

📚 API Endpoints
Authentication Routes (/api/auth)

POST /userRegister

POST /userLogin

POST /userLogout

POST /doctorRegister

POST /doctorLogin

POST /doctorLogout

POST /hospitalRegister

POST /hospitalLogin

POST /hospitalLogout

User Management (/api/user)
Doctor Management (/api/doctor)
Hospital Management (/api/hospital)
Profile Management (/api/profile)
🔐 Security Features

JWT Authentication

Password Hashing

Role-Based Access Control

CORS Protection

Input Validation

Secure File Upload

🤖 AI Integration

The platform includes an AI-powered medical assistant using Google's Gemini 2.0 Flash model:

Provides accurate healthcare information

Maintains ethical and safe responses

Offers medical guidance and symptom information

Ensures professional and unbiased medical advice

🎨 User Interface

Modern Design

Responsive Layout

Material Design

Accessibility

Intuitive Navigation

📱 Supported User Roles

Patients

Doctors

Hospitals

🔧 Development

Backend Scripts:

npm start

npm run dev

Frontend Scripts:

npm run dev

npm run build

npm run preview

npm run lint

Database Models

Users

Doctors

Hospitals

Patients

Medical History

OPD

🤝 Contributing

Fork the repository

Create a feature branch

Commit your changes

Push to the branch

Open a Pull Request

📄 License

This project is licensed under the ISC License.

👥 Support

For support and questions, please contact the development team or create an issue in the repository.

🚀 Future Enhancements

Telemedicine integration

Mobile application

Advanced analytics

Medical device integration

Multi-language support

Enhanced AI capabilities
