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

const CityEvents = ({ events, onEventDeleted }) => {
  const [eventList, setEventList] = useState([]);
  const { user } = useContext(UserContext);

  // State for confirmation dialog
  const [dialogOpen, setDialogOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  useEffect(() => {
    setEventList(events);
  }, [events]);

  const handleDeleteClick = (event) => {
    setEventToDelete(event);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setEventToDelete(null);
  };

  const handleDeleteConfirm = async () => {
    if (!eventToDelete) return;
    try {
      await api.delete(`/event/${eventToDelete.id}`);
      onEventDeleted(eventToDelete.name);
      setEventList((prev) => prev.filter((m) => m.id !== eventToDelete.id));
      setDialogOpen(false);
      setEventToDelete(null);
    } catch (error) {
      console.error('Network error deleting event:', error);
      setDialogOpen(false);
      setEventToDelete(null);
    }
  };

  if (!events || events.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary" align="center">
        No events available for this city.
      </Typography>
    );
  }

  return (
    <>
      <Grid container spacing={4}>
        {events.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="180"
                image={event.image}
                alt={event.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {event.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {event.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>City:</strong> {event.city.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Event date:</strong> {event.date}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <Link to={`http://localhost:5173/city/${event.city.id}/events/${event.id}`}>
                    View more
                  </Link>
                </Button>
                {user.tipo === "ADMINISTRADOR" && (
                  <Button
                    size="small"
                    color="error"
                    variant="outlined"
                    onClick={() => handleDeleteClick(event)}
                  >
                    Delete
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Confirmation dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="dialog-delete-event-title"
      >
        <DialogTitle id="dialog-delete-event-title" sx={{ fontWeight: 700 }}>
          Delete event?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the event{' '}
            <strong>{eventToDelete?.name}</strong>? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CityEvents;
