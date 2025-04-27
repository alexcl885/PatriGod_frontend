import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#051e37', paddingY: 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img
              src="/src/imagenes/p-cortada.png"
              alt="Logo"
              style={{ height: '50px' }}
            />
          </Link>
        </Box>

        {/* Navegación */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={Link} to="/ciudad" color="inherit">
            Ranking
          </Button>
          <Button component={Link} to="/acerca" color="inherit">
            Acerca de
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;