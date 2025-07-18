import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { clearToken } from '../../services/auth';

const Header = () => {
  const { token, setToken, user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearToken();
    setToken(null);
    setUser(""); 
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#051e37', boxShadow: 4, py: 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: { xs: 2, sm: 4 } }}>
        {/* LOGO + TITULO */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img
              src="/src/images/p-cortada.png"
              alt="Logo"
              style={{
                height: '60px',
                borderRadius: '50%',
                boxShadow: '0 0 12px rgba(255, 255, 255, 0.3)',
                transition: 'transform 0.3s',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'rotate(5deg) scale(1.05)'}
              onMouseOut={e => e.currentTarget.style.transform = 'none'}
            />
          </Link>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: 3,
              fontFamily: 'Montserrat, sans-serif',
              textTransform: 'uppercase',
              textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            atriGod
          </Typography>
        </Box>

        {/* NAVIGATION */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {user?.tipo === 'ADMINISTRADOR' && (
            <NavButton to="/usuarios" text="Usuarios" />
          )}
          {token && (
            <NavButton to="/datos_usuario" text="Datos" />
          )}
          <NavButton to="/ranking" text="Ranking" />
          <NavButton to="/acerca" text="Acerca de" />

          {/* AUTH BUTTON */}
          {token ? (
            <Button
              onClick={handleLogout}
              color="error"
              variant="outlined"
              sx={actionButtonStyle}
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={handleLogin}
              color="primary"
              variant="contained"
              sx={actionButtonStyle}
            >
              Iniciar sesión
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// COMPONENTE REUTILIZABLE PARA NAVEGACIÓN
const NavButton = ({ to, text }) => (
  <Button
    component={Link}
    to={to}
    color="inherit"
    sx={{
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: '16px',
      letterSpacing: 1,
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        color: '#ff9800',
        transform: 'scale(1.08)',
      }
    }}
  >
    {text}
  </Button>
);

// ESTILO COMÚN PARA BOTONES DE LOGIN / LOGOUT
const actionButtonStyle = {
  fontWeight: 'bold',
  textTransform: 'uppercase',
  fontSize: '16px',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.08)',
  }
};

export default Header;
