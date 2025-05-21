import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Card,
  CardContent,
  Button,
  Stack,
  Divider
} from '@mui/material';
import { Language, Public } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const valores = [
  {
    title: 'Visión',
    description: 'Ser la referencia global en patrimonio cultural interactivo.',
    icon: <Public fontSize="large" color="primary" />
  },
  {
    title: 'Misión',
    description: 'Inspirar y conectar a la comunidad con la historia viva.',
    icon: <Language fontSize="large" color="secondary" />
  },
  {
    title: 'Equipo',
    description: 'Apasionados líderes en tecnología y cultura.',
    icon: <Avatar sx={{ bgcolor: 'primary.main' }}>👥</Avatar>
  },
  {
    title: 'Calidad de Datos',
    description: 'Información veraz y siempre actualizada de cada ciudad y monumento.',
    icon: <Avatar sx={{ bgcolor: 'success.main' }}>📊</Avatar>
  },
  {
    title: 'Interactividad',
    description: 'Mapas y filtros personalizables para una experiencia única.',
    icon: <Avatar sx={{ bgcolor: 'info.main' }}>🗺️</Avatar>
  },
  {
    title: 'Sostenibilidad',
    description: 'Consejos de turismo responsable para cuidar el patrimonio.',
    icon: <Avatar sx={{ bgcolor: 'warning.main' }}>🌿</Avatar>
  }
];


const miembros = [
  { name: 'Alejandro Copado López', role: 'Full Stack Developer', avatar: 'src/imagenes/alejandro.png' }
];

const Acerca = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Suscrito:', email);
    setEmail('');
  };

  return (
    <Box component="section" sx={{ background: 'linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)', py: { xs: 8, md: 4 } }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800 }}>
            Acerca de <Box component="span" color="primary.main">PatriGod</Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Nuestra plataforma global que redefine cómo exploramos, valoramos y preservamos el Patrimonio de la Humanidad.
          </Typography>
        </Box>

        {/* Valores Profesionales con centrado inteligente */}
        <Grid container spacing={1} mb={8} justifyContent="center">
          {valores.map((item) => (
            <Grid
              item
              key={item.title}
              xs={12}
              sm={6}
              md={4}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Card
                sx={{
                  width: 300,
                  p: 4,
                  boxShadow: 6,
                  borderRadius: 4,
                  '&:hover': {
                    boxShadow: 10,
                    transform: 'translateY(-6px)',
                    transition: '0.3s',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box
                    mb={2}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>


        <Divider sx={{ bgcolor: 'grey.300', mb: 8 }} />

        {/* Compromisos PatriGod */}
        <Stack alignItems="center" spacing={3} mb={10} sx={{ px: 2 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, maxWidth: 600, textAlign: 'center' }}>
            Nuestros compromisos contigo y el patrimonio
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 600, textAlign: 'center' }}>
            En PatriGod no solo compartimos historia, sino que protegemos y celebramos la riqueza cultural de cada ciudad.
            Nos comprometemos a ofrecerte datos veraces, una experiencia interactiva y promover el turismo responsable.
            Juntos, construimos un futuro donde el patrimonio vive en cada explorador.
          </Typography>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" size="large" sx={{ mt: 2, px: 5 }}>
              Únete a nuestra misión
            </Button>
          </Link>
        </Stack>



        <Divider sx={{ bgcolor: 'grey.300', mb: 8 }} />

        {/* Equipo Global */}
        <Box textAlign="center">
          <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
            Nuestro Equipo Global
          </Typography>
          <Grid container spacing={4} justifyContent="center" mt={4}>
            {miembros.map((member) => (
              <Grid key={member.name} item xs={6} sm={4} md={2}>
                <Box textAlign="center">
                  <Avatar
                    sx={{ width: 80, height: 80, m: 'auto', mb: 1 }}
                    alt={member.name}
                    src={member.avatar}
                  />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {member.role}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Acerca;
