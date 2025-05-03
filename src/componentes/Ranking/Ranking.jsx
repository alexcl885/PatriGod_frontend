import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Box } from '@mui/material';

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
        minHeight: '100vh', // ocupa toda la altura de la ventana
        display: 'flex',
        flexDirection: 'column', // las tarjetas se alinearán una debajo de la otra
        alignItems: 'center', // centra horizontalmente
        justifyContent: 'flex-start', // alinea desde la parte superior
        paddingTop: 4,
        backgroundColor: '#f9f9f9',
      }}
    >
    
      <Grid container spacing={10} justifyContent="center" maxWidth="md">
        {ciudades.map((ciudad, index) => (
          <Grid item xs={12} key={ciudad.id}>
            <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
              <CardMedia
                component="img"
                
                image={ciudad.imagenPrincipal}
                alt={ciudad.nombre}
              />
              <CardContent>
                <Typography variant="h6" color="primary">
                  {index + 1} - {ciudad.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {ciudad.provincia}, {ciudad.comunidadAutonoma}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  ⭐ Puntuación: {ciudad.puntuacion?.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Ranking;
