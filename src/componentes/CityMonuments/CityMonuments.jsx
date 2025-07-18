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

const CityMonuments = ({ monuments, onMonumentDeleted }) => {
  const [monumentList, setMonumentList] = useState([]);
  const { user } = useContext(UserContext);

  // State for confirmation dialog
  const [dialogOpen, setDialogOpen] = useState(false);
  const [monumentToDelete, setMonumentToDelete] = useState(null);

  useEffect(() => {
    setMonumentList(monuments);
  }, [monuments]);

  const handleDeleteClick = (monument) => {
    setMonumentToDelete(monument);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setMonumentToDelete(null);
  };

  const handleDeleteConfirm = async () => {
    if (!monumentToDelete) return;
    try {
      await api.delete(`/monument/${monumentToDelete.id}`);
      onMonumentDeleted();
      setMonumentList((prev) => prev.filter((m) => m.id !== monumentToDelete.id));
      setDialogOpen(false);
      setMonumentToDelete(null);
    } catch (error) {
      console.error('Network error deleting monument:', error);
      setDialogOpen(false);
      setMonumentToDelete(null);
    }
  };

  if (!monumentList || monumentList.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary" align="center">
        No monuments available for this city.
      </Typography>
    );
  }

  return (
    <>
      <Grid container spacing={4}>
        {monumentList.map((monument) => (
          <Grid item key={monument.id} xs={12} sm={6} md={4}>
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
                image={monument.image}
                alt={monument.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, overflow: 'hidden' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {monument.name}
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
                  {monument.curiosities || 'No curiosities available.'}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small" component={Link} to={`/city/${monument.city.id}/monuments/${monument.id}`}>
                  View more
                </Button>
                {user.tipo === "ADMINISTRADOR" && (
                  <Button
                    size="small"
                    color="error"
                    variant="outlined"
                    onClick={() => handleDeleteClick(monument)}
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
        aria-labelledby="dialog-delete-monument-title"
      >
        <DialogTitle id="dialog-delete-monument-title" sx={{ fontWeight: 700 }}>
          Delete monument?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the monument{' '}
            <strong>{monumentToDelete?.name}</strong>? This action cannot be undone.
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

export default CityMonuments;
