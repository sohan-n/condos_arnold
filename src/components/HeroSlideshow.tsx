import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, IconButton, Modal, Backdrop, Fade, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';
import { useDrag } from '@use-gesture/react';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import HeroButton from './HeroButton';

interface HeroSlideshowProps {
  images: string[];
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonTo?: string;
  heightPreset?: 'mainpage' | 'listingpage' | 'custom';
  customHeight?: string;
  shadowType?: 'dark' | 'light';
  overlayOpacity?: number;
  fadeDuration?: number;
  autoplayInterval?: number;
  onIndexChange?: (index: number) => void;
}

const HeroSlideshow: React.FC<HeroSlideshowProps> = ({
  images,
  title,
  subtitle,
  buttonText,
  buttonTo,

  customHeight,
  shadowType = 'dark',
  overlayOpacity = 0.25,
  fadeDuration = 400,
  autoplayInterval = 4000,
  onIndexChange
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Notify parent of index changes
  useEffect(() => {
    if (onIndexChange) {
      onIndexChange(currentIndex);
    }
  }, [currentIndex, onIndexChange]);

  // Auto-advance
  useEffect(() => {
    if (isHovered || isTransitioning || isExpanded || images.length <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, autoplayInterval);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered, isTransitioning, isExpanded, autoplayInterval, images.length]);

  const startTransition = (targetIndex: number) => {
    if (isTransitioning || targetIndex === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(targetIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, fadeDuration);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    startTransition(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    startTransition(nextIndex);
  };

  const handleFullscreen = () => {
    setExpandedIndex(currentIndex);
    setIsExpanded(true);
  };

  const handleCloseModal = () => {
    setIsExpanded(false);
  };

  const handleExpandedSlideChange = (splide: any) => {
    setExpandedIndex(splide.index);
  };

  // Swipe gesture handling
  const bind = useDrag(({ down, movement: [mx], last }) => {
    if (!down && last && Math.abs(mx) > 50) {
      if (mx < 0) {
        handleNext();
      } else if (mx > 0) {
        handlePrev();
      }
    }
  }, {
    axis: 'x',
    filterTaps: true,
    pointer: { touch: true },
  });

  // Height presets
  const getHeight = () => {
    if (customHeight) return customHeight;
    return '100vh';
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
    <Box 
      sx={{ 
        position: 'relative', 
        minHeight: getHeight(), 
        overflow: 'hidden',
        cursor: 'grab',
        '&:active': { cursor: 'grabbing' }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...bind()}
    >
        {/* Images Container */}
        <Box sx={{
          position: 'absolute',
          inset: 0,
          width: `${images.length * 100}%`,
          height: '100%',
          display: 'flex',
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          transition: `transform ${fadeDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          willChange: 'transform'
        }}>
          {images.map((image, index) => (
            <Box 
              key={index}
              sx={{
                width: `${100 / images.length}%`,
                height: '100%',
                flexShrink: 0
              }}
            >
              <img
                src={image}
                alt={`Hero background ${index + 1}`}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  filter: 'brightness(0.8) contrast(1.1)',
                  display: 'block'
                }}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </Box>
          ))}
        </Box>

        {/* Overlay */}
        <Box sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          bgcolor: `rgba(0,0,0,${overlayOpacity})`,
          zIndex: 2,
        }} />

        {/* Navigation Buttons */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 24,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 56,
            height: 56,
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            zIndex: 4,
            display: { xs: 'none', md: 'flex' },
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              transform: 'translateY(-50%) scale(1.1)',
            },
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: 28 }} />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 24,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 56,
            height: 56,
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            zIndex: 4,
            display: { xs: 'none', md: 'flex' },
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              transform: 'translateY(-50%) scale(1.1)',
            },
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <ChevronRightIcon sx={{ fontSize: 28 }} />
        </IconButton>

        {/* Content */}
        <Container maxWidth="lg" sx={{ 
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '100vh',
          zIndex: 3, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          textAlign: 'center',
          pb: 20 // Add padding bottom to account for bottom controls
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
                  textShadow: getSubtitleShadow(),
                  fontSize: { xs: 17, md: 22 },
                  textAlign: 'center',
                  fontWeight: 500
                }}
              >
                {subtitle}
              </Typography>
            </motion.div>
          )}

                    {/* Main Button */}
          {buttonText && buttonTo && (
            <Box sx={{ mt: { xs: 6, md: 5 } }}>
              <HeroButton
                to={buttonTo}
                buttonVariant="glass"
              >
                {buttonText}
              </HeroButton>
            </Box>
          )}
        </Container>

        {/* Bottom Controls */}
        <Box sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          zIndex: 3
        }}>
          {/* Fullscreen Button with Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Button
              onClick={handleFullscreen}
              startIcon={<FullscreenIcon />}
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                px: 4,
                py: 2,
                borderRadius: 1,
                fontSize: 14,
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.05)',
                },
                '& .MuiButton-startIcon': {
                  marginRight: 1,
                  '& svg': {
                    fontSize: 18
                  }
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              View Gallery
            </Button>
          </motion.div>

          {/* Slide Indicators */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: { xs: 0.5, md: 1 }
          }}>
            {images.map((_, index) => (
              <Box
                key={index}
                onClick={() => startTransition(index)}
                sx={{
                  width: index === currentIndex ? { xs: 20, md: 32 } : { xs: 6, md: 8 },
                  height: { xs: 3, md: 4 },
                  bgcolor: index === currentIndex ? 'white' : 'rgba(255,255,255,0.4)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: index === currentIndex ? 'white' : 'rgba(255,255,255,0.7)',
                  }
                }}
              />
            ))}
                      </Box>
          </Box>

        {/* Fullscreen Modal */}
        <Modal
          open={isExpanded}
          onClose={handleCloseModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 0,
          }}
        >
          <Fade in={isExpanded}>
            <Box
              sx={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                bgcolor: 'rgba(0, 0, 0, 0.9)',
                overflow: 'hidden',
                outline: 'none',
              }}
            >
              <IconButton
                onClick={handleCloseModal}
                sx={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  zIndex: 10,
                  width: 48,
                  height: 48,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.05)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <CloseIcon sx={{ fontSize: 24 }} />
              </IconButton>

              <Splide
                options={{
                  type: 'loop',
                  perPage: 1,
                  arrows: true,
                  pagination: {
                    type: 'bullets',
                    clickable: true,
                  },
                  autoplay: false,
                  start: expandedIndex,
                  gap: 0,
                  padding: 0,
                  height: '100vh',
                  width: '100vw',
                  focus: 'center',
                  updateOnMove: true,
                }}
                onMoved={handleExpandedSlideChange}
              >
                {images.map((image, index) => (
                  <SplideSlide key={index}>
                    <Box
                      sx={{
                        width: '100%',
                        height: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'transparent',
                      }}
                    >
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          userSelect: 'none',
                        }}
                        draggable={false}
                      />
                    </Box>
                  </SplideSlide>
                ))}
              </Splide>
            </Box>
          </Fade>
        </Modal>
      </Box>
  );
};

export default HeroSlideshow; 