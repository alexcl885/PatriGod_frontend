import React, { useState } from 'react';
import {
  Container, Paper, Typography, Stepper, Step, StepLabel,
  TextField, Button, Grid, Box, InputAdornment
} from '@mui/material';
import { AddLocationAlt } from '@mui/icons-material';
import api from '../../servicios/api';
import { useParams } from 'react-router-dom';

const steps = ['Información General', 'Historia y Arquitectura', 'Ubicación y Visitas', 'Curiosidades'];


const AddNewMonumento = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { id } = useParams();
  const initialFormData = {
    type: "monumento",
    ciudad: 2,
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
    curiosidades: ''
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
  
    const dataParaEnviar = {
      ...formData,
      ciudad: typeof formData.ciudad === 'object' ? formData.ciudad.id : formData.ciudad
    };
  
    try {
      const envioDatos = await api.post("/monumento", dataParaEnviar);
      console.log("Monumento creado con éxito");
    } catch (error) {
      console.error("Error al guardar:", error.response?.data || error.message);
    }
  };
  

  const isLastStep = activeStep === steps.length - 1;

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField label="Nombre del Monumento" name="nombre" fullWidth required value={formData.nombre} onChange={handleChange} />
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
              <TextField label="Estilo Arquitectónico" name="estiloArquitectonico" fullWidth value={formData.estiloArquitectonico} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Época de Construcción" name="epocaConstruccion" fullWidth value={formData.epocaConstruccion} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Declarado por la UNESCO (año)" name="declaracionUnesco" fullWidth value={formData.declaracionUnesco} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Altura"
                name="altura"
                type="number"
                fullWidth
                value={formData.altura}
                onChange={handleChange}
                InputProps={{ endAdornment: <InputAdornment position="end">m</InputAdornment> }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Materiales Principales" name="materialesPrincipales" fullWidth value={formData.materialesPrincipales} onChange={handleChange} />
            </Grid>
          </Grid>
        );

      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Ubicación"
                name="ubicacion"
                fullWidth
                value={formData.ubicacion}
                onChange={handleChange}
                InputProps={{ startAdornment: <InputAdornment position="start"><AddLocationAlt /></InputAdornment> }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Horario de Visitas" name="horarioVisitas" fullWidth value={formData.horarioVisitas} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Precio de Entrada"
                name="precioEntrada"
                fullWidth
                value={formData.precioEntrada}
                onChange={handleChange}
                InputProps={{ endAdornment: <InputAdornment position="end">€</InputAdornment> }}
              />
            </Grid>
          </Grid>
        );

      case 3:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Curiosidades"
                name="curiosidades"
                fullWidth
                multiline
                rows={4}
                value={formData.curiosidades}
                onChange={handleChange}
              />
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
          Añadir Nuevo Monumento
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
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
            >
              Volver
            </Button>

            {isLastStep ? (
              <Button type="submit" variant="contained" color="primary">
                Guardar Monumento
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext}>
                Siguiente
              </Button>
            )}
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default AddNewMonumento;
