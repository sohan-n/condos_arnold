import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import HeroButton from './HeroButton';

interface SyncedUnifiedHeroProps {
  images: string[];
  currentIndex?: number;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonTo?: string;
  heightPreset?: 'mainpage' | 'listingpage' | 'custom';
  customHeight?: string;
  shadowType?: 'dark' | 'light';
  overlayOpacity?: number;
  fadeDuration?: number;
}

const SyncedUnifiedHero: React.FC<SyncedUnifiedHeroProps> = ({
  images,
  currentIndex = 0,
  title,
  subtitle,
  buttonText,
  buttonTo,
  heightPreset = 'mainpage',
  customHeight,
  shadowType = 'dark',
  overlayOpacity = 0.25,
  fadeDuration = 500
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sync with external carousel
  useEffect(() => {
    if (currentIndex !== undefined && currentIndex !== currentImageIndex && images.length > 0) {
      setNextImageIndex(currentIndex);
      
      requestAnimationFrame(() => {
        setIsTransitioning(true);
        
        setTimeout(() => {
          setCurrentImageIndex(currentIndex);
          requestAnimationFrame(() => {
            setIsTransitioning(false);
          });
        }, fadeDuration);
      });
    }
  }, [currentIndex, currentImageIndex, fadeDuration, images.length]);

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
        xs: '0 4px 24px rgba(226, 226, 226, 0.6), 0 2px 8px rgba(255, 255, 255, 0.6)',
        md: '0 10px 48px rgba(255, 255, 255, 0.6), 0 2px 8px rgba(255, 255, 255, 0.6)'
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
        xs: '0 4px 24px rgba(255, 255, 255, 0.6), 0 2px 8px rgba(255, 255, 255, 0.6)',
        md: '0 10px 48px rgba(255, 255, 255, 0.6), 0 2px 8px rgba(255, 255, 255, 0.6)'
      };
    } else {
      return {
        xs: '0 4px 24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.9)',
        md: '0 10px 48px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.9)'
      };
    }
  };

  if (images.length === 0) return null;

  return (
    <ParallaxProvider>
      <Box sx={{ 
        position: 'relative', 
        minHeight: getHeight(), 
        overflow: 'hidden',
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
        '@keyframes fadeInHero': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      }}>
        {/* Current Background Image with Parallax */}
        <Parallax translateY={[-20, 20]} style={{ position: 'absolute', inset: 0 }}>
          <Box sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '120%',
            zIndex: 0,
          }}>
            <img
              src={images[currentImageIndex]}
              alt="Hero background"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                filter: 'brightness(0.8) contrast(1.1)'
              }}
            />
          </Box>
        </Parallax>

        {/* Next Background Image for Transitions */}
        {isTransitioning && nextImageIndex !== currentImageIndex && (
          <Parallax translateY={[-20, 20]} style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
            <Box sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '120%',
              animation: `fadeInHero ${fadeDuration}ms ease-out`,
            }}>
              <img
                src={images[nextImageIndex]}
                alt="Hero background transitioning"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  filter: 'brightness(0.8) contrast(1.1)'
                }}
              />
            </Box>
          </Parallax>
        )}

        {/* Overlay */}
        <Box sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          bgcolor: `rgba(0,0,0,${overlayOpacity})`,
          zIndex: 2,
        }} />

        {/* Content */}
        <Container maxWidth="lg" sx={{ 
          position: 'relative', 
          zIndex: 3, 
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

export default SyncedUnifiedHero; 