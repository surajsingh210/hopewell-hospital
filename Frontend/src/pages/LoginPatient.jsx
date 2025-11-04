import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    InputAdornment,
    IconButton,
    Container,
    Card,
    CardContent,
    Link,
    Fade,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {
    Visibility,
    VisibilityOff,
    Person,
    Lock,
    HealthAndSafety,
    ArrowBack
} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

const LoginPatient = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // State for input fields
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Handle password visibility toggle
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Create login data object
        const loginData = {
            identifier,
            password
        };

        console.log("Login data:", loginData);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Here you would typically authenticate with your backend
            // and redirect based on user role
            navigate('/doctor/dashboard');
        }, 1500);
    };
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login', {
                username,
                password,
            });
            setMessage(response.data.message);
            // Handle successful login, e.g., store token, redirect, etc.
        } catch (error) {
            setMessage(error.response.data.message || 'Login failed');
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                width: "100%",
                backgroundImage: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
                padding: 3,
                position: "relative"
            }}
        >
            {/* Back button */}
            <IconButton
                sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    bgcolor: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                    }
                }}
                onClick={() => navigate(-1)}
            >
                <ArrowBack />
            </IconButton>

            <Container
                maxWidth="sm"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    py: isMobile ? 6 : 8
                }}
            >
                <Fade in={true} timeout={800}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%"
                        }}
                    >
                        {/* Logo and branding */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 4
                            }}
                        >
                            <HealthAndSafety
                                sx={{
                                    fontSize: 40,
                                    color: "#00796b",
                                    mr: 1
                                }}
                            />
                            <Typography
                                variant="h4"
                                component="h1"
                                sx={{
                                    fontWeight: 700,
                                    color: "#00363a"
                                }}
                            >
                                MAHI
                            </Typography>
                        </Box>

                        <Typography
                            variant="h5"
                            component="h2"
                            fontWeight="600"
                            mb={4}
                            color="#00363a"
                            textAlign="center"
                        >
                            Patient Login
                        </Typography>

                        <Card
                            elevation={4}
                            sx={{
                                width: "100%",
                                borderRadius: 3,
                                overflow: "hidden",
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                position: "relative",
                                transition: "transform 0.3s ease-in-out",
                                '&:hover': {
                                    transform: 'translateY(-5px)'
                                },
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '6px',
                                    backgroundColor: '#00796b'
                                }
                            }}
                        >
                            <CardContent sx={{ p: isMobile ? 3 : 4 }}>
                                <form onSubmit={handleSubmit}>
                                    <Typography
                                        variant="h6"
                                        align="center"
                                        gutterBottom
                                        sx={{
                                            color: "#00363a",
                                            fontWeight: 500,
                                            mb: 3
                                        }}
                                    >
                                        Welcome Back, Patient
                                    </Typography>

                                    <Box sx={{ mt: 2 }}>
                                        <TextField
                                            placeholder="Patient ID / Email / Phone Number"
                                            fullWidth
                                            variant="outlined"
                                            size="medium"
                                            value={identifier}
                                            onChange={(e) => setIdentifier(e.target.value)}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Person sx={{ color: "#00796b" }} />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            sx={{
                                                mb: 3,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#00796b',
                                                    },
                                                },
                                                '& .MuiInputLabel-root.Mui-focused': {
                                                    color: '#00796b',
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
                                                        <Lock sx={{ color: "#00796b" }} />
                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={handleTogglePasswordVisibility}
                                                            edge="end"
                                                        >
                                                            {showPassword ?
                                                                <VisibilityOff sx={{ color: "#00796b" }} /> :
                                                                <Visibility sx={{ color: "#00796b" }} />
                                                            }
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#00796b',
                                                    },
                                                },
                                                '& .MuiInputLabel-root.Mui-focused': {
                                                    color: '#00796b',
                                                }
                                            }}
                                        />
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1, mb: 3 }}>
                                        <Link
                                            component="button"
                                            type="button"
                                            variant="body2"
                                            onClick={() => navigate('/forgot-password')}
                                            sx={{
                                                color: "#00796b",
                                                textDecoration: 'none',
                                                fontWeight: 500,
                                                '&:hover': {
                                                    textDecoration: 'underline'
                                                }
                                            }}
                                        >
                                            Forgot Password?
                                        </Link>
                                    </Box>

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        disabled={isLoading}
                                        sx={{
                                            bgcolor: "#00796b",
                                            color: "white",
                                            py: 1.5,
                                            borderRadius: 2,
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            fontSize: '1rem',
                                            boxShadow: '0 4px 10px rgba(0, 121, 107, 0.3)',
                                            '&:hover': {
                                                bgcolor: "#004d40",
                                                boxShadow: '0 6px 14px rgba(0, 121, 107, 0.4)',
                                            }
                                        }}
                                        onClick={
                                            isLoading ? null : handleSubmit}
                                    >
                                        {isLoading ? "Signing in..." : "Sign In"}
                                    </Button>

                                    <Box sx={{ mt: 4, textAlign: 'center' }}>
                                        <Typography variant="body2" color="textSecondary">
                                            Don't have an account?{' '}
                                            <Link
                                                component="button"
                                                type="button"
                                                variant="body2"
                                                onClick={() => navigate('/signupdoctor')}
                                                sx={{
                                                    color: "#00796b",
                                                    fontWeight: 600,
                                                    textDecoration: 'none',
                                                    '&:hover': {
                                                        textDecoration: 'underline'
                                                    }
                                                }}
                                            >
                                                Register Now
                                            </Link>
                                        </Typography>
                                    </Box>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Footer message */}
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ mt: 4, textAlign: 'center' }}
                        >
                            By logging in, you agree to our{' '}
                            <Link
                                component="button"
                                type="button"
                                variant="body2"
                                onClick={() => navigate('/terms')}
                                sx={{
                                    color: "#00796b",
                                    textDecoration: 'none',
                                    '&:hover': { textDecoration: 'underline' }
                                }}
                            >
                                Terms of Service
                            </Link>
                            {' '}and{' '}
                            <Link
                                component="button"
                                type="button"
                                variant="body2"
                                onClick={() => navigate('/privacy')}
                                sx={{
                                    color: "#00796b",
                                    textDecoration: 'none',
                                    '&:hover': { textDecoration: 'underline' }
                                }}
                            >
                                Privacy Policy
                            </Link>
                        </Typography>
                    </Box>
                </Fade>
            </Container>
        </Box>
    );
};

export default LoginPatient;