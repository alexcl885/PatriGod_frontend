import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ComidasCiudad from '../componentes/ComidasCiudad/ComidasCiudad';

const ComidasCiudadPage = () => {
  const { id } = useParams(); // ID de la ciudad desde la URL
  const [comidas, setComidas] = useState([]);

  useEffect(() => {
    const fetchComidas = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/ciudad/${id}/comidas`);
        const data = await res.json();
        setComidas(data);
      } catch (error) {
        console.error('Error al cargar comidas:', error);
      }
    };

    fetchComidas();
  }, [id]);

  return <ComidasCiudad comidas={comidas} />;
};

export default ComidasCiudadPage;
