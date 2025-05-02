import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';

const EventosCiudad = ({ eventos }) => {
  if (!eventos || eventos.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary" align="center">
        No hay eventos disponibles para esta ciudad.
      </Typography>
    );
  }

  return (
    <Grid container spacing={4}>
      {eventos.map((evento) => (
        <Grid item key={evento.id} xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="180"
              image={evento.ciudad.imagenPrincipal}
              alt={evento.nombre}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {evento.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {evento.descripcion}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Ciudad:</strong> {evento.ciudad.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Fecha del evento:</strong> {evento.fecha}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
              >
                <Link to={`http://localhost:5173/ciudad/${evento.ciudad.id}/eventos/${evento.id}`}>
                Ver más
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default EventosCiudad;
