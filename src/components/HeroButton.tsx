import React from 'react';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface HeroButtonProps {
  to: string;
  children: React.ReactNode;
  buttonVariant?: 'glass' | 'solid';
  sx?: any;
}

const HeroButton: React.FC<HeroButtonProps> = ({ 
  to, 
  children, 
  buttonVariant = 'glass',
  ...props 
}) => {
  const baseStyles = {
    fontWeight: 600,
    fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
    px: { xs: 6, sm: 8, md: 10, lg: 12 },
    py: { xs: 2, sm: 2.5, md: 3, lg: 4 },
    borderRadius: '7px',
    letterSpacing: 1.2,
    textTransform: 'uppercase' as const,
    whiteSpace: 'nowrap' as const,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    display: 'inline-block',
    margin: '0 auto',
    animation: 'fadeInUp 0.8s ease-out 0.4s both',
    '@keyframes fadeInUp': {
      '0%': {
        opacity: 0,
        transform: 'translateY(20px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
    '@media (max-width: 450px)': {
      fontSize: 14,
      px: 4,
      py: 1.5,
    },
    '@media (max-width: 350px)': {
      fontSize: 12,
      px: 3,
      py: 1,
    },
    '@media (max-width: 250px)': {
      fontSize: 10,
      px: 2,
      py: 0.5,
    },
    '&::before': {
      content: '""',
      position: 'absolute' as const,
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
      transition: 'left 0.5s',
    },
    '&:hover': {
      transform: 'translateY(-2px)',
      '&::before': {
        left: '100%',
      },
    },
    '&:active': {
      transform: 'translateY(0px)',
    },
  };

  const glassStyles = {
    ...baseStyles,
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'white',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    '&:hover': {
      ...baseStyles['&:hover'],
      background: 'rgba(255, 255, 255, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
    },
    '&:active': {
      ...baseStyles['&:active'],
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    },
  };

  const solidStyles = {
    ...baseStyles,
    background: 'rgba(255,255,255,0.85)',
    color: '#222',
    boxShadow: '0 2px 12px #0001',
    '&:hover': {
      ...baseStyles['&:hover'],
      background: 'rgba(230,230,230,0.95)',
      color: '#111',
    },
  };

  return (
    <Button
      component={RouterLink}
      to={to}
      variant="contained"
      size="large"
      sx={buttonVariant === 'glass' ? glassStyles : solidStyles}
      {...props}
    >
      {children}
    </Button>
  );
};

export default HeroButton; 