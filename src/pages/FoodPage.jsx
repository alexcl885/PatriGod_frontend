import { useNavigate, useParams } from "react-router-dom";
import Comida from "../componentes/Food/Food";
import { useContext, useEffect, useState } from "react";
import { Box, Button, Container, Rating, Typography } from "@mui/material";
import api from "../services/api";
import { UserContext } from "../context/UserContext";
import { toast, ToastContainer } from "react-toastify";

const FoodPage = () => {
  const { id, idComida } = useParams();
  const [comida, setComida] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [valoracion, setValoracion] = useState(0);
  const navigate = useNavigate();
  const { token, setToken, user } = useContext(UserContext);

  useEffect(() => {
    const fetchComida = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/ciudad/${id}/comidas/${idComida}`
        );
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setComida(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComida();
  }, [id, idComida]);

  const handleRatingChange = (event, newValue) => {
    setValoracion(newValue);
    console.log(`Valoración de la comida en ciudad ${id}:`, newValue);
    // Aquí podrías hacer un fetch POST al backend para guardar la valoración
  };

  if (loading) return <Typography>Cargando comida...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;
  if (!comida) return <Typography>No se encontró la comida.</Typography>;


  const postPuntuacion = async () => {
    if (token) { //compruebo primero si el usuario esta registrado
      const response = await api.post("/puntuacion", {
        usuario: { id: user.id },
        articulo: { id: idComida, type: "comida" },
        puntuacion: valoracion
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
        <Comida comida={comida} />

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
          {/*notificacion con libreria externa */}
          <Typography variant="h5" sx={{ mb: 2 }}>
            ¿Qué te han parecido las comidas?
          </Typography>
          <Rating
            name="comida-rating"
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
            color: "white",
          }}
        >
          Tu puntuación: {valoracion || "Ninguna"}
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            background: "linear-gradient(to right, #0077b6, #00b4d8)",
            color: "white",
            fontWeight: "bold",
            marginLeft: "780px",
            borderRadius: "30px",
            px: 6,
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(to right, #023e8a, #0096c7)",
              transform: "scale(1.05)",
              boxShadow: "0px 4px 15px rgba(221, 198, 198, 0.2)",
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

export default FoodPage;
