import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/condos', label: 'Condos' },
  { path: '/explore', label: 'Explore' },
  { path: '/about', label: 'About' },
];

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" color="inherit" elevation={2} sx={{ borderBottom: '1px solid #e3eaf1', bgcolor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 72 }}>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 800, fontFamily: '"Cinzel", serif' }}>
          <Link component={RouterLink} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            <span style={{
              background: 'linear-gradient(45deg, #1993e5 30%, #a67c52 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Condos Arnold
            </span>
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 