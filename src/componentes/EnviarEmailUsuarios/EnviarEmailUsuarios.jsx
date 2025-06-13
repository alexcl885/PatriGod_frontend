import React, { useState } from 'react';
import {
  Container, Typography, TextField, Button, Box, Snackbar, Alert, Paper
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import api from '../../servicios/api';

const EnviarEmailUsuarios = () => {
  const [mensaje, setMensaje] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [respuesta, setRespuesta] = useState({ abierto: false, exito: true, mensaje: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mensaje.trim()) {
      setRespuesta({ abierto: true, exito: false, mensaje: 'El mensaje no puede estar vacío.' });
      return;
    }

    try {
      setEnviando(true);
      const response = await api.post('http://localhost:8080/api/email/admin/actualizacion', {
        updateMessage: mensaje
      });

      // El backend responde con texto plano o JSON, ajusta según tu backend
      const texto = response.data?.message || response.data || 'Mensaje enviado correctamente.';

      setRespuesta({ abierto: true, exito: true, mensaje: texto });
      setMensaje('');
    } catch (error) {
      setRespuesta({
        abierto: true,
        exito: false,
        mensaje: error.response?.data?.message || 'Error al enviar correos.'
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4, background: 'linear-gradient(135deg, #f3e5f5, #ede7f6)' }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#6a1b9a', mb: 3, textAlign: 'center' }}
        >
          ✨ Notificacion Usuarios ✨
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, textAlign: 'center', fontStyle: 'italic', color: '#4a148c' }}>
          ¡Escribe algo inspirador, alegre o informativo! ✉️
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            multiline
            minRows={8}
            label="Mensaje para todos los usuarios"
            variant="outlined"
            placeholder="Ej. ¡Gracias por formar parte de nuestra comunidad! 🎉"
            sx={{
              mb: 3,
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: 1
            }}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              disabled={enviando}
              size="large"
              endIcon={<SendIcon />}
              sx={{
                px: 4,
                py: 1,
                fontWeight: 'bold',
                borderRadius: 3,
                backgroundColor: '#8e24aa',
                '&:hover': {
                  backgroundColor: '#6a1b9a'
                }
              }}
            >
              {enviando ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>
          </Box>
        </form>
      </Paper>

      <Snackbar
        open={respuesta.abierto}
        autoHideDuration={6000}
        onClose={() => setRespuesta({ ...respuesta, abierto: false })}
      >
        <Alert
          severity={respuesta.exito ? 'success' : 'error'}
          onClose={() => setRespuesta({ ...respuesta, abierto: false })}
          sx={{ width: '100%' }}
        >
          {respuesta.mensaje}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default EnviarEmailUsuarios;
