import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MonumentosCiudad from '../componentes/MonumentosCiudad/MonumentosCiudad';


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

  return <MonumentosCiudad monumentos={monumentos} />;
};

export default CiudadDetalle;
