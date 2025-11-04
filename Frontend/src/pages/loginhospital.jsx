
import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  InputAdornment,
  IconButton
} from "@mui/material";
import { Visibility, VisibilityOff, Person, Lock } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

const LoginHospital = () => {
  const navigate = useNavigate();
  
  // State for input fields
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  // Handle password visibility toggle
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create login data object
    const loginData = {
      identifier,
      password
    };
    
    console.log("Login data:", loginData);
    // Here you would typically authenticate with your backend
    // and redirect based on user role
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
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={3}>
        LOGIN
      </Typography>

      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 450,
          bgcolor: "rgba(247, 241, 241, 0.49)",
          p: 4,
          borderRadius: 2,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="h6" align="center" gutterBottom>
            Welcome Back
          </Typography>
          
          <Box sx={{ mt: 3 }}>
            <TextField 
              placeholder="Email / Aadhar / Phone Number" 
              fullWidth 
              variant="outlined" 
              size="medium"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                }
              }}
            />
            
            <TextField 
              placeholder="Password" 
              type={showPassword ? "text" : "password"}
              fullWidth 
              variant="outlined" 
              size="medium"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
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
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Forgot Password?
            </Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ 
              bgcolor: "#0288D1", 
              color: "white", 
              py: 1.5,
              borderRadius: 2,
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}
          >
            LOGIN
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
                onClick={() => navigate('/welcome')}
              >
                Sign Up
              </Typography>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginHospital;
