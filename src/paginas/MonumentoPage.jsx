import { useNavigate, useParams } from "react-router-dom";
import Monumento from "../componentes/Monumento/Monumento";
import { useContext, useEffect, useState } from "react";
import { Box, Typography, Rating, Button } from "@mui/material";
import { UserContext } from "../contexto/UserContext";
import api from "../servicios/api";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MonumentoPage = () => {
  const { id, idMonumento } = useParams();
  const [monumento, setMonumento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [valoracion, setValoracion] = useState(0);
  const navigate = useNavigate();

  const { token, user } = useContext(UserContext);

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
  };

  const postPuntuacion = async () => {
    if (token) {
      try {
        const response = await api.post("/puntuacion", {
          usuario: { id: user.id },
          articulo: { id: idMonumento, type: "monumento" },
          puntuacion: valoracion
        });

        if (response.status === 200) {
          toast.success("¡Puntuación enviada correctamente! 🎉");
        } else {
          toast.error("No se pudo enviar la puntuación.");
        }
      } catch (error) {
        console.error(error);
        toast.error("Hubo un error. Inténtalo más tarde.");
      }
    } else {
      toast.warning("Debes iniciar sesión para puntuar.");
      navigate("/login");
    }
  };

  if (loading) return <Typography>Cargando monumento...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;
  if (!monumento) return <Typography>No se encontró el monumento.</Typography>;

  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />

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

export default MonumentoPage;
