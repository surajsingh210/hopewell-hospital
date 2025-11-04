import React, { useState, useEffect } from "react";
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
  InputAdornment,
  Avatar,
  IconButton,
  CircularProgress,
  Snackbar,
  Alert,
  FormHelperText,
  Tooltip,
  useMediaQuery,
  useTheme,

} from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignupPatient = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Form fields
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicPreview, setProfilePicPreview] = useState(null);
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [fathersName, setFathersName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [weight, setWeight] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  // UI states
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Validation states
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Mark field as touched when it loses focus
  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  // Handle profile picture upload
  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // File size validation (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, profilePic: "File size should be less than 5MB" });
        return;
      }

      setProfilePic(file);
      setProfilePicPreview(URL.createObjectURL(file));

      // Clear error if exists
      if (errors.profilePic) {
        const { profilePic, ...restErrors } = errors;
        setErrors(restErrors);
      }
    }
  };

  // Handle weight change with validation
  const handleWeightChange = (e) => {
    const value = e.target.value;
    // Only allow positive numbers
    if (value === "" || Number(value) >= 0) {
      setWeight(value);
    }
  };

  // Handle form field changes with validation
  const handleChange = (e, setter) => {
    const { name, value } = e.target;
    setter(value);
    validateField(name, value);
  };

  // Validate individual field
  const validateField = (name, value) => {
    let fieldErrors = { ...errors };

    switch (name) {
      case "fullName":
        if (!value.trim()) {
          fieldErrors.fullName = "Full name is required";
        } else if (value.trim().length < 3) {
          fieldErrors.fullName = "Name must be at least 3 characters";
        } else {
          delete fieldErrors.fullName;
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          fieldErrors.email = "Email is required";
        } else if (!emailRegex.test(value)) {
          fieldErrors.email = "Please enter a valid email";
        } else {
          delete fieldErrors.email;
        }
        break;

      case "phoneNo":
        const phoneRegex = /^[0-9]{10}$/;
        if (!value) {
          fieldErrors.phoneNo = "Phone number is required";
        } else if (!phoneRegex.test(value)) {
          fieldErrors.phoneNo = "Please enter a valid 10-digit phone number";
        } else {
          delete fieldErrors.phoneNo;
        }
        break;

      case "aadhar":
        const aadharRegex = /^[0-9]{12}$/;
        if (!value) {
          fieldErrors.aadhar = "Aadhar number is required";
        } else if (!aadharRegex.test(value)) {
          fieldErrors.aadhar = "Please enter a valid 12-digit Aadhar number";
        } else {
          delete fieldErrors.aadhar;
        }
        break;

      case "dob":
        if (!value) {
          fieldErrors.dob = "Date of birth is required";
        } else {
          // Check if patient is at least 1 year old
          const birthDate = new Date(value);
          const today = new Date();
          const minAgeDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());

          if (birthDate > today) {
            fieldErrors.dob = "Date of birth cannot be in the future";
          } else if (birthDate > minAgeDate) {
            fieldErrors.dob = "Patient must be at least 1 year old";
          } else {
            delete fieldErrors.dob;
          }
        }
        break;

      case "gender":
        if (!value) {
          fieldErrors.gender = "Gender is required";
        } else {
          delete fieldErrors.gender;
        }
        break;

      case "password":
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!value) {
          fieldErrors.password = "Password is required";
        } else if (!passwordRegex.test(value)) {
          fieldErrors.password = "Password must be at least 8 characters and include uppercase, lowercase, number, and special character";
        } else {
          delete fieldErrors.password;
        }

        // Also validate confirm password if it exists
        if (confirmPassword) {
          if (confirmPassword !== value) {
            fieldErrors.confirmPassword = "Passwords do not match";
          } else {
            delete fieldErrors.confirmPassword;
          }
        }
        break;

      case "confirmPassword":
        if (!value) {
          fieldErrors.confirmPassword = "Please confirm your password";
        } else if (value !== password) {
          fieldErrors.confirmPassword = "Passwords do not match";
        } else {
          delete fieldErrors.confirmPassword;
        }
        break;

      case "weight":
        if (value && (isNaN(value) || Number(value) <= 0)) {
          fieldErrors.weight = "Please enter a valid weight";
        } else {
          delete fieldErrors.weight;
        }
        break;

      case "address":
        if (!value.trim()) {
          fieldErrors.address = "Address is required";
        } else if (value.trim().length < 5) {
          fieldErrors.address = "Please enter a complete address";
        } else {
          delete fieldErrors.address;
        }
        break;

      case "city":
        if (!value.trim()) {
          fieldErrors.city = "City is required";
        } else {
          delete fieldErrors.city;
        }
        break;

      case "state":
        if (!value.trim()) {
          fieldErrors.state = "State is required";
        } else {
          delete fieldErrors.state;
        }
        break;

      default:
        break;
    }

    setErrors(fieldErrors);
  };

  // Validate all fields
  const validateForm = () => {
    // Mark all fields as touched
    const allTouched = {};
    ['fullName', 'phoneNo', 'email', 'aadhar', 'dob', 'gender', 'password',
      'confirmPassword', 'address', 'city', 'state'].forEach(field => {
        allTouched[field] = true;
      });
    setTouched(allTouched);

    // Validate each field
    validateField("fullName", fullName);
    validateField("phoneNo", phoneNo);
    validateField("email", email);
    validateField("aadhar", aadhar);
    validateField("dob", dob);
    validateField("gender", gender);
    validateField("password", password);
    validateField("confirmPassword", confirmPassword);
    validateField("address", address);
    validateField("city", city);
    validateField("state", state);

    // Check if we have any errors after validation
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const isValid = validateForm();

    if (!isValid) {
      setSnackbar({
        open: true,
        message: "Please fix the errors in the form",
        severity: "error"
      });
      return;
    }

    // Start loading
    setLoading(true);

    // Create patient data object
    const patientData = {
      fullName,
      phoneNo,
      email,
      aadhar,
      profilePic,
      dob,
      gender,
      fathersName,
      password,
      weight,
      address,
      city,
      state
    };

    try {
      // Simulate API call with setTimeout
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log("Patient signup data:", patientData);
      // Here you would typically send the data to your backend

      // Show success message
      setSnackbar({
        open: true,
        message: "Account created successfully!",
        severity: "success"
      });

      // Optional: Reset form after successful submission
      // resetForm();
    } catch (error) {
      console.error("Signup error:", error);
      setSnackbar({
        open: true,
        message: "Error creating account. Please try again.",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  // Reset the form
  const resetForm = () => {
    setFullName("");
    setPhoneNo("");
    setEmail("");
    setAadhar("");
    setProfilePic(null);
    setProfilePicPreview(null);
    setDob("");
    setGender("");
    setFathersName("");
    setPassword("");
    setConfirmPassword("");
    setWeight("");
    setAddress("");
    setCity("");
    setState("");
    setErrors({});
    setTouched({});
  };

  // Handle snackbar close
  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Calculate age from DOB for display
  const calculateAge = (dob) => {
    if (!dob) return null;

    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  // Custom styles for form elements
  const formStyles = {
    inputField: {
      '& .MuiOutlinedInput-root': {
        borderRadius: 8,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.07)'
        },
        '&.Mui-focused': {
          boxShadow: '0 4px 12px rgba(0, 129, 203, 0.2)'
        }
      },
      '& .MuiInputLabel-root': {
        fontWeight: 500
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(0, 0, 0, 0.15)'
      },
      marginBottom: 0.5
    },
    button: {
      borderRadius: 8,
      textTransform: 'none',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.3s ease',
      fontWeight: 600,
      fontSize: '1rem',
      height: 50,
      marginTop: 3,
      '&:hover': {
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
        transform: 'translateY(-2px)'
      },
      '&:active': {
        transform: 'translateY(0)'
      }
    },
    pageBackground: {
      background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
      minHeight: '100vh',
      padding: isMobile ? 2 : 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    formContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: 16,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      padding: isMobile ? 3 : 5,
      backdropFilter: 'blur(10px)',
      maxWidth: 850,
      width: '90%',
      margin: '0 auto',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    title: {
      color: '#1565C0',
      fontWeight: 700,
      marginBottom: 4,
      textAlign: 'center',
      fontSize: isMobile ? '1.7rem' : '2.3rem',
      letterSpacing: '0.02em',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },
    subtitleText: {
      textAlign: 'center',
      color: '#546E7A',
      marginBottom: 4,
      fontSize: isMobile ? '0.9rem' : '1rem'
    },
    sectionDivider: {
      borderTop: '1px solid #E0E0E0',
      margin: '24px 0',
      width: '100%'
    },
    avatarContainer: {
      position: 'relative',
      width: 120,
      height: 120,
      margin: '0 auto 24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    profileAvatar: {
      width: 120,
      height: 120,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#E1F5FE',
      fontSize: '2.5rem',
      color: '#0288D1',
      border: '4px solid white'
    },
    uploadButton: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      '&:hover': {
        backgroundColor: '#F5F5F5'
      }
    }
  };

  return (
    <Box sx={formStyles.pageBackground}>

      <Typography variant="h4" sx={formStyles.title}>
        SIGN UP AS A PATIENT
      </Typography>

      <Typography variant="body1" sx={formStyles.subtitleText}>
        Please fill in your details to create your patient account
      </Typography>

      <Paper elevation={0} sx={formStyles.formContainer}>
        <Grid container spacing={isMobile ? 2 : 3}>
          {/* Profile Picture Section */}
          <Grid item xs={12} display="flex" justifyContent="center">
            <Box sx={formStyles.avatarContainer}>
              <Avatar
                alt="Profile Picture"
                src={profilePicPreview}
                sx={formStyles.profileAvatar}
              >
                {!profilePicPreview && fullName ? fullName.charAt(0).toUpperCase() : ''}
              </Avatar>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="icon-button-file"
                type="file"
                onChange={handleProfilePicChange}
                aria-label="Upload profile picture"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  aria-label="Upload profile picture"
                  component="span"
                  sx={formStyles.uploadButton}
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </Box>
          </Grid>

          {errors.profilePic && touched.profilePic && (
            <Grid item xs={12}>
              <FormHelperText error sx={{ textAlign: 'center' }}>
                {errors.profilePic}
              </FormHelperText>
            </Grid>
          )}

          <Grid item xs={12}>
            <Typography variant="h6" fontWeight={600} color="#1976D2">
              Personal Information
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="fullName"
              label="Full Name"
              fullWidth
              required
              variant="outlined"
              size="medium"
              value={fullName}
              onChange={(e) => handleChange(e, setFullName)}
              onBlur={() => handleBlur("fullName")}
              error={!!(errors.fullName && touched.fullName)}
              helperText={touched.fullName && errors.fullName}
              InputProps={{
                "aria-label": "Full name",
              }}
              sx={formStyles.inputField}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="phoneNo"
              label="Phone Number"
              fullWidth
              required
              variant="outlined"
              size="medium"
              value={phoneNo}
              onChange={(e) => handleChange(e, setPhoneNo)}
              onBlur={() => handleBlur("phoneNo")}
              error={!!(errors.phoneNo && touched.phoneNo)}
              helperText={touched.phoneNo && errors.phoneNo}
              inputProps={{
                maxLength: 10,
                "aria-label": "Phone number",
              }}
              sx={formStyles.inputField}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email"
              type="email"
              fullWidth
              required
              variant="outlined"
              size="medium"
              value={email}
              onChange={(e) => handleChange(e, setEmail)}
              onBlur={() => handleBlur("email")}
              error={!!(errors.email && touched.email)}
              helperText={touched.email && errors.email}
              InputProps={{
                "aria-label": "Email address",
              }}
              sx={formStyles.inputField}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="aadhar"
              label="Aadhar Number"
              fullWidth
              required
              variant="outlined"
              size="medium"
              value={aadhar}
              onChange={(e) => handleChange(e, setAadhar)}
              onBlur={() => handleBlur("aadhar")}
              error={!!(errors.aadhar && touched.aadhar)}
              helperText={touched.aadhar && errors.aadhar}
              inputProps={{
                maxLength: 12,
                "aria-label": "Aadhar number",
              }}
              sx={formStyles.inputField}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="dob"
              label="Date of Birth"
              type="date"
              fullWidth
              required
              variant="outlined"
              size="medium"
              value={dob}
              onChange={(e) => handleChange(e, setDob)}
              onBlur={() => handleBlur("dob")}
              error={!!(errors.dob && touched.dob)}
              helperText={
                (touched.dob && errors.dob) ||
                (dob && !errors.dob && `Age: ${calculateAge(dob)} years`)
              }
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                max: new Date().toISOString().split('T')[0],
                "aria-label": "Date of birth",
              }}
              sx={formStyles.inputField}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl
              fullWidth
              required
              size="medium"
              error={!!(errors.gender && touched.gender)}
              sx={formStyles.inputField}
            >
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                name="gender"
                labelId="gender-label"
                value={gender}
                label="Gender"
                onChange={(e) => handleChange(e, setGender)}
                onBlur={() => handleBlur("gender")}
                inputProps={{
                  "aria-label": "Gender",
                }}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              {touched.gender && errors.gender && (
                <FormHelperText>{errors.gender}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Box sx={formStyles.sectionDivider} />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" fontWeight={600} color="#1976D2">
              Additional Information
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="fathersName"
              label="Father's Name"
              fullWidth
              variant="outlined"
              size="medium"
              value={fathersName}
              onChange={(e) => setFathersName(e.target.value)}
              InputProps={{
                "aria-label": "Father's name",
              }}
              sx={formStyles.inputField}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="weight"
              label="Weight"
              type="number"
              fullWidth
              variant="outlined"
              size="medium"
              value={weight}
              onChange={handleWeightChange}
              onBlur={() => handleBlur("weight")}
              error={!!(errors.weight && touched.weight)}
              helperText={touched.weight && errors.weight}
              inputProps={{
                min: 0,
                step: 0.1,
                "aria-label": "Weight in kg",
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
              }}
              sx={formStyles.inputField}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="address"
              label="Address"
              fullWidth
              required
              variant="outlined"
              size="medium"
              multiline
              rows={2}
              value={address}
              onChange={(e) => handleChange(e, setAddress)}
              onBlur={() => handleBlur("address")}
              error={!!(errors.address && touched.address)}
              helperText={touched.address && errors.address}
              InputProps={{
                "aria-label": "Address",
              }}
              sx={formStyles.inputField}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="city"
              label="City"
              fullWidth
              required
              variant="outlined"
              size="medium"
              value={city}
              onChange={(e) => handleChange(e, setCity)}
              onBlur={() => handleBlur("city")}
              error={!!(errors.city && touched.city)}
              helperText={touched.city && errors.city}
              InputProps={{
                "aria-label": "City",
              }}
              sx={formStyles.inputField}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="state"
              label="State"
              fullWidth
              required
              variant="outlined"
              size="medium"
              value={state}
              onChange={(e) => handleChange(e, setState)}
              onBlur={() => handleBlur("state")}
              error={!!(errors.state && touched.state)}
              helperText={touched.state && errors.state}
              InputProps={{
                "aria-label": "State",
              }}
              sx={formStyles.inputField}
            />
          </Grid>

          <Grid item xs={12}>
            <Box sx={formStyles.sectionDivider} />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" fontWeight={600} color="#1976D2">
              Security
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              fullWidth
              required
              variant="outlined"
              size="medium"
              value={password}
              onChange={(e) => handleChange(e, setPassword)}
              onBlur={() => handleBlur("password")}
              error={!!(errors.password && touched.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                "aria-label": "Password",
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title={showPassword ? "Hide password" : "Show password"}>
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Password must be at least 8 characters with uppercase, lowercase, number, and special character">
                      <IconButton edge="end" size="small">
                        <InfoOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
              sx={formStyles.inputField}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              label="Confirm Password"
              fullWidth
              required
              variant="outlined"
              size="medium"
              value={confirmPassword}
              onChange={(e) => handleChange(e, setConfirmPassword)}
              onBlur={() => handleBlur("confirmPassword")}
              error={!!(errors.confirmPassword && touched.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
              InputProps={{
                "aria-label": "Confirm password",
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      edge="end"
                      aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                    >
                      {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={formStyles.inputField}
            />
          </Grid>

          {/* Sign Up Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              onClick={handleSubmit}
              aria-label="Sign up button"
              sx={{
                ...formStyles.button,
                background: 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)',
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Create Account"
              )}
            </Button>
          </Grid>
        </Grid>
        <br></br>
        <Typography>
          <Typography
            color="primary"
            sx={{
              textDecoration: 'none',
              '& a': {
                textDecoration: 'underline',
                color: 'primary.main',
              },
            }}
          >
            Already have an account? click here to <a href="/LoginPatient">Login</a>
          </Typography>
        </Typography>
      </Paper>

      {/* Success/Error message */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{
            width: '100%',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            '& .MuiAlert-message': {
              fontSize: '0.95rem'
            }
          }}
        >
          {snackbar.message}
        </Alert>

      </Snackbar>

    </Box>
  );
};

export default SignupPatient;