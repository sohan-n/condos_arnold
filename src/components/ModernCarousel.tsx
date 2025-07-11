import React, { useState, useEffect, useRef } from 'react';
import { Box, Card, CardMedia, IconButton, Modal, Backdrop, Fade } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import useMeasure from 'react-use-measure';
import { useInView } from 'react-intersection-observer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import { useDrag } from '@use-gesture/react';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

interface ModernCarouselProps {
  images: string[];
  autoplayInterval?: number;
  height?: number; // height in px
}

const ModernCarousel: React.FC<ModernCarouselProps> = ({ 
  images, 
  autoplayInterval = 3000,
  height = 500,
}) => {
  // Responsive height calculation
  const responsiveHeight = typeof window !== 'undefined' && window.innerWidth <= 768 
    ? Math.min(height * 0.7, 400) // Shorter on mobile, max 400px
    : height;
  const [measureRef, bounds] = useMeasure();
  const { ref: viewRef, inView } = useInView({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const splideRef = useRef<any>(null);

  // Combine refs
  const setRefs = React.useCallback((node: any) => {
    measureRef(node);
    viewRef(node);
  }, [measureRef, viewRef]);

  // Calculate indices for visible slides
  const getPrevIndex = (current: number) => (current - 1 + images.length) % images.length;
  const getNextIndex = (current: number) => (current + 1) % images.length;

  // Spring animations for the carousel movement
  const slideProps = useSpring({
    transform: `translateX(calc(-${currentIndex * (bounds.width || 0)}px + ${dragX}px))`,
    config: { mass: 1, tension: 320, friction: isDragging ? 40 : 32 },
  });

  // Autoplay functionality
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 900;
  useEffect(() => {
    if (isHovered || isDragging || (isMobile && !inView) || isExpanded) return;
    const timer = setInterval(() => {
      setCurrentIndex(current => (current + 1) % images.length);
    }, autoplayInterval);
    return () => clearInterval(timer);
  }, [images.length, autoplayInterval, isHovered, isDragging, isMobile, inView, isExpanded]);

  const handlePrevClick = () => {
    setCurrentIndex(current => (current - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex(current => (current + 1) % images.length);
  };

  const handleImageClick = (index: number) => {
    setExpandedIndex(index);
    setIsExpanded(true);
  };

  const handleCloseModal = () => {
    setIsExpanded(false);
  };

  const handleExpandedSlideChange = (splide: any) => {
    setExpandedIndex(splide.index);
  };

  // Gesture handling
  const bind = useDrag(({ down, movement: [mx], last }) => {
    setIsDragging(down);
    setDragX(down ? mx : 0);
    if (!down && last && Math.abs(mx) > (bounds.width || 0) * 0.15) {
      if (mx < 0) {
        setCurrentIndex(current => (current + 1) % images.length);
      } else if (mx > 0) {
        setCurrentIndex(current => (current - 1 + images.length) % images.length);
      }
    }
  }, {
    axis: 'x',
    filterTaps: true,
    pointer: { touch: true },
  });

  return (
    <Box>
      <Box
        ref={setRefs}
        sx={{
          position: 'relative',
          width: '100%',
          height: responsiveHeight,
          overflow: 'hidden',
          bgcolor: 'transparent',
          borderRadius: 1,
          boxShadow: 'none',
          touchAction: 'pan-y',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...bind()}
      >
        <animated.div
          style={{
            display: 'flex',
            width: `${images.length * 100}%`,
            height: '100%',
            ...slideProps,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          {images.map((image, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === getPrevIndex(currentIndex);
            const isNext = index === getNextIndex(currentIndex);
            return (
              <Card
                key={image}
                onClick={() => handleImageClick(index)}
                sx={{
                  position: 'relative',
                  width: `${100 / images.length}%`,
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  transform: isActive 
                    ? 'scale(1) translateZ(0)' 
                    : (isPrev || isNext) 
                      ? 'scale(0.85) translateZ(-100px)' 
                      : 'scale(0.7) translateZ(-200px)',
                  opacity: isActive ? 1 : isPrev || isNext ? 0.7 : 0.4,
                  filter: isActive ? 'none' : 'blur(2px)',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                  pointerEvents: isDragging ? 'none' : 'auto',
                  bgcolor: 'transparent',
                  boxShadow: 'none',
                  cursor: isActive ? 'pointer' : 'default',
                  '&:hover': {
                    transform: isActive 
                      ? 'scale(1.02) translateZ(0)' 
                      : (isPrev || isNext) 
                        ? 'scale(0.87) translateZ(-100px)' 
                        : 'scale(0.72) translateZ(-200px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Slide ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                  draggable={false}
                />
              </Card>
            );
          })}
        </animated.div>

        {/* Navigation Buttons - smaller & translucent */}
        <IconButton
          onClick={handlePrevClick}
          sx={{
            position: 'absolute',
            left: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 32,
            height: 32,
            bgcolor: 'rgba(255, 255, 255, 0.6)',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.8)',
            },
            zIndex: 2,
          }}
          aria-label="Previous slide"
        >
          <ChevronLeftIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <IconButton
          onClick={handleNextClick}
          sx={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 32,
            height: 32,
            bgcolor: 'rgba(255, 255, 255, 0.6)',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.8)',
            },
            zIndex: 2,
          }}
          aria-label="Next slide"
        >
          <ChevronRightIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>
      
      {/* Slide Indicator */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: index === currentIndex ? 24 : 8,
              height: 3,
              bgcolor: index === currentIndex ? 'white' : 'grey.300',
              borderRadius: 1.5,
              transition: 'all 0.3s ease-in-out',
              boxShadow: index === currentIndex ? '0 2px 8px rgba(95, 95, 95, 0.4)' : 'none',
            }}
          />
        ))}
      </Box>

      {/* Expanded Modal */}
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
              bgcolor: 'black',
              overflow: 'hidden',
              outline: 'none',
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: 'absolute',
                top: 65,
                right: 20,
                zIndex: 10,
                width: 48,
                height: 48,
                bgcolor: 'white',
                color: 'black',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                '&:hover': {
                  bgcolor: '#f5f5f5',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <CloseIcon sx={{ fontSize: 24 }} />
            </IconButton>

            {/* Splide Carousel for Expanded View */}
            <Splide
              ref={splideRef}
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
                      bgcolor: 'black',
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

export default ModernCarousel; 