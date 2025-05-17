import { Box, Typography, Container, Divider, Button } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from 'react-router-dom';
import Ranking from "../componentes/Ranking/Ranking";

const RankingPage = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom right, #051e37, #0b3d91)',
        minHeight: '100vh',
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            mb: 4,
            p: 3,
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',
          }}
        >
          <EmojiEventsIcon sx={{ fontSize: 50, color: '#ff9800', mb: 1 }} />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: 'white',
              letterSpacing: 1,
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
            }}
          >
            Ranking de Ciudades Patrimonio
          </Typography>
          <Divider sx={{ backgroundColor: '#ff9800', my: 2, width: '60%', mx: 'auto' }} />
          <Typography
            variant="body1"
            color="grey.300"
            sx={{ maxWidth: '700px', mx: 'auto', mb: 3 }}
          >
            Descubre qué ciudades están mejor valoradas por su historia, cultura, gastronomía y eventos únicos. ¡Tu voto cuenta!
          </Typography>

          {/* Botón a Artículos */}
          <Button
            component={Link}
            to="/articulos"
            variant="contained"
            startIcon={<ArticleIcon />}
            sx={{
              background: 'linear-gradient(to right, #ff9800, #f44336)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '16px',
              px: 3,
              py: 1,
              borderRadius: '30px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              textTransform: 'uppercase',
              '&:hover': {
                background: 'linear-gradient(to right, #f44336, #ff9800)',
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease-in-out',
              },
            }}
          >
            <Link to={"/ranking/articulos"}>Artículos</Link> 
          </Button>
        </Box>

        {/* Componente de ranking */}
        <Ranking />
      </Container>
    </Box>
  );
};

export default RankingPage;
