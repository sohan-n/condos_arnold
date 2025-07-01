import React, { useState, useEffect } from 'react';
import { Box, Card, CardMedia, IconButton, useTheme } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import useMeasure from 'react-use-measure';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useDrag } from '@use-gesture/react';

interface ModernCarouselProps {
  images: string[];
  autoplayInterval?: number;
}

const ModernCarousel: React.FC<ModernCarouselProps> = ({ 
  images, 
  autoplayInterval = 3000 
}) => {
  const theme = useTheme();
  const [ref, bounds] = useMeasure();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Calculate indices for visible slides
  const getPrevIndex = (current: number) => (current - 1 + images.length) % images.length;
  const getNextIndex = (current: number) => (current + 1) % images.length;

  // Spring animations for the carousel movement
  const slideProps = useSpring({
    transform: `translateX(calc(-${currentIndex * (bounds.width || 0)}px + ${dragX}px))`,
    config: { mass: 1, tension: 320, friction: isDragging ? 40 : 32 },
  });

  // Autoplay functionality
  useEffect(() => {
    if (isHovered || isDragging) return;
    const timer = setInterval(() => {
      setCurrentIndex(current => (current + 1) % images.length);
    }, autoplayInterval);
    return () => clearInterval(timer);
  }, [images.length, autoplayInterval, isHovered, isDragging]);

  const handlePrevClick = () => {
    setCurrentIndex(current => (current - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex(current => (current + 1) % images.length);
  };

  // Gesture handling
  const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel, last }) => {
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
      ref={ref}
      sx={{
        position: 'relative',
        width: '100%',
        height: 500,
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

      {/* Navigation Buttons */}
      <IconButton
        onClick={handlePrevClick}
        sx={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          '&:hover': {
            bgcolor: 'white',
          },
          zIndex: 2,
        }}
        aria-label="Previous slide"
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        onClick={handleNextClick}
        sx={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          '&:hover': {
            bgcolor: 'white',
          },
          zIndex: 2,
        }}
        aria-label="Next slide"
      >
        <ChevronRightIcon />
      </IconButton>

      {/* Progress Indicators */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
          zIndex: 2,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: index === currentIndex ? 'primary.main' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2)',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ModernCarousel; 