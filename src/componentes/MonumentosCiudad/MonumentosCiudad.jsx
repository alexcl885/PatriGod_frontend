import React, { useContext, useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import api from '../../servicios/api';
import { UserContext } from '../../contexto/UserContext';

const MonumentosCiudad = ({ monumentos }) => {
  const [listaMonumentos, setListaMonumentos] = useState([]);
  const {user} = useContext(UserContext)
  useEffect(() => {
    setListaMonumentos(monumentos);
  }, [monumentos]);

  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de que quieres eliminar este monumento?")) return;

    try {
      const response = await api.delete(`/monumento/${id}`); 
      setListaMonumentos((prev) => prev.filter((m) => m.id !== id));
      console.log(`Monumento con ID ${id} eliminado correctamente.`);
      
    } catch (error) {
      console.error('Error de red al eliminar el monumento:', error);
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
    <Grid container spacing={4}>
      {listaMonumentos.map((monumento) => (
        <Grid item key={monumento.id} xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="180"
              image={monumento.imagen}
              alt={monumento.nombre}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {monumento.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {monumento.descripcion}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to={`/ciudad/${monumento.ciudad.id}/monumentos/${monumento.id}`}>
                Ver más
              </Button>
              {user.tipo == "ADMINISTRADOR" && <Button
                size="small"
                color="error"
                variant="outlined"
                onClick={() => handleDelete(parseInt(monumento.id))}
              >
                Eliminar
              </Button>}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MonumentosCiudad;
