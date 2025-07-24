import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

interface BackgroundSlideshowProps {
  images: string[];
  fadeDuration?: number;
  imageDuration?: number;
  currentIndex?: number;
  syncWithCarousel?: boolean;
  useBlurredImages?: boolean;
  blurredImagePath?: string;
}

const BackgroundSlideshow: React.FC<BackgroundSlideshowProps> = ({
  images,
  fadeDuration = 2000,
  imageDuration = 5000,
  currentIndex,
  syncWithCarousel = true,
  useBlurredImages = true,
  blurredImagePath = 'slideshow-blurred'
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);

  // Get the appropriate image source
  const getImageSrc = (imagePath: string) => {
    if (useBlurredImages) {
      // Replace the original path with blurred version
      const fileName = imagePath.split('/').pop();
      const blurredPath = `${blurredImagePath}/${fileName}?v=blurred`;
      return blurredPath;
    }
    return imagePath;
  };



  // Sync with external carousel when syncWithCarousel is true
  useEffect(() => {
    if (syncWithCarousel && currentIndex !== undefined && currentIndex !== currentImageIndex) {
      // If we're already transitioning, always queue the new index
      if (isTransitioning) {
        setPendingIndex(currentIndex);
        return;
      }
      
      // Start immediate transition
      startTransition(currentIndex);
    }
  }, [currentIndex, syncWithCarousel, currentImageIndex, isTransitioning]);

  // Handle queued transitions
  useEffect(() => {
    if (!isTransitioning && pendingIndex !== null && pendingIndex !== currentImageIndex) {
      startTransition(pendingIndex);
      setPendingIndex(null);
    }
  }, [isTransitioning, pendingIndex, currentImageIndex]);

  // Transition function
  const startTransition = (targetIndex: number) => {
    setNextImageIndex(targetIndex);
    
    // Use requestAnimationFrame to ensure the next image is rendered before starting transition
    requestAnimationFrame(() => {
      setIsTransitioning(true);
      
      // Complete transition after fade duration
      setTimeout(() => {
        // First update the current image, then reset transition state in next frame
        setCurrentImageIndex(targetIndex);
        requestAnimationFrame(() => {
          setIsTransitioning(false);
        });
      }, fadeDuration);
    });
  };

  // Auto-advance when not syncing with carousel
  useEffect(() => {
    if (images.length <= 1 || syncWithCarousel) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % images.length);
        setIsTransitioning(false);
      }, fadeDuration);
    }, imageDuration);

    return () => clearInterval(interval);
  }, [images.length, nextImageIndex, fadeDuration, imageDuration, syncWithCarousel]);

  if (images.length === 0) return null;
  const brightness = 1;
  const contrast = .8;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
        '@keyframes fadeIn': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      }}
    >
      {/* Current Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${getImageSrc(images[currentImageIndex])})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: `brightness(${brightness}) contrast(${contrast})`,
          opacity: 1,
          zIndex: 1,
        }}
      />
      
      {/* Next Image (for smooth transitions) */}
      {images.length > 1 && isTransitioning && nextImageIndex !== currentImageIndex && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${getImageSrc(images[nextImageIndex])})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: `brightness(${brightness}) contrast(${contrast})`,
            opacity: 1,
            animation: `fadeIn ${fadeDuration}ms ease-out`,
            zIndex: 2,
          }}
        />
      )}
      
      {/* Overlay for better text readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      />
    </Box>
  );
};

export default BackgroundSlideshow; 