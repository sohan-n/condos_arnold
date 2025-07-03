import React, { useState, useEffect } from 'react';
import { Box, Card, CardMedia, IconButton, useTheme } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import useMeasure from 'react-use-measure';
import { useInView } from 'react-intersection-observer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useDrag } from '@use-gesture/react';

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
  const theme = useTheme();
  const [measureRef, bounds] = useMeasure();
  const { ref: viewRef, inView } = useInView({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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
    if (isHovered || isDragging || (isMobile && !inView)) return;
    const timer = setInterval(() => {
      setCurrentIndex(current => (current + 1) % images.length);
    }, autoplayInterval);
    return () => clearInterval(timer);
  }, [images.length, autoplayInterval, isHovered, isDragging, isMobile, inView]);

  const handlePrevClick = () => {
    setCurrentIndex(current => (current - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex(current => (current + 1) % images.length);
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
    <Box
      ref={setRefs}
      sx={{
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden',
        bgcolor: 'background.paper',
        borderRadius: 4,
        boxShadow: theme.shadows[4],
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
  );
};

export default ModernCarousel; 