import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const activities = [
  {
    title: 'Surf Lessons',
    description: 'Catch the perfect wave with local instructors for all skill levels.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=60',
  },
  {
    title: 'Zip Line Adventure',
    description: 'Fly through the rainforest canopy on an exhilarating zip-line tour.',
    image: 'https://images.unsplash.com/photo-1506880135364-9b0b8d52917d?auto=format&fit=crop&w=600&q=60',
  },
  {
    title: 'Rainforest Waterfall Hike',
    description: 'Explore lush trails leading to stunning waterfalls and natural pools.',
    image: 'https://images.unsplash.com/photo-1558980664-10d3b6a36da8?auto=format&fit=crop&w=600&q=60',
  },
  {
    title: 'ATV Jungle Tour',
    description: 'Ride off-road vehicles through rugged jungle terrain and scenic viewpoints.',
    image: 'https://images.unsplash.com/photo-1602288637781-65396b8f7b8b?auto=format&fit=crop&w=600&q=60',
  },
];

const JacoPage: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'linear-gradient(to bottom, #fff 0%, #f6faff 60%, #eaf2fb 100%)', minHeight: '100vh' }}>
      {/* Hero Section with Google Earth video background */}
      <Box sx={{
        position: 'relative',
        minHeight: { xs: '60vh', md: '70vh' },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        mb: { xs: 6, md: 10 },
      }}>
        {/* Video background with fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="outsideshot.jpeg"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'brightness(0.7)',
            }}
          >
            <source src="google_earth_1.webm" type="video/webm" />
            <source src="google_earth_pressed.mp4" type="video/mp4" />
          </video>
          {/* Overlay for readability */}
          <Box sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.35)',
            zIndex: 1,
          }} />
        </motion.div>
        {/* Content */}
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5 }}
          >
            <Typography
              variant="h2"
              fontWeight={900}
              color="#fff"
              sx={{
                textShadow: '0 4px 32px #000a, 0 1.5px 0 #222',
                letterSpacing: 2,
                mb: 2,
                fontSize: { xs: 38, md: 64 },
                lineHeight: 1.1,
              }}
            >
              Jaco Beach
            </Typography>
            <Typography
              variant="h5"
              color="rgba(255,255,255,0.92)"
              sx={{
                textShadow: '0 2px 16px #0007',
                fontWeight: 400,
                mb: 4,
                fontSize: { xs: 18, md: 28 },
              }}
            >
              Discover the vibrant heart of Costa Rica's Pacific coast
            </Typography>
          </motion.div>
        </Container>
      </Box>
      {/* Main content can go here */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h4" fontWeight={700} mb={2}>
          Welcome to Jaco
        </Typography>
        <Typography color="text.secondary">
          Jaco is a lively beach town known for its beautiful coastline, surfing, nightlife, and easy access to Costa Rica's natural wonders. Explore the best of Jaco from your luxury condo.
        </Typography>
      </Container>
    </Box>
  );
};

export default JacoPage; 