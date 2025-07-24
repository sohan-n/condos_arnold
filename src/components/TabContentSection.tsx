import React, { useState } from 'react';
import { Box, Typography, Link, Button } from '@mui/material';
import { Link as LinkIcon, Phone as PhoneIcon, Google as GoogleIcon, Map as MapIcon, ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon, Warning as WarningIcon, LocationOn as LocationIcon, Star as StarIcon } from '@mui/icons-material';
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
    locationLabel?: string;
    highlights?: string[];
    warnings?: string[];
    images?: string[];
    links?: {
      name: string;
      url: string;
    }[];
    phone?: string | {
      number: string;
      label?: string;
    }[];
    mapLocation?: {
      googleMapsUrl?: string;
      appleMapsUrl?: string;
      embedUrl?: string;
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
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: number]: boolean }>({});

  const toggleMap = (index: number) => {
    setExpandedMaps(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleDescription = (index: number) => {
    setExpandedDescriptions(prev => ({
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
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        mt: 4,
        '@media (min-width: 900px)': {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 3,
          alignItems: 'start',
        },
        '@media (min-width: 1200px)': {
          gridTemplateColumns: 'repeat(3, 1fr)',
          alignItems: 'start',
        },
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
            
            <Box sx={{ mb: 3, position: 'relative' }}>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ 
                  lineHeight: 1.6,
                  maxHeight: expandedDescriptions[index] ? 'none' : '6em', // 3 lines of text
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'max-height 0.3s ease-in-out',
                  '&::after': expandedDescriptions[index] ? {} : {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2em',
                    background: 'linear-gradient(transparent, white)',
                    pointerEvents: 'none',
                  }
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: card.description }} />
              </Typography>
              
              <Button
                onClick={() => toggleDescription(index)}
                sx={{
                  mt: 1,
                  p: 0,
                  minWidth: 'auto',
                  color: 'black',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    textDecoration: 'underline',
                  }
                }}
              >
                {expandedDescriptions[index] ? 'Read Less' : 'Read More'}
              </Button>
            </Box>
            
            {card.highlights && card.highlights.length > 0 && (
              <Box sx={{ mb: 3 }}>
                {card.highlights.map((highlight, highlightIndex) => (
                  <Box key={highlightIndex} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                    <StarIcon sx={{ color: '#4caf50', fontSize: '1rem', mt: 0.25, flexShrink: 0 }} />
                    <Typography 
                      variant="body2" 
                      color="#4caf50" 
                      sx={{ 
                        lineHeight: 1.5,
                        fontSize: '0.875rem',
                        fontWeight: 500
                      }}
                    >
                      {highlight}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
            
            {card.warnings && card.warnings.length > 0 && (
              <Box sx={{ mb: 3 }}>
                {card.warnings.map((warning, warningIndex) => (
                  <Box key={warningIndex} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                    <WarningIcon sx={{ color: '#d32f2f', fontSize: '1rem', mt: 0.25, flexShrink: 0 }} />
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        lineHeight: 1.5,
                        fontSize: '0.875rem',
                        fontWeight: 500
                      }}
                    >
                      {warning}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {card.phone && (
                  <>
                    {typeof card.phone === 'string' ? (
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
                          padding: '12px 8px',
                          borderRadius: 1,
                          minHeight: '44px',
                          border: '1px solid rgba(0,0,0,0.1)',
                          '&:hover': {
                            color: '#333333',
                            textDecoration: 'underline',
                            transform: 'translateX(2px)',
                            backgroundColor: 'rgba(0,0,0,0.04)',
                            borderColor: 'rgba(0,0,0,0.2)',
                          },
                          '&:active': {
                            backgroundColor: 'rgba(0,0,0,0.08)',
                            borderColor: 'rgba(0,0,0,0.3)',
                          },
                          '& .MuiSvgIcon-root': {
                            fontSize: '1.25rem',
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
                    ) : (
                      card.phone.map((phoneItem, phoneIndex) => (
                        <Link
                          key={phoneIndex}
                          href={`tel:${phoneItem.number}`}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            color: '#000000',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            transition: 'all 0.2s ease',
                            padding: '12px 8px',
                            borderRadius: 1,
                            minHeight: '44px',
                            border: '1px solid rgba(0,0,0,0.1)',
                            '&:hover': {
                              color: '#333333',
                              textDecoration: 'underline',
                              transform: 'translateX(2px)',
                              backgroundColor: 'rgba(0,0,0,0.04)',
                              borderColor: 'rgba(0,0,0,0.2)',
                            },
                            '&:active': {
                              backgroundColor: 'rgba(0,0,0,0.08)',
                              borderColor: 'rgba(0,0,0,0.3)',
                            },
                            '& .MuiSvgIcon-root': {
                              fontSize: '1.25rem',
                              transition: 'transform 0.2s ease',
                            },
                            '&:hover .MuiSvgIcon-root': {
                              transform: 'translateX(2px)',
                            },
                          }}
                        >
                          <PhoneIcon />
                          {phoneItem.label ? `${phoneItem.label}: ${phoneItem.number}` : phoneItem.number}
                        </Link>
                      ))
                    )}
                  </>
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
                          padding: '12px 8px',
                          borderRadius: 1,
                          minHeight: '44px',
                          border: '1px solid rgba(25, 147, 229, 0.2)',
                          '&:hover': {
                            color: '#1565c0',
                            textDecoration: 'underline',
                            transform: 'translateX(2px)',
                            backgroundColor: 'rgba(25, 147, 229, 0.08)',
                            borderColor: 'rgba(25, 147, 229, 0.4)',
                          },
                          '&:active': {
                            backgroundColor: 'rgba(25, 147, 229, 0.12)',
                            borderColor: 'rgba(25, 147, 229, 0.6)',
                          },
                          '& .MuiSvgIcon-root': {
                            fontSize: '1.25rem',
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

              {/* Divider */}
              <Box sx={{ 
                height: '1px', 
                backgroundColor: 'rgba(0,0,0,0.1)', 
                my: 0.5,
                mx: 0
              }} />

              {/* Show Map Button - Bottom Center */}
              {card.mapLocation && (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, mt: 0, mb: expandedMaps[index] ? 0 : -4 }}>
                  {card.locationLabel && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocationIcon sx={{ color: '#4caf50', fontSize: '1.25rem' }} />
                      <Typography variant="subtitle2" fontWeight={600} color="#4caf50">
                        {card.locationLabel}
                      </Typography>
                    </Box>
                  )}
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => toggleMap(index)}
                    startIcon={expandedMaps[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    sx={{
                      borderRadius: 0.5,
                      background: '#000',
                      color: '#fff',
                      px: 2.1,
                      py: 1.2,
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '0.8rem',
                      minWidth: 'auto',
                      mt: 1,
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
                    {card.mapLocation.embedUrl ? (
                      <iframe
                        src={card.mapLocation.embedUrl}
                        width="100%"
                        height="200"
                        style={{ border: 0, borderRadius: 8 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${card.title} Location`}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: '100%',
                          height: 200,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#f5f5f5',
                          borderRadius: 1,
                          border: '2px dashed #ccc',
                          color: '#666',
                          textAlign: 'center',
                          p: 2
                        }}
                      >
                        <MapIcon sx={{ fontSize: 48, mb: 1, color: '#999' }} />
                        <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>
                          Map Preview Not Available
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#888' }}>
                          Open maps below to view location
                        </Typography>
                      </Box>
                    )}
                  </Box>
                  <Box sx={{ textAlign: 'center', display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    {card.mapLocation.googleMapsUrl && (
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
                    )}
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