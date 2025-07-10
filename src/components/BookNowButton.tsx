import React from 'react';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface BookNowButtonProps {
  text?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined';
}

const BookNowButton: React.FC<BookNowButtonProps> = ({ 
  text = 'BOOK NOW',
  size = 'large',
  variant = 'contained'
}) => {
  return (
    <Button
      component={RouterLink}
      to="/contact"
      variant={variant}
      size={size}
      sx={{
        fontWeight: 500,
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
        letterSpacing: 6,
        whiteSpace: 'nowrap',
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
      {text}
    </Button>
  );
};

export default BookNowButton; 