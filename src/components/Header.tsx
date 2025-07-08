import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/condo', label: 'Condo' },
  { path: '/jaco', label: 'Jaco' },
  { path: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);
  return (
    <AppBar position="fixed" color="inherit" elevation={2} sx={{ borderBottom: '1px solid #e3eaf1', bgcolor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 72 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}>
          <Link component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <img 
              src="/JBC_BLACK_ART_ICON.png" 
              alt="JBC Logo" 
              style={{ 
                height: '40px', 
                width: 'auto',
                marginRight: '12px'
              }} 
            />
            <Typography variant="h5" component="div" sx={{ fontWeight: 800, fontFamily: '"Cinzel", serif', fontSize: { xs: 24, sm: 24 } }}>
              <span style={{
                background: 'linear-gradient(45deg, #222 20%, #bbb 70%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Jaco Bay Condos
              </span>
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={RouterLink}
                to={item.path}
                variant="text"
                sx={{
                  color: 'text.primary',
                  fontWeight: 600,
                  mx: 1,
                  '&.active': {
                    color: 'primary.main',
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          {/* Mobile nav: hamburger and fullscreen modal */}
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <BeachAccessIcon sx={{ fontSize: 27 }} />
            </IconButton>
            <Modal open={drawerOpen} onClose={toggleDrawer(false)} closeAfterTransition>
              <Fade in={drawerOpen} timeout={350}>
                <Box sx={{
                  position: 'fixed',
                  inset: 0,
                  width: '100vw',
                  height: '100vh',
                  bgcolor: 'rgba(255,255,255,0.65)',
                  backdropFilter: 'blur(18px)',
                  zIndex: 1300,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <IconButton
                    onClick={toggleDrawer(false)}
                    sx={{
                      position: 'absolute',
                      top: 24,
                      right: 24,
                      color: '#222',
                      bgcolor: 'rgba(255,255,255,0.7)',
                      '&:hover': { bgcolor: 'rgba(220,220,220,0.9)' },
                      zIndex: 2,
                    }}
                  >
                    <CloseIcon sx={{ fontSize: 32 }} />
                  </IconButton>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, mt: 2 }}>
                    {navItems.map((item, idx, arr) => {
                      const reverseIdx = arr.length - 1 - idx;
                      return (
                        <Fade in={drawerOpen} style={{ transitionDelay: `${100 + reverseIdx * 80}ms` }} key={item.label}>
                          <Button
                            component={RouterLink}
                            to={item.path}
                            onClick={toggleDrawer(false)}
                            sx={{
                              fontWeight: 700,
                              fontSize: 28,
                              color: '#222',
                              px: 6,
                              py: 2,
                              borderRadius: 99,
                              background: 'rgba(255,255,255,0.85)',
                              boxShadow: '0 2px 12px #0001',
                              letterSpacing: 2,
                              mb: 1,
                              transition: 'background 0.2s, color 0.2s',
                              '&:hover': {
                                background: 'rgba(230,230,230,0.95)',
                                color: '#1993e5',
                              },
                            }}
                          >
                            {item.label}
                          </Button>
                        </Fade>
                      );
                    })}
                  </Box>
                </Box>
              </Fade>
            </Modal>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 