import { useParams } from "react-router-dom";
import Monumento from "../componentes/Monumento/Monumento";
import { useEffect, useState } from "react";
import { Box, Typography, Rating } from "@mui/material";

const MonumentoPage = () => {
  const { id, idMonumento } = useParams();
  const [monumento, setMonumento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [valoracion, setValoracion] = useState(0);

  useEffect(() => {
    const fetchMonumento = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/ciudad/${id}/monumentos/${idMonumento}`);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setMonumento(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMonumento();
  }, [id, idMonumento]);

  const handleRatingChange = (event, newValue) => {
    setValoracion(newValue);
    console.log(`Valoración del monumento en ciudad ${id}:`, newValue);
    // Aquí podrías hacer un fetch POST al backend para guardar la valoración
  };

  if (loading) return <Typography>Cargando monumento...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;
  if (!monumento) return <Typography>No se encontró el monumento.</Typography>;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        px: { xs: 2, sm: 4, md: 6 },
        py: 4,
        boxSizing: "border-box"
      }}
    >
      <Monumento monumento={monumento} />

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
          ¿Qué te ha parecido el monumento?
        </Typography>
        <Rating
          name="monumento-rating"
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
          color: "#fff",
        }}
      >
        Tu puntuación: {valoracion || "Ninguna"}
      </Typography>
    </Box>
  );
};

export default MonumentoPage;
