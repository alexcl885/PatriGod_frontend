import React, { useEffect, useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Avatar,
  Tooltip,
  Fade
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const RankingComidas = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/ciudad/rankComida');
        const data = await response.json();
        setRanking(data);
      } catch (error) {
        console.error('Error al obtener el ranking:', error);
      }
    };

    fetchRanking();
  }, []);

  const getMedalColor = (pos) => {
    if (pos === 1) return '#FFD700';
    if (pos === 2) return '#C0C0C0';
    if (pos === 3) return '#CD7F32';
    return 'transparent';
  };

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        background: 'linear-gradient(120deg, #0d1b2a 0%, #1976d2 100%)',
        borderRadius: 5,
        boxShadow: 6,
        minHeight: 420,
        color: 'white'
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        fontWeight="bold"
        sx={{
          color: '#fff',
          letterSpacing: 1,
          mb: 3,
          textShadow: '0 2px 12px #1976d2'
        }}
      >
        <RestaurantIcon sx={{ fontSize: 38, mb: -0.7, mr: 1, color: '#90caf9' }} />
        Ranking de Ciudades por Comidas
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 4,
          boxShadow: 4,
          background: 'rgba(13,27,42,0.98)',
          overflow: 'hidden'
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ background: 'linear-gradient(90deg, #1976d2 60%, #1565c0 100%)' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: 18, border: 0 }}>#</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: 18, border: 0 }}>Ciudad</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: 18, border: 0 }}>Puntuación Media</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ranking.map((ciudad) => (
              <Fade in key={ciudad.ciudad_id}>
                <TableRow
                  sx={{
                    background: ciudad.posicion <= 3
                      ? `linear-gradient(90deg, ${getMedalColor(ciudad.posicion)}22 0%, #1976d2 100%)`
                      : 'transparent',
                    color: 'white',
                    '&:hover': {
                      background: 'rgba(25,118,210,0.18)'
                    }
                  }}
                >
                  <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: 17, border: 0 }}>
                    <Box display="flex" alignItems="center">
                      {ciudad.posicion <= 3 && (
                        <Tooltip
                          title={
                            ciudad.posicion === 1
                              ? 'Oro'
                              : ciudad.posicion === 2
                              ? 'Plata'
                              : 'Bronce'
                          }
                          arrow
                        >
                          <EmojiEventsIcon
                            sx={{
                              color: getMedalColor(ciudad.posicion),
                              mr: 1,
                              fontSize: 28
                            }}
                          />
                        </Tooltip>
                      )}
                      {ciudad.posicion}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: '#bbdefb', fontWeight: 'bold', fontSize: 17, border: 0 }}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Avatar
                        sx={{
                          bgcolor: '#1976d2',
                          color: '#fff',
                          width: 32,
                          height: 32,
                          fontWeight: 700,
                          fontSize: 18,
                          boxShadow: 2
                        }}
                      >
                        {ciudad.ciudad_nombre?.charAt(0) || <RestaurantIcon />}
                      </Avatar>
                      <Typography fontWeight="bold" sx={{ color: '#fff', fontSize: 17 }}>
                        {ciudad.ciudad_nombre}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: '#fffde7', fontWeight: 'bold', fontSize: 17, border: 0 }}>
                    <span style={{ fontSize: 20, marginRight: 4 }}>⭐</span>
                    {ciudad.puntuacion_media ? ciudad.puntuacion_media.toFixed(2) : "0"}
                  </TableCell>
                </TableRow>
              </Fade>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RankingComidas;
