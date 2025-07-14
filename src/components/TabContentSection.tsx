import React, { useState } from 'react';
import { Box, Typography, Link, Button } from '@mui/material';
import { Link as LinkIcon, Phone as PhoneIcon, Google as GoogleIcon, Map as MapIcon, ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import SwipableTitleSection from './SwipableTitleSection';
import ModernCarousel from './ModernCarousel';

interface TabContentSectionProps {
  title: string;
  icon?: React.ReactNode;
  cards: {
    title: string;
    subtitle?: string;
    description: string;
    images?: string[];
    links?: {
      name: string;
      url: string;
    }[];
    phone?: string;
                      mapLocation?: {
                    coordinates: string;
                    googleMapsUrl: string;
                    appleMapsUrl?: string;
                  };
  }[];
  currentTab?: number;
  onTabChange?: (newTab: number) => void;
  allTitles?: {
    title: string;
    icon: React.ReactNode;
  }[];
  jacoStyle?: boolean;
  smartFit?: boolean;
}

const TabContentSection: React.FC<TabContentSectionProps> = ({ 
  title, 
  icon, 
  cards, 
  currentTab, 
  onTabChange, 
  allTitles,
  jacoStyle = false,
  smartFit = false
}) => {
  const [expandedMaps, setExpandedMaps] = useState<{ [key: number]: boolean }>({});

  const toggleMap = (index: number) => {
    setExpandedMaps(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {allTitles && currentTab !== undefined && onTabChange ? (
        <SwipableTitleSection
          currentTab={currentTab}
          onTabChange={onTabChange}
          titles={allTitles}
        />
      ) : (
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 2, 
          mb: 4 
        }}>
          {icon && (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: { xs: 48, md: 56, lg: 64 },
              height: { xs: 48, md: 56, lg: 64 },
              color: '#1993e5',
              flexShrink: 0
            }}>
              {icon}
            </Box>
          )}
          <Typography 
            variant="h4" 
            fontWeight={800} 
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
        </Box>
      )}
      
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
            <Typography variant="h6" fontWeight={700} mb={1} color="grey.900">
              {card.title}
            </Typography>
            
            {card.subtitle && (
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ 
                  mb: 2, 
                  fontStyle: 'italic',
                  fontSize: '0.875rem',
                  lineHeight: 1.4
                }}
              >
                {card.subtitle}
              </Typography>
            )}
            
            {card.images && card.images.length > 0 && (
              <Box sx={{ 
                mb: 3, 
                borderRadius: 0, 
                overflow: 'hidden',
                boxShadow: 'none',
                height: '200px',
                width: '100%'
              }}>
                <ModernCarousel 
                  images={card.images}
                  height={200}
                  autoplayInterval={4000}
                  showNavigation={false}
                  scaleToFit={true}
                  showPagination={false}
                  jacoStyle={jacoStyle}
                  smartFit={smartFit}
                />
              </Box>
            )}
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
              {card.description}
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {card.phone && (
                  <Link
                    href={`tel:${card.phone}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: '#000000',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: '#333333',
                        textDecoration: 'underline',
                        transform: 'translateX(2px)',
                      },
                      '& .MuiSvgIcon-root': {
                        fontSize: '1rem',
                        transition: 'transform 0.2s ease',
                      },
                      '&:hover .MuiSvgIcon-root': {
                        transform: 'translateX(2px)',
                      },
                    }}
                  >
                    <PhoneIcon />
                    {card.phone}
                  </Link>
                )}
                
                {card.links && card.links.length > 0 ? (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {card.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          color: '#1993e5',
                          textDecoration: 'none',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            color: '#1565c0',
                            textDecoration: 'underline',
                            transform: 'translateX(2px)',
                          },
                          '& .MuiSvgIcon-root': {
                            fontSize: '1rem',
                            transition: 'transform 0.2s ease',
                          },
                          '&:hover .MuiSvgIcon-root': {
                            transform: 'translateX(2px)',
                          },
                        }}
                      >
                        <LinkIcon />
                        {link.name}
                      </Link>
                    ))}
                  </Box>
                ) : (
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
                )}
              </Box>

              {/* Show Map Button - Bottom Center */}
              {card.mapLocation && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0, mb: expandedMaps[index] ? 0 : -4 }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => toggleMap(index)}
                    startIcon={expandedMaps[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    sx={{
                      borderRadius: 2,
                      background: '#000',
                      color: '#fff',
                      px: 2,
                      py: 1,
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '0.75rem',
                      minWidth: 'auto',
                      '&:hover': {
                        background: '#333',
                      }
                    }}
                  >
                    {expandedMaps[index] ? 'Hide Map' : 'Show Map'}
                  </Button>
                </Box>
              )}

              {/* Collapsible Map Section */}
              {card.mapLocation && (
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedMaps[index] ? 'auto' : 0,
                    opacity: expandedMaps[index] ? 1 : 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut'
                  }}
                  style={{
                    overflow: 'hidden',
                    marginTop: '16px'
                  }}
                >
                  <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2, mb: 2 }}>
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${card.mapLocation.coordinates}`}
                      width="100%"
                      height="200"
                      style={{ border: 0, borderRadius: 8 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${card.title} Location`}
                    />
                  </Box>
                  <Box sx={{ textAlign: 'center', display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      href={card.mapLocation.googleMapsUrl}
                      target="_blank"
                      startIcon={<GoogleIcon />}
                      sx={{
                        borderRadius: 2,
                        background: '#000',
                        color: '#fff',
                        px: 3,
                        py: 1.5,
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '0.875rem',
                        '&:hover': {
                          background: '#333',
                        }
                      }}
                    >
                      View on Google Maps
                    </Button>
                    {card.mapLocation.appleMapsUrl && (
                      <Button
                        variant="outlined"
                        href={card.mapLocation.appleMapsUrl}
                        target="_blank"
                        startIcon={<MapIcon />}
                        sx={{
                          borderRadius: 2,
                          borderColor: '#000',
                          color: '#000',
                          px: 3,
                          py: 1.5,
                          fontWeight: 600,
                          textTransform: 'none',
                          fontSize: '0.875rem',
                          '&:hover': {
                            borderColor: '#333',
                            color: '#333',
                            background: 'rgba(0,0,0,0.04)',
                          }
                        }}
                      >
                        View on Apple Maps
                      </Button>
                    )}
                  </Box>
                </motion.div>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </motion.div>
  );
};

export default TabContentSection; 