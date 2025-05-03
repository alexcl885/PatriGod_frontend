import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MonumentosCiudad from '../componentes/MonumentosCiudad/MonumentosCiudad';
import { Typography, Container, Box } from '@mui/material';

const CiudadDetalle = () => {
  const { id } = useParams();
  const [monumentos, setMonumentos] = useState([]);

  useEffect(() => {
    const fetchMonumentos = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/ciudad/${id}/monumentos`);
        const data = await res.json();
        setMonumentos(data);
      } catch (error) {
        console.error('Error al cargar monumentos:', error);
      }
    };
    fetchMonumentos();
  }, [id]);

  return (
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
          🌟 Monumentos 🌟
        </Typography>
      </Box>

      <MonumentosCiudad monumentos={monumentos} />
    </Container>
  );
};

export default CiudadDetalle;
