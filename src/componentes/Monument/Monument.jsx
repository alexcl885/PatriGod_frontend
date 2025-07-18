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

const Monument = ({ monument }) => {
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
                {/* Main image */}
                <CardMedia
                    component="img"
                    height="300"
                    image={monument.image}
                    alt={monument.name}
                    sx={{ objectFit: "cover" }}
                />

                {/* Split content: Monument | City */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" }
                    }}
                >
                    {/* Monument section */}
                    <CardContent sx={{ width: { xs: "100%", md: "50%" }, p: 4 }}>
                        <Typography variant="h4" fontWeight={700} gutterBottom color="secondary">
                            {monument.name}
                        </Typography>
                        <Typography variant="body1" mb={2}>
                            {monument.description}
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2"><strong>Style:</strong> {monument.architecturalStyle}</Typography>
                                <Typography variant="body2"><strong>Period:</strong> {monument.constructionPeriod}</Typography>
                                <Typography variant="body2"><strong>Height:</strong> {monument.height} m</Typography>
                                <Typography variant="body2"><strong>Materials:</strong> {monument.mainMaterials}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2"><strong>Location:</strong> {monument.location}</Typography>
                                <Typography variant="body2"><strong>Visiting hours:</strong> {monument.visitingHours}</Typography>
                                <Typography variant="body2"><strong>Entry fee:</strong> {monument.entryFee}</Typography>
                                <Typography variant="body2"><strong>UNESCO:</strong> {monument.unescoDeclaration}</Typography>
                            </Grid>
                        </Grid>

                        <Box mt={3}>
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                Curiosities
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {monument.curiosities}
                            </Typography>
                        </Box>
                    </CardContent>

                    {/* Divider line on large screens */}
                    <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" }, my: 4 }} />

                    {/* City section */}
                    <CardContent sx={{ width: { xs: "100%", md: "50%" }, p: 4 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={monument.city.mainImage}
                            alt={monument.city.name}
                            sx={{ borderRadius: 2, mb: 2 }}
                        />
                        <Typography variant="h4" fontWeight={700} gutterBottom color="primary">
                            {monument.city.name}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {monument.city.description}
                        </Typography>

                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            <Chip label={`Province: ${monument.city.province}`} color="info" />
                            <Chip label={`Community: ${monument.city.autonomousCommunity}`} color="default" />
                            <Chip label={`World Heritage since ${new Date(monument.city.heritageDate).getFullYear()}`} color="success" />
                        </Stack>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
};

export default Monument;
