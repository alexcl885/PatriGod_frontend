import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventosCiudad from '../componentes/EventosCiudad/EventosCiudad';
import { Box, Container, Typography } from '@mui/material';

const EventosCiudadPage = () => {
  const { id } = useParams(); // ID de la ciudad desde la URL
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/ciudad/${id}/eventos`);
        const data = await res.json();
        setEventos(data);
      } catch (error) {
        console.error('Error al cargar eventos:', error);
      }
    };

    fetchEventos();
  }, [id]);

  return (
    <>
    <Container maxWidth="md">
      <Box
        sx={{
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0px 8px 30px rgba(0,0,0,0.2)',
          marginTop: 5,
          marginBottom: 4,
          textAlign: 'center',
          animation: 'fadeIn 1s ease-in-out'
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 800,
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          🌟 Eventos 🌟
        </Typography>
      </Box>
      <EventosCiudad eventos={eventos} />;
    </Container>
    </>
  )
};

export default EventosCiudadPage;
