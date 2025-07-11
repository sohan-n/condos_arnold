import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import type { PanInfo } from 'framer-motion';

interface SwipableTitleSectionProps {
  currentTab: number;
  onTabChange: (newTab: number) => void;
  titles: {
    title: string;
    icon: React.ReactNode;
  }[];
  threshold?: number;
}

const SwipableTitleSection: React.FC<SwipableTitleSectionProps> = ({
  currentTab,
  onTabChange,
  titles,
  threshold = 60
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragDirection, setDragDirection] = useState<'left' | 'right' | null>(null);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-threshold, 0, threshold], [0, 1, 0]);
  const scale = useTransform(x, [-threshold, 0, threshold], [0.9, 1, 0.9]);
  const xTransform = useTransform(x, [-threshold, 0, threshold], [-30, 0, 30]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDrag = (event: any, info: PanInfo) => {
    x.set(info.offset.x);
    setDragDirection(info.offset.x > 0 ? 'right' : 'left');
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false);
    setDragDirection(null);
    
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0 && currentTab > 0) {
        // Swipe right - go to previous tab
        onTabChange(currentTab - 1);
      } else if (info.offset.x < 0 && currentTab < titles.length - 1) {
        // Swipe left - go to next tab
        onTabChange(currentTab + 1);
      }
    }
    
    // Reset position
    x.set(0);
  };

  const currentTitle = titles[currentTab];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        mb: 4,
        minHeight: 0,
        position: 'relative',
        overflow: 'hidden',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        touchAction: 'none',
      }}
      component={motion.div}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.05}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      style={{ x }}
    >
      {/* Current Title */}
      <motion.div
        style={{
          opacity,
          scale,
          x: xTransform,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          width: '100%',
        }}
      >
        {/* Icon */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: { xs: 48, md: 56, lg: 64 },
          height: { xs: 48, md: 56, lg: 64 },
          color: 'black',
          flexShrink: 0
        }}>
          {currentTitle.icon}
        </Box>
        
        {/* Title */}
        <Typography 
          variant="h4" 
          fontWeight={800} 
          sx={{
            fontSize: { xs: '2.4rem', md: '2.5rem', lg: '3rem' },
            textAlign: 'center',
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
            color: 'transparent',
            background: 'linear-gradient(90deg, #000000, #333333,rgb(162, 162, 162),rgb(204, 204, 204))',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradientShift 4s ease-in-out infinite',
            '@keyframes gradientShift': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
          }}
        >
          {currentTitle.title}
        </Typography>
      </motion.div>

      {/* Swipe Indicators */}
      {currentTab > 0 && (
        <motion.div
          style={{
            position: 'absolute',
            left: 20,
            opacity: useTransform(x, [0, threshold], [0, 0.5]),
          }}
        >
          <Typography variant="body2" color="text.secondary">
            ← Previous
          </Typography>
        </motion.div>
      )}
      
      {currentTab < titles.length - 1 && (
        <motion.div
          style={{
            position: 'absolute',
            right: 20,
            opacity: useTransform(x, [-threshold, 0], [0.5, 0]),
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Next →
          </Typography>
        </motion.div>
      )}
    </Box>
  );
};

export default SwipableTitleSection; 