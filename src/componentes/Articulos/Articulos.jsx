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
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FestivalIcon from '@mui/icons-material/Festival';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
  },
}));

const Articulos = () => {
  const { id } = useParams();

  const articulos = [
    {
      nombre: 'Monumentos',
      descripcion: 'Descubre los monumentos históricos más importantes.',
      ruta: `http://localhost:5173/ciudad/${id}/monumentos`,
      color: 'primary',
      icon: <TravelExploreIcon fontSize="large" color="primary" />,
    },
    {
      nombre: 'Eventos',
      descripcion: 'Explora los eventos culturales más destacados.',
      ruta: `http://localhost:5173/ciudad/${id}/eventos`,
      color: 'secondary',
      icon: <FestivalIcon fontSize="large" color="secondary" />,
    },
    {
      nombre: 'Comidas',
      descripcion: 'Prueba la gastronomía tradicional de la ciudad.',
      ruta: `http://localhost:5173/ciudad/${id}/comidas`,
      color: 'success',
      icon: <RestaurantMenuIcon fontSize="large" color="success" />,
    },
  ];

  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: 'bold', color: 'white', mb: 5 }}
      >
        ¿Qué deseas explorar?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {articulos.map((articulo) => (
          <Grid item xs={12} sm={6} md={4} key={articulo.nombre}>
            <StyledCard elevation={8}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>{articulo.icon}</Box>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {articulo.nombre}
                </Typography>
                <Divider sx={{ my: 1.5 }} />
                <Typography variant="body2" color="text.secondary">
                  {articulo.descripcion}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button
                  component={Link}
                  to={articulo.ruta}
                  variant="contained"
                  color={articulo.color}
                  size="medium"
                  sx={{ fontWeight: 'bold' }}
                >
                  Ver {articulo.nombre}
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Articulos;
