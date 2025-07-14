import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

interface JacoHeroProps {
  children?: React.ReactNode;
}

const JacoHero: React.FC<JacoHeroProps> = ({ children }) => {
  return (
    <Box sx={{
      position: 'relative',
      minHeight: { xs: '40vh', md: '50vh' },
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      mb: { xs: 0.5, md: 1 },
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
            alt="Jacó Beach aerial view"
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
          bgcolor: 'rgba(0,0,0,0.22)',
          zIndex: 1,
        }} />
      </motion.div>
      
      {/* Content */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          style={{ marginLeft: '10px' }}
        >
          <Typography
            variant="h1"
            fontWeight={900}
            color="#fff"
            sx={{
              textShadow: '0 8px 48px #000b, 0 2px 0 #222',
              letterSpacing: 15,
              mb: { xs: 0, md: 5 },
              fontSize: { xs: 85, md: 100, lg: 120 },
              lineHeight: 1.05,
              textTransform: 'uppercase',
              mt: { xs: 5, md: 0 },
            }}
          >
            Jacó
          </Typography>
          <Typography
            variant="h5"
            color="rgba(255,255,255,0.92)"
            sx={{
              textShadow: '0 2px 16px #0007',
              fontWeight: 25,
              letterSpacing: 2,
              mb: -1,
              fontSize: { xs: 15, md: 22 },
              display: { xs: 'none', md: 'block' },
            }}
          >
            Discover the vibrant heart of Costa Rica's Pacific coast
          </Typography>
        </motion.div>
      </Container>
      
      {/* Overlay content (tabs) */}
      {children && (
        <Box sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: { xs: 20, md: 20 },
          zIndex: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none', // let only tabs/buttons be interactive
        }}>
          {children}
        </Box>
      )}
    </Box>
  );
};

export default JacoHero; 