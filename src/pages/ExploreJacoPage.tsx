import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import TabContentSection from '../components/TabContentSection';
import TabTransitionWrapper from '../components/TabTransitionWrapper';
import JacoHero from '../components/JacoHero';
import JacoTabBar from '../components/JacoTabBar';
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

  const handleTabChange = (newValue: number) => {
    setPreviousTab(tabValue);
    setTabValue(newValue);
  };

  const handleSwipableTabChange = (newTab: number) => {
    setPreviousTab(tabValue);
    setTabValue(newTab);
  };

  return (
    <Box sx={{ bgcolor: 'linear-gradient(to bottom, #fff 0%, #f6faff 60%, #eaf2fb 100%)', minHeight: '100vh' }}>
      {/* Hero Section with Google Earth video background */}
      <JacoHero>
        <JacoTabBar
          tabValue={tabValue}
          onTabChange={handleTabChange}
          tabLabels={tabLabels}
        />
      </JacoHero>

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
              jacoStyle={true}
              smartFit={true}
              cards={[
                {
                  title: "Playa Hermosa, Vida Hermosa Bar and Restaurant",
                  subtitle: "Make reservations to watch surf competitions.",
                  description: "Hosts surf competitions almost every Friday and Saturday afternoon at 4pm. Make sure to make a reservation at Vida Hermosa to get a seat and watch or bring your own chairs or towels and relax and watch on the beach. Located at Playa Hermosa. Website: Vida Hermosa Bar and Restaurant. ",
                  images: [
                    "https://static.wixstatic.com/media/6f5f5b_ff6e62b254df45388f0f30bbe8b4b671~mv2.png/v1/crop/x_2,y_0,w_966,h_1819/fill/w_274,h_516,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo_vertical%20(1).png",
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
                  ],
                  links: [
                    { name: "Website", url: "https://www.vidahermosabeach.com/" },
                    { name: "TripAdvisor  ", url: "https://www.tripadvisor.com/Restaurant_Review-g703684-d2535766-Reviews-Vida_Hermosa_Bar_Restaurante-Playa_Hermosa_Jaco_District_Garabito_Municipality_Pr.html" }

                  ],
                  phone: "+506 2643 6215",
                  mapLocation: {
                    coordinates: "9.621195,-84.634025",
                    googleMapsUrl: "https://maps.app.goo.gl/ScSEm3LAvfkaSWEV8?g_st=i&utm_campaign=ac-im",
                    appleMapsUrl: "https://maps.apple.com/?q=Playa+Hermosa+Costa+Rica&ll=9.621195,-84.634025"
                  }
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
              jacoStyle={true}
              cards={[]}
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
              jacoStyle={true}
              cards={[]}
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
              jacoStyle={true}
              cards={[]}
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
              jacoStyle={true}
              cards={[]}
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
              jacoStyle={true}
              cards={[]}
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
              jacoStyle={true}
              cards={[]}
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
              jacoStyle={true}
              cards={[]}
            />
          </TabTransitionWrapper>
        </TabPanel>
      </Container>
      

      
      <Box className="site-copyright" sx={{ width: '100%', textAlign: 'center', color: '#fff', fontSize: '0.85rem', fontWeight: 400, letterSpacing: '0.01em', p: '0.7rem 0 0.5rem 0', background: 'transparent', position: 'fixed', left: 0, bottom: 0, zIndex: 200 }}>
        © 2025 Jacó Bay Condos. All rights reserved.
      </Box>
    </Box>
  );
};

export default JacoPage; 