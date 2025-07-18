import { useNavigate, useParams } from "react-router-dom";
import Monument from "../componentes/Monument/Monument";
import { useContext, useEffect, useState } from "react";
import { Box, Typography, Rating, Button } from "@mui/material";
import { UserContext } from "../context/UserContext";
import api from "../services/api";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MonumentPage = () => {

  const { id, idMonument } = useParams();
  
  const [monument, setMonument] = useState(null);
  
  const [loading, setLoading] = useState(true);
  
  const [error, setError] = useState(null);
  
  const [ratingValue, setRatingValue] = useState(0);
  
  const navigate = useNavigate();

  const { token, user } = useContext(UserContext);

  useEffect(() => {
    const fetchMonument = async () => {
      try {
        const response = await api.get(`/city/${id}/monuments/${idMonument}`);
        setMonument(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMonument();
  }, [id, idMonument]);

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };

  const postRating = async () => {
    if (token) {
      try {
        const response = await api.post("/rating", {
          user: { id: user.id },
          article: { id: idMonument, type: "monument" },
          rating: ratingValue
        });

        if (response.status === 200) {
          toast.success("Rating submitted successfully! 🎉");
        } else {
          toast.error("Could not submit rating.");
        }
      } catch (error) {
        console.error(error);
        toast.error("There was an error. Please try again later.");
      }
    } else {
      toast.warning("You must be logged in to rate.");
      navigate("/login");
    }
  };

  if (loading) return <Typography>Loading monument...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;
  if (!monument) return <Typography>Monument not found.</Typography>;

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
      
      <Monument monument={monument} />

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
          What did you think of the monument?
        </Typography>
        <Rating
          name="monument-rating"
          value={ratingValue}
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
        Your rating: {ratingValue || "None"}
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
        onClick={postRating}
      >
        Submit rating
      </Button>
    </Box>
    </>
  );
};

export default MonumentPage;

