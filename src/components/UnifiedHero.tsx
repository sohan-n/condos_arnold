import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import HeroButton from './HeroButton';

interface UnifiedHeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonTo?: string;
  heightPreset?: 'mainpage' | 'listingpage' | 'custom';
  customHeight?: string;
  shadowType?: 'dark' | 'light';
  overlayOpacity?: number;
}

const UnifiedHero: React.FC<UnifiedHeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonTo,
  heightPreset = 'mainpage',
  customHeight,
  shadowType = 'dark',
  overlayOpacity = 0.25
}) => {
  // Height presets
  const getHeight = () => {
    if (customHeight) return customHeight;
    switch (heightPreset) {
      case 'listingpage':
        return '77vh';
      case 'mainpage':
      default:
        return { xs: '83vh', md: '85vh' };
    }
  };

  // Shadow configurations
  const getTitleShadow = () => {
    if (shadowType === 'light') {
      return {
        xs: '0 4px 24px rgba(226, 226, 226, 0.9), 0 2px 8px rgba(255, 255, 255, 0.9)',
        md: '0 10px 48px rgba(255, 255, 255, 0.5), 0 2px 8px rgba(255, 255, 255, 0.5)'
      };
    } else {
      return {
        xs: '0 4px 24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.9)',
        md: '0 10px 48px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.9)'
      };
    }
  };

  const getSubtitleShadow = () => {
    if (shadowType === 'light') {
      return {
        xs: '0 4px 24px rgba(255, 255, 255, 0.9), 0 2px 8px rgba(255, 255, 255, 0.9)',
        md: '0 10px 48px rgba(255, 255, 255, 0.9), 0 2px 8px rgba(255, 255, 255, 0.9)'
      };
    } else {
      return {
        xs: '0 4px 24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.9)',
        md: '0 10px 48px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.9)'
      };
    }
  };

  return (
    <ParallaxProvider>
      <Box sx={{ 
        position: 'relative', 
        minHeight: getHeight(), 
        overflow: 'hidden',
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
      }}>
        {/* Background Image with Parallax */}
        <Parallax translateY={[-20, 20]} style={{ position: 'absolute', inset: 0 }}>
          <Box sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '120%',
            zIndex: 0,
          }}>
            <img
              src={backgroundImage}
              alt="Hero background"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Parallax>

        {/* Overlay */}
        <Box sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          bgcolor: `rgba(0,0,0,${overlayOpacity})`,
          zIndex: 1,
        }} />

        {/* Content */}
        <Container maxWidth="lg" sx={{ 
          position: 'relative', 
          zIndex: 2, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%',
          pt: { xs: heightPreset === 'listingpage' ? 18 : 22, md: heightPreset === 'listingpage' ? 22 : 27 },
          pb: { xs: 6, md: 10 }
        }}>
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Typography
              variant="h1"
              component="h1"
              color="white"
              gutterBottom
              fontSize={{ xs: 50, md: 70 }}
              sx={{
                textShadow: getTitleShadow(),
                textAlign: 'center',
                fontWeight: 700,
                lineHeight: 1.1,
                mb: { xs: 2, md: 3 }
              }}
            >
              {title}
            </Typography>
          </motion.div>

          {/* Subtitle */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <Typography
                variant="h6"
                color="rgba(255,255,255,0.9)"
                mb={{ xs: 0, md: 4 }}
                sx={{
                  mt: { xs: 0, md: 1 },
                  alignSelf: { xs: 'center', md: 'unset' },
                  textShadow: getSubtitleShadow(),
                  fontSize: { xs: 17, md: 22 },
                  my: { xs: 'auto', md: 0 },
                  display: { xs: 'none', md: 'block' },
                  textAlign: 'center',
                  fontWeight: 500
                }}
              >
                {subtitle}
              </Typography>
            </motion.div>
          )}

          {/* Hero Button */}
          {buttonText && buttonTo && (
            <Box sx={{ display: 'block', textAlign: 'center', mt: { xs: 6, md: 5 } }}>
              <HeroButton
                to={buttonTo}
                buttonVariant="glass"
              >
                {buttonText}
              </HeroButton>
            </Box>
          )}
        </Container>
      </Box>
    </ParallaxProvider>
  );
};

export default UnifiedHero; 