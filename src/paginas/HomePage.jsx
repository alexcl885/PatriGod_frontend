import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  Grid
} from '@mui/material';
import MapaCiudades from '../componentes/MapaCiudades/MapaCiudades';
import { Link as RouterLink } from 'react-router-dom';

const HomePage = () => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box component="main">
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 400, md: 600 },
          backgroundImage: 'url(https://images.unsplash.com/photo-1587502537745-84cf43f90305?auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.4)'
          }
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff'
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2.5rem', md: '4rem' },
              mb: 2,
              textShadow: '0 4px 14px rgba(0,0,0,0.6)'
            }}
          >
            Descubre las Ciudades Patrimonio
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 300,
              mb: 4,
              textShadow: '0 2px 8px rgba(0,0,0,0.6)',
              color: theme.palette.grey[200]
            }}
          >
            Explora la historia, cultura y belleza de España en un solo lugar.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              component={RouterLink}
              to="/explorar"
              variant="contained"
              size="large"
              sx={{ px: 5, py: 1.5, fontWeight: 600 }}
            >
              Comenzar
            </Button>
            <Button
              component={RouterLink}
              to="/acerca"
              variant="outlined"
              size="large"
              sx={{ px: 5, py: 1.5, borderColor: '#fff', color: '#fff' }}
            >
              Más información
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Map Preview Section */}
      <Box
        sx={{
          py: { xs: 6, md: 12 },
          backgroundColor: theme.palette.background.paper
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 700, mb: 4 }}
          >
            Mapa interactivo en tiempo real
          </Typography>
          <Grid container justifyContent="center">
              <MapaCiudades />
          </Grid>
        </Container>
      </Box>      
    </Box>
  );
};

export default HomePage;