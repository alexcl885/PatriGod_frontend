import React from 'react';
import { Box, Container, Grid, Typography, Avatar, Card, CardContent, Button, Stack, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const valores = [
  { title: 'Visión', description: 'Crear una comunidad global apasionada por el patrimonio cultural.' },
  { title: 'Misión', description: 'Facilitar el descubrimiento y la valoración de lugares históricos.' },
  { title: 'Equipo', description: 'Un grupo de desarrolladores y diseñadores dedicados.' }
];

const Acerca = () => {
  return (
    <Box component="section" sx={{
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      py: { xs: 6, md: 12 }
    }}>
      <Container maxWidth="lg">
        {/* Hero Title */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Acerca de <Box component="span" color="primary.main">PatriGod</Box>
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Tu guía interactiva para explorar y valorar el Patrimonio de la Humanidad en España.
          </Typography>
        </Box>

        {/* Valores */}
        <Grid container spacing={4} mb={8}>
          {valores.map((item) => (
            <Grid item key={item.title} xs={12} sm={6} md={4}>
              <Card sx={{
                height: '100%',
                p: 3,
                boxShadow: 4,
                borderRadius: 3,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-8px)' }
              }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar sx={{
                    bgcolor: 'primary.main',
                    width: 56,
                    height: 56,
                    mb: 2
                  }}>
                    {item.title.charAt(0)}
                  </Avatar>
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ bgcolor: 'grey.300', mb: 8 }} />

        {/* Call to Action */}
        <Stack alignItems="center" spacing={2} mb={6}>
          <Typography variant="h4" gutterBottom>
            ¿Listo para descubrir tu próxima aventura?
          </Typography>
          <Button variant="contained" size="large" sx={{ px: 4, py: 1.5, fontWeight: 600 }}> <Link to={"/"}>Explorar Ciudades</Link> </Button>
        </Stack>

        {/* Equipo (Testimonios) */}
        <Box textAlign="center">
          <Typography variant="h4" component="h3" gutterBottom>
            Nuestro Equipo
          </Typography>
          <Box mt={4}>
            <Grid container spacing={4} justifyContent="center">
              {['Alejandro'].map((name) => (
                <Grid key={name} item xs={6} sm={4} md={2}>
                  <Box textAlign="center">
                    <Avatar
                      sx={{ width: 80, height: 80, m: 'auto', mb: 1 }}
                      alt={name}
                      src={`/images/team/${name.toLowerCase()}.jpg`}
                    />
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                      {name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Desarrollador Full Stack
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Acerca;
