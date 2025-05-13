import React, { useState } from 'react';
import {
  Container, TextField, Grid, Typography, Button, Paper
} from '@mui/material';

const AddNewEvento = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    imagen: '',
    estiloArquitectonico: '',
    epocaConstruccion: '',
    ubicacion: '',
    horarioVisitas: '',
    precioEntrada: '',
    declaracionUnesco: '',
    altura: '',
    materialesPrincipales: '',
    curiosidades: '',
    puesto: '',
    ciudadId: '', // este campo debe vincularse a la ciudad que elijas
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí se haría la llamada POST al backend para guardar el nuevo monumento
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Añadir Nuevo Evento
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Nombre del Monumento"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Descripción"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="URL de la Imagen Principal"
                name="imagen"
                value={formData.imagen}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Estilo Arquitectónico"
                name="estiloArquitectonico"
                value={formData.estiloArquitectonico}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Época de Construcción"
                name="epocaConstruccion"
                value={formData.epocaConstruccion}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Ubicación"
                name="ubicacion"
                value={formData.ubicacion}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Horario de Visitas"
                name="horarioVisitas"
                value={formData.horarioVisitas}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Precio de Entrada"
                name="precioEntrada"
                value={formData.precioEntrada}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Año Declarado por la UNESCO"
                name="declaracionUnesco"
                value={formData.declaracionUnesco}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Altura (metros)"
                name="altura"
                value={formData.altura}
                onChange={handleChange}
                type="number"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Materiales Principales"
                name="materialesPrincipales"
                value={formData.materialesPrincipales}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Curiosidades"
                name="curiosidades"
                value={formData.curiosidades}
                onChange={handleChange}
                multiline
                rows={3}
                fullWidth
              />
            </Grid>



            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Guardar Monumento
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AddNewEvento;
