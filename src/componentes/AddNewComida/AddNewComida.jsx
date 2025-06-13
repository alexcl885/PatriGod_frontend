import React, { useState } from 'react';
import {
  Container, Paper, Typography, Stepper, Step, StepLabel,
  TextField, Button, Grid, Box, InputAdornment, FormControlLabel, Checkbox,
  TextareaAutosize
} from '@mui/material';
import api from '../../servicios/api';
import { useNavigate, useParams } from 'react-router-dom';

const steps = ['Información General', 'Detalles Culinarios', 'Información Adicional'];

const AddNewComida = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  const initialFormData = {
    type: "comida",
    idCiudad: parseInt(id),
    nombre: '',
    descripcion: '',
    imagen: '',
    tipo: '',
    origen: '',
    ingredientesPrincipales: '',
    caloriasAprox: '',
    momentoConsumo: '',
    aptoVegetarianos: false,
    acompañamientosRecomendados: '',
    curiosidades: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const envioDatos = await api.post("/comida", formData);
      console.log("Comida creada con éxito:", envioDatos.data);
      navigate(`/ciudad/${id}`);
    } catch (error) {
      console.error("Error al guardar:", error.response?.data || error.message);
    }
  };

  const isLastStep = activeStep === steps.length;

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField label="Nombre del Plato" name="nombre" fullWidth required value={formData.nombre} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize label="Descripción"
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  padding: '10px',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  resize: 'vertical',
                  boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
                }}
                name="descripcion" 
                fullWidth 
                required 
                multiline 
                rows={3} 
                value={formData.descripcion} 
                onChange={handleChange} />
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
              <TextField label="Tipo de Comida" name="tipo" fullWidth value={formData.tipo} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Origen" name="origen" fullWidth value={formData.origen} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Ingredientes Principales" name="ingredientesPrincipales" fullWidth value={formData.ingredientesPrincipales} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Calorías Aproximadas" name="caloriasAprox" type="number" fullWidth value={formData.caloriasAprox} onChange={handleChange} InputProps={{ endAdornment: <InputAdornment position="end">kcal</InputAdornment> }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Momento de Consumo" name="momentoConsumo" fullWidth value={formData.momentoConsumo} onChange={handleChange} />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="aptoVegetarianos"
                    checked={formData.aptoVegetarianos}
                    onChange={handleChange}
                  />
                }
                label="¿Apto para vegetarianos?"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Acompañamientos Recomendados" name="acompañamientosRecomendados" fullWidth value={formData.acompañamientosRecomendados} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                label="Curiosidades"
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  padding: '10px',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  resize: 'vertical',
                  boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
                }}
                name="curiosidades"
                fullWidth multiline
                rows={3}
                value={formData.curiosidades}
                onChange={handleChange} />
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
          Añadir Nueva Comida
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
                Guardar Comida
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

export default AddNewComida;
