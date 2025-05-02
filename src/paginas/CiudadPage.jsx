import React from 'react';
import { Box, Container, Grid, Typography, Divider, Paper } from '@mui/material';
import Articulos from '../componentes/Articulos/Articulos';
import Ciudad from '../componentes/Ciudad/Ciudad';

const CiudadPage = () => {
  return (
    
    <Box component="main" sx={{ backgroundColor: '#0a192f', minHeight: '100vh' }}>
      {/* Detalle de Ciudad con sombra y margen */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper elevation={8} sx={{ borderRadius: 4, overflow: 'hidden', backgroundColor: '#0d253f', color: '#fff' }}>
          <Ciudad />
        </Paper>
      </Container>

      <Divider sx={{ my: 4, mx: { xs: 2, md: 0 }, borderColor: 'grey.700' }} />

      {/* Sección de Artículos con fondo azul más oscuro */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #0d253f 0%, #0a192f 100%)',
          color: '#fff'
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, mb: 1, color: '#ffffff' }}
          >
            Explora más sobre esta ciudad
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ mb: 6, color: '#b0bec5' }}
          >
            Descubre monumentos, eventos y la gastronomía local.
          </Typography>

          <Grid container spacing={6} justifyContent="center">
            <Articulos />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CiudadPage;
