import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#051e37', boxShadow: 3, paddingY: 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img
              src="/src/imagenes/p-cortada.png"
              alt="Logo"
              style={{ height: '60px', marginRight: '15px', borderRadius: '30%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}
            />
          </Link>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              color: 'white', 
              textTransform: 'uppercase', 
              letterSpacing: 2, 
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' 
            }}
          >
            atriGod
          </Typography>
        </Box>

        {/* Navegación */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button 
            component={Link} 
            to="/ranking" 
            color="inherit" 
            sx={{
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              fontSize: '16px', 
              '&:hover': {
                color: '#ff9800', 
                transform: 'scale(1.1)',
                transition: 'transform 0.2s ease-in-out'
              }
            }}
          >
            Ranking
          </Button>
          <Button 
            component={Link} 
            to="/acerca" 
            color="inherit" 
            sx={{
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              fontSize: '16px', 
              '&:hover': {
                color: '#ff9800', 
                transform: 'scale(1.1)',
                transition: 'transform 0.2s ease-in-out'
              }
            }}
          >
            Acerca de
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
