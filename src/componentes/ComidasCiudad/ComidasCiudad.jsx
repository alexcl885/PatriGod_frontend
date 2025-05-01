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

const ComidasCiudad = ({ comidas }) => {
  if (!comidas || comidas.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary" align="center">
        No hay comidas disponibles para esta ciudad.
      </Typography>
    );
  }

  return (
    <Grid container spacing={4}>
      {comidas.map((comida) => (
        <Grid item key={comida.id} xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="180"
              image={`/assets/comidas/${comida.imagen}`} // Asegúrate de que esta ruta coincida con donde guardas las imágenes
              alt={comida.nombre}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {comida.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {comida.descripcion}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Ciudad:</strong> {comida.ciudad.nombre}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href={`http://localhost:5173/ciudad/${comida.ciudad.id}/comida/${comida.id}`}
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

export default ComidasCiudad;
