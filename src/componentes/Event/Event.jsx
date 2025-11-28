import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Chip,
  Stack,
  Divider,
  Button,
  Link
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';

const Event = ({ event }) => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#eef2f5", minHeight: "100vh" }}>
      <Card sx={{ borderRadius: 4, boxShadow: 4, overflow: 'hidden' }}>

        {/* Banner del event */}
        <CardMedia
          component="img"
          height="320"
          image={event?.image || "/placeholder.jpg"}
          alt={event?.name || "event"}
          sx={{ objectFit: 'cover' }}
        />

        <Box sx={{ display: { xs: 'block', md: 'flex' } }}>
          
          {/* Detalles del event */}
          <CardContent sx={{ flex: 1, p: 4 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom color="secondary.main">
              {event?.name || "Sin name"}
            </Typography>

            <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
              <Chip 
                icon={<EventIcon />} 
                label={event?.date ? new Date(event.date).toLocaleDateString() : "date no disponible"} 
                color="info" 
              />

              <Chip 
                icon={<AccessTimeIcon />} 
                label={event?.eventTime?.slice(0, 5) || "00:00"} 
                color="info" 
              />

              <Chip 
                icon={<PlaceIcon />} 
                label={event?.location || "Place not found"} 
                color="info" 
              />

              <Chip 
                label={event?.eventType || "No type"} 
                color="primary" 
              />
            </Stack>

            <Typography variant="body1" paragraph>
              {event?.eventInformation || "No hay información sobre este event."}
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2"><strong>Organizador:</strong> {event?.organizer || "Desconocido"}</Typography>
                <Typography variant="body2"><strong>Precio:</strong> {event?.price || "No disponible"}</Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body2"><strong>Duración:</strong> {event?.duration || "?"} min</Typography>
                
                <Link href={event?.officialWebsite || "#"} target="_blank" underline="none">
                  <Button variant="outlined" startIcon={<LanguageIcon />}>
                    Web Oficial
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </CardContent>

          <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />

          {/* Información city */}
          <CardContent sx={{ width: { md: '40%' }, p: 4, backgroundColor: '#fafafa' }}>
            
            <CardMedia
              component="img"
              height="180"
              image={event?.city?.mainImage || "/city-placeholder.jpg"}
              alt={event?.city?.name || "city"}
              sx={{ borderRadius: 2, mb: 2, objectFit: 'cover' }}
            />

            <Typography variant="h5" fontWeight={600} gutterBottom color="primary.main">
              {event?.city?.name || "city no disponible"}
            </Typography>

            <Typography variant="body2" paragraph color="text.secondary">
              {event?.city?.description || "Sin descripción de la city."}
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip label={`Provincia: ${event?.city?.province || "?"}`} size="small" />
              <Chip label={`Comunidad: ${event?.city?.autonomousCommunity || "?"}`} size="small" />
              <Chip 
                label={`Patrimonio ${event?.city?.heritageDate ? new Date(event.city.heritageDate).getFullYear() : "?"}`} 
                size="small" 
                color="success"
              />
            </Stack>

          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default Event;
