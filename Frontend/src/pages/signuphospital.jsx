// import React, { useState } from "react";
// import {
//     Box,
//     Typography,
//     TextField,
//     Button,
//     Grid,
//     Paper,
//     Stepper,
//     Step,
//     StepLabel,
//     Card,
//     CardContent,
//     FormControlLabel,
//     Switch,
//     Tabs,
//     Tab,
//     Divider,
//     Chip,
//     Tooltip,
//     IconButton,
//     CircularProgress,
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     InputAdornment,
//     Alert,
//     Snackbar
// } from "@mui/material";
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
// import LockIcon from '@mui/icons-material/Lock';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import BedIcon from '@mui/icons-material/Bed';
// import PhoneIcon from '@mui/icons-material/Phone';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import HomeIcon from '@mui/icons-material/Home';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import FileUploadIcon from '@mui/icons-material/FileUpload';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// // Custom theme
// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#1976d2',
//         },
//         secondary: {
//             main: '#f50057',
//         },
//         background: {
//             default: '#f5f5f5',
//             paper: '#ffffff',
//         },
//     },
//     typography: {
//         fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
//         h4: {
//             fontWeight: 600,
//         },
//         button: {
//             textTransform: 'none',
//             fontWeight: 500,
//         },
//     },
//     shape: {
//         borderRadius: 8,
//     },
// });

// const HospitalSignup = () => {
//     // State for active step
//     const [activeStep, setActiveStep] = useState(0);
//     const [tabValue, setTabValue] = useState(0);
//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);
//     const [openDialog, setOpenDialog] = useState(false);
//     const [snackbarOpen, setSnackbarOpen] = useState(false);
//     const [snackbarMessage, setSnackbarMessage] = useState('');
//     const [previewMode, setPreviewMode] = useState(false);

//     // State for each input field
//     const [formData, setFormData] = useState({
//         // Basic information
//         name: "",
//         registryNo: "",
//         doe: "",
//         establishment_year: "",
//         helpline: "",
//         emergencyContact: "",
//         email: "",
//         website: "",

//         // Facilities
//         bedsAvailable: "",
//         oxygenBeds: "",
//         icuBeds: "",
//         ventilators: "",
//         ambulances: "",
//         hasEmergencyServices: false,
//         has24x7Pharmacy: false,
//         hasDiagnosticCenter: false,

//         // Location
//         address: "",
//         city: "",
//         state: "",
//         pincode: "",
//         mapLocation: "",

//         // Auth
//         password: "",
//         confirmPassword: "",

//         // Verification
//         licenseDocument: null,
//         accreditationCertificate: null,
//     });

//     // Steps configuration
//     const steps = [
//         {
//             label: 'Hospital Information',
//             icon: <LocalHospitalIcon />,
//             description: 'Basic details about your hospital'
//         },
//         {
//             label: 'Facilities & Services',
//             icon: <BedIcon />,
//             description: 'Information about facilities offered'
//         },
//         {
//             label: 'Location',
//             icon: <LocationOnIcon />,
//             description: 'Where your hospital is located'
//         },
//         {
//             label: 'Account Setup',
//             icon: <LockIcon />,
//             description: 'Create login credentials'
//         },
//     ];

//     // Handle form input changes
//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value,
//         });
//     };

//     // Handle file upload
//     const handleFileUpload = (name, file) => {
//         setFormData({
//             ...formData,
//             [name]: file,
//         });

//         setSnackbarMessage(`File ${file.name} uploaded successfully`);
//         setSnackbarOpen(true);
//     };

//     // Handle step navigation
//     const handleNext = () => {
//         if (activeStep === steps.length - 1) {
//             handleSubmit();
//         } else {
//             setActiveStep((prevStep) => prevStep + 1);
//         }
//     };

//     const handleBack = () => {
//         setActiveStep((prevStep) => prevStep - 1);
//     };

//     // Handle tabs change
//     const handleTabChange = (event, newValue) => {
//         setTabValue(newValue);
//     };

//     // Toggle preview mode
//     const togglePreviewMode = () => {
//         setPreviewMode(!previewMode);
//     };

//     // Handle dialog
//     const handleOpenDialog = () => {
//         setOpenDialog(true);
//     };

//     const handleCloseDialog = () => {
//         setOpenDialog(false);
//     };

//     // Handle form submission
//     const handleSubmit = () => {
//         // Validate password match
//         if (formData.password !== formData.confirmPassword) {
//             setSnackbarMessage("Passwords do not match!");
//             setSnackbarOpen(true);
//             return;
//         }

//         setLoading(true);

//         // Simulate API call
//         setTimeout(() => {
//             console.log("Hospital signup data:", formData);
//             setLoading(false);
//             setSuccess(true);

//             // Show success message
//             setSnackbarMessage("Registration successful! Redirecting to dashboard...");
//             setSnackbarOpen(true);
//         }, 2000);
//     };

//     // Different form sections based on active step
//     const renderStepContent = (step) => {
//         switch (step) {
//             case 0:
//                 return (
//                     <Grid container spacing={3}>
//                         <Grid item xs={12}>
//                             <Typography variant="h6" fontWeight="500" color="primary">
//                                 Enter Basic Hospital Information
//                             </Typography>
//                             <Divider sx={{ my: 1 }} />
//                         </Grid>

//                         <Grid item xs={12} md={6}>
//                             <TextField
//                                 label="Hospital Name"
//                                 name="name"
//                                 fullWidth
//                                 variant="outlined"
//                                 value={formData.name}
//                                 onChange={handleInputChange}
//                                 required
//                                 InputProps={{
//                                     startAdornment: (
//                                         <InputAdornment position="start">
//                                             <LocalHospitalIcon color="primary" />
//                                         </InputAdornment>
//                                     ),
//                                 }}
//                             />
//                         </Grid>

//                         <Grid item xs={12} md={6}>
//                             <TextField
//                                 label="Registry Number"
//                                 name="registryNo"
//                                 fullWidth
//                                 variant="outlined"
//                                 value={formData.registryNo}
//                                 onChange={handleInputChange}
//                                 required
//                                 InputProps={{
//                                     startAdornment: (
//                                         <InputAdornment position="start">
//                                             <VerifiedIcon color="primary" />
//                                         </InputAdornment>
//                                     ),
//                                 }}
//                             />
//                         </Grid>

//                         <Grid item xs={12} md={6}>
//                             <TextField
//                                 label="Date of Establishment"
//                                 name="doe"
//                                 type="date"
//                                 fullWidth
//                                 variant="outlined"
//                                 value={formData.doe}
//                                 onChange={handleInputChange}
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}
//                                 InputProps={{
//                                     startAdornment: (
//                                         <InputAdornment position="start">
//                                             <CalendarTodayIcon color="primary" />
//                                         </InputAdornment>
//                                     ),
//                                 }}
//                             />
//                         </Grid>

//                         <Grid item xs={12} md={6}>
//                             <TextField
//                                 label="Helpline Number"
//                                 name="helpline"
//                                 fullWidth
//                                 variant="outlined"
//                                 value={formData.helpline}
//                                 onChange={handleInputChange}
//                                 required
//                                 InputProps={{
//                                     startAdornment: (
//                                         <InputAdornment position="start">
//                                             <PhoneIcon color="primary" />
//                                         </InputAdornment>
//                                     ),
//                                 }}
//                             />
//                         </Grid>

//                         <Grid item xs={12} md={6}>
//                             <TextField
//                                 label="Emergency Contact"
//                                 name="emergencyContact"
//                                 fullWidth
//                                 variant="outlined"
//                                 value={formData.emergencyContact}
//                                 onChange={handleInputChange}
//                                 InputProps={{
//                                     startAdornment: (
//                                         <InputAdornment position="start">
//                                             <PhoneIcon color="error" />
//                                         </InputAdornment>
//                                     ),
//                                 }}
//                             />
//                         </Grid>

//                         <Grid item xs={12} md={6}>
//                             <TextField
//                                 label="Email Address"
//                                 name="email"
//                                 type="email"
//                                 fullWidth
//                                 variant="outlined"
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </Grid>
//                     </Grid>
//                 );

//             case 1:
//                 return (
//                     <Box>
//                         <Tabs value={tabValue} onChange={handleTabChange} centered sx={{ mb: 3 }}>
//                             <Tab label="Beds & Equipment" />
//                             <Tab label="Services" />
//                         </Tabs>

//                         {tabValue === 0 && (
//                             <Grid container spacing={3}>
//                                 <Grid item xs={12} sm={6}>
//                                     <TextField
//                                         label="Total Beds Available"
//                                         name="bedsAvailable"
//                                         type="number"
//                                         fullWidth
//                                         variant="outlined"
//                                         value={formData.bedsAvailable}
//                                         onChange={handleInputChange}
//                                         required
//                                         InputProps={{
//                                             startAdornment: (
//                                                 <InputAdornment position="start">
//                                                     <BedIcon />
//                                                 </InputAdornment>
//                                             ),
//                                         }}
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12} sm={6}>
//                                     <TextField
//                                         label="Oxygen Beds"
//                                         name="oxygenBeds"
//                                         type="number"
//                                         fullWidth
//                                         variant="outlined"
//                                         value={formData.oxygenBeds}
//                                         onChange={handleInputChange}
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12} sm={6}>
//                                     <TextField
//                                         label="ICU Beds"
//                                         name="icuBeds"
//                                         type="number"
//                                         fullWidth
//                                         variant="outlined"
//                                         value={formData.icuBeds}
//                                         onChange={handleInputChange}
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12} sm={6}>
//                                     <TextField
//                                         label="Ventilators"
//                                         name="ventilators"
//                                         type="number"
//                                         fullWidth
//                                         variant="outlined"
//                                         value={formData.ventilators}
//                                         onChange={handleInputChange}
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12} sm={6}>
//                                     <TextField
//                                         label="Ambulances"
//                                         name="ambulances"
//                                         type="number"
//                                         fullWidth
//                                         variant="outlined"
//                                         value={formData.ambulances}
//                                         onChange={handleInputChange}
//                                     />
//                                 </Grid>
//                             </Grid>
//                         )}

//                         {tabValue === 1 && (
//                             <Grid container spacing={3}>
//                                 <Grid item xs={12}>
//                                     <FormControlLabel
//                                         control={
//                                             <Switch
//                                                 checked={formData.hasEmergencyServices}
//                                                 onChange={handleInputChange}
//                                                 name="hasEmergencyServices"
//                                                 color="primary"
//                                             />
//                                         }
//                                         label="Emergency Services Available 24x7"
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12}>
//                                     <FormControlLabel
//                                         control={
//                                             <Switch
//                                                 checked={formData.has24x7Pharmacy}
//                                                 onChange={handleInputChange}
//                                                 name="has24x7Pharmacy"
//                                                 color="primary"
//                                             />
//                                         }
//                                         label="24x7 Pharmacy Available"
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12}>
//                                     <FormControlLabel
//                                         control={
//                                             <Switch
//                                                 checked={formData.hasDiagnosticCenter}
//                                                 onChange={handleInputChange}
//                                                 name="hasDiagnosticCenter"
//                                                 color="primary"
//                                             />
//                                         }
//                                         label="Diagnostic Center Available"
//                                     />
//                                 </Grid>
//                             </Grid>
//                         )}
//                     </Box>
//                 );

//             case 2:
//                 return (
//                     <Grid container spacing={3}>
//                         <Grid item xs={12}>
//                             <Typography variant="h6" fontWeight="500" color="primary">
//                                 Hospital Location Details
//                             </Typography>
//                             <Divider sx={{ my: 1 }} />
//                         </Grid>

//                         <Grid item xs={12}>
//                             <TextField
//                                 label="Complete Address"
//                                 name="address"
//                                 fullWidth
//                                 variant="outlined"
//                                 multiline
//                                 rows={2}
//                                 value={formData.address}
//                                 onChange={handleInputChange}
//                                 required
//                                 InputProps={{
//                                     startAdornment: (
//                                         <InputAdornment position="start">
//                                             <HomeIcon />
//                                         </InputAdornment>
//                                     ),
//                                 }}
//                             />
//                         </Grid>

//                         <Grid item xs={12} md={6}>
//                             <TextField
//                                 label="City"
//                                 name="city"
//                                 fullWidth
//                                 variant="outlined"
//                                 value={formData.city}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </Grid>

//                         <Grid item xs={12} md={6}>
//                             <TextField
//                                 label="State"
//                                 name="state"
//                                 fullWidth
//                                 variant="outlined"
//                                 value={formData.state}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </Grid>

//                         <Grid item xs={12} md={6}>
//                             <TextField
//                                 label="PIN Code"
//                                 name="pincode"
//                                 fullWidth
//                                 variant="outlined"
//                                 value={formData.pincode}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </Grid>

//                         <Grid item xs={12}>
//                             <Button
//                                 variant="outlined"
//                                 startIcon={<LocationOnIcon />}
//                                 onClick={handleOpenDialog}
//                                 sx={{ mt: 1 }}
//                             >
//                                 Add Location on Map
//                             </Button>
//                         </Grid>
//                     </Grid>
//                 );

//             case 3:
//                 return (
//                     <Grid container spacing={3}>
//                         <Grid item xs={12}>
//                             <Typography variant="h6" fontWeight="500" color="primary">
//                                 Create Hospital Account
//                             </Typography>
//                             <Divider sx={{ my: 1 }} />
//                         </Grid>

//                         <Grid item xs={12} md={6}>
//                             <TextField
//                                 label="Password"
//                                 name="password"
//                                 type="password"
//                                 fullWidth
//                                 variant="outlined"
//                                 value={formData.password}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </Grid>

//                         <Grid item xs={12} md={6}>
//                             <TextField
//                                 label="Confirm Password"
//                                 name="confirmPassword"
//                                 type="password"
//                                 fullWidth
//                                 variant="outlined"
//                                 value={formData.confirmPassword}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </Grid>

//                         <Grid item xs={12}>
//                             <Typography variant="subtitle1" fontWeight="500" mt={2}>
//                                 Upload Verification Documents
//                             </Typography>
//                         </Grid>

//                         <Grid item xs={12} md={6}>
//                             <Button
//                                 variant="outlined"
//                                 component="label"
//                                 startIcon={<FileUploadIcon />}
//                                 fullWidth
//                                 sx={{ p: 1.5 }}
//                             >
//                                 Upload Hospital License
//                                 <input
//                                     type="file"
//                                     hidden
//                                     onChange={(e) => {
//                                         if (e.target.files && e.target.files[0]) {
//                                             handleFileUpload('licenseDocument', e.target.files[0]);
//                                         }
//                                     }}
//                                 />
//                             </Button>
//                             {formData.licenseDocument && (
//                                 <Chip
//                                     label={formData.licenseDocument.name}
//                                     onDelete={() => setFormData({ ...formData, licenseDocument: null })}
//                                     color="success"
//                                     sx={{ mt: 1 }}
//                                 />
//                             )}
//                         </Grid>

//                         <Grid item xs={12} md={6}>
//                             <Button
//                                 variant="outlined"
//                                 component="label"
//                                 startIcon={<FileUploadIcon />}
//                                 fullWidth
//                                 sx={{ p: 1.5 }}
//                             >
//                                 Upload Accreditation Certificate
//                                 <input
//                                     type="file"
//                                     hidden
//                                     onChange={(e) => {
//                                         if (e.target.files && e.target.files[0]) {
//                                             handleFileUpload('accreditationCertificate', e.target.files[0]);
//                                         }
//                                     }}
//                                 />
//                             </Button>
//                             {formData.accreditationCertificate && (
//                                 <Chip
//                                     label={formData.accreditationCertificate.name}
//                                     onDelete={() => setFormData({ ...formData, accreditationCertificate: null })}
//                                     color="success"
//                                     sx={{ mt: 1 }}
//                                 />
//                             )}
//                         </Grid>
//                     </Grid>
//                 );

//             default:
//                 return null;
//         }
//     };

//     return (
//         <ThemeProvider theme={theme}>
//             <Box
//                 sx={{
//                     minHeight: "100vh",
//                     background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
//                     padding: { xs: 2, md: 4 },
//                 }}
//             >
//                 <Paper
//                     elevation={4}
//                     sx={{
//                         maxWidth: 900,
//                         mx: "auto",
//                         p: { xs: 2, md: 4 },
//                         borderRadius: 2,
//                         position: "relative",
//                         overflow: "hidden",
//                         "&::before": {
//                             content: '""',
//                             position: "absolute",
//                             top: 0,
//                             left: 0,
//                             width: "100%",
//                             height: "6px",
//                             bgcolor: "primary.main",
//                         }
//                     }}
//                 >
//                     {/* Toggle Preview Mode */}
//                     <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
//                         <Tooltip title={previewMode ? "Edit Mode" : "Preview Mode"}>
//                             <FormControlLabel
//                                 control={<Switch checked={previewMode} onChange={togglePreviewMode} />}
//                                 label="Preview"
//                                 labelPlacement="start"
//                             />
//                         </Tooltip>
//                     </Box>

//                     {/* Header */}
//                     <Box textAlign="center" mb={4}>
//                         <Typography variant="h4" color="primary" gutterBottom>
//                             Hospital Registration
//                         </Typography>
//                         <Typography color="text.secondary" variant="body1">
//                             Join our network of healthcare providers
//                         </Typography>
//                     </Box>

//                     {/* Stepper */}
//                     <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
//                         {steps.map((step, index) => (
//                             <Step key={step.label}>
//                                 <StepLabel StepIconComponent={() => (
//                                     <Avatar
//                                         sx={{
//                                             bgcolor: activeStep >= index ? 'primary.main' : 'grey.400',
//                                             width: 40,
//                                             height: 40
//                                         }}
//                                     >
//                                         {step.icon}
//                                     </Avatar>
//                                 )}>
//                                     <Typography variant="subtitle2">{step.label}</Typography>
//                                     <Typography variant="caption" color="text.secondary">
//                                         {step.description}
//                                     </Typography>
//                                 </StepLabel>
//                             </Step>
//                         ))}
//                     </Stepper>

//                     {/* Form Content */}
//                     {previewMode ? (
//                         <Card variant="outlined" sx={{ mb: 3, p: 2 }}>
//                             <CardContent>
//                                 <Typography variant="h6" gutterBottom>Hospital Preview</Typography>
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={12} sm={6}>
//                                         <Typography variant="subtitle2" color="text.secondary">Hospital Name</Typography>
//                                         <Typography variant="body1">{formData.name || "Not provided"}</Typography>
//                                     </Grid>
//                                     <Grid item xs={12} sm={6}>
//                                         <Typography variant="subtitle2" color="text.secondary">Registry Number</Typography>
//                                         <Typography variant="body1">{formData.registryNo || "Not provided"}</Typography>
//                                     </Grid>
//                                     <Grid item xs={12} sm={6}>
//                                         <Typography variant="subtitle2" color="text.secondary">Total Beds</Typography>
//                                         <Typography variant="body1">{formData.bedsAvailable || "Not provided"}</Typography>
//                                     </Grid>
//                                     <Grid item xs={12} sm={6}>
//                                         <Typography variant="subtitle2" color="text.secondary">Helpline</Typography>
//                                         <Typography variant="body1">{formData.helpline || "Not provided"}</Typography>
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <Typography variant="subtitle2" color="text.secondary">Address</Typography>
//                                         <Typography variant="body1">
//                                             {formData.address ?
//                                                 `${formData.address}, ${formData.city}, ${formData.state}` :
//                                                 "Not provided"}
//                                         </Typography>
//                                     </Grid>
//                                 </Grid>
//                             </CardContent>
//                         </Card>
//                     ) : (
//                         <Box sx={{ mt: 2, mb: 4 }}>
//                             {renderStepContent(activeStep)}
//                         </Box>
//                     )}

//                     {/* Navigation Buttons */}
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
//                         <Button
//                             disabled={activeStep === 0}
//                             onClick={handleBack}
//                             variant="outlined"
//                         >
//                             Back
//                         </Button>
//                         <Box sx={{ position: 'relative' }}>
//                             <Button
//                                 variant="contained"
//                                 onClick={handleNext}
//                                 disabled={loading}
//                                 sx={{
//                                     minWidth: 120,
//                                 }}
//                             >
//                                 {activeStep === steps.length - 1 ? 'Register' : 'Next'}
//                             </Button>
//                             {loading && (
//                                 <CircularProgress
//                                     size={24}
//                                     sx={{
//                                         position: 'absolute',
//                                         top: '50%',
//                                         left: '50%',
//                                         marginTop: '-12px',
//                                         marginLeft: '-12px',
//                                     }}
//                                 />
//                             )}
//                         </Box>
//                     </Box>
//                 </Paper>

//                 {/* Help Dialog */}
//                 <Dialog open={openDialog} onClose={handleCloseDialog}>
//                     <DialogTitle>Add Hospital Location</DialogTitle>
//                     <DialogContent>
//                         <Typography>
//                             This feature would allow you to pinpoint your hospital location on a map.
//                             In a complete implementation, you would see a map interface here.
//                         </Typography>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={handleCloseDialog}>Close</Button>
//                     </DialogActions>
//                 </Dialog>

//                 {/* Snackbar for notifications */}
//                 <Snackbar
//                     open={snackbarOpen}
//                     autoHideDuration={6000}
//                     onClose={() => setSnackbarOpen(false)}
//                     anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//                 >
//                     <Alert
//                         onClose={() => setSnackbarOpen(false)}
//                         severity={success ? "success" : "info"}
//                         variant="filled"
//                     >
//                         {snackbarMessage}
//                     </Alert>
//                 </Snackbar>
//             </Box>
//         </ThemeProvider>
//     );
// };

// export default HospitalSignup;
import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, Paper, Container, Divider } from "@mui/material";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const LoginDoctor = () => {
    // State for each input field
    const [name, setName] = useState("");
    const [bedsAvailable, setBedsAvailable] = useState("");
    const [doe, setDoe] = useState("");
    const [helpline, setHelpline] = useState("");
    const [registryNo, setRegistryNo] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [state, setState] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create hospital data object
        const hospitalData = {
            name,
            bedsAvailable,
            doe,
            helpline,
            registryNo,
            address,
            password,
            city,
            state
        };

        // Validate password match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("Hospital signup data:", hospitalData);
        // Here you would typically send the data to your backend
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                background: "linear-gradient(120deg, #134e6f 0%, #1e88e5 100%)",
                padding: 0,
                margin: 0,
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Paper
                    elevation={10}
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        overflow: 'hidden',
                        borderRadius: 4,
                        boxShadow: '0 15px 50px rgba(0,0,0,0.3)',
                    }}
                >
                    {/* Left sidebar with decorative elements */}
                    <Box
                        sx={{
                            width: { xs: '100%', md: '40%' },
                            background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
                            color: 'white',
                            padding: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                                backgroundSize: '20px 20px',
                                zIndex: 1,
                            }
                        }}
                    >
                        <LocalHospitalIcon sx={{ fontSize: 80, mb: 3, color: '#82b1ff' }} />
                        <Typography variant="h4" fontWeight="bold" mb={2} textAlign="center" sx={{ position: 'relative', zIndex: 2 }}>
                            HOSPITAL REGISTRATION
                        </Typography>
                        <Typography variant="body1" mb={4} textAlign="center" sx={{ opacity: 0.8, position: 'relative', zIndex: 2 }}>
                            Join our healthcare network and help provide better medical services to patients in need.
                        </Typography>
                        <Box sx={{
                            position: 'absolute',
                            width: '300px',
                            height: '300px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(25,118,210,0.4) 0%, rgba(13,71,161,0) 70%)',
                            bottom: '-150px',
                            left: '-100px',
                        }} />
                        <Box sx={{
                            position: 'absolute',
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(25,118,210,0.4) 0%, rgba(13,71,161,0) 70%)',
                            top: '-100px',
                            right: '-50px',
                        }} />
                    </Box>

                    {/* Form section */}
                    <Box
                        sx={{
                            width: { xs: '100%', md: '60%' },
                            bgcolor: "#ffffff",
                            padding: { xs: 3, md: 5 },
                            position: 'relative',
                        }}
                    >
                        <Typography
                            variant="h5"
                            mb={4}
                            sx={{
                                color: '#0d47a1',
                                fontWeight: 600,
                                borderBottom: '2px solid #1976d2',
                                paddingBottom: 1,
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: -2,
                                    left: 0,
                                    width: '80px',
                                    height: '4px',
                                    borderRadius: '4px',
                                    backgroundColor: '#1976d2',
                                }
                            }}
                        >
                            Enter Your Hospital Details
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Hospital Name"
                                        fullWidth
                                        variant="filled"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Beds Available"
                                        fullWidth
                                        variant="filled"
                                        type="number"
                                        value={bedsAvailable}
                                        onChange={(e) => setBedsAvailable(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Date of Establishment"
                                        fullWidth
                                        variant="filled"
                                        type="date"
                                        InputLabelProps={{ shrink: true }}
                                        value={doe}
                                        onChange={(e) => setDoe(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Helpline Number"
                                        fullWidth
                                        variant="filled"
                                        value={helpline}
                                        onChange={(e) => setHelpline(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider sx={{ my: 2 }}>
                                        <Typography variant="body2" color="textSecondary">
                                            REGISTRATION DETAILS
                                        </Typography>
                                    </Divider>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Registry Number"
                                        fullWidth
                                        variant="filled"
                                        value={registryNo}
                                        onChange={(e) => setRegistryNo(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="State"
                                        fullWidth
                                        variant="filled"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        label="Full Address"
                                        fullWidth
                                        variant="filled"
                                        multiline
                                        rows={2}
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="City"
                                        fullWidth
                                        variant="filled"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider sx={{ my: 2 }}>
                                        <Typography variant="body2" color="textSecondary">
                                            SECURITY
                                        </Typography>
                                    </Divider>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        type="password"
                                        label="Password"
                                        fullWidth
                                        variant="filled"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        type="password"
                                        label="Confirm Password"
                                        fullWidth
                                        variant="filled"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(25, 118, 210, 0.05)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                                }
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#1976d2'
                                            }
                                        }}
                                    />
                                </Grid>

                                {/* Sign Up Button */}
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            background: 'linear-gradient(90deg, #1565c0 0%, #0d47a1 100%)',
                                            color: "white",
                                            mt: 3,
                                            py: 1.5,
                                            borderRadius: 4,
                                            textTransform: 'none',
                                            fontSize: '1.1rem',
                                            fontWeight: 600,
                                            boxShadow: '0 10px 20px rgba(21, 101, 192, 0.3)',
                                            transition: 'all 0.3s',
                                            '&:hover': {
                                                boxShadow: '0 14px 28px rgba(21, 101, 192, 0.4)',
                                                transform: 'translateY(-3px)',
                                            },
                                            '&:active': {
                                                transform: 'translateY(-1px)',
                                            }
                                        }}
                                    >
                                        Complete Registration
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default LoginDoctor;