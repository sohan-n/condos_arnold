import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, Container } from '@mui/material';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import BathtubIcon from '@mui/icons-material/Bathtub';
import KingBedIcon from '@mui/icons-material/KingBed';
import TvIcon from '@mui/icons-material/Tv';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WifiIcon from '@mui/icons-material/Wifi';
import KitchenIcon from '@mui/icons-material/Kitchen';
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
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

// Controls the border radius for main call-to-action buttons
const BUTTON_BORDER_RADIUS = .5;

const locations = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 256 256"><path fill="#222" d="M128 64a40 40 0 1 0 40 40A40 40 0 0 0 128 64Zm0 64a24 24 0 1 1 24-24A24 24 0 0 1 128 128Zm0-112a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.19 254.19 0 0 0 41.45 38.3 8 8 0 0 0 9.18 0A254.19 254.19 0 0 0 174 200.25c27.45-31.57 42-64.85 42-96.25A88.1 88.1 0 0 0 128 16Zm0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0C200 161.23 144.53 209 128 222Z"/></svg>
    ),
    title: 'Close to the Beach',
    desc: 'Just steps away from the beautiful beaches of Jaco.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 256 256"><path fill="#222" d="M237.79 53.23a66.86 66.86 0 0 0-97.74 0 72.21 72.21 0 0 0-12.05 17 72.21 72.21 0 0 0-12-17 66.86 66.86 0 0 0-97.74 0 8 8 0 0 0 2.6 12.85L77 90.55a71.42 71.42 0 0 0-43.36 33.21 70.64 70.64 0 0 0-7.2 54.32A8 8 0 0 0 39 182.36l81-61.68V224a8 8 0 0 0 16 0V120.68l81 61.68a8 8 0 0 0 12.57-4.28 70.64 70.64 0 0 0-7.2-54.32A71.42 71.42 0 0 0 179 90.55l56.22-24.47a8 8 0 0 0 2.6-12.85ZM67.08 48a51.13 51.13 0 0 1 37.28 16.26 56.53 56.53 0 0 1 14.26 26.93L39 56.53A50.5 50.5 0 0 1 67.08 48ZM40 161.5a54.82 54.82 0 0 1 7.47-29.7 55.55 55.55 0 0 1 34-25.89A56.52 56.52 0 0 1 96.1 104a55.82 55.82 0 0 1 16.23 2.41ZM208.5 131.8A54.82 54.82 0 0 1 216 161.5l-72.3-55.1a56.3 56.3 0 0 1 64.83 25.4ZM137.38 91.19a56.53 56.53 0 0 1 14.26-26.93A51.13 51.13 0 0 1 188.92 48 50.5 50.5 0 0 1 217 56.53Z"/></svg>
    ),
    title: 'Vibrant Nightlife',
    desc: 'Enjoy the lively nightlife and entertainment options nearby.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 256 256"><path fill="#222" d="M216 40H40A16 16 0 0 0 24 56V200a16 16 0 0 0 16 16H216a16 16 0 0 0 16-16V56A16 16 0 0 0 216 40Zm0 160H40V56H216V200ZM176 88a48 48 0 0 1-96 0 8 8 0 0 1 16 0 32 32 0 0 0 64 0 8 8 0 0 1 16 0Z"/></svg>
    ),
    title: 'Shopping and Dining',
    desc: 'Explore a variety of shops, restaurants, and cafes within walking distance.',
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
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For location cards animation
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
      icon: <KitchenIcon sx={{ fontSize: 48, color: '#111' }} />, title: 'Kitchen & Dining', collapsible: true, key: 'kitchen',
      details: [
        'Kitchen (space to cook your own meals)', 'Refrigerator, Freezer', 'Microwave', 'Cooking basics (pots, pans, oil, salt, pepper)', 'Dishes & silverware (bowls, chopsticks, plates, cups, etc.)', 'Dishwasher', 'Stainless steel electric stove & oven', 'Coffee maker, Toaster, Blender', 'Wine glasses', 'Dining table',
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


  return (
    <Box sx={{ bgcolor: 'linear-gradient(to bottom, #fff 0%, #f6faff 60%, #eaf2fb 100%)', minHeight: '100vh' }}>
      {/* Hero Section with outside shot image background */}
      <Box sx={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 10 },
        overflow: 'hidden',
        bgcolor: 'transparent',
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)', // Slanted bottom
      }}>
        {/* Image background with Parallax */}
        <Box sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '115%', // Make taller to avoid blank space on parallax
          zIndex: 0,
          transform: `translateY(${offsetY * 0.5}px)`, // Parallax effect
        }}>
          <img
            src="condo1_banner.png"
            alt="Beachfront condo view"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
        {/* Overlay for readability */}
        <Box sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0,0,0,0.35)',
          zIndex: 1,
        }} />
        {/* Content */}
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h3" fontWeight={800} color="white" gutterBottom>
            Spacious Ocean View Condo for Groups
          </Typography>
          <Typography variant="h6" color="rgba(255,255,255,0.9)" mb={4}>
            Your exclusive beachfront oasis in Jaco awaits.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/condo"
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
            fontSize: '3.5rem',
            color: 'text.secondary', // Color for light background
            animation: `${dropAnimation} 2.5s ease-in-out infinite`,
          }}
        />
      </Box>

      {/* Features Section - Modern Carousel */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
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
        />
      </Container>

      {/* Amenities Section - 2 rows, auto-scrolling, cards from both sides */}
      <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 2, md: 3 } }}>
        <Typography variant="h4" fontWeight={700} color="text.primary" align="center" mb={2}>
          Amenities
        </Typography>
        <Typography color="text.secondary" align="center" mb={0}>
          Enjoy a full suite of amenities for a comfortable, luxurious stay.
        </Typography>
        {/* Split amenities into two rows */}
        <Box sx={{ display: { xs: 'block', md: 'flex' }, flexDirection: 'column', gap: 4 }}>
          {/* Top row: Splide carousel with autoplay swipes */}
          <Box sx={{ width: '100%', overflow: 'visible', mb: 3, py: 5, position: 'relative' }}>
            <Splide
              options={{
                type: 'loop',
                fixedWidth: 320,
                perMove: 1,
                gap: 24,
                arrows: false,
                pagination: false,
                drag: true,
                autoplay: true,
                interval: 2400,
                speed: 600,
                focus: 'center',
              }}
              style={{ width: '100%' }}
            >
              {amenitiesTop.map((item, i) => (
                <SplideSlide key={item.title + i} style={{ overflow: 'visible' }}>
                  <Card
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
          <Box sx={{ width: '100%', overflow: 'visible', py: 5, position: 'relative', mt: -11 }}>
            <Splide
              options={{
                type: 'loop',
                fixedWidth: 320,
                perMove: 1,
                gap: 24,
                arrows: false,
                pagination: false,
                drag: true,
                autoplay: true,
                interval: 1800,
                speed: 600,
                focus: 'center',
              }}
              style={{ width: '100%' }}
            >
              {amenitiesBottom.map((item, i) => (
                <SplideSlide key={item.title + i} style={{ overflow: 'visible' }}>
                  <Card
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
          minHeight: '60vh',
          width: '100%',
          mt: { xs: 8, md: 12 },
          mb: 0,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {/* Image background for Jaco section */}
        <Box sx={{
          position: 'absolute',
          top: '-100%',
          left: 0,
          width: '100%',
          height: '200%',
          zIndex: 0,
          transform: `translateY(${offsetY * 0.2}px)`, // Parallax effect - REDUCED FACTOR
          willChange: 'transform',
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
          <Typography variant="h4" fontWeight={700} color="#FFFFFF" align="center" mb={2}>
            Prime Location in Jaco
          </Typography>
          <Box display="flex" justifyContent="center" mb={6}>
            <Button
              component={RouterLink}
              to="/jaco"
              variant="contained"
              size="large"
              sx={{
                fontWeight: 500,
                fontSize: 18,
                px: 6,
                py: 2,
                borderRadius: BUTTON_BORDER_RADIUS,
                background: 'rgba(255,255,255,0.85)',
                color: '#222',
                boxShadow: '0 2px 12px #0001',
                letterSpacing: 1,
                textTransform: 'uppercase',
                transition: 'background 0.2s, color 0.2s',
                transform: 'scale(0.9)',
                '&:hover': {
                  background: 'rgba(230,230,230,0.95)',
                  color: '#111',
                },
              }}
            >
              Explore Jaco
            </Button>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, textAlign: { xs: 'center', sm: 'left' } }}>
            {locations.map((l, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.25 } },
                }}
                initial="hidden"
                animate={controls}
                style={{ flex: '1 1 300px', maxWidth: 370, minWidth: 260, margin: '0 12px', height: '100%' }}
              >
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    boxShadow: 3,
                    border: '1px solid #e3eaf1',
                    transition: 'box-shadow 0.3s',
                    '&:hover': { boxShadow: 8 },
                    bgcolor: 'rgba(255,255,255,0.75)',
                    height: '100%',
                    maxWidth: { xs: 260, sm: 370 },
                    minWidth: { xs: 300, sm: 260 },
                    maxHeight: { xs: 240, sm: 300 },
                    px: { xs: 1, sm: 2 },
                    py: { xs: 0, sm: 2 },
                    mx: { xs: 'auto', sm: 0 },
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      height: 90,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {l.icon}
                  </CardMedia>
                  <CardContent>
                    <Typography variant="h6" fontWeight={600} color="#111518" gutterBottom>{l.title}</Typography>
                    <Typography color="#637988">{l.desc}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            fontSize: 18,
            fontWeight: 500,
            textShadow: '0 2px 12px rgba(0,0,0,0.45)',
            letterSpacing: 0.5,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.25) 100%)',
          }}
        >
          © 2024 Jaco Luxury Condos. All rights reserved.
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage; 