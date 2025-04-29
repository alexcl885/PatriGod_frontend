import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import MapaCiudades from '../componentes/MapaCiudades/MapaCiudades';

const HomePage = () => {
  return (
    <Box component="main">

      <Box sx={{ backgroundColor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4, fontWeight: 700 }}>
            Ciudades Patrimonio de la Humanidad
          </Typography>
          <MapaCiudades />
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py:1 }}>
        
        <Typography variant="h6" align="center" color="white" paragraph>
          Explora el patrimonio cultural de España de manera interactiva.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 2 }}>
          <Button variant="contained" size="large" href="#/explorar">
            Explorar Ciudades
          </Button>
          <Button variant="outlined" size="large" href="#/contacto">
            Contáctanos
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomePage;
