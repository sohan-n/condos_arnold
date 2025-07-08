import React from 'react';
import { Fab, Box, Button } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface FloatingBookButtonProps {
  showPlacedButton?: boolean;
  placedButtonText?: string;
  disableOnPages?: string[];
}

const FloatingBookButton: React.FC<FloatingBookButtonProps> = ({
  showPlacedButton = false,
  placedButtonText = 'BOOK NOW',
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

  // If showPlacedButton is true, render the placed button instead of floating
  if (showPlacedButton) {
    return (
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, calc(-50% - 200px))',
          zIndex: 1000,
        }}
      >
        {/* Enhanced glow effect background with refraction */}
        <Box sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(0.8rem)',
          zIndex: 0,
          width: 340,
          height: 100,
          borderRadius: '18px',
          background: `
            radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(25,147,229,0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 70%),
            linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(25,147,229,0.05) 100%)
          `,
          boxShadow: `
            0 0 48px 24px rgba(255,255,255,0.3),
            0 0 32px 8px rgba(25,147,229,0.2),
            0 8px 32px rgba(0,0,0,0.1),
            inset 0 1px 0 rgba(255,255,255,0.2)
          `,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '10%',
            left: '15%',
            width: '20%',
            height: '20%',
            background: 'rgba(255,255,255,0.3)',
            borderRadius: '50%',
            filter: 'blur(2px)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '20%',
            right: '25%',
            width: '15%',
            height: '15%',
            background: 'rgba(25,147,229,0.2)',
            borderRadius: '50%',
            filter: 'blur(3px)',
          },
        }} />
        
        {/* Refraction texture overlay */}
        <Box sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0.5,
          width: 320,
          height: 90,
          borderRadius: '16px',
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 2px,
              rgba(25,147,229,0.02) 2px,
              rgba(25,147,229,0.02) 4px
            )
          `,
          opacity: 0.6,
        }} />
        
        {/* Placed button */}
        <Button
          component={RouterLink}
          to="/contact"
          sx={{
            fontWeight: 400,
            fontSize: 30,
            px: 9,
            py: 4,
            borderRadius: '16px',
            background: `
              linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%),
              radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)
            `,
            color: '#fff',
            boxShadow: `
              0 8px 32px 0 rgba(30,41,59,0.15),
              0 4px 16px 0 rgba(25,147,229,0.1),
              inset 0 1px 0 rgba(255,255,255,0.3)
            `,
            backdropFilter: 'blur(20px)',
            border: '1.5px solid rgba(255,255,255,0.4)',
            position: 'relative',
            zIndex: 1,
            letterSpacing: 6,
            textTransform: 'uppercase',
            fontFamily: 'inherit',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            minHeight: 'unset',
            width: 'auto',
            height: 'auto',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            '&:hover': {
              background: `
                linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.25) 100%),
                radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)
              `,
              color: '#fff',
              boxShadow: `
                0 12px 36px 0 rgba(30,41,59,0.2),
                0 6px 20px 0 rgba(25,147,229,0.15),
                inset 0 1px 0 rgba(255,255,255,0.4)
              `,
              border: '1.5px solid rgba(255,255,255,0.6)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          {placedButtonText}
        </Button>
      </Box>
    );
  }

  // Render floating button (default behavior)
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 90,
        right: 24,
        zIndex: 1000,
      }}
    >
      {/* Enhanced glow effect background with refraction */}
      <Box sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        filter: 'blur(0.8rem)',
        zIndex: 0,
        width: 340,
        height: 100,
        borderRadius: '18px',
        background: `
          radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(25,147,229,0.15) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 70%),
          linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(25,147,229,0.05) 100%)
        `,
        boxShadow: `
          0 0 48px 24px rgba(255,255,255,0.3),
          0 0 32px 8px rgba(25,147,229,0.2),
          0 8px 32px rgba(0,0,0,0.1),
          inset 0 1px 0 rgba(255,255,255,0.2)
        `,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: '20%',
          height: '20%',
          background: 'rgba(255,255,255,0.3)',
          borderRadius: '50%',
          filter: 'blur(2px)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '20%',
          right: '25%',
          width: '15%',
          height: '15%',
          background: 'rgba(25,147,229,0.2)',
          borderRadius: '50%',
          filter: 'blur(3px)',
        },
      }} />
      
      {/* Refraction texture overlay */}
      <Box sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0.5,
        width: 320,
        height: 90,
        borderRadius: '16px',
        background: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 2px,
            rgba(25,147,229,0.02) 2px,
            rgba(25,147,229,0.02) 4px
          )
        `,
        opacity: 0.6,
      }} />
      
      {/* Main button */}
      <Fab
        component={RouterLink}
        to="/contact"
        sx={{
          fontWeight: 400,
          fontSize: 30,
          px: 9,
          py: 4,
          borderRadius: '16px',
          background: `
            linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%),
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)
          `,
          color: '#fff',
          boxShadow: `
            0 8px 32px 0 rgba(30,41,59,0.15),
            0 4px 16px 0 rgba(25,147,229,0.1),
            inset 0 1px 0 rgba(255,255,255,0.3)
          `,
          backdropFilter: 'blur(20px)',
          border: '1.5px solid rgba(255,255,255,0.4)',
          position: 'relative',
          zIndex: 1,
          letterSpacing: 6,
          textTransform: 'uppercase',
          fontFamily: 'inherit',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          minHeight: 'unset',
          width: 'auto',
          height: 'auto',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          '&:hover': {
            background: `
              linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.25) 100%),
              radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)
            `,
            color: '#fff',
            boxShadow: `
              0 12px 36px 0 rgba(30,41,59,0.2),
              0 6px 20px 0 rgba(25,147,229,0.15),
              inset 0 1px 0 rgba(255,255,255,0.4)
            `,
            border: '1.5px solid rgba(255,255,255,0.6)',
            transform: 'translateY(-2px)',
          },
        }}
      >
        BOOK NOW
      </Fab>
    </Box>
  );
};

export default FloatingBookButton; 