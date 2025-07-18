import React, { useState } from 'react';
import {
  Container, Paper, Typography, Stepper, Step, StepLabel,
  TextField, Button, Grid, Box, InputAdornment,
  TextareaAutosize
} from '@mui/material';
import { AddLocationAlt } from '@mui/icons-material';
import api from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';

const steps = ['General Information', 'History & Architecture', 'Location & Visits', 'Curiosities'];

const AddNewMonument = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const initialFormData = {
    type: "monument",
    cityId: parseInt(id),
    name: '',
    description: '',
    image: '',
    architecturalStyle: '',
    constructionPeriod: '',
    location: '',
    visitingHours: '',
    entryFee: '',
    unescoDeclaration: '',
    height: '',
    mainMaterials: '',
    curiosities: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "entryFee"
          ? parseFloat(value) || 0
          : name === "height"
            ? parseFloat(value) || 0
            : value,
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
      const response = await api.post("/monument", formData);
      console.log("Monument created successfully:", response.data);
      navigate(`/city/${id}`)
    } catch (error) {
      console.error("Error saving:", error.response?.data || error.message);
    }
  };

  const isLastStep = activeStep === 4;

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField label="Monument Name" name="name" fullWidth required value={formData.name} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize style={{
                width: '100%',
                maxWidth: '600px',
                padding: '10px',
                fontSize: '1rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                resize: 'vertical',
                boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
              }}
                placeholder="Description"
                name="description"
                required
                minRows={4}
                value={formData.description}
                onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Image URL" name="image" fullWidth value={formData.image} onChange={handleChange} />
            </Grid>
          </Grid>
        );

      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField label="Architectural Style" name="architecturalStyle" fullWidth value={formData.architecturalStyle} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Construction Period" name="constructionPeriod" fullWidth value={formData.constructionPeriod} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="UNESCO Declaration (year)" name="unescoDeclaration" fullWidth value={formData.unescoDeclaration} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Height"
                name="height"
                type="number"
                fullWidth
                value={formData.height}
                onChange={handleChange}
                InputProps={{ endAdornment: <InputAdornment position="end">m</InputAdornment> }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Main Materials" name="mainMaterials" fullWidth value={formData.mainMaterials} onChange={handleChange} />
            </Grid>
          </Grid>
        );

      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Location"
                name="location"
                fullWidth
                value={formData.location}
                onChange={handleChange}
                InputProps={{ startAdornment: <InputAdornment position="start"><AddLocationAlt /></InputAdornment> }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Visiting Hours" name="visitingHours" fullWidth value={formData.visitingHours} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Entry Fee"
                name="entryFee"
                fullWidth
                value={formData.entryFee}
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
              <TextareaAutosize
                placeholder="Curiosities"
                name="curiosities"
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
                minRows={4}
                value={formData.curiosities}
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
          Add New Monument
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
              Back
            </Button>

            {isLastStep ? (
              <Button type="submit" variant="contained" color="primary">
                Save Monument
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext} type="button">
                Next
              </Button>
            )}
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default AddNewMonument;
