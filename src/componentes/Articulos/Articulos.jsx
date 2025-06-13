import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Divider,
  Fade
} from '@mui/material';
import { styled } from '@mui/material/styles';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FestivalIcon from '@mui/icons-material/Festival';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 20,
  background: 'linear-gradient(120deg, #0d253f 60%, #1976d2 100%)',
  color: '#fff',
  boxShadow: '0 8px 32px 0 rgba(44,62,80,0.18)',
  transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s cubic-bezier(.4,2,.6,1)',
  '&:hover': {
    transform: 'translateY(-10px) scale(1.04)',
    boxShadow: '0 12px 32px 0 rgba(25,118,210,0.25)',
  },
}));

const Articulos = () => {
  const { id } = useParams();

  const articulos = [
    {
      nombre: 'Monumentos',
      descripcion: 'Descubre los monumentos históricos más importantes.',
      ruta: `/ciudad/${id}/monumentos`,
      color: 'primary',
      icon: <TravelExploreIcon fontSize="large" color="primary" />,
    },
    {
      nombre: 'Eventos',
      descripcion: 'Explora los eventos culturales más destacados.',
      ruta: `/ciudad/${id}/eventos`,
      color: 'secondary',
      icon: <FestivalIcon fontSize="large" color="secondary" />,
    },
    {
      nombre: 'Comidas',
      descripcion: 'Prueba la gastronomía tradicional de la ciudad.',
      ruta: `/ciudad/${id}/comidas`,
      color: 'success',
      icon: <RestaurantMenuIcon fontSize="large" color="success" />,
    },
  ];

  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 900,
          color: '#fff',
          mb: 5,
          letterSpacing: 1.2,
          textShadow: '0 2px 8px #1976d2'
        }}
      >
        ¿Qué deseas explorar?
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {articulos.map((articulo, idx) => (
          <Fade in key={articulo.nombre} timeout={700 + idx * 200}>
            <Grid item xs={12} sm={4} md={4} display="flex" justifyContent="center">
              <StyledCard elevation={12} sx={{ width: 320, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent sx={{ textAlign: 'center', pb: 0 }}>
                  <Box
                    sx={{
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: 48
                    }}
                  >
                    {articulo.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#fffde7', mb: 1 }}>
                    {articulo.nombre}
                  </Typography>
                  <Divider sx={{ my: 1.5, bgcolor: '#1976d2', opacity: 0.3 }} />
                  <Typography variant="body1" sx={{ color: '#bbdefb', fontWeight: 500 }}>
                    {articulo.descripcion}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 3, pt: 2 }}>
                  <Button
                    component={Link}
                    to={articulo.ruta}
                    variant="contained"
                    color={articulo.color}
                    size="large"
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.08rem',
                      px: 4,
                      py: 1.2,
                      borderRadius: 3,
                      boxShadow: 3,
                      letterSpacing: 1,
                      background: articulo.color === 'primary'
                        ? 'linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)'
                        : articulo.color === 'secondary'
                        ? 'linear-gradient(90deg, #ec407a 60%, #f06292 100%)'
                        : 'linear-gradient(90deg, #43a047 60%, #81c784 100%)',
                      color: '#fff',
                      '&:hover': {
                        filter: 'brightness(1.1)',
                        transform: 'scale(1.04)'
                      }
                    }}
                  >
                    Ver {articulo.nombre}
                  </Button>
                </CardActions>
              </StyledCard>
            </Grid>
          </Fade>
        ))}
      </Grid>
    </Box>
  );
};

export default Articulos;
