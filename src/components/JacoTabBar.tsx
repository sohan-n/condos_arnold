import React, { useState } from 'react';
import { Box, Tabs, Tab, IconButton, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface JacoTabBarProps {
  tabValue: number;
  onTabChange: (newValue: number) => void;
  tabLabels: string[];
}

const JacoTabBar: React.FC<JacoTabBarProps> = ({ tabValue, onTabChange, tabLabels }) => {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

  const handleTabChange = (_: unknown, newValue: number) => {
    onTabChange(newValue);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    console.log('Closing mobile menu');
    setMobileMenuAnchor(null);
  };

  const handleMobileTabSelect = (index: number) => {
    onTabChange(index);
    setMobileMenuAnchor(null);
  };

  function a11yProps(index: number) {
    return {
      id: `jaco-tab-${index}`,
      'aria-controls': `jaco-tabpanel-${index}`,
    };
  }

  return (
    <>
      {/* Mobile: Navigation with Arrows and Menu */}
      <Box sx={{
        display: { xs: 'flex', lg: 'none' },
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1,
        pointerEvents: 'auto',
      }}>
        {/* Left Arrow Button */}
        <IconButton
          onClick={() => onTabChange(tabValue === 0 ? tabLabels.length - 1 : tabValue - 1)}
          sx={{
            borderRadius: '50%',
            backdropFilter: 'blur(16px)',
            background: 'rgba(255,255,255,0.18)',
            border: '1.5px solid rgba(255,255,255,0.25)',
            boxShadow: '0 2px 12px #0003',
            color: '#fff',
            width: 38,
            height: 38,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s',
            '&:hover': {
              background: 'rgba(255,255,255,0.28)',
            },
            opacity: 1,
          }}
        >
          <ArrowBackIosNewIcon fontSize="medium" sx={{ ml: '-3px', color: '#fff' }} />
        </IconButton>

        {/* Selected Tab Display */}
        <Button
          onClick={handleMobileMenuOpen}
          variant="contained"
          sx={{
            py: 1.2,
            px: 2.5,
            fontSize: 14,
            fontWeight: 600,
            borderRadius: 2,
            textTransform: 'none',
            backdropFilter: 'blur(3px)',
            background: 'rgba(255,255,255,0.25)',
            border: '1.5px solid rgba(255,255,255,0.3)',
            color: '#fff',
            boxShadow: '0 2px 12px #0003',
            minWidth: 180,
            '&:hover': {
              background: 'rgba(255,255,255,0.3)',
              border: '1.5px solid rgba(255,255,255,0.4)',
            },
          }}
        >
          {tabLabels[tabValue]}
        </Button>

        {/* Right Arrow Button */}
        <IconButton
          onClick={() => onTabChange(tabValue === tabLabels.length - 1 ? 0 : tabValue + 1)}
          sx={{
            borderRadius: '50%',
            backdropFilter: 'blur(16px)',
            background: 'rgba(255,255,255,0.18)',
            border: '1.5px solid rgba(255,255,255,0.25)',
            boxShadow: '0 2px 12px #0003',
            color: '#fff',
            width: 38,
            height: 38,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s',
            '&:hover': {
              background: 'rgba(255,255,255,0.28)',
            },
            opacity: 1,
          }}
        >
          <ArrowForwardIosIcon fontSize="medium" sx={{ mr: '-3px', color: '#fff' }} />
        </IconButton>
        
        {/* Hamburger Menu Button */}
        <IconButton
          onClick={handleMobileMenuOpen}
          sx={{
            borderRadius: '50%',
            backdropFilter: 'blur(16px)',
            background: 'rgba(255,255,255,0.18)',
            border: '1.5px solid rgba(255,255,255,0.25)',
            boxShadow: '0 2px 12px #0003',
            color: '#fff',
            width: 38,
            height: 38,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s',
            '&:hover': {
              background: 'rgba(255,255,255,0.28)',
            },
          }}
        >
          <MenuIcon fontSize="medium" />
        </IconButton>
      </Box>

      {/* Desktop: Original Tab Design */}
      <Box sx={{
        display: { xs: 'none', lg: 'flex' },
        alignItems: 'center',
      }}>
        {/* Left Arrow Button */}
        <Box sx={{
          pointerEvents: 'auto',
          mr: 1,
          display: 'flex',
          alignItems: 'center',
        }}>
          <IconButton
            onClick={() => onTabChange(tabValue === 0 ? tabLabels.length - 1 : tabValue - 1)}
            sx={{
              borderRadius: '50%',
              backdropFilter: 'blur(16px)',
              background: 'rgba(255,255,255,0.18)',
              border: '1.5px solid rgba(255,255,255,0.25)',
              boxShadow: '0 2px 12px #0003',
              color: '#fff',
              width: 50,
              height: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
              m: 0,
              '&:hover': {
                background: 'rgba(255,255,255,0.28)',
              },
              opacity: 1,
            }}
          >
            <ArrowBackIosNewIcon fontSize="medium" sx={{ ml: '-3px', color: '#fff' }} />
          </IconButton>
        </Box>
        
        {/* Tab Bar */}
        <Box sx={{
          pointerEvents: 'auto',
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: '0 4px 32px #0004',
          backdropFilter: 'blur(5px)',
          background: 'rgba(255,255,255,0.18)',
          border: '1.5px solid rgba(255,255,255,0.25)',
          px: { xs: 0.3, md: 1 },
          py: { xs: 0.2, md: 0.6 },
          minWidth: { xs: '60vw', md: 'auto' },
          maxWidth: { xs: '90vw', md: '70vw' },
          display: 'flex',
          alignItems: 'center',
        }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="Jacó exploration tabs"
            variant="standard"
            scrollButtons={false}
            sx={{
              minHeight: 35,
              '& .MuiTab-root': {
                fontSize: { xs: 11, md: 14 },
                fontWeight: 700,
                textTransform: 'none',
                minWidth: { xs: 70, md: 85 },
                px: { xs: 0.8, md: 1.5 },
                py: { xs: 0.6, md: 1 },
                color: '#fff',
                opacity: 0.95,
                borderRadius: '10px',
                border: 'none',
                background: 'transparent',
                marginRight: 0,
                textShadow: '0 2px 8px #000b',
                transition: 'background 0.2s, color 0.2s',
                '&.Mui-selected': {
                  color: '#fff',
                  background: 'rgba(191, 191, 191, 0.22)',
                  textShadow: '0 4px 16px #000c',
                  opacity: 1,
                },
                '&:hover': {
                  background: 'rgba(255,255,255,0.10)',
                  color: '#fff',
                  opacity: 1,
                },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#fff',
                height: 2.5,
                borderRadius: 2,
                boxShadow: '0 2px 8px #0007',
              },
            }}
          >
            {tabLabels.map((label, idx) => (
              <Tab key={label} label={label} {...a11yProps(idx)} />
            ))}
          </Tabs>
        </Box>
        
        {/* Right Arrow Button */}
        <Box sx={{
          pointerEvents: 'auto',
          ml: 1,
          display: 'flex',
          alignItems: 'center',
        }}>
          <IconButton
            onClick={() => onTabChange(tabValue === tabLabels.length - 1 ? 0 : tabValue + 1)}
            sx={{
              borderRadius: '50%',
              backdropFilter: 'blur(16px)',
              background: 'rgba(255,255,255,0.18)',
              border: '1.5px solid rgba(255,255,255,0.25)',
              boxShadow: '0 2px 12px #0003',
              color: '#fff',
              width: 50,
              height: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
              m: 0,
              '&:hover': {
                background: 'rgba(255,255,255,0.28)',
              },
              opacity: 1,
            }}
          >
            <ArrowForwardIosIcon fontSize="medium" sx={{ mr: '-3px', color: '#fff' }} />
          </IconButton>
        </Box>
      </Box>

      {/* Full Screen Mobile Menu */}
      {Boolean(mobileMenuAnchor) && createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backdropFilter: 'blur(12px)',
            background: 'rgba(0,0,0,0.4)',
            zIndex: 99999999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'auto',
            isolation: 'isolate',
          }}
          onClick={handleMobileMenuClose}
        >
          {/* Full Screen Mobile Menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '100px 20px 80px 20px',
              zIndex: 100000001,
              pointerEvents: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1, delay: 0.05 }}
              style={{
                position: 'absolute',
                top: 40,
                right: 20,
                zIndex: 100000000,
                height: 44,
              }}
            >
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Close button clicked');
                  handleMobileMenuClose();
                }}
                sx={{
                  borderRadius: '8px',
                  backdropFilter: 'blur(16px)',
                  background: 'rgba(255,255,255,0.18)',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 2px 12px #0003',
                  color: '#fff',
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s',
                  '&:hover': {
                    background: 'rgba(255,255,255,0.28)',
                  },
                }}
              >
                <CloseIcon fontSize="medium" />
              </IconButton>
            </motion.div>
            {/* Grid Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15, delay: 0.05 }}
              style={{
                width: '100%',
                maxWidth: 500,
                height: 'calc(100vh - 250px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 16,
                padding: '20px',
                zIndex: 100000002,
                pointerEvents: 'auto',
              }}
            >
              {tabLabels.map((label, idx) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.1, 
                    delay: 0.1 + (idx * 0.02), 
                    ease: 'easeOut' 
                  }}
                >
                  <Button
                    onClick={() => handleMobileTabSelect(idx)}
                    variant={tabValue === idx ? "contained" : "outlined"}
                    sx={{
                      width: '100%',
                      height: '100%',
                      fontSize: 'clamp(16px, 3.5vw, 22px)',
                      fontWeight: tabValue === idx ? 700 : 500,
                      borderRadius: 2,
                      textTransform: 'none',
                      backdropFilter: 'blur(16px)',
                      background: tabValue === idx 
                        ? 'rgba(255,255,255,0.25)' 
                        : 'rgba(255,255,255,0.15)',
                      border: '1.5px solid rgba(255,255,255,0.3)',
                      color: '#fff',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      lineHeight: 1.2,
                      '&:hover': {
                        background: 'rgba(255,255,255,0.3)',
                        border: '1.5px solid rgba(255,255,255,0.4)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 25px rgba(0,0,0,0.2)',
                      },
                      '&.MuiButton-contained': {
                        background: 'rgba(255,255,255,0.35)',
                        border: '2px solid rgba(255,255,255,0.5)',
                        boxShadow: '0 6px 25px rgba(0,0,0,0.25)',
                      },
                    }}
                  >
                    {label}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>,
        document.body
      )}
    </>
  );
};

export default JacoTabBar; 