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
          image={comida.imagen}
          alt={comida.nombre}
          sx={{ objectFit: 'cover' }}
        />

        <Box sx={{ display: { xs: 'block', md: 'flex' } }}>
          {/* Información de la comida */}
          <CardContent sx={{ flex: 1, p: 4 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom color="secondary.main">
              {comida.nombre}
            </Typography>

            <Typography variant="body1" paragraph>
              {comida.descripcion}
            </Typography>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2"><strong>Tipo:</strong> {comida.tipo}</Typography>
                <Typography variant="body2"><strong>Origen:</strong> {comida.origen}</Typography>
                <Typography variant="body2"><strong>Calorías:</strong> {comida.caloriasAprox} kcal</Typography>
                <Typography variant="body2"><strong>Vegetariano:</strong> {comida.aptoVegetarianos ? "Sí" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2"><strong>Momento:</strong> {comida.momentoConsumo}</Typography>
                <Typography variant="body2"><strong>Acompañamientos:</strong> {comida.acompañamientosRecomendados}</Typography>
                <Typography variant="body2"><strong>Ingredientes:</strong> {comida.ingredientesPrincipales}</Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Box mt={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Curiosidades
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {comida.curiosidades}
              </Typography>
            </Box>
          </CardContent>

          <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />

          {/* Información de la ciudad */}
          <CardContent sx={{ width: { md: '40%' }, p: 4, backgroundColor: '#fafafa' }}>
            <CardMedia
              component="img"
              height="180"
              image={comida.ciudad.imagenPrincipal}
              alt={comida.ciudad.nombre}
              sx={{ borderRadius: 2, mb: 2, objectFit: 'cover' }}
            />
            <Typography variant="h5" fontWeight={600} gutterBottom color="primary.main">
              {comida.ciudad.nombre}
            </Typography>
            <Typography variant="body2" paragraph color="text.secondary">
              {comida.ciudad.descripcion}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip label={`Provincia: ${comida.ciudad.provincia}`} size="small" />
              <Chip label={`Comunidad: ${comida.ciudad.comunidadAutonoma}`} size="small" />
              <Chip
                label={`Patrimonio ${new Date(comida.ciudad.fechaPatrimonio).getFullYear()}`}
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
