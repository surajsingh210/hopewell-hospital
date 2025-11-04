import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Divider,
  Avatar,
  IconButton
} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const SignupDoctor = () => {
  // State for personal information
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicPreview, setProfilePicPreview] = useState(null);
  const [registryNo, setRegistryNo] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  // State for professional information
  const [medicalExpertise, setMedicalExpertise] = useState("");
  const [experience, setExperience] = useState("");
  const [qualifications, setQualifications] = useState("");

  // State for account information
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State for location information
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  // Handle profile picture upload
  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePic(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create doctor data object
    const doctorData = {
      // Personal Information
      fullName,
      phoneNo,
      email,
      aadhar,
      profilePic,
      registryNo,
      gender,
      dob,

      // Professional Information
      medicalExpertise,
      experience,
      qualifications,

      // Account Information
      password,

      // Location Information
      city,
      state
    };

    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Doctor signup data:", doctorData);
    // Here you would typically send the data to your backend
  };

  // Common text field styling
  const textFieldSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 2,
      '&:hover fieldset': {
        borderColor: '#8E54E9',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4776E6',
      }
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#4776E6'
    }
  };

  // Section title styling
  const sectionTitleSx = {
    fontWeight: 600,
    color: "#4776E6",
    mb: 1,
    mt: 3,
    fontSize: "1.1rem"
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        padding: { xs: 2, md: 4 },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "90%",
          maxWidth: 900,
          background: "rgba(255, 255, 255, 0.95)",
          p: { xs: 3, md: 5 },
          borderRadius: 3,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "5px",
            background: "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)",
          }
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 4,
            textAlign: "center",
            background: "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.5px"
          }}
        >
          Doctor Registration
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Profile Picture Section */}
            <Grid item xs={12} display="flex" justifyContent="center" mb={2}>
              <Box sx={{ textAlign: "center" }}>
                <Avatar
                  src={profilePicPreview}
                  sx={{
                    width: 100,
                    height: 100,
                    margin: "0 auto",
                    border: "3px solid #4776E6",
                    boxShadow: "0 4px 20px rgba(71, 118, 230, 0.25)"
                  }}
                />
                <input
                  accept="image/*"
                  id="profile-pic-upload"
                  type="file"
                  onChange={handleProfilePicChange}
                  style={{ display: 'none' }}
                />
                <label htmlFor="profile-pic-upload">
                  <Button
                    component="span"
                    startIcon={<CloudUploadIcon />}
                    sx={{
                      mt: 2,
                      color: "#4776E6",
                      "&:hover": {
                        backgroundColor: "rgba(71, 118, 230, 0.08)"
                      }
                    }}
                  >
                    Upload Photo
                  </Button>
                </label>
              </Box>
            </Grid>

            {/* Section Title - Personal Information */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={sectionTitleSx}>
                Personal Information
              </Typography>
              <Divider sx={{
                mb: 2,
                backgroundImage: "linear-gradient(90deg, #4776E6 0%, rgba(142, 84, 233, 0.2) 100%)",
                height: "2px"
              }} />
            </Grid>

            {/* Personal Information Fields */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Full Name"
                fullWidth
                variant="outlined"
                size="medium"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                sx={textFieldSx}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Phone Number"
                fullWidth
                variant="outlined"
                size="medium"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
                sx={textFieldSx}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                size="medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={textFieldSx}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Aadhar Number"
                fullWidth
                variant="outlined"
                size="medium"
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
                required
                sx={textFieldSx}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Registry Number"
                fullWidth
                variant="outlined"
                size="medium"
                value={registryNo}
                onChange={(e) => setRegistryNo(e.target.value)}
                required
                sx={textFieldSx}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                fullWidth
                variant="outlined"
                size="medium"
                required
                sx={textFieldSx}
              >
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  value={gender}
                  label="Gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Date of Birth"
                type="date"
                fullWidth
                variant="outlined"
                size="medium"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                required
                sx={textFieldSx}
              />
            </Grid>

            {/* Section Title - Professional Information */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={sectionTitleSx}>
                Professional Information
              </Typography>
              <Divider sx={{
                mb: 2,
                backgroundImage: "linear-gradient(90deg, #4776E6 0%, rgba(142, 84, 233, 0.2) 100%)",
                height: "2px"
              }} />
            </Grid>

            {/* Professional Information Fields */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Medical Expertise"
                fullWidth
                variant="outlined"
                size="medium"
                value={medicalExpertise}
                onChange={(e) => setMedicalExpertise(e.target.value)}
                required
                sx={textFieldSx}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Experience (years)"
                type="number"
                fullWidth
                variant="outlined"
                size="medium"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                inputProps={{ min: 0 }}
                required
                sx={textFieldSx}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Qualifications"
                fullWidth
                variant="outlined"
                size="medium"
                multiline
                rows={3}
                value={qualifications}
                onChange={(e) => setQualifications(e.target.value)}
                required
                sx={textFieldSx}
              />
            </Grid>

            {/* Section Title - Account Information */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={sectionTitleSx}>
                Account Information
              </Typography>
              <Divider sx={{
                mb: 2,
                backgroundImage: "linear-gradient(90deg, #4776E6 0%, rgba(142, 84, 233, 0.2) 100%)",
                height: "2px"
              }} />
            </Grid>

            {/* Account Information Fields */}
            <Grid item xs={12} md={6}>
              <TextField
                type="password"
                label="Password"
                fullWidth
                variant="outlined"
                size="medium"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                sx={textFieldSx}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="password"
                label="Confirm Password"
                fullWidth
                variant="outlined"
                size="medium"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                sx={textFieldSx}
              />
            </Grid>

            {/* Section Title - Location Information */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={sectionTitleSx}>
                Location Information
              </Typography>
              <Divider sx={{
                mb: 2,
                backgroundImage: "linear-gradient(90deg, #4776E6 0%, rgba(142, 84, 233, 0.2) 100%)",
                height: "2px"
              }} />
            </Grid>

            {/* Location Information Fields */}
            <Grid item xs={12} md={6}>
              <TextField
                label="City"
                fullWidth
                variant="outlined"
                size="medium"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                sx={textFieldSx}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="State"
                fullWidth
                variant="outlined"
                size="medium"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                sx={textFieldSx}
              />
            </Grid>

            {/* Sign Up Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  background: "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)",
                  color: "white",
                  mt: 3,
                  mb: 2,
                  borderRadius: 2,
                  padding: "12px 0",
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: "1rem",
                  boxShadow: "0 4px 15px rgba(71, 118, 230, 0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 6px 20px rgba(71, 118, 230, 0.4)",
                    transform: "translateY(-2px)",
                  }
                }}
              >
                Register as Doctor
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default SignupDoctor;