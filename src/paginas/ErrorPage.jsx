import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RefreshIcon from '@mui/icons-material/Refresh';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();

    // Extraemos status y message de error, si no existen ponemos valores por defecto
    const status = error?.status || 404;
    const message = error?.statusText || error?.message || "Página no encontrada";

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: 3,
                textAlign: 'center',
                color: 'white',
            }}
        >
            <Container maxWidth="sm" sx={{ bgcolor: 'rgba(0,0,0,0.25)', borderRadius: 4, p: 5, boxShadow: 10 }}>
                <Box
                    sx={{
                        fontSize: 110,
                        color: 'error.main',
                        mb: 3,
                        animation: 'pulse 2.5s infinite',
                        '@keyframes pulse': {
                            '0%, 100%': { transform: 'scale(1)', opacity: 1 },
                            '50%': { transform: 'scale(1.15)', opacity: 0.7 },
                        },
                    }}
                >
                    <ErrorOutlineIcon fontSize="inherit" />
                </Box>

                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    ¡Error {status}!
                </Typography>

                <Typography variant="h5" color="white" sx={{ mb: 5, opacity: 0.85 }}>
                    {message}
                </Typography>


                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
                    <SentimentVeryDissatisfiedIcon sx={{ fontSize: 70, color: 'rgba(255,255,255,0.7)' }} />
                </Box>

                <Button
                    variant="contained"
                    size="large"
                    startIcon={<RefreshIcon />}
                    onClick={() => navigate('/')}
                    sx={{
                        px: 6,
                        py: 1.8,
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        bgcolor: 'error.main',
                        '&:hover': { bgcolor: 'error.dark' },
                        boxShadow: '0 0 15px rgba(255, 72, 66, 0.7)',
                    }}
                >
                    Volver al inicio
                </Button>
            </Container>
        </Box>
    );
};

export default ErrorPage;
