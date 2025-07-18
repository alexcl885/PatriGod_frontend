import React, { useContext, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Paper,
  Button,
  Stack,
  Modal,
  Backdrop,
  Fade,
  Tooltip
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Articulos from '../componentes/Articles/Articles';
import City from '../componentes/City/City';
import { UserContext } from '../context/UserContext';
import { useNavigate, useParams } from 'react-router-dom';

const CityPage = () => {

  const { user } = useContext(UserContext);
  
  const [modalOpen, setModalOpen] = useState(false);
  
  const navigate = useNavigate();
  
  const { id } = useParams();

  const handleCloseModal = () => setModalOpen(false);

  const handleCreateArticle = () => {
    setModalOpen(true);
  };

  const selectType = (type) => {
    navigate(`/city/${id}/add/${type}`);
  };

  return (
    <Box
      component="main"
      sx={{
        background: 'linear-gradient(135deg, #0a192f 0%, #0d253f 100%)',
        minHeight: '100vh',
        pb: 0
      }}
    >
      {/* City Details */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper
          elevation={12}
          sx={{
            borderRadius: 5,
            overflow: 'hidden',
            background: 'linear-gradient(120deg, #0d253f 60%, #1976d2 100%)',
            color: '#fff',
            boxShadow: '0 8px 32px 0 rgba(44,62,80,0.18)',
            p: { xs: 2, md: 4 }
          }}
        >
          <City />
        </Paper>
      </Container>

      {/* Button only for admin */}
      {user?.tipo === 'ADMINISTRADOR' && (
        <>
          <Container maxWidth="md" sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
            <Tooltip title="Add new article to the city" arrow>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<AddCircleOutlineIcon />}
                onClick={handleCreateArticle}
                sx={{
                  background: 'linear-gradient(90deg, #1db954 60%, #1976d2 100%)',
                  color: '#fff',
                  fontWeight: 'bold',
                  px: 4,
                  py: 1.7,
                  borderRadius: 4,
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 18px rgba(25,118,210,0.25)',
                  letterSpacing: 1,
                  '&:hover': {
                    background: 'linear-gradient(90deg, #1976d2 60%, #1db954 100%)',
                    transform: 'scale(1.04)',
                  },
                }}
              >
                Add article
              </Button>
            </Tooltip>
          </Container>

          {/* Modal for type selection */}
          <Modal
            open={modalOpen}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
          >
            <Fade in={modalOpen}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 420,
                  bgcolor: 'background.paper',
                  borderRadius: 5,
                  boxShadow: '0 0 32px #1976d2',
                  p: 4,
                  textAlign: 'center',
                  border: '2px solid #64ffda',
                  background: 'linear-gradient(120deg, #0d253f 60%, #1976d2 100%)',
                  color: '#fff'
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    fontWeight: 'bold',
                    color: '#64ffda',
                    textShadow: '0 0 10px #64ffda',
                  }}
                >
                  What type of article do you want to create?
                </Typography>
                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    onClick={() => selectType('monumento')}
                    sx={{
                      background: 'linear-gradient(90deg, #00bcd4 60%, #1976d2 100%)',
                      color: '#fff',
                      fontWeight: 'bold',
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: '1.08rem',
                      boxShadow: '0 0 16px #00bcd4',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #1976d2 60%, #00bcd4 100%)',
                        boxShadow: '0 0 22px #1976d2',
                        transform: 'scale(1.04)'
                      },
                    }}
                  >
                    🏛 Monument
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => selectType('evento')}
                    sx={{
                      background: 'linear-gradient(90deg, #ec407a 60%, #1976d2 100%)',
                      color: '#fff',
                      fontWeight: 'bold',
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: '1.08rem',
                      boxShadow: '0 0 16px #ec407a',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #1976d2 60%, #ec407a 100%)',
                        boxShadow: '0 0 22px #ec407a',
                        transform: 'scale(1.04)'
                      },
                    }}
                  >
                    🎉 Event
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => selectType('comida')}
                    sx={{
                      background: 'linear-gradient(90deg, #ffb300 60%, #1976d2 100%)',
                      color: '#fff',
                      fontWeight: 'bold',
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: '1.08rem',
                      boxShadow: '0 0 16px #ffb300',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #1976d2 60%, #ffb300 100%)',
                        boxShadow: '0 0 22px #ffb300',
                        transform: 'scale(1.04)'
                      },
                    }}
                  >
                    🍽 Food
                  </Button>
                </Stack>
              </Box>
            </Fade>
          </Modal>
        </>
      )}

      <Divider
        sx={{
          my: 5,
          mx: { xs: 2, md: 0 },
          borderColor: 'grey.700',
        }}
      />

      {/* Articles section */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #0d253f 0%, #0a192f 100%)',
          color: '#fff',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 900,
              mb: 1,
              color: '#fff',
              letterSpacing: 1.2,
              textShadow: '0 2px 8px #1976d2'
            }}
          >
            Explore more about this city
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ mb: 6, color: '#bbdefb', fontWeight: 500 }}
          >
            Discover monuments, events, and local gastronomy.
          </Typography>
          <Grid container spacing={6} justifyContent="center">
            <Articulos />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CityPage;
