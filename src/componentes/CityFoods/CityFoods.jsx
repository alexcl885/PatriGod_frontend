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
import api from '../../services/api';
import { UserContext } from '../../context/UserContext';

const ComidasCiudad = ({ comidas, onComidaEliminado }) => {
  const [listaComidas, setListaComidas] = useState([]);
  const { user } = useContext(UserContext);

  // Estado para el diálogo de confirmación
  const [dialogOpen, setDialogOpen] = useState(false);
  const [comidaAEliminar, setComidaAEliminar] = useState(null);

  useEffect(() => {
    setListaComidas(comidas);
  }, [comidas]);

  const handleDeleteClick = (comida) => {
    setComidaAEliminar(comida);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setComidaAEliminar(null);
  };

  const handleDeleteConfirm = async () => {
    if (!comidaAEliminar) return;
    try {
      await api.delete(`/comida/${comidaAEliminar.id}`);
      onComidaEliminado();
      setListaComidas((prev) => prev.filter((c) => c.id !== comidaAEliminar.id));
      setDialogOpen(false);
      setComidaAEliminar(null);
    } catch (error) {
      console.error('Error de red al eliminar la comida:', error);
      setDialogOpen(false);
      setComidaAEliminar(null);
    }
  };

  if (!listaComidas || listaComidas.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary" align="center">
        No hay comidas disponibles para esta ciudad.
      </Typography>
    );
  }

  return (
    <>
      <Grid container spacing={4}>
        {listaComidas.map((comida) => (
          <Grid item key={comida.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="180"
                image={comida.image}
                alt={comida.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {comida.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {comida.descripcion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Ciudad:</strong> {comida.city.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={`/city/${comida.city.id}/foods/${comida.id}`}>
                  Ver más
                </Button>
                {user?.tipo === "ADMINISTRADOR" && (
                  <Button
                    size="small"
                    color="error"
                    variant="outlined"
                    onClick={() => handleDeleteClick(comida)}
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
        aria-labelledby="dialog-eliminar-comida-title"
      >
        <DialogTitle id="dialog-eliminar-comida-title" sx={{ fontWeight: 700 }}>
          ¿Eliminar comida?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que quieres eliminar la comida{' '}
            <strong>{comidaAEliminar?.nombre}</strong>? Esta acción no se puede deshacer.
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

export default ComidasCiudad;
