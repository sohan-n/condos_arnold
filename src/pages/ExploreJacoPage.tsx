import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Tabs, Tab, IconButton, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import TabContentSection from '../components/TabContentSection';
import TabTransitionWrapper from '../components/TabTransitionWrapper';
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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`jaco-tabpanel-${index}`}
      aria-labelledby={`jaco-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 0 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `jaco-tab-${index}`,
    'aria-controls': `jaco-tabpanel-${index}`,
  };
}

const tabLabels = [
  'Beaches',
  'Surfing',
  'Restaurants',
  'Nightlife',
  'Activities',
  'Shopping',
  'Transportation',
  'Tour Guide',
];

const tabTitles = [
  {
    title: 'Beaches',
    icon: <BeachIcon width={64} height={64} color="black" />
  },
  {
    title: 'Surfing',
    icon: <SurfingIcon width={64} height={64} color="black" />
  },
  {
    title: 'Restaurants',
    icon: <RestaurantIcon width={64} height={64} color="black" />
  },
  {
    title: 'Nightlife',
    icon: <NightlifeIcon width={64} height={64} color="black" />
  },
  {
    title: 'Activities',
    icon: <ActivitiesIcon width={64} height={64} color="black" />
  },
  {
    title: 'Shopping',
    icon: <ShoppingIcon width={64} height={64} color="black" />
  },
  {
    title: 'Transportation',
    icon: <TransportationIcon width={64} height={64} color="black" />
  },
  {
    title: 'Tour Guide',
    icon: <TourGuideIcon width={64} height={64} color="black" />
  },
];

const JacoPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [previousTab, setPreviousTab] = useState(0);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

  // Handle URL hash for tab selection
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the # symbol
    if (hash) {
      const tabMapping: { [key: string]: number } = {
        'beaches': 0,
        'surfing': 1,
        'restaurants': 2,
        'nightlife': 3,
        'activities': 4,
        'shopping': 5,
        'transportation': 6,
        'tour-guide': 7,
      };
      const tabIndex = tabMapping[hash];
      if (tabIndex !== undefined && tabIndex >= 0 && tabIndex < tabLabels.length) {
        setTabValue(tabIndex);
      }
    }
  }, []);

  const handleTabChange = (_: unknown, newValue: number) => {
    setPreviousTab(tabValue);
    setTabValue(newValue);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleMobileTabSelect = (index: number) => {
    setPreviousTab(tabValue);
    setTabValue(index);
    setMobileMenuAnchor(null);
  };

  const handleSwipableTabChange = (newTab: number) => {
    setPreviousTab(tabValue);
    setTabValue(newTab);
  };

  return (
    <Box sx={{ bgcolor: 'linear-gradient(to bottom, #fff 0%, #f6faff 60%, #eaf2fb 100%)', minHeight: '100vh' }}>
      {/* Hero Section with Google Earth video background */}
      <Box sx={{
        position: 'relative',
        minHeight: { xs: '40vh', md: '50vh' },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        mb: { xs: 0.5, md: 1 },
      }}>
        {/* Video background with fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            webkit-playsinline="true"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            poster="google_earth_pic_before.png"
            onError={(e) => {
              // Fallback to poster image on video error
              const video = e.currentTarget;
              const parent = video.parentElement;
              if (parent) {
                video.style.display = 'none';
                const img = document.createElement('img');
                img.src = 'google_earth_pic_before.png';
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.style.filter = 'brightness(0.7)';
                parent.insertBefore(img, video);
              }
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'brightness(0.7)',
            }}
          >
            {/* MP4 first for better iOS Safari support */}
            <source src="google_earth_pressed_a_lot.mp4" type="video/mp4" />
            <source src="google_earth_pressed_a_lot.webm" type="video/webm" />
            {/* Fallback for browsers that don't support video */}
            <img 
              src="google_earth_pic_before.png" 
              alt="Jacó Beach aerial view"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.7)',
              }}
            />
          </video>
          {/* Overlay for readability */}
          <Box sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.22)',
            zIndex: 1,
          }} />
        </motion.div>
        {/* Content */}
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5 }}
            style={{ marginLeft: '10px' }}
          >
            <Typography
              variant="h1"
              fontWeight={900}
              color="#fff"
              sx={{
                textShadow: '0 8px 48px #000b, 0 2px 0 #222',
                letterSpacing: 15,
                mb: { xs: 0, md: 5 },
                fontSize: { xs: 85, md: 100, lg: 120 },
                lineHeight: 1.05,
                textTransform: 'uppercase',
                mt: { xs: 5, md: 0 },
              }}
            >
              Jacó
            </Typography>
            <Typography
              variant="h5"
              color="rgba(255,255,255,0.92)"
              sx={{
                textShadow: '0 2px 16px #0007',
                fontWeight: 25,
                letterSpacing: 2,
                mb: -1,
                fontSize: { xs: 15, md: 22 },
                display: { xs: 'none', md: 'block' },
              }}
            >
              Discover the vibrant heart of Costa Rica's Pacific coast
            </Typography>
          </motion.div>
        </Container>
        {/* Tabs overlayed on hero image */}
        <Box sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: { xs: 20, md: 20 },
          zIndex: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none', // let only tabs/buttons be interactive
        }}>
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
              onClick={() => setTabValue((prev) => Math.max(0, prev - 1))}
              disabled={tabValue === 0}
              sx={{
                borderRadius: '50%',
                backdropFilter: 'blur(16px)',
                background: tabValue === 0 ? 'rgba(255,255,255,0.32)' : 'rgba(255,255,255,0.18)',
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
                backdropFilter: 'blur(16px)',
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
                onClick={() => setTabValue((prev) => Math.min(tabLabels.length - 1, prev + 1))}
                disabled={tabValue === tabLabels.length - 1}
                sx={{
                  borderRadius: '50%',
                  backdropFilter: 'blur(16px)',
                  background: tabValue === tabLabels.length - 1 ? 'rgba(255,255,255,0.32)' : 'rgba(255,255,255,0.18)',
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
                onClick={() => setTabValue((prev) => Math.max(0, prev - 1))}
                disabled={tabValue === 0}
                sx={{
                  borderRadius: '50%',
                  backdropFilter: 'blur(16px)',
                  background: tabValue === 0 ? 'rgba(255,255,255,0.32)' : 'rgba(255,255,255,0.18)',
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
              backdropFilter: 'blur(16px)',
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
                onClick={() => setTabValue((prev) => Math.min(tabLabels.length - 1, prev + 1))}
                disabled={tabValue === tabLabels.length - 1}
                sx={{
                  borderRadius: '50%',
                  backdropFilter: 'blur(16px)',
                  background: tabValue === tabLabels.length - 1 ? 'rgba(255,255,255,0.32)' : 'rgba(255,255,255,0.18)',
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
        </Box>
      </Box>

      {/* Tabbed Content Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 } }}>
        {/* Beaches Tab */}
        <TabPanel value={tabValue} index={0}>
          <TabTransitionWrapper currentTab={tabValue} previousTab={previousTab}>
            <TabContentSection
              title="Beaches"
              icon={<BeachIcon width={64} height={64} color="black" />}
              currentTab={tabValue}
              onTabChange={handleSwipableTabChange}
              allTitles={tabTitles}
              cards={[
                {
                  title: "Beach Information",
                  description: "placeholder"
                },
                {
                  title: "Beach Activities", 
                  description: "placeholder"
                },
                {
                  title: "Beach Services",
                  description: "placeholder"
                }
              ]}
            />
          </TabTransitionWrapper>
        </TabPanel>

        {/* Surfing Tab */}
        <TabPanel value={tabValue} index={1}>
          <TabTransitionWrapper currentTab={tabValue} previousTab={previousTab}>
            <TabContentSection
              title="Surfing"
              icon={<SurfingIcon width={64} height={64} color="black" />}
              currentTab={tabValue}
              onTabChange={handleSwipableTabChange}
              allTitles={tabTitles}
              cards={[
                {
                  title: "Surf Spots",
                  description: "placeholder"
                },
                {
                  title: "Surf Schools", 
                  description: "placeholder"
                },
                {
                  title: "Surf Equipment",
                  description: "placeholder"
                }
              ]}
            />
          </TabTransitionWrapper>
        </TabPanel>

        {/* Restaurants Tab */}
        <TabPanel value={tabValue} index={2}>
          <TabTransitionWrapper currentTab={tabValue} previousTab={previousTab}>
            <TabContentSection
              title="Restaurants"
              icon={<RestaurantIcon width={64} height={64} color="black" />}
              currentTab={tabValue}
              onTabChange={handleSwipableTabChange}
              allTitles={tabTitles}
              cards={[
                {
                  title: "Local Cuisine",
                  description: "placeholder"
                },
                {
                  title: "International Dining", 
                  description: "placeholder"
                },
                {
                  title: "Beachfront Dining",
                  description: "placeholder"
                }
              ]}
            />
          </TabTransitionWrapper>
        </TabPanel>

        {/* Nightlife Tab */}
        <TabPanel value={tabValue} index={3}>
          <TabTransitionWrapper currentTab={tabValue} previousTab={previousTab}>
            <TabContentSection
              title="Nightlife"
              icon={<NightlifeIcon width={64} height={64} color="black" />}
              currentTab={tabValue}
              onTabChange={handleSwipableTabChange}
              allTitles={tabTitles}
              cards={[
                {
                  title: "Bars & Clubs",
                  description: "placeholder"
                },
                {
                  title: "Live Music", 
                  description: "placeholder"
                },
                {
                  title: "Beach Parties",
                  description: "placeholder"
                }
              ]}
            />
          </TabTransitionWrapper>
        </TabPanel>

        {/* Activities Tab */}
        <TabPanel value={tabValue} index={4}>
          <TabTransitionWrapper currentTab={tabValue} previousTab={previousTab}>
            <TabContentSection
              title="Activities"
              icon={<ActivitiesIcon width={64} height={64} color="black" />}
              currentTab={tabValue}
              onTabChange={handleSwipableTabChange}
              allTitles={tabTitles}
              cards={[
                {
                  title: "Adventure Tours",
                  description: "placeholder"
                },
                {
                  title: "Water Sports", 
                  description: "placeholder"
                },
                {
                  title: "Nature Tours",
                  description: "placeholder"
                }
              ]}
            />
          </TabTransitionWrapper>
        </TabPanel>

        {/* Shopping Tab */}
        <TabPanel value={tabValue} index={5}>
          <TabTransitionWrapper currentTab={tabValue} previousTab={previousTab}>
            <TabContentSection
              title="Shopping"
              icon={<ShoppingIcon width={64} height={64} color="black" />}
              currentTab={tabValue}
              onTabChange={handleSwipableTabChange}
              allTitles={tabTitles}
              cards={[
                {
                  title: "Local Markets",
                  description: "placeholder"
                },
                {
                  title: "Surf Shops", 
                  description: "placeholder"
                },
                {
                  title: "Boutiques",
                  description: "placeholder"
                }
              ]}
            />
          </TabTransitionWrapper>
        </TabPanel>

        {/* Transportation Tab */}
        <TabPanel value={tabValue} index={6}>
          <TabTransitionWrapper currentTab={tabValue} previousTab={previousTab}>
            <TabContentSection
              title="Transportation"
              icon={<TransportationIcon width={64} height={64} color="black" />}
              currentTab={tabValue}
              onTabChange={handleSwipableTabChange}
              allTitles={tabTitles}
              cards={[
                {
                  title: "Getting Around",
                  description: "placeholder"
                },
                {
                  title: "Airport Transfers", 
                  description: "placeholder"
                },
                {
                  title: "Car Rentals",
                  description: "placeholder"
                }
              ]}
            />
          </TabTransitionWrapper>
        </TabPanel>

        {/* Tour Guide Tab */}
        <TabPanel value={tabValue} index={7}>
          <TabTransitionWrapper currentTab={tabValue} previousTab={previousTab}>
            <TabContentSection
              title="Tour Guide"
              icon={<TourGuideIcon width={64} height={64} color="black" />}
              currentTab={tabValue}
              onTabChange={handleSwipableTabChange}
              allTitles={tabTitles}
              cards={[
                {
                  title: "Local Guides",
                  description: "placeholder"
                },
                {
                  title: "Custom Tours", 
                  description: "placeholder"
                },
                {
                  title: "Group Tours",
                  description: "placeholder"
                }
              ]}
            />
          </TabTransitionWrapper>
        </TabPanel>
      </Container>
      
      {/* Full Screen Mobile Menu - Moved to root level */}
      {Boolean(mobileMenuAnchor) && (
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
            backdropFilter: 'blur(20px)',
            background: 'rgba(0,0,0,0.4)',
            zIndex: 999999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={handleMobileMenuClose}
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
              zIndex: 100000,
              height: 44,
            }}
          >
            <IconButton
              onClick={handleMobileMenuClose}
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
              padding: '100px 20px 40px 20px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grid Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15, delay: 0.05 }}
              style={{
                width: '100%',
                maxWidth: 500,
                height: 'calc(100vh - 140px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 16,
                padding: '20px',
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
        </motion.div>
      )}
      
      <Box className="site-copyright" sx={{ width: '100%', textAlign: 'center', color: '#fff', fontSize: '0.85rem', fontWeight: 400, letterSpacing: '0.01em', p: '0.7rem 0 0.5rem 0', background: 'transparent', position: 'fixed', left: 0, bottom: 0, zIndex: 200 }}>
        © 2025 Jacó Bay Condos. All rights reserved.
      </Box>
    </Box>
  );
};

export default JacoPage; 