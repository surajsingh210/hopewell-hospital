import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Container,
  Button,
  SvgIcon,
  Card,
  CardContent,
  Fade,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Custom icons for better visual representation
const PatientIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm9-10v1h2v2h1V8h2V7h-2V5h-1v2h-2z" />
  </SvgIcon>
);

const DoctorIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm8.39 15.56C19.34 19.8 15.31 19 12 19s-7.34.8-8.39 2.56c-.24.36-.39.8-.4 1.26V23h17.58v-.18c-.01-.46-.16-.9-.4-1.26zM4.54 21c.43-.86 3.22-2 7.46-2s7.03 1.14 7.46 2H4.54zM16.5 11.5c0 .32.07.63.18.91C15.83 13.02 14.2 13.9 12 13.9c-2.19 0-3.83-.88-4.68-1.49.11-.28.18-.59.18-.91 0-1.39-1.11-2.5-2.5-2.5S2.5 10.11 2.5 11.5c0 1.24.89 2.27 2.05 2.47.24 2.23 2.46 4.42 7.45 4.42s7.21-2.2 7.45-4.42c1.16-.2 2.05-1.23 2.05-2.47 0-1.39-1.11-2.5-2.5-2.5s-2.5 1.11-2.5 2.5z" />
  </SvgIcon>
);

const HospitalIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8.5-2h3v-3.5H17v-3h-3.5V7h-3v3.5H7v3h3.5z" />
  </SvgIcon>
);

const FirstPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const userTypes = [
    {
      id: 'patient',
      title: 'Patient',
      description: 'Access your medical records, book appointments, and track your health journey',
      path: '/signuppatient',
      icon: PatientIcon,
      color: '#00acc1'
    },
    {
      id: 'doctor',
      title: 'Doctor',
      description: 'Manage your practice, access patient records, and schedule appointments',
      path: '/signupdoctor',
      icon: DoctorIcon,
      color: '#00796b'
    },
    {
      id: 'hospital',
      title: 'Hospital',
      description: 'Streamline operations, manage staff, and improve patient care',
      path: '/signuphospital',
      icon: HospitalIcon,
      color: '#006064'
    }
  ];

  const features = [
    {
      title: 'Easy Appointment Booking',
      description: 'Schedule appointments with just a few taps'
    },
    {
      title: 'Secure Medical Records',
      description: 'Your health data is encrypted and secure'
    },
    {
      title: 'Telemedicine',
      description: 'Connect with healthcare providers remotely'
    },
    {
      title: 'Medication Reminders',
      description: 'Never miss a dose with timely alerts'
    }
  ];

  const handleUserTypeClick = (userType) => {
    console.log(`Selected user type: ${userType.id}`);
    navigate(userType.path);
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        py: 4,
        px: 2,
        backgroundImage: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box
          sx={{
            pt: isMobile ? 6 : 10,
            pb: isMobile ? 6 : 8,
            position: 'relative'
          }}
        >
          <Fade in={true} timeout={1000}>
            <Box>
              <Typography
                variant={isMobile ? "h4" : "h2"}
                component="h1"
                align="center"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: '#00363a',
                  textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                Welcome to HopeWell Hospita
              </Typography>

              <Typography
                variant={isMobile ? "h6" : "h5"}
                component="h2"
                align="center"
                sx={{
                  mb: 4,
                  color: '#00363a',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                Your comprehensive healthcare solution — connecting patients, doctors, and hospitals for seamless care coordination
              </Typography>
            </Box>
          </Fade>

          {/* User Type Selection */}
          <Typography
            variant="h5"
            component="h3"
            align="center"
            sx={{
              mt: 8,
              mb: 4,
              color: '#00363a',
              fontWeight: 600
            }}
          >
            How would you like to join us?
          </Typography>

          <Grid
            container
            spacing={isMobile ? 3 : 4}
            justifyContent="center"
            alignItems="stretch"
          >
            {userTypes.map((type, index) => (
              <Grid item xs={12} sm={6} md={4} key={type.id}>
                <Fade in={true} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Card
                    elevation={4}
                    onClick={() => handleUserTypeClick(type)}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      borderRadius: 3,
                      overflow: 'hidden',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 12px 28px rgba(0, 0, 0, 0.2)'
                      },
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '8px',
                        backgroundColor: type.color
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4, width: '100%' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          height: 100
                        }}
                      >
                        {type.icon({
                          sx: {
                            fontSize: 80,
                            color: type.color
                          }
                        })}
                      </Box>
                      <Typography
                        variant="h5"
                        component="h4"
                        align="center"
                        sx={{
                          color: '#00363a',
                          fontWeight: 'bold',
                          mb: 2
                        }}
                      >
                        {type.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        align="center"
                        sx={{ mb: 2 }}
                      >
                        {type.description}
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          mt: 2,
                          backgroundColor: type.color,
                          borderRadius: 2,
                          textTransform: 'none',
                          py: 1.5,
                          '&:hover': {
                            backgroundColor: theme.palette.augmentColor({
                              color: { main: type.color }
                            }).dark
                          }
                        }}
                      >
                        Sign Up as {type.title}
                      </Button>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>

          {/* Features Section */}
          <Box sx={{ mt: 10, mb: 6 }}>
            <Typography
              variant="h5"
              component="h3"
              align="center"
              sx={{
                mb: 5,
                color: '#00363a',
                fontWeight: 600
              }}
            >
              Key Features
            </Typography>

            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Fade in={true} timeout={1000} style={{ transitionDelay: `${index * 150}ms` }}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: 3,
                        height: '100%',
                        borderRadius: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        transition: 'all 0.3s',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
                        }
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h4"
                        sx={{ mb: 1, color: '#00363a', fontWeight: 600 }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {feature.description}
                      </Typography>
                    </Paper>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Call to Action */}
          <Box
            sx={{
              mt: 6,
              mb: 4,
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'center',
              gap: 3
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#00796b',
                color: 'white',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                boxShadow: '0 4px 12px rgba(0, 121, 107, 0.3)',
                '&:hover': {
                  bgcolor: '#004d40',
                  boxShadow: '0 6px 16px rgba(0, 121, 107, 0.4)'
                }
              }}
              onClick={() => navigate('/Second.jsx')}
            >
              Log In
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: '#00796b',
                borderColor: '#00796b',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                '&:hover': {
                  borderColor: '#004d40',
                  backgroundColor: 'rgba(0, 121, 107, 0.04)'
                }
              }}
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          width: '100%',
          py: 3,
          mt: 'auto',
          backgroundColor: 'rgba(0, 54, 58, 0.05)',
          borderTop: '1px solid rgba(0, 54, 58, 0.1)'
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            align="center"
            color="textSecondary"
          >
            © {new Date().getFullYear()} HealthCare Connect. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default FirstPage;