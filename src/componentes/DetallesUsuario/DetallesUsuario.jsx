import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Divider,
  Box,
  Chip,
  Tooltip,
  Fade,
  IconButton,
  useTheme
} from '@mui/material';
import {
  AccountCircle,
  Email,
  Lock,
  CalendarToday,
  VerifiedUser,
  Fingerprint,
  Edit,
  Delete
} from '@mui/icons-material';

const DetallesUsuario = ({ usuario }) => {
  const theme = useTheme();

  if (!usuario) {
    return (
      <Box mt={4} textAlign="center">
        <Typography variant="h6">Cargando usuario...</Typography>
      </Box>
    );
  }

  const {
    id,
    username,
    email,
    password,
    tipo,
    activo,
    fecha_creacion
  } = usuario;

  const fechaFormateada = new Date(fecha_creacion).toLocaleString();

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
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={3}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.main' }}>
                <AccountCircle sx={{ fontSize: 40 }} />
              </Avatar>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  {username}
                </Typography>
                <Chip
                  label={tipo}
                  color={tipo === 'ADMINISTRADOR' ? 'secondary' : 'primary'}
                  size="small"
                  sx={{ mt: 0.5 }}
                />
              </Box>
            </Box>

            <Box>
              <Tooltip title="Editar usuario" arrow>
                <IconButton color="primary">
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip title="Eliminar usuario" arrow>
                <IconButton color="error">
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <Email color="action" />
                <Typography>{email}</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <Lock color="action" />
                <Typography color="text.secondary">
                  {password.replace(/./g, '•')}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <Fingerprint color="action" />
                <Typography>ID: {id}</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <VerifiedUser
                  color={activo ? 'success' : 'disabled'}
                />
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
          </Grid>
        </CardContent>
      </Card>
    </Fade>
  );
};

export default DetallesUsuario;
