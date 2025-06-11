import React, { useState } from 'react';
import {
  Container, Paper, Typography, Stepper, Step, StepLabel,
  TextField, Button, Grid, Box, InputAdornment
} from '@mui/material';
import api from '../../servicios/api';
import { useNavigate, useParams } from 'react-router-dom';

const steps = ['Información General', 'Detalles del Evento', 'Información Adicional'];

const AddNewEvento = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  const initialFormData = {
    type: "evento",
    idCiudad: parseInt(id),
    nombre: '',
    descripcion: '',
    fecha: '',
    horaEvento: '',
    lugar: '',
    informacionEvento: '',
    imagen: '',
    tipoEvento: '',
    organizador: '',
    webOficial: '',
    precio: '',
    duracion: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const envioDatos = await api.post("/evento", formData);
      console.log("Evento creado con éxito:", envioDatos.data);
      navigate(`/ciudad/${id}`);
    } catch (error) {
      console.error("Error al guardar:", error.response?.data || error.message);
    }
  };

  const isLastStep = activeStep === steps.length ;

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField label="Nombre del Evento" name="nombre" fullWidth required value={formData.nombre} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Descripción" name="descripcion" fullWidth required multiline rows={4} value={formData.descripcion} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="URL de Imagen" name="imagen" fullWidth value={formData.imagen} onChange={handleChange} />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField label="Fecha" name="fecha" type="date" fullWidth InputLabelProps={{ shrink: true }} value={formData.fecha} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Hora" name="horaEvento" type="time" fullWidth InputLabelProps={{ shrink: true }} value={formData.horaEvento} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Lugar" name="lugar" fullWidth value={formData.lugar} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Información del Evento" name="informacionEvento" fullWidth multiline rows={3} value={formData.informacionEvento} onChange={handleChange} />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField label="Tipo de Evento" name="tipoEvento" fullWidth value={formData.tipoEvento} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Organizador" name="organizador" fullWidth value={formData.organizador} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Web Oficial" name="webOficial" fullWidth value={formData.webOficial} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Precio" name="precio" fullWidth value={formData.precio} onChange={handleChange} InputProps={{ endAdornment: <InputAdornment position="end">€</InputAdornment> }} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Duración" name="duracion" type="number" fullWidth value={formData.duracion} onChange={handleChange} InputProps={{ endAdornment: <InputAdornment position="end">min</InputAdornment> }} />
            </Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper elevation={4} sx={{ p: 5, borderRadius: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Añadir Nuevo Evento
        </Typography>

        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={handleSubmit}>
          {renderStepContent(activeStep)}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined">
              Volver
            </Button>

            {isLastStep ? (
              <Button type="submit" variant="contained" color="primary">
                Guardar Evento
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext} type="button">
                Siguiente
              </Button>
            )}
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default AddNewEvento;
