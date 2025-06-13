import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Chip,
    Stack,
    Divider
} from '@mui/material';

const Monumento = ({monumento}) => {
    
    return (
        <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
            <Card
                sx={{
                    borderRadius: 6,
                    overflow: "hidden",
                    boxShadow: 6,
                    backgroundColor: "#fff"
                }}
            >
                {/* Imagen principal */}
                <CardMedia
                    component="img"
                    height="300"
                    image={monumento.imagen}
                    alt={monumento.nombre}
                    sx={{ objectFit: "cover" }}
                />

                {/* Contenido dividido: Monumento | Ciudad */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" }
                    }}
                >
                    {/* Sección Monumento */}
                    <CardContent sx={{ width: { xs: "100%", md: "50%" }, p: 4 }}>
                        <Typography variant="h4" fontWeight={700} gutterBottom color="secondary">
                            {monumento.nombre}
                        </Typography>
                        <Typography variant="body1" mb={2}>
                            {monumento.descripcion}
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2"><strong>Estilo:</strong> {monumento.estiloArquitectonico}</Typography>
                                <Typography variant="body2"><strong>Época:</strong> {monumento.epocaConstruccion}</Typography>
                                <Typography variant="body2"><strong>Altura:</strong> {monumento.altura} m</Typography>
                                <Typography variant="body2"><strong>Materiales:</strong> {monumento.materialesPrincipales}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2"><strong>Ubicación:</strong> {monumento.ubicacion}</Typography>
                                <Typography variant="body2"><strong>Horario:</strong> {monumento.horarioVisitas}</Typography>
                                <Typography variant="body2"><strong>Entrada:</strong> {monumento.precioEntrada}</Typography>
                                <Typography variant="body2"><strong>UNESCO:</strong> {monumento.declaracionUnesco}</Typography>
                            </Grid>
                        </Grid>

                        <Box mt={3}>
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                Curiosidades
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {monumento.curiosidades}
                            </Typography>
                        </Box>
                    </CardContent>

                    {/* Línea divisoria en pantallas grandes */}
                    <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" }, my: 4 }} />

                    {/* Sección Ciudad */}
                    <CardContent sx={{ width: { xs: "100%", md: "50%" }, p: 4 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={monumento.ciudad.imagenPrincipal}
                            alt={monumento.ciudad.nombre}
                            sx={{ borderRadius: 2, mb: 2 }}
                        />
                        <Typography variant="h4" fontWeight={700} gutterBottom color="primary">
                            {monumento.ciudad.nombre}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {monumento.ciudad.descripcion}
                        </Typography>

                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            <Chip label={`Provincia: ${monumento.ciudad.provincia}`} color="info" />
                            <Chip label={`Comunidad: ${monumento.ciudad.comunidadAutonoma}`} color="default" />
                            <Chip label={`Desde ${new Date(monumento.ciudad.fechaPatrimonio).getFullYear()} Patrimonio`} color="success" />
                        </Stack>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
};

export default Monumento;
