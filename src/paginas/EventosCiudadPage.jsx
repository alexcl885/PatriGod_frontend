import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventosCiudad from '../componentes/EventosCiudad/EventosCiudad';

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

  return <EventosCiudad eventos={eventos} />;
};

export default EventosCiudadPage;
