import React, { useEffect, useState } from 'react';
import {
  Container, Typography, Grid, Card, CardContent, Avatar, Chip, CircularProgress,
  Box, IconButton, Tooltip, CardHeader, TextField, Pagination
} from '@mui/material';
import { ToggleOn, ToggleOff, Person } from '@mui/icons-material';
import { pink, lightGreen, deepOrange, blueGrey } from '@mui/material/colors';
import api from '../../servicios/api';

const GestionUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [accionEnProgreso, setAccionEnProgreso] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagina, setPagina] = useState(1);
  const usuariosPorPagina = 5;

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await api.get('http://localhost:8080/api/admin/usuario');
        // Los datos vienen en response.data (array de usuarios)
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsuarios();
  }, []);

  const cambiarEstadoUsuario = async (id, nuevoEstado) => {
    setAccionEnProgreso(id);
    try {
      await api.put(`http://localhost:8080/api/admin/usuario/${id}/estado`, { activo: nuevoEstado });
      setUsuarios((prev) =>
        prev.map((u) => (u.id === id ? { ...u, activo: nuevoEstado } : u))
      );
    } catch (error) {
      console.error('Error al cambiar estado:', error);
    } finally {
      setAccionEnProgreso(null);
    }
  };

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPaginas = Math.ceil(usuariosFiltrados.length / usuariosPorPagina);
  const usuariosEnPagina = usuariosFiltrados.slice(
    (pagina - 1) * usuariosPorPagina,
    pagina * usuariosPorPagina
  );

  const handleChangePagina = (_, value) => {
    setPagina(value);
  };

  // Cambia la visualización de la fecha para arrays tipo [2025,5,31,9,15,53]
  const formatFecha = (fechaArr) => {
    if (!Array.isArray(fechaArr) || fechaArr.length < 3) return '';
    // [YYYY, MM, DD, hh, mm, ss]
    const [y, m, d, hh = 0, mm = 0, ss = 0] = fechaArr;
    return `${d.toString().padStart(2, '0')}/${m.toString().padStart(2, '0')}/${y} ${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: pink[100], fontWeight: 'bold' }}>
        Gestión de Usuarios
      </Typography>

      <TextField
        label="Buscar por nombre de usuario"
        variant="outlined"
        fullWidth
        sx={{ mb: 4, backgroundColor: '#fff', borderRadius: 2 }}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setPagina(1); // reiniciar a la primera página al buscar
        }}
      />

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
            {usuariosEnPagina.map((usuario) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={usuario.id}>
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, #2c2c54 0%, #4b6584 100%)',
                    color: 'white',
                    borderRadius: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.25s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                    },
                  }}
                >
                  <CardHeader
                    avatar={<Avatar sx={{ bgcolor: deepOrange[400] }}><Person /></Avatar>}
                    title={<Typography variant="h6" color="white">{usuario.username}</Typography>}
                    subheader={<Typography variant="caption" color={blueGrey[200]}>ID: {usuario.id}</Typography>}
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ color: pink[100] }}>
                      <strong>Email:</strong> {usuario.email}
                    </Typography>
                    <Typography variant="body2" sx={{ color: pink[100], mt: 1 }}>
                      <strong>Rol:</strong>{' '}
                      <Chip
                        label={usuario.tipo}
                        size="small"
                        sx={{
                          backgroundColor: usuario.tipo === 'ADMINISTRADOR' ? '#d500f9' : '#2979ff',
                          color: 'white',
                          ml: 1
                        }}
                      />
                    </Typography>
                    <Typography variant="body2" sx={{ color: pink[100], mt: 1 }}>
                      <strong>Estado:</strong>{' '}
                      <Chip
                        label={usuario.activo ? 'Activo' : 'Inactivo'}
                        sx={{
                          backgroundColor: usuario.activo ? lightGreen[500] : pink[500],
                          color: 'white',
                          ml: 1
                        }}
                        size="small"
                      />
                    </Typography>
                    <Typography variant="body2" sx={{ color: pink[100], mt: 1 }}>
                      <strong>Fecha de creación:</strong> {formatFecha(usuario.fechaCreacion)}
                    </Typography>

                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                      <Tooltip title={usuario.activo ? 'Desactivar usuario' : 'Activar usuario'}>
                        <span>
                          <IconButton
                            onClick={() => cambiarEstadoUsuario(usuario.id, !usuario.activo)}
                            disabled={accionEnProgreso === usuario.id}
                            sx={{
                              color: usuario.activo ? lightGreen[300] : pink[300],
                              '&:hover': {
                                color: usuario.activo ? lightGreen[100] : pink[100]
                              }
                            }}
                          >
                            {usuario.activo ? <ToggleOff /> : <ToggleOn />}
                          </IconButton>
                        </span>
                      </Tooltip>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Controles de paginación */}
          {totalPaginas > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, mb: 6 }}>
              <Pagination
                count={totalPaginas}
                page={pagina}
                onChange={handleChangePagina}
                color="primary"
                variant="outlined"
                shape="rounded"
                size="large"
              />
            </Box>
          )}
        </>
      )}
    </Container>
  );
};

export default GestionUsuarios;
