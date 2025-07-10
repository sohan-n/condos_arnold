import React, { useRef } from 'react';
import { Box, Typography, Button, Card, Container } from '@mui/material';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import BathtubIcon from '@mui/icons-material/Bathtub';
import KingBedIcon from '@mui/icons-material/KingBed';
import TvIcon from '@mui/icons-material/Tv';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WifiIcon from '@mui/icons-material/Wifi';
import KitchenIcon from '@mui/icons-material/Kitchen';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import DeckIcon from '@mui/icons-material/Deck';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import { Link as RouterLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ModernCarousel from '../components/ModernCarousel';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@emotion/react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// @ts-ignore
import { Splide, SplideSlide, Splide as SplideComponent } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

// Controls the border radius for main call-to-action buttons
const BUTTON_BORDER_RADIUS = .5;

const locations = [
  // Beaches (Palm Tree)
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 256 256"><path fill="#222" d="M237.79 53.23a66.86 66.86 0 0 0-97.74 0 72.21 72.21 0 0 0-12.05 17 72.21 72.21 0 0 0-12-17 66.86 66.86 0 0 0-97.74 0 8 8 0 0 0 2.6 12.85L77 90.55a71.42 71.42 0 0 0-43.36 33.21 70.64 70.64 0 0 0-7.2 54.32A8 8 0 0 0 39 182.36l81-61.68V224a8 8 0 0 0 16 0V120.68l81 61.68a8 8 0 0 0 12.57-4.28 70.64 70.64 0 0 0-7.2-54.32A71.42 71.42 0 0 0 179 90.55l56.22-24.47a8 8 0 0 0 2.6-12.85ZM67.08 48a51.13 51.13 0 0 1 37.28 16.26 56.53 56.53 0 0 1 14.26 26.93L39 56.53A50.5 50.5 0 0 1 67.08 48ZM40 161.5a54.82 54.82 0 0 1 7.47-29.7 55.55 55.55 0 0 1 34-25.89A56.52 56.52 0 0 1 96.1 104a55.82 55.82 0 0 1 16.23 2.41ZM208.5 131.8A54.82 54.82 0 0 1 216 161.5l-72.3-55.1a56.3 56.3 0 0 1 64.83 25.4ZM137.38 91.19a56.53 56.53 0 0 1 14.26-26.93A51.13 51.13 0 0 1 188.92 48 50.5 50.5 0 0 1 217 56.53Z"/></svg>
    ),
    tab: 'beaches'
  },
  // Surfing (Wave)
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 256 256"><path d="M176,104a32,32,0,1,0-32-32A32,32,0,0,0,176,104Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,56Zm46.16,129.24a8,8,0,0,1-1,11.26c-17.36,14.39-32.86,19.5-47,19.5-18.58,0-34.82-8.82-49.93-17-25.35-13.76-47.24-25.65-79.07.74a8,8,0,1,1-10.22-12.31c40.17-33.29,70.32-16.93,96.93-2.49,25.35,13.77,47.24,25.65,79.07-.74A8,8,0,0,1,222.16,185.24ZM34.89,147.42a8,8,0,1,0,10.22,12.31c31.83-26.38,53.72-14.5,79.07-.74,15.11,8.2,31.35,17,49.93,17,14.14,0,29.64-5.11,47-19.5a8,8,0,1,0-10.22-12.31,75.79,75.79,0,0,1-19.28,12.06l-53.84-53.82A103.34,103.34,0,0,0,64.24,72H40a8,8,0,0,0,0,16H64.24a87.66,87.66,0,0,1,41.88,10.56L76.49,128.17C63.82,129.35,50.07,134.84,34.89,147.42Zm91.57-33.67,46.13,46.12c-14-.43-26.88-7.39-40.77-14.93-10.75-5.84-22.09-12-34.42-15.05l22.26-22.26A87.14,87.14,0,0,1,126.46,113.75Z"></path></svg>
    ),
    tab: 'surfing'
  },
  // Restaurants (Fork & Knife)
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 256 256"><path d="M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z"></path></svg>
    ),
    tab: 'restaurants'
  },
  // Nightlife (Disco Ball)
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 256 256"><path d="M120,64.37V16a8,8,0,0,0-16,0V64.37a88,88,0,1,0,16,0ZM183.54,144H151.77c-1.51-28.36-10.79-48.36-19.44-61.06A72.16,72.16,0,0,1,183.54,144Zm-95.3,16h47.52c-2,33.52-16.13,52.95-23.76,61.08C104.36,212.93,90.23,193.51,88.24,160Zm0-16c2-33.52,16.13-52.95,23.76-61.08,7.64,8.15,21.77,27.57,23.76,61.08Zm3.43-61.06C83,95.64,73.74,115.64,72.23,144H40.46A72.16,72.16,0,0,1,91.67,82.94ZM40.46,160H72.23c1.51,28.36,10.79,48.36,19.44,61.06A72.16,72.16,0,0,1,40.46,160Zm91.87,61.06c8.65-12.7,17.93-32.7,19.44-61.06h31.77A72.16,72.16,0,0,1,132.33,221.06ZM256,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,256,88ZM152,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H192V64a8,8,0,0,1-16,0V48H160A8,8,0,0,1,152,40Z"></path></svg>
    ),
    tab: 'nightlife'
  },
  // Activities (Running Figure)
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 256 256"><path d="M152,88a32,32,0,1,0-32-32A32,32,0,0,0,152,88Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,152,40Zm67.31,100.68c-.61.28-7.49,3.28-19.67,3.28-13.85,0-34.55-3.88-60.69-20a169.31,169.31,0,0,1-15.41,32.34,104.29,104.29,0,0,1,31.31,15.81C173.92,186.65,184,207.35,184,232a8,8,0,0,1-16,0c0-41.7-34.69-56.71-54.14-61.85-.55.7-1.12,1.41-1.69,2.1-19.64,23.8-44.25,36.18-71.63,36.18A92.29,92.29,0,0,1,31.2,208,8,8,0,0,1,32.8,192c25.92,2.58,48.47-7.49,67-30,12.49-15.14,21-33.61,25.25-47C86.13,92.35,61.27,111.63,61,111.84A8,8,0,1,1,51,99.36c1.5-1.2,37.22-29,89.51,6.57,45.47,30.91,71.93,20.31,72.18,20.19a8,8,0,1,1,6.63,14.56Z"></path></svg>
    ),
    tab: 'activities'
  },
  // Shopping (Shopping Bag)
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 256 256"><path fill="#222" d="M216 40H40A16 16 0 0 0 24 56V200a16 16 0 0 0 16 16H216a16 16 0 0 0 16-16V56A16 16 0 0 0 216 40Zm0 160H40V56H216V200ZM176 88a48 48 0 0 1-96 0 8 8 0 0 1 16 0 32 32 0 0 0 64 0 8 8 0 0 1 16 0Z"/></svg>
    ),
    tab: 'shopping'
  },
  // Transportation (Car)
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 256 256"><path d="M240,112H211.31L168,68.69A15.86,15.86,0,0,0,156.69,64H44.28A16,16,0,0,0,31,71.12L1.34,115.56A8.07,8.07,0,0,0,0,120v48a16,16,0,0,0,16,16H33a32,32,0,0,0,62,0h66a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V128A16,16,0,0,0,240,112ZM44.28,80H156.69l32,32H23ZM64,192a16,16,0,1,1,16-16A16,16,0,0,1,64,192Zm128,0a16,16,0,1,1,16-16A16,16,0,0,1,192,192Zm48-24H223a32,32,0,0,0-62,0H95a32,32,0,0,0-62,0H16V128H240Z"></path></svg>
    ),
    tab: 'transportation'
  },
  // Tour Guide (User)
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"></path></svg>
    ),
    tab: 'tour-guide'
  },
];

const dropAnimation = keyframes`
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    transform: translateY(10px);
    opacity: 1;
  }
  100% {
    transform: translateY(20px);
    opacity: 0;
  }
`;

const HomePage: React.FC = () => {
  // Remove the custom scroll handling
  // const [offsetY, setOffsetY] = useState(0);

  // Remove the custom scroll effect
  // useEffect(() => {
  //   let ticking = false;
  //   const handleScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(() => {
  //         setOffsetY(window.pageYOffset);
  //         ticking = false;
  //       });
  //       ticking = true;
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // For location cards animation
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Intersection observer for amenities carousels
  const [topRef, topInView] = useInView({ threshold: 0.6 });
  const [bottomRef, bottomInView] = useInView({ threshold: 0.6 });

  // Split amenities into two groups for top and bottom row
  const amenitiesTop = [
    {
      icon: <BeachAccessIcon sx={{ fontSize: 48, color: '#111' }} />, title: 'Scenic Views', details: ['Panoramic ocean views from balcony and living room.'],
    },
    {
      icon: <BathtubIcon sx={{ fontSize: 48, color: '#111' }} />, title: 'Bathroom', collapsible: true, key: 'bathroom',
      details: [
        'Hair dryer', 'Cleaning products', 'Shampoo', 'Conditioner', 'Body soap', 'Hot water',
      ],
    },
    {
      icon: <KingBedIcon sx={{ fontSize: 48, color: '#111' }} />, title: 'Bedroom', collapsible: true, key: 'bedroom',
      details: [
        'Essentials (towels, bed sheets, soap, toilet paper)', 'Hangers', 'Bed linens', 'Room-darkening shades', 'Iron', 'Safe', 'Clothing storage: walk-in closet & wardrobe',
      ],
    },
    {
      icon: <LocalLaundryServiceIcon sx={{ fontSize: 48, color: '#111' }} />, title: 'Laundry', collapsible: true, key: 'laundry',
      details: ['Free washer – In unit', 'Free dryer – In unit'],
    },
    {
      icon: <TvIcon sx={{ fontSize: 48, color: '#111' }} />, title: 'Entertainment', details: ['HDTV with standard cable', 'Streaming apps available'],
    },
    {
      icon: <AcUnitIcon sx={{ fontSize: 48, color: '#111' }} />, title: 'Heating & Cooling',
      details: ['AC - split type ductless system', 'Ceiling fan'],
    },
  ];
  const amenitiesBottom = [
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 48, color: '#111' }} />, title: 'Home Safety', collapsible: true, key: 'safety',
      details: ['Smoke alarm', 'Carbon monoxide alarm', 'Fire extinguisher', 'First aid kit'],
    },
    {
      icon: <WifiIcon sx={{ fontSize: 48, color: '#111' }} />, title: 'Wifi', details: ['Free high-speed Internet', 'WiFi throughout the condo'],
    },
    {
      icon: <KitchenIcon sx={{ fontSize: 48, color: '#111' }} />, title: 'Kitchen', collapsible: true, key: 'kitchen',
      details: [
        'Kitchen (space to cook your own meals)', 'Refrigerator, Freezer', 'Microwave', 'Cooking basics (pots, pans, oil, salt, pepper)', 'Dishwasher', 'Stainless steel electric stove & oven', 'Coffee maker, Toaster, Blender',
      ],
    },
    {
      icon: <RestaurantMenuIcon sx={{ fontSize: 48, color: '#111' }} />, title: 'Dining', collapsible: true, key: 'dining',
      details: [
        'Dining table', 'Wine glasses', 'Dishes & silverware (bowls, plates, cups, etc.)',
      ],
    },
    {
      icon: <DeckIcon sx={{ fontSize: 48, color: '#111' }} />, title: 'Outdoor', collapsible: true, key: 'outdoor',
      details: ['Patio or balcony', 'Backyard (not fully fenced, open grassy area)', 'Outdoor furniture'],
    },
    {
      icon: <LocalParkingIcon sx={{ fontSize: 48, color: '#111' }} />, title: 'Parking & Facilities', collapsible: true, key: 'parking',
      details: ['Free residential garage on premises – 2 spaces', 'Shared pool', 'Elevator (at least 52" deep, 32" wide doorway)'],
    },
    {
      icon: <VpnKeyIcon sx={{ fontSize: 48, color: '#111' }} />, title: 'Services', details: ['Self check-in (keypad)'],
    },
  ];

  const topSplideRef = useRef<any>(null);
  const bottomSplideRef = useRef<any>(null);

  // Pause/resume Splide autoplay based on inView
  React.useEffect(() => {
    const inst = topSplideRef.current?.splide;
    if (inst && inst.Components?.Autoplay) {
      if (topInView) {
        inst.Components.Autoplay.play();
      } else {
        inst.Components.Autoplay.pause();
      }
    }
  }, [topInView]);

  React.useEffect(() => {
    const inst = bottomSplideRef.current?.splide;
    if (inst && inst.Components?.Autoplay) {
      if (bottomInView) {
        inst.Components.Autoplay.play();
      } else {
        inst.Components.Autoplay.pause();
      }
    }
  }, [bottomInView]);

  return (
    <ParallaxProvider>
      <Box sx={{ bgcolor: 'linear-gradient(to bottom, #fff 0%, #f6faff 60%, #eaf2fb 100%)', minHeight: '100vh' }}>
        {/* Hero Section with outside shot image background */}
        <Box sx={{
          position: 'relative',
          minHeight: { xs: '83vh', md: '85vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          pt: { xs: 15, md: 20 },
          pb: { xs: 6, md: 10 },
          overflow: 'hidden',
          bgcolor: 'transparent',
          clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)', // Slanted bottom
        }}>
          {/* Image background with Parallax */}
          <Parallax
            speed={-20}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
              willChange: 'transform',
            }}
          >
            <img
              src="condo1_banner.png"
              alt="Beachfront condo view"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(1.08)',
              }}
            />
          </Parallax>
        {/* Overlay for readability */}
        <Box sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          bgcolor: { xs: 'rgba(0,0,0,0.18)', md: 'rgba(0,0,0,0.35)' },
          zIndex: 1,
        }} />
        {/* Content */}
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2,
          display: { xs: 'flex', md: 'block' },
          flexDirection: { xs: 'column', md: 'column' },
          alignItems: { xs: 'stretch', md: 'unset' },
          justifyContent: { xs: 'space-between', md: 'flex-start' },
          height: { xs: '100%', md: 'auto' },
        }}>
          <Typography
            variant="h3"
            fontWeight={900}
            color="white"
            gutterBottom
            fontSize={{ xs: 55, md: 70 }}
            sx={{
              textShadow: {
                xs: '0 4px 24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.9)',
                md: '0 10px 48px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.9)'
              },
            }}
          >
            Ultra-Luxury Condos, in Jaco
          </Typography>
          <Typography
            variant="h6"
            color="rgba(255,255,255,0.9)"
            mb={{ xs: 0, md: 4 }}
            sx={{
              mt: { xs: 0, md: 0 },
              alignSelf: { xs: 'center', md: 'unset' },
              textShadow: {
                xs: '0 4px 24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.9)',
                md: '0 10px 48px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.9)'
              },
              fontSize: 24,
              letterSpacing: 1.2  ,
              my: { xs: 'auto', md: 0 },
              display: { xs: 'none', md: 'block' },
            }}
          >
            Experience Jaco's best.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/condo"
            sx={{
              borderRadius: '7px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              letterSpacing: 1.2,
              textTransform: 'uppercase',
                  fontSize: { xs: 20, md: 19   },
                  px: { xs: 8, md: 10  },
                  py: { xs: 2.5, md: 3.5 },
                  fontWeight: 600,
                                    maxWidth: { xs: '350px'},
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  mt: { xs: 8, md: 10 },
                  mx: 'auto',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                transition: 'left 0.5s',
              },
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                transform: 'translateY(-2px)',
                '&::before': {
                  left: '100%',
                },
              },
              '&:active': {
                transform: 'translateY(0px)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            Explore Condo
          </Button>
        </Container>
      </Box>

      {/* Scroll Down Arrow - Positioned underneath the hero section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2vh', // Pulls the arrow up into the slanted space
          position: 'relative',
          zIndex: 3,
        }}
      >
        <KeyboardArrowDownIcon
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            color: 'text.secondary', // Color for light background
            animation: `${dropAnimation} 2.5s ease-in-out infinite`,
          }}
        />
      </Box>

      {/* Features Section - Modern Carousel */}
      <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 4, md: 6 } }}>
        <Typography variant="h4" fontWeight={700} color="black" align="center" mb={2}>
          Experience Paradise
        </Typography>
        <Typography color="#637988" align="center" mb={6}>
          This impeccably and recently remodeled 4-bedroom, 4-bathroom condo offers a masterful design and comes fully furnished, ideal for comfortably accommodating groups of up to 10 people. It's the perfect choice for families and groups looking to enjoy a vacation together without compromising on personal space or luxury.
        </Typography>
        <ModernCarousel
          images={[
            'slideshow/slide_3ad59832-3b10-4e8e-942b-54f6090441b6.jpeg',
            'slideshow/slide_b7c18217-04cf-46a3-86b9-f1ed72182bb2.avif',
            'slideshow/slide_9f9cf9e8-1082-4f4c-9ef6-0485af4e71b5.avif',
            'slideshow/slide_5b2f2e0e-85e2-45ab-a142-bd6fddd23c51.avif',
            'slideshow/slide_bcc6b5c4-eb0c-436a-a04e-cf32e79d67d7.avif',
            'slideshow/slide_d636ab14-de68-41a2-bb59-356aa55e9fb4.avif',
            'slideshow/slide_d5da1151-a7b9-4169-89d4-d29395f9032c.avif',
            'slideshow/slide_eca1b684-f785-482b-be91-0b48862701ff.avif',
            'slideshow/slide_b2e8a954-3400-4c63-82ac-66000c4c5012.avif',
            'slideshow/slide_42fb3f45-9831-4bf4-b339-f3389c2699f8.avif',
            'slideshow/slide_9fd8e9cf-d51b-4070-b6e5-fda1301ea64d.avif',
            'slideshow/slide_f9d66cf2-ecf2-4913-929e-c4651926560e.avif',
            'slideshow/slide_dc82f325-76c6-4176-b694-034e60828880.jpeg',
            'slideshow/slide_11ca710a-bcb2-4ebe-817f-b8243ea79bc9.avif',
            'slideshow/slide_ad0ceb99-f2df-4495-a928-8df8e011b8d5.avif',
            'slideshow/slide_447cbbc2-e550-4636-9b2e-b2e7cc3c4d86.avif',
            'slideshow/slide_8a448b19-2e47-40d1-8e64-050bb233a148.avif',
            'slideshow/slide_3ef416d8-b475-4086-b885-122a9de440dd.avif',
            'slideshow/slide_97b93768-476c-464f-bab6-f74140220ea7.avif',
            'slideshow/slide_2bb3967a-1d44-45d8-a3f6-6f4375e7abd3.avif',
            'slideshow/slide_d84243cd-bfad-455b-b04a-9098b1ecd4ae.avif',
            'slideshow/slide_slide1.png',
            'slideshow/slide_slide2.png',
            'slideshow/slide_slide3.png',
            'slideshow/slide_slide4.png',
            'slideshow/slide_slide5.png',
            'slideshow/slide_slide6.jpeg',
          ]}
          autoplayInterval={4000}
          height={600}
        />
      </Container>

      {/* Amenities Section - 2 rows, auto-scrolling, cards from both sides */}
      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 2, md: 3 } }}>
        <Typography variant="h4" fontWeight={700} color="text.primary" align="center" mb={2}>
          Amenities
        </Typography>
        <Typography color="text.secondary" align="center" mb={0}>
          Enjoy a full suite of amenities for a comfortable, luxurious stay.
        </Typography>
        {/* Move View All Amenities button here */}
        <Box display="flex" justifyContent="center" mt={4} mb={2}>
          <Button
            component={RouterLink}
            to="/condo#amenities"
            variant="contained"
            size="large"
            sx={{
              borderRadius: BUTTON_BORDER_RADIUS,
              background: 'rgba(255,255,255,0.85)',
              color: '#222',
              boxShadow: '0 2px 12px #0001',
              letterSpacing: 1,
              textTransform: 'uppercase',
              fontSize: 18,
              px: 6,
              py: 2,
              fontWeight: 500,
              transition: 'background 0.2s, color 0.2s',
              '&:hover': {
                background: 'rgba(230,230,230,0.95)',
                color: '#111',
              },
            }}
          >
            View All Amenities
          </Button>
        </Box>
        {/* Split amenities into two rows */}
        <Box sx={{ display: { xs: 'flex', md: 'flex' }, flexDirection: 'column', gap: 4 }}>
          {/* Top row: Splide carousel with autoplay swipes */}
          <Box ref={topRef} sx={{ width: '100%', overflow: 'visible', mb: 3, py: 5, position: 'relative' }}>
            <Splide
              ref={topSplideRef}
              options={{
                type: 'loop',
                fixedWidth: 320,
                perMove: 1,
                gap: 24,
                arrows: false,
                pagination: false,
                drag: true,
                autoplay: true,
                interval: 4200,
                speed: 600,
                updateOnMove: true,
                focus: 'center',
              }}
              style={{ width: '100%' }}
            >
              {amenitiesTop.map((item, i) => (
                <SplideSlide key={item.title + i} style={{ overflow: 'visible' }}>
                  <Card
                    className="amenity-card"
                    sx={{
                      borderRadius: 2,
                      boxShadow: item.details
                        ? '0 0 0 2px #1993e533, 0 8px 32px 0 rgba(25, 147, 229, 0.10)'
                        : '0 8px 32px 0 rgba(25, 147, 229, 0.12), 0 1.5px 8px 0 rgba(30, 41, 59, 0.10)',
                      p: 2,
                      minHeight: 120,
                      maxHeight: item.details ? 130 : 130,
                      transition: 'box-shadow 0.3s, transform 0.3s, max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #fff 70%, #eaf2fb 100%)',
                      perspective: 800,
                      willChange: 'transform',
                      transformOrigin: 'bottom center',
                      '&:hover': item.details
                        ? {
                            boxShadow: '0 0 0 2.5px #1993e5cc, 0 16px 48px 0 rgba(25, 147, 229, 0.18), 0 4px 24px 0 rgba(30, 41, 59, 0.13)',
                            transform: 'scale(1.04) rotateY(8deg)',
                            maxHeight: 400,
                          }
                        : {
                            boxShadow: '0 16px 48px 0 rgba(25, 147, 229, 0.18), 0 4px 24px 0 rgba(30, 41, 59, 0.13)',
                            transform: 'scale(1.04) rotateY(8deg)',
                            maxHeight: 130,
                          },
                      maxWidth: 320,
                      width: '100%',
                    }}
                  >
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" mb={1}>
                      <Typography variant="h6" fontWeight={700}>{item.title}</Typography>
                      <Box display="flex" alignItems="center" justifyContent="center" height="100%" ml={2}>
                        {item.icon}
                      </Box>
                    </Box>
                    <Box sx={{ maxHeight: 400, overflow: 'hidden' }}>
                      <ul style={{ paddingLeft: 20, margin: 0, color: '#637988', fontSize: 15 }}>
                        {item.details.map((d: string, i: number) => <li key={i}>{d}</li>)}
                      </ul>
                    </Box>
                  </Card>
                </SplideSlide>
              ))}
            </Splide>
          </Box>
          {/* Bottom row: Splide carousel with faster autoplay swipes */}
          <Box ref={bottomRef} sx={{ width: '100%', overflow: 'visible', py: 5, position: 'relative', mt: -11 }}>
            <Splide
              ref={bottomSplideRef}
              options={{
                type: 'loop',
                fixedWidth: 320,
                perMove: 1,
                gap: 24,
                arrows: false,
                pagination: false,
                drag: true,
                autoplay: true,
                interval: 3400,
                speed: 600,
                updateOnMove: true,
                focus: 'center',
              }}
              style={{ width: '100%' }}
            >
              {amenitiesBottom.map((item, i) => (
                <SplideSlide key={item.title + i} style={{ overflow: 'visible' }}>
                  <Card
                    className="amenity-card"
                    sx={{
                      borderRadius: 2,
                      boxShadow: item.details
                        ? '0 0 0 2px #1993e533, 0 8px 32px 0 rgba(25, 147, 229, 0.10)'
                        : '0 8px 32px 0 rgba(25, 147, 229, 0.12), 0 1.5px 8px 0 rgba(30, 41, 59, 0.10)',
                      p: 2,
                      minHeight: 120,
                      maxHeight: item.details ? 130 : 130,
                      transition: 'box-shadow 0.3s, transform 0.3s, max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #fff 70%, #eaf2fb 100%)',
                      perspective: 800,
                      willChange: 'transform',
                      transformOrigin: 'bottom center',
                      '&:hover': item.details
                        ? {
                            boxShadow: '0 0 0 2.5px #1993e5cc, 0 16px 48px 0 rgba(25, 147, 229, 0.18), 0 4px 24px 0 rgba(30, 41, 59, 0.13)',
                            transform: 'scale(1.04) rotateY(8deg)',
                            maxHeight: 400,
                          }
                        : {
                            boxShadow: '0 16px 48px 0 rgba(25, 147, 229, 0.18), 0 4px 24px 0 rgba(30, 41, 59, 0.13)',
                            transform: 'scale(1.04) rotateY(8deg)',
                            maxHeight: 130,
                          },
                      maxWidth: 320,
                      width: '100%',
                    }}
                  >
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" mb={1}>
                      <Typography variant="h6" fontWeight={700}>{item.title}</Typography>
                      <Box display="flex" alignItems="center" justifyContent="center" height="100%" ml={2}>
                        {item.icon}
                      </Box>
                    </Box>
                    <Box sx={{ maxHeight: 400, overflow: 'hidden' }}>
                      <ul style={{ paddingLeft: 20, margin: 0, color: '#637988', fontSize: 15 }}>
                        {item.details.map((d: string, i: number) => <li key={i}>{d}</li>)}
                      </ul>
                    </Box>
                  </Card>
                </SplideSlide>
              ))}
            </Splide>
          </Box>
        </Box>
      </Container>

      {/* Location Section with Google Earth video background */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '100vh', md: '90vh' },
          width: '100%',
          mt: { xs: 8, md: 12 },
          mb: 0,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Image background for Jaco section */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}>
          <motion.img
            src="jaco_beach.jpg"
            alt="Jaco Beach"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          {/* Overlay for readability */}
          <Box sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.2)',
            zIndex: 1,
          }} />
        </Box>
        {/* Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 8, md: 12 } }} ref={ref}>
          <Typography variant="h4" fontWeight={800} color="#FFFFFF" align="center" mb={5} sx={{ fontSize: { xs: 40, md: 54 } }}>
            Prime Location in Jaco
          </Typography>
          <Box display="flex" justifyContent="center" mb={5}>
            <Button
              component={RouterLink}
              to="/jaco"
              variant="contained"
              size="large"
              sx={{
                fontWeight: 600,
                fontSize: { xs: 18, md: 22 },
                px: { xs: 6, md: 9 },
                py: { xs: 2.5, md: 3 },
                borderRadius: '7px',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                letterSpacing: 1.2,
                textTransform: 'uppercase',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  transition: 'left 0.5s',
                },
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  transform: 'translateY(-2px)',
                  '&::before': {
                    left: '100%',
                  },
                },
                '&:active': {
                  transform: 'translateY(0px)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              Explore Jaco
            </Button>
          </Box>
          {/* Icon grid - 2 rows on mobile, single row on desktop */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center', 
            gap: { xs: 3, md: 6 }, 
            mt: 2, 
            '& svg path': { fill: '#fff' } 
          }}>
            {/* First row - first 4 icons */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: { xs: 4, md: 6 }
            }}>
              {locations.slice(0, 4).map((l, i) => (
                <Box 
                  key={i} 
                  sx={{ 
                    width: 72, 
                    height: 72,
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    }
                  }}
                  component={RouterLink}
                  to={`/jaco#${l.tab}`}
                >
                  {React.cloneElement(l.icon, { width: '100%', height: '100%' })}
                </Box>
              ))}
            </Box>
            {/* Second row - last 4 icons */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: { xs: 4, md: 6 }
            }}>
              {locations.slice(4, 8).map((l, i) => (
                <Box 
                  key={i + 4} 
                  sx={{ 
                    width: 72, 
                    height: 72,
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    }
                  }}
                  component={RouterLink}
                  to={`/jaco#${l.tab}`}
                >
                  {React.cloneElement(l.icon, { width: '100%', height: '100%' })}
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
        {/* Footer overlayed on video */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 3,
            py: 4,
            textAlign: 'center',
            color: '#fff',
            fontSize: 13,
            fontWeight: 500,
            textShadow: '0 2px 12px rgba(0,0,0,0.45)',
            letterSpacing: 0.5,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.25) 100%)',
          }}
        >
          © 2025 Jaco Bay Condos. All rights reserved.
        </Box>
      </Box>
    </Box>
    </ParallaxProvider>
  );
};

export default HomePage; 