import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface TabContentSectionProps {
  title: string;
  cards: {
    title: string;
    description: string;
  }[];
}

const TabContentSection: React.FC<TabContentSectionProps> = ({ title, cards }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Typography 
        variant="h4" 
        fontWeight={800} 
        mb={4} 
        sx={{
          fontSize: { xs: '3rem', md: '2.5rem', lg: '3rem' },
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
        {title}
      </Typography>
      
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
        gap: 3,
        mt: 4,
      }}>
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              bgcolor: 'white',
              borderRadius: 1,
              p: 4,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.06)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              },
            }}
          >
            <Typography variant="h6" fontWeight={700} mb={2} color="grey.900">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {card.description}
            </Typography>
            <Box sx={{ 
              bgcolor: 'grey.100', 
              p: 2, 
              borderRadius: 2,
              textAlign: 'center'
            }}>
              <Typography variant="body2" color="text.secondary">
                Information Coming Soon
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </motion.div>
  );
};

export default TabContentSection; 