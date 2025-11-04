
import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Container
} from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HistoryIcon from '@mui/icons-material/History';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';

const DoctorHomepage = () => {
  const menuItems = [
    { 
      id: 'patientQueue', 
      title: 'PATIENT',
      subtitle: 'QUEUE',
      icon: PeopleAltIcon
    },
    { 
      id: 'viewHistory', 
      title: 'VIEW',
      subtitle: 'HISTORY',
      icon: HistoryIcon,
      color: '#0288d1'
    },
    { 
      id: 'addCases', 
      title: 'ADD',
      subtitle: 'CASES',
      icon: AddCircleIcon
    }
  ];

  const handleItemClick = (itemId) => {
    console.log(`Selected item: ${itemId}`);
    // Add navigation or other logic here
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        bgcolor: '#B0E2FE',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          bgcolor: '#2196f3',
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: 'white',
            ml: 1
          }}
        >
          MAHI
        </Typography>
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <DashboardIcon sx={{ color: '#2196f3' }} />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          width: '100%'
        }}
      >
        <Container maxWidth="md">
          <Grid 
            container 
            spacing={3} 
            justifyContent="center"
            alignItems="center"
            sx={{ p: 2 }}
          >
            {menuItems.map((item) => (
              <Grid item xs={12} sm={4} key={item.id}>
                <Paper
                  elevation={0}
                  onClick={() => handleItemClick(item.id)}
                  sx={{
                    bgcolor: 'rgba(247, 241, 241, 0.49)',
                    borderRadius: 2,
                    p: 4,
                    height: 240,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    margin: '0 auto', // Center the card horizontally
                    '&:hover': {
                      bgcolor: 'rgba(247, 241, 241, 0.6)',
                      transform: 'scale(1.03)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3
                    }}
                  >
                    <item.icon 
                      sx={{ 
                        fontSize: 90,
                        color: item.color || 'black'
                      }} 
                    />
                  </Box>
                  <Typography 
                    variant="h5"
                    component="p" 
                    align="center"
                    sx={{
                      color: '#0288d1',
                      fontWeight: 'bold',
                      lineHeight: 1.2
                    }}
                  >
                    {item.title}
                  </Typography>
                  {item.subtitle && (
                    <Typography 
                      variant="h5"
                      component="p" 
                      align="center"
                      sx={{
                        color: '#0288d1',
                        fontWeight: 'bold',
                        lineHeight: 1.2
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default DoctorHomepage;
