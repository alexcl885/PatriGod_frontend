import { Box, Typography, Container, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#051e37',
        color: 'white',
        pt: 6,
        pb: 4,
        mt: 6,
        borderTop: '2px solid #0e365c',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="space-between">
          {/* Logo + Descripción */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, letterSpacing: 1 }}>
              PatriGod
            </Typography>
            <Typography variant="body2" color="grey.400" sx={{ mt: 1 }}>
              Tu guía de confianza para descubrir las ciudades Patrimonio de la Humanidad en España.
            </Typography>
          </Grid>

          {/* Enlaces útiles */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Enlaces útiles
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 1 }}>
              {['Inicio', 'Ciudades', 'Ranking', 'Contacto'].map((text, index) => (
                <Link
                  key={index}
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{
                    fontSize: '15px',
                    transition: 'all 0.3s ease',
                    '&:hover': { color: '#ff9800', pl: 1 }
                  }}
                >
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Redes sociales */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Síguenos
            </Typography>
            <Box sx={{ mt: 1 }}>
              {[Facebook, Twitter, Instagram, GitHub].map((Icon, i) => (
                <IconButton
                  key={i}
                  color="inherit"
                  sx={{
                    mx: 0.5,
                    transition: 'transform 0.3s, color 0.3s',
                    '&:hover': {
                      color: '#ff9800',
                      transform: 'scale(1.2)',
                    }
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box mt={6} textAlign="center">
          <Typography variant="body2" color="grey.500" sx={{ fontSize: '14px' }}>
            © {new Date().getFullYear()} Alejandro Copado López. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
