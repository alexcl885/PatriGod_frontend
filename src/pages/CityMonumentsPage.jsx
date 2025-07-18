import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CityMonuments from '../componentes/CityMonuments/CityMonuments';
import { Typography, Container, Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import api from '../services/api';

const CityMonumentsPage = () => {

  const { id } = useParams();
  
  const [monuments, setMonuments] = useState([]);

  useEffect(() => {
    const fetchMonuments = async () => {
      try {
        const res = await api.get(`/city/${id}/monuments`);
        setMonuments(res.data);
      } catch (error) {
        console.error('Error loading monuments:', error);
      }
    };
    fetchMonuments();
  }, [id]);

  const handleMonumentDeleted = () => {
    toast.success(
      `Monument deleted successfully.`
      ,
      {
        position: "top-center",
        autoClose: 2500,
        theme: "colored"
      }
    );

  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
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
            🌟 Monuments 🌟
          </Typography>
        </Box>

        <CityMonuments monuments={monuments} onMonumentDeleted={handleMonumentDeleted}/>
        
      </Container>
    </>
  );
};

export default CityMonumentsPage;
