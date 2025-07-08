import React from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import BookNowButton from './BookNowButton';

interface FloatingBookButtonProps {
  showFloating?: boolean;
  disableOnPages?: string[];
}

const FloatingBookButton: React.FC<FloatingBookButtonProps> = ({
  showFloating = false,
  disableOnPages = ['/contact']
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Check if we should disable the button on current page
  const isDisabledOnCurrentPage = disableOnPages.includes(currentPath);
  
  // Don't render anything if disabled on current page
  if (isDisabledOnCurrentPage) {
    return null;
  }

  // If showFloating is true, render the floating button
  if (showFloating) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 90,
          right: 24,
          zIndex: 1000,
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <BookNowButton />
      </Box>
    );
  }

  // Don't render anything if floating is disabled
  return null;
};

export default FloatingBookButton; 