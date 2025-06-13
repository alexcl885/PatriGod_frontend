import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ComidasCiudad from '../componentes/ComidasCiudad/ComidasCiudad';
import { Box, Container, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';

const ComidasCiudadPage = () => {
  const { id } = useParams(); // ID de la ciudad desde la URL
  const [comidas, setComidas] = useState([]);

  const fetchComidas = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/ciudad/${id}/comidas`);
      const data = await res.json();
      setComidas(data);
    } catch (error) {
      console.error('Error al cargar comidas:', error);
    }
  };
  useEffect(() => {
    fetchComidas();
  }, [id]);

  const handleComidaEliminado = () => {
    toast.success(`Evento eliminado correctamente.`);
    fetchComidas();
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
            🌟 Comidas 🌟
          </Typography>
        </Box>

        <ComidasCiudad comidas={comidas} onComidaEliminado={handleComidaEliminado} />
      </Container>
    </>
  );
};

export default ComidasCiudadPage;
