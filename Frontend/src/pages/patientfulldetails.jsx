import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Avatar,
  Divider,
  AppBar,
  Toolbar,
  Container,
  Card,
  CardContent
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CakeIcon from '@mui/icons-material/Cake';
import WcIcon from '@mui/icons-material/Wc';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';

const PatientFullDetails = () => {
  // Dummy patient data
  const patientData = {
    fullName: "Ananya Desai",
    phoneNo: "+91 9876543210",
    email: "ananya.desai@example.com",
    aadhar: "1234 5678 9012",
    profilePic: "https://randomuser.me/api/portraits/men/44.jpg", // Using a random profile image
    dob: "1998-05-15",
    gender: "Female",
    fathersName: "Rajesh Desai",
    weight: "54",
    address: "42, Sunshine Apartments, MG Road",
    city: "Bangalore",
    state: "Karnataka",
    bloodGroup: "O+",
    allergies: "Peanuts, Penicillin",
    lastVisit: "2023-10-12"
  };

  // Calculate age from DOB
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  // Format date to a more readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Information sections with icons
  const personalInfo = [
    { icon: PersonIcon, label: "Full Name", value: patientData.fullName },
    { icon: PhoneIcon, label: "Phone Number", value: patientData.phoneNo },
    { icon: EmailIcon, label: "Email", value: patientData.email },
    { icon: CreditCardIcon, label: "Aadhar", value: patientData.aadhar },
    { icon: CakeIcon, label: "Date of Birth", value: `${formatDate(patientData.dob)} (${calculateAge(patientData.dob)} years)` },
    { icon: WcIcon, label: "Gender", value: patientData.gender },
    { icon: FamilyRestroomIcon, label: "Father's Name", value: patientData.fathersName },
    { icon: MonitorWeightIcon, label: "Weight", value: `${patientData.weight} kg` },
  ];

  const addressInfo = [
    { icon: HomeIcon, label: "Address", value: patientData.address },
    { icon: LocationCityIcon, label: "City", value: patientData.city },
    { icon: PublicIcon, label: "State", value: patientData.state },
  ];

  const medicalInfo = [
    { label: "Blood Group", value: patientData.bloodGroup },
    { label: "Allergies", value: patientData.allergies },
    { label: "Last Visit", value: formatDate(patientData.lastVisit) },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ bgcolor: '#2196f3', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
        <Toolbar>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              color: 'white',
              ml: 1
            }}
          >
            MAHI
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ p: 3, bgcolor: '#B0E2FE', minHeight: 'calc(100vh - 64px)' }}>
        <Container maxWidth="lg">
          <Paper 
            elevation={0}
            sx={{ 
              bgcolor: 'rgba(247, 241, 241, 0.49)', 
              borderRadius: 2,
              p: 3,
              mb: 3
            }}
          >
            <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
              Patient Details
            </Typography>

            <Grid container spacing={3}>
              {/* Profile Section */}
              <Grid item xs={12} md={4}>
                <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.7)', borderRadius: 2 }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
                    <Avatar 
                      src={patientData.profilePic} 
                      alt={patientData.fullName}
                      sx={{ width: 150, height: 150, mb: 2 }}
                    />
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                      {patientData.fullName}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                      Patient ID: PT-{Math.floor(1000 + Math.random() * 9000)}
                    </Typography>
                    <Box sx={{ 
                      bgcolor: '#e3f2fd', 
                      px: 2, 
                      py: 0.5, 
                      borderRadius: 5,
                      display: 'inline-block'
                    }}>
                      <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                        Blood Group: {patientData.bloodGroup}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Personal Information */}
              <Grid item xs={12} md={8}>
                <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.7)', borderRadius: 2, height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      Personal Information
                    </Typography>
                    <Grid container spacing={2}>
                      {personalInfo.map((info, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <info.icon sx={{ mr: 1, color: '#0288d1' }} />
                            <Box>
                              <Typography variant="caption" color="text.secondary">
                                {info.label}
                              </Typography>
                              <Typography variant="body1">
                                {info.value}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              {/* Address Information */}
              <Grid item xs={12} md={6}>
                <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.7)', borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      Address Information
                    </Typography>
                    {addressInfo.map((info, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <info.icon sx={{ mr: 1, color: '#0288d1' }} />
                        <Box>
                          <Typography variant="caption" color="text.secondary">
                            {info.label}
                          </Typography>
                          <Typography variant="body1">
                            {info.value}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Grid>

              {/* Medical History */}
              <Grid item xs={12} md={6}>
                <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.7)', borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      Medical Information
                    </Typography>
                    <Grid container spacing={2}>
                      {medicalInfo.map((info, index) => (
                        <Grid item xs={12} key={index}>
                          <Box sx={{ mb: 1 }}>
                            <Typography variant="caption" color="text.secondary">
                              {info.label}
                            </Typography>
                            <Typography variant="body1">
                              {info.value}
                            </Typography>
                          </Box>
                          {index < medicalInfo.length - 1 && <Divider sx={{ my: 1 }} />}
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default PatientFullDetails;