import React, { useEffect, useState } from 'react';
import {
  Card, CardContent, Typography, Avatar, Grid, Divider,
  Box, Chip, Tooltip, Fade, IconButton, useTheme,
  TextField, Button
} from '@mui/material';
import {
  AccountCircle, Email, Lock, CalendarToday, VerifiedUser,
  Fingerprint, Edit, VpnKey
} from '@mui/icons-material';
import api from '../../servicios/api';

const DetallesUsuario = ({ usuario }) => {
  const theme = useTheme();

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
      alert('El nombre de usuario y el email no pueden estar vacíos');
      return;
    }

    try {
      const response = await api.put(`/usuario/${usuarioLocal.id}/actualizar-usuario`, {
        username: nuevoUsername,
        email: nuevoEmail
      });

      setUsuarioLocal(response.data);
      alert('Usuario actualizado correctamente');
      setEditandoUsuario(false);

    } catch (error) {
      if (error.response && error.response.data) {
        alert('Error al actualizar usuario: ' + error.response.data);
      } else {
        alert('Error al actualizar usuario');
      }
      console.error('Error al actualizar usuario:', error);
    }
  };

  // Guardar nueva contraseña
  const handleGuardarPassword = async () => {
    if (!nuevaPassword) return;

    try {
      await api.put(`/usuario/${usuarioLocal.id}/actualizar-password`, {
        nuevaPassword
      });

      alert('Contraseña actualizada correctamente');
      setEditandoPassword(false);
      setNuevaPassword('');
    } catch (error) {
      console.error('Error al actualizar contraseña:', error);
      alert('Error al actualizar contraseña');
    }
  };

  const { username, email, id, password, tipo, activo, fechaCreacion } = usuarioLocal;
  const fechaFormateada = new Date(fechaCreacion).toLocaleString();

  return (
    <Fade in>
      <Card
        sx={{
          maxWidth: 700,
          mx: 'auto',
          mt: 6,
          p: 3,
          borderRadius: 4,
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          background: theme.palette.mode === 'dark'
            ? theme.palette.background.paper
            : '#f9f9f9',
        }}
      >
        <CardContent>
          <Box display="flex" justifyContent="space-between" mb={3}>
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.main' }}>
                <AccountCircle sx={{ fontSize: 40 }} />
              </Avatar>
              <Box>
                {!editandoUsuario ? (
                  <>
                    <Typography variant="h5" fontWeight="bold">{username}</Typography>
                    <Typography variant="body2">{email}</Typography>
                  </>
                ) : (
                  <>
                    <TextField
                      label="Nuevo nombre de usuario"
                      value={nuevoUsername}
                      onChange={(e) => setNuevoUsername(e.target.value)}
                      size="small"
                      sx={{ mb: 1 }}
                      fullWidth
                    />
                    <TextField
                      label="Nuevo email"
                      value={nuevoEmail}
                      onChange={(e) => setNuevoEmail(e.target.value)}
                      size="small"
                      fullWidth
                    />
                    <Button
                      onClick={handleGuardarUsuario}
                      variant="contained"
                      size="small"
                      sx={{ mt: 1 }}
                    >
                      Guardar usuario
                    </Button>
                  </>
                )}
                <Chip
                  label={tipo}
                  color={tipo === 'ADMINISTRADOR' ? 'secondary' : 'primary'}
                  size="small"
                  sx={{ mt: 1 }}
                />
              </Box>
            </Box>

            <Box display="flex" gap={1}>
              <Tooltip title="Editar usuario" arrow>
                <IconButton
                  color="primary"
                  onClick={toggleEditarUsuario}
                >
                  <Edit />
                </IconButton>
              </Tooltip>

              <Tooltip title="Cambiar contraseña" arrow>
                <IconButton
                  color="secondary"
                  onClick={() => setEditandoPassword(!editandoPassword)}
                >
                  <VpnKey />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <Fingerprint color="action" />
                <Typography>ID: {id}</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <VerifiedUser color={activo ? 'success' : 'disabled'} />
                <Typography color={activo ? 'success.main' : 'text.secondary'}>
                  {activo ? 'Activo' : 'Inactivo'}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box display="flex" alignItems="center" gap={1}>
                <CalendarToday color="action" />
                <Typography>Creado el {fechaFormateada}</Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              {!editandoPassword ? (
                <Box display="flex" alignItems="center" gap={1}>
                  <Lock color="action" />
                  <Typography color="text.secondary">
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
                  />
                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleGuardarPassword}
                    disabled={!nuevaPassword}
                  >
                    Guardar contraseña
                  </Button>
                </Box>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fade>
  );
};

export default DetallesUsuario;
