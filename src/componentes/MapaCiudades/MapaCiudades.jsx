import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, Button, CircularProgress } from '@mui/material';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import api from '../../servicios/api';

const MapaCiudades = () => {
  const [ciudades, setCiudades] = useState([]);
  const [loading, setLoading] = useState(true);
  const center = [40.4168, -3.7038]; 

  useEffect(() => {
    api.get('/ciudad')
      .then(res => {
        const data = res.data;
        const lista = data.map(c => ({
          id: c.id,
          nombre: c.nombre,
          coords: [c.latitud, c.longitud]
        }));
        setCiudades(lista);
      })
      .catch(err => console.error('Error fetching ciudades:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Paper
      elevation={8}
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        height: '70vh',
        width: '100%',
      }}
    >
      <MapContainer
        center={center}
        zoom={7}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {ciudades.map(({ id, nombre, coords }) => (
          <Marker key={id} position={coords}>
            <Popup>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {nombre}
              </Typography>
              <Button
                component={Link}
                to={`/ciudad/${id}`}
                size="small"
                variant="outlined"
                sx={{ mt: 1 }}
              >
                Ver detalles
              </Button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Paper>
  );
};

export default MapaCiudades;
