import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Divider,
  Fade
} from '@mui/material';
import { styled } from '@mui/material/styles';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FestivalIcon from '@mui/icons-material/Festival';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const StyledCard = styled(Card)(() => ({
  borderRadius: 20,
  background: 'linear-gradient(120deg, #0d253f 60%, #1976d2 100%)',
  color: '#fff',
  boxShadow: '0 8px 32px 0 rgba(44,62,80,0.18)',
  transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s cubic-bezier(.4,2,.6,1)',
  '&:hover': {
    transform: 'translateY(-10px) scale(1.04)',
    boxShadow: '0 12px 32px 0 rgba(25,118,210,0.25)',
  },
}));

const Articles = () => {
  const { id } = useParams();

  const articles = [
    {
      name: 'Monuments',
      description: 'Discover the most important historical monuments.',
      path: `/city/${id}/monuments`,
      color: 'primary',
      icon: <TravelExploreIcon fontSize="large" color="primary" />,
    },
    {
      name: 'Events',
      description: 'Explore the most outstanding cultural events.',
      path: `/city/${id}/events`,
      color: 'secondary',
      icon: <FestivalIcon fontSize="large" color="secondary" />,
    },
    {
      name: 'Food',
      description: 'Try the traditional cuisine of the city.',
      path: `/city/${id}/foods`,
      color: 'success',
      icon: <RestaurantMenuIcon fontSize="large" color="success" />,
    },
  ];

  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 900,
          color: '#fff',
          mb: 5,
          letterSpacing: 1.2,
          textShadow: '0 2px 8px #1976d2'
        }}
      >
        What do you want to explore?
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {articles.map((article, idx) => (
          <Fade in key={article.name} timeout={700 + idx * 200}>
            <Grid item xs={12} sm={4} md={4} display="flex" justifyContent="center">
              <StyledCard elevation={12} sx={{ width: 320, minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent sx={{ textAlign: 'center', pb: 0 }}>
                  <Box
                    sx={{
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: 48
                    }}
                  >
                    {article.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#fffde7', mb: 1 }}>
                    {article.name}
                  </Typography>
                  <Divider sx={{ my: 1.5, bgcolor: '#1976d2', opacity: 0.3 }} />
                  <Typography variant="body1" sx={{ color: '#bbdefb', fontWeight: 500 }}>
                    {article.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 3, pt: 2 }}>
                  <Button
                    component={Link}
                    to={article.path}
                    variant="contained"
                    color={article.color}
                    size="large"
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.08rem',
                      px: 4,
                      py: 1.2,
                      borderRadius: 3,
                      boxShadow: 3,
                      letterSpacing: 1,
                      background: article.color === 'primary'
                        ? 'linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)'
                        : article.color === 'secondary'
                        ? 'linear-gradient(90deg, #ec407a 60%, #f06292 100%)'
                        : 'linear-gradient(90deg, #43a047 60%, #81c784 100%)',
                      color: '#fff',
                      '&:hover': {
                        filter: 'brightness(1.1)',
                        transform: 'scale(1.04)'
                      }
                    }}
                  >
                    View {article.name}
                  </Button>
                </CardActions>
              </StyledCard>
            </Grid>
          </Fade>
        ))}
      </Grid>
    </Box>
  );
};

export default Articles;
