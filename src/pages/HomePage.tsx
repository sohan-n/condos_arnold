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
import HeroButton from '../components/HeroButton';
import UnifiedHero from '../components/UnifiedHero';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@emotion/react';
import { ParallaxProvider } from 'react-scroll-parallax';
// @ts-ignore
import { Splide, SplideSlide, Splide as SplideComponent } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {
  BeachIcon,
  SurfingIcon,
  RestaurantIcon,
  NightlifeIcon,
  ActivitiesIcon,
  ShoppingIcon,
  TransportationIcon,
  TourGuideIcon
} from '../components/icons';

// Controls the border radius for main call-to-action buttons
const BUTTON_BORDER_RADIUS = .5;

const locations = [
  // Beaches (Palm Tree)
  {
    icon: <BeachIcon width={56} height={56} color="#fff" />,
    tab: 'beaches'
  },
  // Surfing (Wave)
  {
    icon: <SurfingIcon width={56} height={56} color="#fff" />,
    tab: 'surfing'
  },
  // Restaurants (Fork & Knife)
  {
    icon: <RestaurantIcon width={56} height={56} color="#fff" />,
    tab: 'restaurants'
  },
  // Nightlife (Disco Ball)
  {
    icon: <NightlifeIcon width={56} height={56} color="#fff" />,
    tab: 'nightlife'
  },
  // Activities (Running Figure)
  {
    icon: <ActivitiesIcon width={56} height={56} color="#fff" />,
    tab: 'activities'
  },
  // Shopping (Shopping Bag)
  {
    icon: <ShoppingIcon width={56} height={56} color="#fff" />,
    tab: 'shopping'
  },
  // Transportation (Car)
  {
    icon: <TransportationIcon width={56} height={56} color="#fff" />,
    tab: 'transportation'
  },
  // Tour Guide (User)
  {
    icon: <TourGuideIcon width={56} height={56} color="#fff" />,
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
        <UnifiedHero
          backgroundImage="condo1_banner.png"
          title="Ultra-Luxury Condos, in Jacó"
          subtitle="Experience the best."
          buttonText="Explore Condo"
          buttonTo="/condo"
          heightPreset="mainpage"
          shadowType="dark"
          overlayOpacity={0.25}
        />

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
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 12 }, pb: { xs: 4, md: 6 } }}>
        <Typography variant="h4" fontWeight={700} color="black" align="center" mb={2}>
          Experience Paradise
        </Typography>
        <Typography color="#637988" align="center" mb={6}>
          This impeccably and recently remodeled 4-bedroom, 4-bathroom condo offers a masterful design and comes fully furnished, ideal for comfortably accommodating groups of up to 10 people. It's the perfect choice for families and groups looking to enjoy a vacation together without compromising on personal space or luxury.
        </Typography>
        <ModernCarousel
          images={[
            'slideshow/slide_1.jpg',
            'slideshow/slide_2.jpg',
            'slideshow/slide_3.jpg',
            'slideshow/slide_4.jpg',
            'slideshow/slide_5.jpg',
            'slideshow/slide_6.jpg',
            'slideshow/slide_7.jpg',
            'slideshow/slide_8.jpg',
            'slideshow/slide_9.jpg',
            'slideshow/slide_10.jpg',
            'slideshow/slide_11.jpg',
            'slideshow/slide_12.jpg',
            'slideshow/slide_13.jpg',
            'slideshow/slide_14.jpg',
            'slideshow/slide_15.jpg',
            'slideshow/slide_16.jpg',
            'slideshow/slide_17.jpg',
            'slideshow/slide_18.jpg',
            'slideshow/slide_19.jpg',
            'slideshow/slide_20.jpg',
            'slideshow/slide_21.jpg',
            'slideshow/slide_22.jpg',
            'slideshow/slide_23.jpg',
            'slideshow/slide_24.jpg',
            'slideshow/slide_25.jpg',
            'slideshow/slide_26.jpg',
            'slideshow/slide_27.jpg',
            'slideshow/slide_28.jpg',
          ]}
          autoplayInterval={4000}
          height={600}
        />
      </Container>

      {/* Amenities Section - 2 rows, auto-scrolling, cards from both sides */}
      <Container maxWidth="lg" sx={{ pt: { xs: 2, md: 6 }, pb: { xs: 2, md: 3 } }}>
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
          <Box ref={topRef} sx={{ width: '100%', overflow: 'visible', mb: 3, py: { xs: 3, md: 5 }, position: 'relative' }}>
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
          <Box ref={bottomRef} sx={{ width: '100%', overflow: 'visible', py: { xs: 3, md: 5 }, position: 'relative', mt: -11 }}>
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
          mt: { xs: 6, md: 12 },
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
            alt="Jacó Beach"
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 6, md: 12 } }} ref={ref}>
          <Typography variant="h4" fontWeight={800} color="#FFFFFF" align="center" mb={5} sx={{ fontSize: { xs: 40, md: 54 } }}>
            Prime Location in Jacó
          </Typography>
          <Box display="flex" justifyContent="center" mb={5}>
            <HeroButton
              to="/jaco"
              buttonVariant="glass"
            >
              Explore Jacó
            </HeroButton>
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
          © 2025 Jacó Bay Condos. All rights reserved.
        </Box>
      </Box>
    </Box>
    </ParallaxProvider>
  );
};

export default HomePage; 