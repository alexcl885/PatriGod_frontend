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

const ComidasCiudad = ({ comidas }) => {
  const [listaComidas, setListaComidas] = useState([]);
  const { user } = useContext(UserContext)

  useEffect(() => {
    setListaComidas(comidas);
  }, [listaComidas]);

  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de que quieres eliminar este monumento?")) return;

    try {
      const response = await api.delete(`/comida/${id}`);


      console.log(`Monumento con ID ${id} eliminado correctamente.`);

    } catch (error) {
      console.error('Error de red al eliminar el monumento:', error);
    }
  };

  if (!comidas || comidas.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary" align="center">
        No hay comidas disponibles para esta ciudad.
      </Typography>
    );
  }

  return (
    <Grid container spacing={4}>
      {comidas.map((comida) => (
        <Grid item key={comida.id} xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="180"
              image={comida.imagen} 
              alt={comida.nombre}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {comida.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {comida.descripcion}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Ciudad:</strong> {comida.ciudad.nombre}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
              >
                <Link to={`http://localhost:5173/ciudad/${comida.ciudad.id}/comidas/${comida.id}`}>
                  Ver más
                </Link>
              </Button>
              {user.tipo == "ADMINISTRADOR" && <Button
                size="small"
                color="error"
                variant="outlined"
                onClick={() => handleDelete(parseInt(comida.id))}
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

export default ComidasCiudad;
