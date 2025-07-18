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
import api from '../../services/api';

const City = () => {

  const { id } = useParams();
  
  const [city, setCity] = useState(null);
  
  const [loading, setLoading] = useState(true);
  
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await api.get(`city/${id}`);
        setCity(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCity();
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

  // Convert heritageDate array to Date
  let heritageDateStr = '';
  if (Array.isArray(city.heritageDate)) {
    // [year, month, day] (month is 1-based)
    const [year, month, day] = city.heritageDate;
    heritageDateStr = new Date(year, month - 1, day).toLocaleDateString();
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Card sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: 4 }}>
        <CardMedia
          component="img"
          height="300"
          image={city.mainImage}
          alt={city.name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            {city.name}
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <LocationOn color="primary" />
            <Typography variant="body1">
              {city.province}, {city.autonomousCommunity}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <CalendarMonth color="secondary" />
            <Typography variant="body1">
              Declared World Heritage on {heritageDateStr}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
            <Public color="action" />
            <Typography variant="body2">
              Coordinates: {city.latitude}, {city.longitude}
            </Typography>
          </Stack>

          <Typography variant="body1" color="text.secondary">
            {city.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default City;
