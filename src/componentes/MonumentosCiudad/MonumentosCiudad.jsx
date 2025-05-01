import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@mui/material';
import { useParams } from 'react-router-dom';

const MonumentosCiudad = ({ monumentos }) => {
  
  if (!monumentos || monumentos.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary" align="center">
        No hay monumentos disponibles para esta ciudad.
      </Typography>
    );
  }

  return (
    <Grid container spacing={4}>
      {monumentos.map((monumento) => (
        <Grid item key={monumento.id} xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="180"
              image={monumento.imagen}
              alt={monumento.nombre}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {monumento.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {monumento.descripcion}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href={`http://localhost:5173/ciudad/${monumento.ciudad.id}/monumento/${monumento.id}`}
              >
                Ver más
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MonumentosCiudad;
