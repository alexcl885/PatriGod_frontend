import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#051e37',
        color: 'white',
        py: 3,
        mt: 4,
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          PatriGod
        </Typography>
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} Alejandro Copado López. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;