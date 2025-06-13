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
  Divider,
  Button,
  Link
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';

const Evento = ({evento}) => {
  
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#eef2f5", minHeight: "100vh" }}>
      <Card sx={{ borderRadius: 4, boxShadow: 4, overflow: 'hidden' }}>
        {/* Banner del evento */}
        <CardMedia
          component="img"
          height="320"
          image={evento.imagen}
          alt={evento.nombre}
          sx={{ objectFit: 'cover' }}
        />

        {/* Contenido principal */}
        <Box sx={{ display: { xs: 'block', md: 'flex' } }}>
          {/* Detalles del evento */}
          <CardContent sx={{ flex: 1, p: 4 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom color="secondary.main">
              {evento.nombre}
            </Typography>
            <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
              <Chip icon={<EventIcon />} label={new Date(evento.fecha).toLocaleDateString()} color="info" />
              <Chip icon={<AccessTimeIcon />} label={evento.horaEvento.slice(0,5)} color="info" />
              <Chip icon={<PlaceIcon />} label={evento.lugar} color="info" />
              <Chip label={evento.tipoEvento} color="primary" />
            </Stack>

            <Typography variant="body1" paragraph>
              {evento.informacionEvento}
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2"><strong>Organizador:</strong> {evento.organizador}</Typography>
                <Typography variant="body2"><strong>Precio:</strong> {evento.precio}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2"><strong>Duración:</strong> {evento.duracion} min</Typography>
                <Link href={evento.webOficial} target="_blank" underline="none">
                  <Button variant="outlined" startIcon={<LanguageIcon />}>
                    Web Oficial
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </CardContent>

          <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />

          {/* Información de la ciudad */}
          <CardContent sx={{ width: { md: '40%' }, p: 4, backgroundColor: '#fafafa' }}>
            <CardMedia
              component="img"
              height="180"
              image={evento.ciudad.imagenPrincipal}
              alt={evento.ciudad.nombre}
              sx={{ borderRadius: 2, mb: 2, objectFit: 'cover' }}
            />
            <Typography variant="h5" fontWeight={600} gutterBottom color="primary.main">
              {evento.ciudad.nombre}
            </Typography>
            <Typography variant="body2" paragraph color="text.secondary">
              {evento.ciudad.descripcion}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip label={`Provincia: ${evento.ciudad.provincia}`} size="small" />
              <Chip label={`Comunidad: ${evento.ciudad.comunidadAutonoma}`} size="small" />
              <Chip
                label={`Patrimonio ${new Date(evento.ciudad.fechaPatrimonio).getFullYear()}`}
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

export default Evento;
