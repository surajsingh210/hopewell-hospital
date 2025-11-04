
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HospitalSignUp from "./pages/SignUpHospital";
import FirstPage from "./pages/firstpage";
import SignUpPatient from "./pages/signuppatient";
import SignUpDoctor from "./pages/signupdoctor";
import HospitalHomepage from "./pages/hospitalhomepage";
import DoctorHomepage from "./pages/doctorhomepage";
import LoginUser from "./pages/loginuser";
import LoginDoctor from "./pages/logindoctor";
import LoginHospital from "./pages/loginhospital";
import Patientdetails from "./pages/patientdetails";
import PatientFullDetails from "./pages/patientfulldetails";
import LoginPatient from "./pages/LoginPatient";
import SecondPage from "./pages/Second";



const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Navigate to="/welcome" replace />} />
        <Route path="/LoginPatient" element={<LoginPatient />} />


        <Route path="/welcome" element={<FirstPage />} />


        <Route path="/signuphospital" element={<HospitalSignUp />} />


        <Route path="/signuppatient" element={<SignUpPatient />} />
        <Route path="/Second.jsx" element={<SecondPage />} />
        <Route path="/signupdoctor" element={<SignUpDoctor />} />

        <Route path="/loginuser" element={<LoginUser />} />

        <Route path="/logindoctor" element={<LoginDoctor />} />

        <Route path="/loginhospital" element={<LoginHospital />} />


        <Route path="/hospitalhomepage" element={<HospitalHomepage />} />


        <Route path="/doctorhomepage" element={<DoctorHomepage />} />

        <Route path="/patientdetails" element={<Patientdetails />} />

        <Route path="/patientfulldetails" element={<PatientFullDetails />} />


        <Route path="*" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
