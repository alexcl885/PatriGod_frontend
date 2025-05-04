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
  Typography
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const RankingEventos = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/ciudad/rankEvento');
        const data = await response.json();
        setRanking(data);
      } catch (error) {
        console.error('Error al obtener el ranking:', error);
      }
    };

    fetchRanking();
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        Ranking de Ciudades por Monumentos
      </Typography>
      <TableContainer component={Paper} sx={{ borderRadius: 4, boxShadow: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#1976d2' }}>
            <TableRow>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>#</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Ciudad</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Puntuación Media</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ranking.map((ciudad) => (
              <TableRow key={ciudad.ciudad_id}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    {ciudad.posicion <= 3 && (
                      <EmojiEventsIcon
                        sx={{
                          color:
                            ciudad.posicion === 1
                              ? '#FFD700'
                              : ciudad.posicion === 2
                              ? '#C0C0C0'
                              : '#CD7F32',
                          mr: 1,
                        }}
                      />
                    )}
                    {ciudad.posicion}
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="medium">{ciudad.ciudad_nombre}</Typography>
                </TableCell>
                <TableCell>
                  ⭐ {ciudad.puntuacion_media.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RankingEventos;
