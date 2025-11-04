import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TablePagination,
  AppBar,
  Toolbar,
  InputBase,
  IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

// Sample patient data
const samplePatients = [
  { id: 1, name: 'Rahul Sharma', age: 45, gender: 'Male', condition: 'Hypertension' },
  { id: 2, name: 'Priya Patel', age: 32, gender: 'Female', condition: 'Diabetes' },
  { id: 3, name: 'Amit Kumar', age: 28, gender: 'Male', condition: 'Asthma' },
  { id: 4, name: 'Sneha Gupta', age: 56, gender: 'Female', condition: 'Arthritis' },
  { id: 5, name: 'Vikram Singh', age: 39, gender: 'Male', condition: 'Migraine' },
  { id: 6, name: 'Neha Reddy', age: 42, gender: 'Female', condition: 'Thyroid' },
  { id: 7, name: 'Rajesh Verma', age: 51, gender: 'Male', condition: 'Heart Disease' },
  { id: 8, name: 'Ananya Desai', age: 24, gender: 'Female', condition: 'Anemia' },
  { id: 9, name: 'Suresh Joshi', age: 63, gender: 'Male', condition: 'Diabetes' },
  { id: 10, name: 'Meera Kapoor', age: 37, gender: 'Female', condition: 'Allergies' },
  { id: 11, name: 'Deepak Malhotra', age: 48, gender: 'Male', condition: 'Back Pain' },
  { id: 12, name: 'Kavita Sharma', age: 29, gender: 'Female', condition: 'Pregnancy' },
];

const PatientListPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle view patient details
  const handleViewPatient = (patientId) => {
    console.log(`Viewing patient with ID: ${patientId}`);
    // Navigate to patient details page
    // navigate(`/patient/${patientId}`);
  };

  // Filter patients based on search term
  const filteredPatients = samplePatients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current page patients
  const currentPatients = filteredPatients.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
        <Paper 
          elevation={0}
          sx={{ 
            bgcolor: 'rgba(247, 241, 241, 0.49)', 
            borderRadius: 2,
            p: 3,
            mb: 3
          }}
        >
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            Patient List
          </Typography>
          
          {/* Search Bar */}
          <Paper
            component="form"
            sx={{ 
              p: '2px 4px', 
              display: 'flex', 
              alignItems: 'center', 
              width: 400, 
              mb: 3,
              borderRadius: 2
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search patients by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          {/* Patient Table */}
          <TableContainer component={Paper} sx={{ borderRadius: 2, mb: 2 }}>
            <Table>
              <TableHead sx={{ bgcolor: '#e3f2fd' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Patient Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Gender</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Condition</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentPatients.map((patient) => (
                  <TableRow key={patient.id} hover>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.gender}</TableCell>
                    <TableCell>{patient.condition}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<VisibilityIcon />}
                        onClick={() => handleViewPatient(patient.id)}
                        sx={{ 
                          bgcolor: '#0288D1',
                          borderRadius: 2,
                          '&:hover': {
                            bgcolor: '#01579b'
                          }
                        }}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
          {/* Pagination */}
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredPatients.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default PatientListPage;