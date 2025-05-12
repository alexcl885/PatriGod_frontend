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
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Articulos from '../componentes/Articulos/Articulos';
import Ciudad from '../componentes/Ciudad/Ciudad';
import { UserContext } from '../contexto/UserContext';

const CiudadPage = () => {
  const { user } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => setModalOpen(false);



  const handleCrearArticulo = () => {
    // Aquí navegas o abres modal (ej: navigate('/admin/crear'))
    setModalOpen(true);
    console.log('Crear artículo');
  };

  const seleccionarTipo = (tipo) =>{
    console.log(tipo);
    

  }


  return (
    <Box component="main" sx={{ backgroundColor: '#0a192f', minHeight: '100vh' }}>
      {/* Detalle de Ciudad */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper
          elevation={8}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            backgroundColor: '#0d253f',
            color: '#fff',
          }}
        >
          <Ciudad />
        </Paper>
      </Container>

      {/* Botón solo para administrador */}
      {user?.tipo === 'ADMINISTRADOR' && (
        <>
          <Container maxWidth="md" sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddCircleOutlineIcon />}
              onClick={handleCrearArticulo}
              sx={{
                background: 'linear-gradient(45deg, #1db954, #1ed760)',
                color: '#fff',
                fontWeight: 'bold',
                px: 3,
                py: 1.5,
                borderRadius: 3,
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1aa34a, #1ed760)',
                },
              }}
            >
              Añadir artículo
            </Button>
          </Container>

          {/* Modal para selección de tipo */}
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
                  bgcolor: '#0d1b2a',
                  borderRadius: 5,
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                  p: 4,
                  textAlign: 'center',
                  border: '2px solid #64ffda',
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
                  ¿Qué tipo de artículo quieres crear?
                </Typography>

                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    onClick={() => seleccionarTipo('monumento')}
                    sx={{
                      background: 'linear-gradient(45deg, #00bcd4, #64ffda)',
                      color: '#000',
                      fontWeight: 'bold',
                      py: 1.5,
                      borderRadius: 2,
                      boxShadow: '0 0 12px #00bcd4',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #0097a7, #1de9b6)',
                        boxShadow: '0 0 18px #1de9b6',
                      },
                    }}
                  >
                    🏛 Monumento
                  </Button>

                  <Button
                    variant="contained"
                    onClick={() => seleccionarTipo('evento')}
                    sx={{
                      background: 'linear-gradient(45deg, #ff4081, #f50057)',
                      color: '#fff',
                      fontWeight: 'bold',
                      py: 1.5,
                      borderRadius: 2,
                      boxShadow: '0 0 12px #f50057',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #c51162, #ff4081)',
                        boxShadow: '0 0 18px #ff4081',
                      },
                    }}
                  >
                    🎉 Evento
                  </Button>

                  <Button
                    variant="contained"
                    onClick={() => seleccionarTipo('comida')}
                    sx={{
                      background: 'linear-gradient(45deg, #ffb300, #ffc107)',
                      color: '#000',
                      fontWeight: 'bold',
                      py: 1.5,
                      borderRadius: 2,
                      boxShadow: '0 0 12px #ffc107',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #ffa000, #ffca28)',
                        boxShadow: '0 0 18px #ffca28',
                      },
                    }}
                  >
                    🍽 Comida
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

      {/* Sección de Artículos */}
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
            sx={{ fontWeight: 700, mb: 1, color: '#ffffff' }}
          >
            Explora más sobre esta ciudad
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ mb: 6, color: '#b0bec5' }}
          >
            Descubre monumentos, eventos y la gastronomía local.
          </Typography>

          <Grid container spacing={6} justifyContent="center">
            <Articulos />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CiudadPage;
