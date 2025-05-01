import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
  CircularProgress,
  Alert
} from '@mui/material';

import { LocationOn, CalendarMonth, Public } from '@mui/icons-material';

const Ciudad = () => {
  const { id } = useParams();
  const [ciudad, setCiudad] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCiudad = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/ciudad/${id}`);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setCiudad(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCiudad();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" colo sx={{ py: 4 }}>
      <Card sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: 4 }}>
        <CardMedia
          component="img"
          height="300"
          image={ciudad.imagenPrincipal}
          alt={ciudad.nombre}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            {ciudad.nombre}
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <LocationOn color="primary" />
            <Typography variant="body1">
              {ciudad.provincia}, {ciudad.comunidadAutonoma}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <CalendarMonth color="secondary" />
            <Typography variant="body1">
              Declarada Patrimonio el{' '}
              {new Date(ciudad.fechaPatrimonio).toLocaleDateString()}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
            <Public color="action" />
            <Typography variant="body2">
              Coordenadas: {ciudad.latitud}, {ciudad.longitud}
            </Typography>
          </Stack>

          <Typography variant="body1" color="text.secondary">
            {ciudad.descripcion}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Ciudad;
