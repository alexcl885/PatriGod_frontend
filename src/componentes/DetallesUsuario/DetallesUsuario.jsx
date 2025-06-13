import React, { useEffect, useState } from 'react';
import {
  Card, CardContent, Typography, Avatar, Grid, Divider,
  Box, Chip, Tooltip, Fade, IconButton, useTheme,
  TextField, Button, Paper
} from '@mui/material';
import {
  AccountCircle, Lock, CalendarToday, VerifiedUser,
  Fingerprint, Edit, VpnKey
} from '@mui/icons-material';
import api from '../../servicios/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const DetallesUsuario = ({ usuario }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Estados de edición y campos editables
  const [editandoUsuario, setEditandoUsuario] = useState(false);
  const [editandoPassword, setEditandoPassword] = useState(false);
  const [nuevoUsername, setNuevoUsername] = useState('');
  const [nuevoEmail, setNuevoEmail] = useState('');
  const [nuevaPassword, setNuevaPassword] = useState('');

  // Estado local del usuario para manipular la info actualizada
  const [usuarioLocal, setUsuarioLocal] = useState(usuario);

  // Sincronizar usuarioLocal cuando cambie el prop usuario
  useEffect(() => {
    setUsuarioLocal(usuario);
  }, [usuario]);

  // Función para activar/desactivar edición y preparar inputs
  const toggleEditarUsuario = () => {
    setEditandoUsuario((prev) => {
      const nuevoEstado = !prev;
      if (nuevoEstado) {
        // Al entrar en modo edición, inicializamos campos con valores actuales
        setNuevoUsername(usuarioLocal?.username || '');
        setNuevoEmail(usuarioLocal?.email || '');
      }
      return nuevoEstado;
    });
  };

  if (!usuarioLocal) {
    return (
      <Box mt={4} textAlign="center">
        <Typography variant="h6">Cargando usuario...</Typography>
      </Box>
    );
  }

  // Guardar cambios de usuario (username y email)
  const handleGuardarUsuario = async () => {
    if (!nuevoUsername || !nuevoEmail) {
      toast.error('El nombre de usuario y el email no pueden estar vacíos');
      return;
    }

    try {
      const response = await api.post(`/usuario/${usuarioLocal.id}/actualizar-datos`, {
        username: nuevoUsername,
        email: nuevoEmail
      });

      if (response.status === 200) {
        setUsuarioLocal(response.data);
        setEditandoUsuario(false);
        toast.info('Usuario actualizado. Por favor, vuelve a iniciar sesión.');
        localStorage.removeItem('token');
        setTimeout(() => {
          navigate('/login');
        }, 2300);
      } else {
        toast.error('No se pudo actualizar el usuario');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error('Error al actualizar usuario: ' + error.response.data);
      } else {
        toast.error('Error al actualizar usuario');
      }
      console.error('Error al actualizar usuario:', error);
    }
  };

  // Guardar nueva contraseña
  const handleGuardarPassword = async () => {
    if (!nuevaPassword) {
      toast.error('La contraseña no puede estar vacía');
      return;
    }

    try {
      const response = await api.post(`/usuario/${usuarioLocal.id}/cambiar-password`, {
        nuevaPassword
      });

      if (response.status === 200) {
        setEditandoPassword(false);
        setNuevaPassword('');
        toast.success('Contraseña actualizada correctamente. Por favor, vuelve a iniciar sesión.');
        localStorage.removeItem('token');
        setTimeout(() => {
          navigate('/login');
        }, 2400);
      } else {
        toast.error('No se pudo actualizar la contraseña');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error('Error al actualizar contraseña: ' + error.response.data);
      } else {
        toast.error('Error al actualizar contraseña');
      }
      console.error('Error al actualizar contraseña:', error);
    }
  };

  const { username, email, id, password, tipo, activo, fechaCreacion } = usuarioLocal;
  const fechaFormateada = fechaCreacion[0] + "/" + fechaCreacion[1] + "/" + fechaCreacion[2];


  return (
    <>
      {/* Asegúrate de importar el CSS de react-toastify y que solo haya un ToastContainer en el árbol de la app */}
      <ToastContainer position="top-right" autoClose={3000} />

      <Fade in>
        <Paper
          elevation={10}
          sx={{
            maxWidth: 700,
            mx: 'auto',
            mt: 7,
            p: { xs: 2, md: 4 },
            borderRadius: 5,
            background: 'linear-gradient(120deg, #0d1b2a 0%, #1976d2 100%)',
            boxShadow: '0 8px 32px 0 rgba(44,62,80,0.18)',
            color: 'white'
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Box display="flex" justifyContent="space-between" mb={3} alignItems="center">
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar sx={{
                  width: 72,
                  height: 72,
                  bgcolor: 'primary.main',
                  border: '3px solid #fff',
                  boxShadow: 3
                }}>
                  <AccountCircle sx={{ fontSize: 48 }} />
                </Avatar>
                <Box>
                  {!editandoUsuario ? (
                    <>
                      <Typography variant="h4" fontWeight="bold" sx={{ color: '#fff', letterSpacing: 1 }}>
                        {username}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#bbdefb' }}>{email}</Typography>
                    </>
                  ) : (
                    <>
                      <TextField
                        label="Nuevo nombre de usuario"
                        value={nuevoUsername}
                        onChange={(e) => setNuevoUsername(e.target.value)}
                        size="small"
                        sx={{ mb: 1, bgcolor: 'white', borderRadius: 2 }}
                        fullWidth
                      />
                      <TextField
                        label="Nuevo email"
                        value={nuevoEmail}
                        onChange={(e) => setNuevoEmail(e.target.value)}
                        size="small"
                        sx={{ bgcolor: 'white', borderRadius: 2 }}
                        fullWidth
                      />
                      <Button
                        onClick={handleGuardarUsuario}
                        variant="contained"
                        size="small"
                        sx={{ mt: 1, fontWeight: 700, background: 'linear-gradient(90deg, #1976d2 60%, #ec407a 100%)' }}
                      >
                        Guardar usuario
                      </Button>
                    </>
                  )}
                  <Chip
                    label={tipo}
                    color={tipo === 'ADMINISTRADOR' ? 'secondary' : 'primary'}
                    size="small"
                    sx={{
                      mt: 1,
                      fontWeight: 700,
                      bgcolor: tipo === 'ADMINISTRADOR' ? '#ec407a' : '#1976d2',
                      color: '#fff',
                      letterSpacing: 1
                    }}
                  />
                </Box>
              </Box>
              <Box display="flex" gap={1}>
                <Tooltip title="Editar usuario" arrow>
                  <IconButton
                    sx={{
                      bgcolor: 'rgba(25,118,210,0.12)',
                      color: '#fff',
                      '&:hover': { bgcolor: 'primary.main', color: '#fff' }
                    }}
                    onClick={toggleEditarUsuario}
                  >
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Cambiar contraseña" arrow>
                  <IconButton
                    sx={{
                      bgcolor: 'rgba(236,64,122,0.12)',
                      color: '#fff',
                      '&:hover': { bgcolor: 'secondary.main', color: '#fff' }
                    }}
                    onClick={() => setEditandoPassword(!editandoPassword)}
                  >
                    <VpnKey />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            <Divider sx={{ mb: 3, bgcolor: '#1976d2', opacity: 0.5 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Fingerprint sx={{ color: '#90caf9' }} />
                  <Typography sx={{ color: '#fffde7' }}>ID: {id}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center" gap={1}>
                  <VerifiedUser sx={{ color: activo ? '#43a047' : '#bdbdbd' }} />
                  <Typography sx={{ color: activo ? '#43a047' : '#bdbdbd', fontWeight: 700 }}>
                    {activo ? 'Activo' : 'Inactivo'}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center" gap={1}>
                  <CalendarToday sx={{ color: '#90caf9' }} />
                  <Typography sx={{ color: '#fffde7' }}>Creado el {fechaFormateada}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                {!editandoPassword ? (
                  <Box display="flex" alignItems="center" gap={1}>
                    <Lock sx={{ color: '#90caf9' }} />
                    <Typography color="text.secondary" sx={{ color: '#fffde7' }}>
                      {password?.replace(/./g, '•')}
                    </Typography>
                  </Box>
                ) : (
                  <Box display="flex" flexDirection="column" gap={1}>
                    <TextField
                      label="Nueva contraseña"
                      type="password"
                      value={nuevaPassword}
                      onChange={(e) => setNuevaPassword(e.target.value)}
                      size="small"
                      fullWidth
                      sx={{ bgcolor: 'white', borderRadius: 2 }}
                    />
                    <Button
                      variant="contained"
                      size="small"
                      onClick={handleGuardarPassword}
                      disabled={!nuevaPassword}
                      sx={{
                        mt: 1,
                        fontWeight: 700,
                        background: 'linear-gradient(90deg, #1976d2 60%, #ec407a 100%)'
                      }}
                    >
                      Guardar contraseña
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => {
                        setEditandoPassword(false);
                        setNuevaPassword('');
                      }}
                      sx={{
                        mt: 1,
                        fontWeight: 700,
                        color: '#fff',
                        borderColor: '#fff',
                        '&:hover': {
                          borderColor: '#ec407a',
                          color: '#ec407a',
                          background: 'rgba(255,255,255,0.08)'
                        }
                      }}
                    >
                      Cancelar
                    </Button>
                  </Box>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Fade>
    </>
  );
};

export default DetallesUsuario;