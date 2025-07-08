import React from 'react';
import Header from './Header';
import FloatingBookButton from './FloatingBookButton';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { useLocation } from 'react-router-dom';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f6faff',
      paper: '#fff',
    },
    primary: {
      main: '#1993e5',
    },
    secondary: {
      main: '#a67c52',
    },
    text: {
      primary: '#111518',
      secondary: '#637988',
    },
  },
  typography: {
    fontFamily: [
      'Plus Jakarta Sans',
      'Noto Sans',
      'Inter',
      'sans-serif',
    ].join(','),
    h1: { fontFamily: '"Cinzel", serif' },
    h2: { fontFamily: '"Cinzel", serif' },
    h3: { fontFamily: '"Cinzel", serif' },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine button configuration based on current page
  const getButtonConfig = () => {
    if (currentPath === '/condo') {
      return {
        showPlacedButton: true,
        placedButtonText: 'BOOK NOW',
        placedButtonPosition: 'top' as const,
        disableOnPages: ['/contact']
      };
    }
    
    return {
      showPlacedButton: false,
      disableOnPages: ['/contact']
    };
  };

  const buttonConfig = getButtonConfig();

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Header />
      <main>{children}</main>
      <FloatingBookButton {...buttonConfig} />
    </ThemeProvider>
  );
};

export default Layout; 