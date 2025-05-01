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
        mt: 4,
        borderTop: '1px solid #0e365c',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              PatriGod
            </Typography>
            <Typography variant="body2" color="grey.400">
              Tu guía de confianza para descubrir las ciudades Patrimonio de la Humanidad en España.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Enlaces útiles
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="hover" display="block">
                Inicio
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Ciudades
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Ranking
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Contacto
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Síguenos
            </Typography>
            <Box>
              <IconButton color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="GitHub">
                <GitHub />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="grey.500">
            © {new Date().getFullYear()} Alejandro Copado López. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
