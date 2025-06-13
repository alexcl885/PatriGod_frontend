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

const EventosCiudad = ({ eventos, onEventoEliminado }) => {
  const [listaEventos, setListaEventos] = useState([]);
  const { user } = useContext(UserContext);

  // Estado para el diálogo de confirmación
  const [dialogOpen, setDialogOpen] = useState(false);
  const [eventoAEliminar, setEventoAEliminar] = useState(null);

  useEffect(() => {
    setListaEventos(eventos);
  }, [eventos]);

  const handleDeleteClick = (evento) => {
    setEventoAEliminar(evento);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setEventoAEliminar(null);
  };

  const handleDeleteConfirm = async () => {
    if (!eventoAEliminar) return;
    try {
      await api.delete(`/evento/${eventoAEliminar.id}`);
      onEventoEliminado(eventoAEliminar.nombre);
      setListaEventos((prev) => prev.filter((m) => m.id !== eventoAEliminar.id));
      setDialogOpen(false);
      setEventoAEliminar(null);
    } catch (error) {
      console.error('Error de red al eliminar el evento:', error);
      setDialogOpen(false);
      setEventoAEliminar(null);
    }
  };

  if (!eventos || eventos.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary" align="center">
        No hay eventos disponibles para esta ciudad.
      </Typography>
    );
  }

  return (
    <>
      <Grid container spacing={4}>
        {eventos.map((evento) => (
          <Grid item key={evento.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="180"
                image={evento.imagen}
                alt={evento.nombre}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {evento.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {evento.descripcion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Ciudad:</strong> {evento.ciudad.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Fecha del evento:</strong> {evento.fecha}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <Link to={`http://localhost:5173/ciudad/${evento.ciudad.id}/eventos/${evento.id}`}>
                    Ver más
                  </Link>
                </Button>
                {user.tipo === "ADMINISTRADOR" && (
                  <Button
                    size="small"
                    color="error"
                    variant="outlined"
                    onClick={() => handleDeleteClick(evento)}
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
        aria-labelledby="dialog-eliminar-evento-title"
      >
        <DialogTitle id="dialog-eliminar-evento-title" sx={{ fontWeight: 700 }}>
          ¿Eliminar evento?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que quieres eliminar el evento{' '}
            <strong>{eventoAEliminar?.nombre}</strong>? Esta acción no se puede deshacer.
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

export default EventosCiudad;
