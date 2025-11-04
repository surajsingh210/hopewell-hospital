import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
  IconButton,
  Snackbar,
  Alert,
  CircularProgress
} from "@mui/material";
import { Visibility, VisibilityOff, Person, Lock, Login as LoginIcon } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

const LoginDoctor = () => {
  const navigate = useNavigate();

  // Enhanced state management
  const [formData, setFormData] = useState({
    identifier: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle password visibility toggle
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.identifier || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log("Login data:", formData);
      // Actual authentication logic would go here

      // On successful login
      setLoading(false);
      navigate('/dashboard'); // Redirect to dashboard on success
    } catch (err) {
      setLoading(false);
      setError("Authentication failed. Please check your credentials.");
    }
  };

  // Handle error alert close
  const handleCloseError = () => {
    setError("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "#B0E2FE",
        padding: 3,
        backgroundImage: "linear-gradient(to bottom right, #B0E2FE, #5DADE2)",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
        sx={{
          color: "#0D47A1",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
        }}
      >
        DOCTOR LOGIN
      </Typography>

      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 450,
          bgcolor: "rgba(255, 255, 255, 0.85)",
          p: 4,
          borderRadius: 3,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{ fontWeight: 600, color: "#1565C0", mb: 2 }}
          >
            Welcome Back, Doctor
          </Typography>

          <Box sx={{ mt: 3 }}>
            <TextField
              name="identifier"
              placeholder="Email / Aadhar / Phone Number / Doctor ID"
              fullWidth
              variant="outlined"
              size="medium"
              value={formData.identifier}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '&:hover fieldset': {
                    borderColor: '#1976D2',
                  },
                }
              }}
            />

            <TextField
              name="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              variant="outlined"
              size="medium"
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="primary" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                      color="primary"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '&:hover fieldset': {
                    borderColor: '#1976D2',
                  },
                }
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1, mb: 3 }}>
            <Typography
              variant="body2"
              color="primary"
              sx={{
                cursor: 'pointer',
                fontWeight: 500,
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
              onClick={() => navigate('/reset-password')}
            >
              Forgot Password?
            </Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <LoginIcon />}
            sx={{
              bgcolor: "#0288D1",
              color: "white",
              py: 1.5,
              borderRadius: 2,
              textTransform: 'uppercase',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: "#01579B",
              }
            }}
          >
            {loading ? "Logging in..." : "LOGIN"}
          </Button>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2">
              Don't have an account?{' '}
              <Typography
                component="span"
                color="primary"
                sx={{
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
                onClick={() => navigate('/register')}
              >
                Sign Up
              </Typography>
            </Typography>
          </Box>
        </form>
      </Paper>

      {/* Error notification */}
      <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginDoctor;