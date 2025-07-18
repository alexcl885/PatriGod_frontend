import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Card,
  CardContent,
  Button,
  Stack,
  Divider
} from '@mui/material';
import { Language, Public } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const values = [
  {
    title: 'Vision',
    description: 'To be the global reference in interactive cultural heritage.',
    icon: <Public fontSize="large" color="primary" />
  },
  {
    title: 'Mission',
    description: 'To inspire and connect the community with living history.',
    icon: <Language fontSize="large" color="secondary" />
  },
  {
    title: 'Team',
    description: 'Passionate leaders in technology and culture.',
    icon: <Avatar sx={{ bgcolor: 'primary.main' }}>👥</Avatar>
  },
  {
    title: 'Data Quality',
    description: 'Accurate and always up-to-date information for every city and monument.',
    icon: <Avatar sx={{ bgcolor: 'success.main' }}>📊</Avatar>
  },
  {
    title: 'Interactivity',
    description: 'Customizable maps and filters for a unique experience.',
    icon: <Avatar sx={{ bgcolor: 'info.main' }}>🗺️</Avatar>
  },
  {
    title: 'Sustainability',
    description: 'Responsible tourism tips to protect heritage.',
    icon: <Avatar sx={{ bgcolor: 'warning.main' }}>🌿</Avatar>
  }
];


const members = [
  { name: 'Alejandro Copado López', role: 'Full Stack Developer', avatar: 'src\\images\\alejandro.png' }
];

const About = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <Box component="section" sx={{ background: 'linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)', py: { xs: 8, md: 4 } }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800 }}>
            About <Box component="span" color="primary.main">PatriGod</Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Our global platform that redefines how we explore, value, and preserve World Heritage.
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 2 }}>
            Have any questions? Write to me at <Box component="span" color="primary.main" fontWeight={700}>alexcopado2005@gmail.com</Box>
          </Typography>
        </Box>

        {/* Professional Values with smart centering */}
        <Grid container spacing={1} mb={8} justifyContent="center">
          {values.map((item) => (
            <Grid
              item
              key={item.title}
              xs={12}
              sm={6}
              md={4}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Card
                sx={{
                  width: 300,
                  p: 4,
                  boxShadow: 6,
                  borderRadius: 4,
                  '&:hover': {
                    boxShadow: 10,
                    transform: 'translateY(-6px)',
                    transition: '0.3s',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box
                    mb={2}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>


        <Divider sx={{ bgcolor: 'grey.300', mb: 8 }} />

        {/* PatriGod Commitments */}
        <Stack alignItems="center" spacing={3} mb={10} sx={{ px: 2 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, maxWidth: 600, textAlign: 'center' }}>
            Our commitments to you and heritage
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 600, textAlign: 'center' }}>
            At PatriGod we not only share history, but also protect and celebrate the cultural richness of every city.
            We are committed to providing you with accurate data, an interactive experience, and promoting responsible tourism.
            Together, we build a future where heritage lives in every explorer.
          </Typography>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" size="large" sx={{ mt: 2, px: 5 }}>
              Join our mission
            </Button>
          </Link>
        </Stack>



        <Divider sx={{ bgcolor: 'grey.300', mb: 8 }} />

        {/* Global Team */}
        <Box textAlign="center">
          <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
            Our Global Team
          </Typography>
          <Grid container spacing={4} justifyContent="center" mt={4}>
            {members.map((member) => (
              <Grid key={member.name} item xs={6} sm={4} md={2}>
                <Box textAlign="center">
                  <Avatar
                    sx={{ width: 80, height: 80, m: 'auto', mb: 1 }}
                    alt={member.name}
                    src={member.avatar}
                  />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {member.role}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
