import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CityEvents from '../componentes/CityEvents/CityEvents';
import { Box, Container, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import api from '../services/api';

const CityEventsPage = () => {
  const { id } = useParams(); 
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await api.get(`/city/${id}/events`);
      setEvents(res.data);
    } catch (error) {
      console.error('Error loading events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [id]);

  const handleEventDeleted = (eventName = '') => {
    toast.success(
      `Event deleted successfully.`,
      {
        position: "top-center",
        autoClose: 2500,
        theme: "colored"
      }
    );
    fetchEvents();
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
            🌟 Events 🌟
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
            Discover the city's most outstanding events. Join and experience the heritage!
          </Typography>
        </Box>
        <CityEvents events={events} onEventDeleted={handleEventDeleted} />
      </Container>
    </>
  )
};

export default CityEventsPage;
