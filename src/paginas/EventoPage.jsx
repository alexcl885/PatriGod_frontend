import { useParams } from "react-router-dom";
import Evento from "../componentes/Evento/Evento";
import { useEffect, useState } from "react";
import { Box, Typography, Rating } from "@mui/material";

const EventoPage = () => {
  const { id, idEvento } = useParams();
  const [evento, setEvento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [valoracion, setValoracion] = useState(0);

  useEffect(() => {
    const fetchEvento = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/ciudad/${id}/eventos/${idEvento}`);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setEvento(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvento();
  }, [id, idEvento]);

  const handleRatingChange = (event, newValue) => {
    setValoracion(newValue);
    console.log(`Valoración del evento en ciudad ${id}:`, newValue);
    // Aquí podrías hacer un fetch POST al backend para guardar la valoración
  };

  if (loading) return <Typography>Cargando evento...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;
  if (!evento) return <Typography>No se encontró el evento.</Typography>;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        px: { xs: 2, sm: 4, md: 6 },
        py: 4,
        boxSizing: "border-box",
      }}
    >
      <Evento evento={evento} />

      <Box
        sx={{
          mt: 4,
          p: 3,
          backgroundColor: "#fafafa",
          borderRadius: "20px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          ¿Qué te ha parecido el evento?
        </Typography>
        <Rating
          name="evento-rating"
          value={valoracion}
          onChange={handleRatingChange}
          precision={0.5}
          size="large"
        />
      </Box>

      <Typography
        variant="body1"
        sx={{
          mt: 2,
          mb: 4,
          textAlign: "center",
          fontWeight: 500,
          color: "#444",
        }}
      >
        Tu puntuación: {valoracion || "Ninguna"}
      </Typography>
    </Box>
  );
};

export default EventoPage;
