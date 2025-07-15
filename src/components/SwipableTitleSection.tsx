import React, { useState } from 'react';
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
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-threshold, 0, threshold], [0, 1, 0]);
  const scale = useTransform(x, [-threshold, 0, threshold], [0.9, 1, 0.9]);
  const xTransform = useTransform(x, [-threshold, 0, threshold], [-30, 0, 30]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDrag = (_event: any, info: PanInfo) => {
    x.set(info.offset.x);
  };

  const handleDragEnd = (_event: any, info: PanInfo) => {
    setIsDragging(false);
    
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        // Swipe right - go to previous tab (wrap to last if at first)
        const newTab = currentTab === 0 ? titles.length - 1 : currentTab - 1;
        onTabChange(newTab);
      } else if (info.offset.x < 0) {
        // Swipe left - go to next tab (wrap to first if at last)
        const newTab = currentTab === titles.length - 1 ? 0 : currentTab + 1;
        onTabChange(newTab);
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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
        </Box>

        {/* Disclaimer */}
        <Typography 
          variant="body2" 
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: '0.875rem',
            fontStyle: 'italic',
            opacity: 0.8,
            mt: 0
          }}
        >
          Many images/descriptions are from the linked websites and are not our own. Check the linked websites for the most up to date information.
        </Typography>
      </motion.div>

      {/* Swipe Indicators */}
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
    </Box>
  );
};

export default SwipableTitleSection; 