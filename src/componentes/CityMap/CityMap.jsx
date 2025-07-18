import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, Button, CircularProgress } from '@mui/material';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import api from '../../services/api';

const CityMap = () => {

  const [cities, setCities] = useState([]);
  
  const [loading, setLoading] = useState(true);
  
  const center = [40.4168, -3.7038]; // Madrid center

  useEffect(() => {
    api.get('/city')
      .then(res => {
        const data = res.data;
        const list = data.map(city => ({
          id: city.id,
          name: city.name,
          coords: [city.latitude, city.longitude]
        }));
        setCities(list);
      })
      .catch(err => console.error('Error fetching cities:', err))
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
        {cities.map(({ id, name, coords }) => (
          <Marker key={id} position={coords}>
            <Popup>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {name}
              </Typography>
              <Button
                component={Link}
                to={`/city/${id}`}
                size="small"
                variant="outlined"
                sx={{ mt: 1 }}
              >
                View details
              </Button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Paper>
  );
};

export default CityMap;
