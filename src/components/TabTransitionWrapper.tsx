import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';

interface TabTransitionWrapperProps {
  children: React.ReactNode;
  currentTab: number;
  previousTab: number;
}

const TabTransitionWrapper: React.FC<TabTransitionWrapperProps> = ({
  children,
  currentTab,
  previousTab
}) => {
  const direction = currentTab > previousTab ? 1 : -1;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentTab}
        initial={{ 
          opacity: 0,
          x: direction * 50,
          scale: 0.95
        }}
        animate={{ 
          opacity: 1,
          x: 0,
          scale: 1
        }}
        exit={{ 
          opacity: 0,
          x: -direction * 50,
          scale: 0.95
        }}
        transition={{
          duration: 0.1,
          ease: "easeOut"
        }}
      >
        <Box sx={{ width: '100%' }}>
          {children}
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default TabTransitionWrapper; 