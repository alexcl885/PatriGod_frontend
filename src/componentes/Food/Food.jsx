import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Chip,
  Stack,
  Divider
} from '@mui/material';

const Comida = ({ comida }) => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      <Card sx={{ borderRadius: 4, boxShadow: 4, overflow: 'hidden' }}>
        {/* Imagen principal */}
        <CardMedia
          component="img"
          height="320"
          image={comida.image}
          alt={comida.name}
          sx={{ objectFit: 'cover' }}
        />

        <Box sx={{ display: { xs: 'block', md: 'flex' } }}>
          {/* Información de la comida */}
          <CardContent sx={{ flex: 1, p: 4 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom color="secondary.main">
              {comida.name}
            </Typography>

            <Typography variant="body1" paragraph>
              {comida.description}
            </Typography>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2"><strong>Tipo:</strong> {comida.type ? comida.type : "Buena comida"}</Typography>
                <Typography variant="body2"><strong>Origen:</strong> {comida.origin}</Typography>
                <Typography variant="body2"><strong>Calorías:</strong> {comida.approxCalories} kcal</Typography>
                <Typography variant="body2"><strong>Vegetariano:</strong> {comida.suitableForVegetarians ? "Sí" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2"><strong>Momento:</strong> {comida.consumptionMoment}</Typography>
                <Typography variant="body2"><strong>Acompañamientos:</strong> {comida.recommendedSideDishes}</Typography>
                <Typography variant="body2"><strong>Ingredientes:</strong> {comida.mainIngredients}</Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Box mt={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Curiosidades
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {comida.curiosities}
              </Typography>
            </Box>
          </CardContent>

          <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />

          {/* Información de la ciudad */}
          <CardContent sx={{ width: { md: '40%' }, p: 4, backgroundColor: '#fafafa' }}>
            <CardMedia
              component="img"
              height="180"
              image={comida.city.mainImage}
              alt={comida.city.name}
              sx={{ borderRadius: 2, mb: 2, objectFit: 'cover' }}
            />
            <Typography variant="h5" fontWeight={600} gutterBottom color="primary.main">
              {comida.city.name}
            </Typography>
            <Typography variant="body2" paragraph color="text.secondary">
              {comida.city.description}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip label={`Provincia: ${comida.city.province}`} size="small" />
              <Chip label={`Comunidad: ${comida.city.autonomousCommunity}`} size="small" />
              <Chip
                label={`Patrimonio ${new Date(comida.city.heritageDate).getFullYear()}`}
                size="small"
                color="success"
              />
            </Stack>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default Comida;
