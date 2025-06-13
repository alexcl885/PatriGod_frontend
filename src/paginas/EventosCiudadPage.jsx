import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventosCiudad from '../componentes/EventosCiudad/EventosCiudad';
import { Box, Container, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';

const EventosCiudadPage = () => {
  const { id } = useParams(); 
  const [eventos, setEventos] = useState([]);

  const fetchEventos = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/ciudad/${id}/eventos`);
      const data = await res.json();
      setEventos(data);
    } catch (error) {
      console.error('Error al cargar eventos:', error);
    }
  };

  useEffect(() => {
    fetchEventos();
  }, [id]);

  const handleEventoEliminado = (nombreEvento = '') => {
    toast.success(
      `Evento eliminado correctamente.`
      ,
      {
        position: "top-center",
        autoClose: 2500,
        theme: "colored"
      }
    );
    fetchEventos();
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Container maxWidth="md">
        <Box
          sx={{
            padding: { xs: '18px', sm: '30px' },
            borderRadius: '20px',
            boxShadow: '0px 8px 30px rgba(0,0,0,0.18)',
            marginTop: 5,
            marginBottom: 4,
            textAlign: 'center',
            background: '#0a2540',
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
          <Typography
            variant="subtitle1"
            sx={{
              color: 'rgba(255,255,255,0.92)',
              fontWeight: 400,
              maxWidth: 600,
              mx: 'auto',
              mt: 1
            }}
          >
            Descubre los eventos más destacados de la ciudad. ¡Participa y vive el patrimonio!
          </Typography>
        </Box>
        <EventosCiudad eventos={eventos} onEventoEliminado={handleEventoEliminado} />
      </Container>
    </>
  )
};

export default EventosCiudadPage;
