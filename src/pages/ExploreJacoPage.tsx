import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

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
            preload="metadata"
            webkit-playsinline="true"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            poster="google_earth_pic_before.png"
            onError={(e) => {
              // Fallback to poster image on video error
              const video = e.currentTarget;
              const parent = video.parentElement;
              if (parent) {
                video.style.display = 'none';
                const img = document.createElement('img');
                img.src = 'google_earth_pic_before.png';
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.style.filter = 'brightness(0.7)';
                parent.insertBefore(img, video);
              }
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'brightness(0.7)',
            }}
          >
            {/* MP4 first for better iOS Safari support */}
            <source src="google_earth_pressed_a_lot.mp4" type="video/mp4" />
            <source src="google_earth_pressed_a_lot.webm" type="video/webm" />
            {/* Fallback for browsers that don't support video */}
            <img 
              src="google_earth_pic_before.png" 
              alt="Jaco Beach aerial view"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.7)',
              }}
            />
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
            style={{ marginTop: '10%' }}
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