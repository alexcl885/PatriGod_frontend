import React, { useContext, useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import { Link } from 'react-router-dom';
import api from '../../servicios/api';
import { UserContext } from '../../contexto/UserContext';

const MonumentosCiudad = ({ monumentos, onMonumentoBorrado }) => {
  const [listaMonumentos, setListaMonumentos] = useState([]);
  const { user } = useContext(UserContext);

  // Estado para el diálogo de confirmación
  const [dialogOpen, setDialogOpen] = useState(false);
  const [monumentoAEliminar, setMonumentoAEliminar] = useState(null);

  useEffect(() => {
    setListaMonumentos(monumentos);
  }, [monumentos]);

  const handleDeleteClick = (monumento) => {
    setMonumentoAEliminar(monumento);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setMonumentoAEliminar(null);
  };

  const handleDeleteConfirm = async () => {
    if (!monumentoAEliminar) return;
    try {
      await api.delete(`/monumento/${monumentoAEliminar.id}`);
      onMonumentoBorrado();
      setListaMonumentos((prev) => prev.filter((m) => m.id !== monumentoAEliminar.id));
      setDialogOpen(false);
      setMonumentoAEliminar(null);
    } catch (error) {
      console.error('Error de red al eliminar el monumento:', error);
      setDialogOpen(false);
      setMonumentoAEliminar(null);
    }
  };

  if (!listaMonumentos || listaMonumentos.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary" align="center">
        No hay monumentos disponibles para esta ciudad.
      </Typography>
    );
  }

  return (
    <>
      <Grid container spacing={4}>
        {listaMonumentos.map((monumento) => (
          <Grid item key={monumento.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: 370,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={monumento.imagen}
                alt={monumento.nombre}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, overflow: 'hidden' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {monumento.nombre}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 1,
                    minHeight: 48,
                    maxHeight: 48,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    textAlign: 'justify'
                  }}
                >
                  {monumento.descripcion}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small" component={Link} to={`/ciudad/${monumento.ciudad.id}/monumentos/${monumento.id}`}>
                  Ver más
                </Button>
                {user.tipo === "ADMINISTRADOR" && (
                  <Button
                    size="small"
                    color="error"
                    variant="outlined"
                    onClick={() => handleDeleteClick(monumento)}
                  >
                    Eliminar
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Diálogo de confirmación */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="dialog-eliminar-monumento-title"
      >
        <DialogTitle id="dialog-eliminar-monumento-title" sx={{ fontWeight: 700 }}>
          ¿Eliminar monumento?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que quieres eliminar el monumento{' '}
            <strong>{monumentoAEliminar?.nombre}</strong>? Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary" variant="outlined">
            Cancelar
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" variant="contained">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MonumentosCiudad;
