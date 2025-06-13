import React, { useEffect, useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
  Paper,
  Avatar,
  Chip,
  Fade,
  Tooltip
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const getMedalColor = (pos) => {
  if (pos === 1) return '#FFD700';
  if (pos === 2) return '#C0C0C0';
  if (pos === 3) return '#CD7F32';
  return '#1976d2';
};

const Ranking = () => {
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    const getCiudades = async () => {
      const getCityes = await fetch('http://localhost:8080/api/ciudad/rank');
      const data = await getCityes.json();
      setCiudades(data);
    };
    getCiudades();
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 3, md: 7 },
        background: 'linear-gradient(120deg, #0d1b2a 0%, #1976d2 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={10}
        sx={{
          mb: 5,
          px: 4,
          py: 2,
          borderRadius: 5,
          background: 'linear-gradient(90deg, #1976d2 60%, #ec407a 100%)',
          color: '#fff',
          boxShadow: 6,
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ letterSpacing: 1, mb: 1 }}>
          <EmojiEventsIcon sx={{ mb: -0.7, mr: 1, color: '#FFD700' }} />
          Ranking de Ciudades Patrimonio
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#fffde7' }}>
          Las ciudades mejor valoradas por sus visitantes y su historia.
        </Typography>
      </Paper>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: 1100, width: '100%' }}
      >
        {ciudades.map((ciudad, index) => (
          <Fade in key={ciudad.id}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  borderRadius: 5,
                  boxShadow: 6,
                  background: 'linear-gradient(120deg, #1e293b 0%, #1976d2 100%)',
                  color: '#fff',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.18s cubic-bezier(.4,2,.6,1)',
                  '&:hover': {
                    transform: 'scale(1.035) translateY(-6px)',
                    boxShadow: 12,
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={ciudad.imagenPrincipal}
                    alt={ciudad.nombre}
                    sx={{
                      height: 210,
                      objectFit: 'cover',
                      filter: 'brightness(0.92)',
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      borderBottom: '4px solid #1976d2'
                    }}
                  />
                  <Tooltip
                    title={
                      index + 1 === 1
                        ? 'Oro'
                        : index + 1 === 2
                        ? 'Plata'
                        : index + 1 === 3
                        ? 'Bronce'
                        : 'Ranking'
                    }
                    arrow
                  >
                    <Avatar
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        bgcolor: getMedalColor(index + 1),
                        color: '#fff',
                        width: 48,
                        height: 48,
                        fontWeight: 900,
                        fontSize: 26,
                        boxShadow: 4,
                        border: '3px solid #fff'
                      }}
                    >
                      <EmojiEventsIcon fontSize="large" />
                    </Avatar>
                  </Tooltip>
                  <Chip
                    icon={<LocationCityIcon />}
                    label={ciudad.comunidadAutonoma}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'rgba(25,118,210,0.92)',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: 15,
                      px: 1.5,
                      borderRadius: 2,
                      boxShadow: 2
                    }}
                  />
                </Box>
                <CardContent sx={{ pb: 2 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      color: '#fff',
                      mb: 0.5,
                      fontSize: '1.25rem',
                      letterSpacing: 0.5,
                      textShadow: '0 2px 8px #1976d2'
                    }}
                  >
                    {index + 1} - {ciudad.nombre}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#bbdefb',
                      fontWeight: 500,
                      mb: 1
                    }}
                  >
                    {ciudad.provincia}, {ciudad.comunidadAutonoma}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mt: 1,
                      color: '#fffde7',
                      fontWeight: 700,
                      fontSize: 18
                    }}
                  >
                    <span style={{ fontSize: 22, marginRight: 4 }}>⭐</span>
                    Puntuación: {ciudad.puntuacion ? ciudad.puntuacion?.toFixed(2) : "0"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Fade>
        ))}
      </Grid>
    </Box>
  );
};

export default Ranking;
