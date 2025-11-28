import { useNavigate, useParams } from "react-router-dom";
import Event from "../componentes/Event/Event";
import { useContext, useEffect, useState } from "react";
import { Box, Typography, Rating, Button } from "@mui/material";
import { UserContext } from "../context/UserContext";
import api from "../services/api";
import { toast, ToastContainer } from "react-toastify";

const EventPage = () => {
  const { token, setToken, user } = useContext(UserContext);
  const { id, idEvent } = useParams();
  const [event, setevent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [valoracion, setValoracion] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
  const fetchevent = async () => {
    try {
      const { data } = await api.get(`/city/${id}/events/${idEvent}`);
      setevent(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchevent();
}, [id, idEvent]);


  const handleRatingChange = (event, newValue) => {
    setValoracion(newValue);
    console.log(`Valoración del event en ciudad ${id}:`, newValue);
    // Aquí podrías hacer un fetch POST al backend para guardar la valoración
  };

  if (loading) return <Typography>Cargando event...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;
  if (!event) return <Typography>No se encontró el event.</Typography>;


  const postPuntuacion = async () => {
    if (token) { //compruebo primero si el usuario esta registrado
      const response = await api.post("/rating", {
        user: { id: user.id },
        article: { id: idEvent, type: "food" },
        rating: valoracion
      })
      if (response.status === 200) {
        toast.success("¡Puntuación enviada correctamente! 🎉");
      } else {
        toast.error("No se pudo enviar la puntuación.");
      }
    }
    else {
      console.log("Por favor registrate");
      toast.warning("Inicia sesion para poder puntuar.");

      navigate("/login");
    }
  }
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          px: { xs: 2, sm: 4, md: 6 },
          py: 4,
          boxSizing: "border-box",
        }}
      >
        {/*notificacion con libreria externa */}
        <Event event={event} />

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
            ¿Qué te ha parecido el event?
          </Typography>
          <Rating
            name="event-rating"
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
            color: "#ffff",
          }}
        >
          Tu puntuación: {valoracion || "Ninguna"}
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            background: "linear-gradient(to right, #0077b6, #00b4d8)",
            color: "#fff",
            fontWeight: "bold",
            marginLeft: "780px",
            borderRadius: "30px",
            px: 6,
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(to right, #023e8a, #0096c7)",
              transform: "scale(1.05)",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
            }
          }}
          onClick={postPuntuacion}
        >
          Enviar puntuación
        </Button>
      </Box>
    </>
  );

};

export default EventPage;
