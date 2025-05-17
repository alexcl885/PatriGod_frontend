import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import { useNavigate } from 'react-router-dom';
import { clearToken, setTokenLocal } from '../../../servicios/auth';
import api from '../../../servicios/api';
import { UserContext } from '../../../contexto/UserContext';




const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export default function SignInCard() {
  const navigate = useNavigate();

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    setError('');

    if (!username || !email || !password || !confirmPassword) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await api.post('/usuario/register', {
        username,
        email,
        password,
      });

      console.log('Usuario registrado:', response.data);
      const responseEmail = await api.post(`/email/registro/${email}`);
      console.log("Email enviado: "+ responseEmail);
      
      navigate('/login'); // Redirige al login si todo va bien
    } catch (err) {
      console.error(err);
      setError('Error al registrar. El nombre o email pueden estar en uso.');
    }
  };

  return (
    <Card variant="outlined">
      <Typography component="h1" variant="h4">
        Registro
      </Typography>
      <Box
        component="form"
        onSubmit={handleRegister}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="username">Nombre de usuario</FormLabel>
          <TextField
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            fullWidth
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Correo electrónico</FormLabel>
          <TextField
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <TextField
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="confirmPassword">Confirmar Contraseña</FormLabel>
          <TextField
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            fullWidth
          />
        </FormControl>

        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}

        <Button type="submit" fullWidth variant="contained">
          Registrarse
        </Button>
      </Box>
    </Card>
  );
}
