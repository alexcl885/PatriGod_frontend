import { Box, Typography, Container, Divider, Button, Paper } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from 'react-router-dom';
import Ranking from "../componentes/Ranking/Ranking";

const RankingPage = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(120deg, #0d1b2a 0%, #1976d2 100%)',
        minHeight: '100vh',
        py: { xs: 4, md: 7 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={10}
          sx={{
            textAlign: 'center',
            mb: 5,
            p: { xs: 2, md: 4 },
            borderRadius: 5,
            background: 'linear-gradient(90deg, #1976d2 60%, #ec407a 100%)',
            color: '#fff',
            boxShadow: 8,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <EmojiEventsIcon sx={{ fontSize: 54, color: '#FFD700', mb: 1, filter: 'drop-shadow(0 2px 8px #1976d2)' }} />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              color: '#fff',
              letterSpacing: 1.5,
              textShadow: '0 2px 8px #1976d2',
              mb: 1
            }}
          >
            Ranking de Ciudades Patrimonio
          </Typography>
          <Divider sx={{ backgroundColor: '#FFD700', my: 2, width: '60%', mx: 'auto', opacity: 0.7 }} />
          <Typography
            variant="body1"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              mb: 3,
              color: '#fffde7',
              fontWeight: 500,
              fontSize: '1.08rem'
            }}
          >
            Descubre qué ciudades están mejor valoradas por su historia, cultura, gastronomía y eventos únicos. ¡Tu voto cuenta!
          </Typography>
          <Button
            component={Link}
            to="/ranking/articulos"
            variant="contained"
            startIcon={<ArticleIcon />}
            sx={{
              background: 'linear-gradient(90deg, #ff9800 60%, #f44336 100%)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.08rem',
              px: 4,
              py: 1.2,
              borderRadius: '30px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              textTransform: 'uppercase',
              letterSpacing: 1,
              mt: 1,
              '&:hover': {
                background: 'linear-gradient(90deg, #f44336 60%, #ff9800 100%)',
                transform: 'scale(1.06)',
                transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
              },
            }}
          >
            Artículos
          </Button>
        </Paper>
        {/* Componente de ranking */}
        <Ranking />
      </Container>
    </Box>
  );
};

export default RankingPage;
