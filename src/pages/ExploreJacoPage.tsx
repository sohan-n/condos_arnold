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
                  subtitle: "Make reservations to watch surf competitions. Great for surfers!",
                  description: "Hosts surf competitions almost every Friday and Saturday afternoon at 4pm. Make sure to make a reservation at Vida Hermosa to get a seat and watch or bring your own chairs or towels and relax and watch on the beach.",
                  warnings: ["With riptides, currents and gigantic waves, Playa Hermosa is no swimmer's beach, so be extra careful when you step into its waters"],
                  locationLabel: "Playa Hermosa, Jaco",
                  images: [
                    "https://static.wixstatic.com/media/6f5f5b_ff6e62b254df45388f0f30bbe8b4b671~mv2.png/v1/crop/x_2,y_0,w_966,h_1819/fill/w_274,h_516,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo_vertical%20(1).png",
                    "https://static.wixstatic.com/media/6f5f5b_c43a4577827b4b8ea047fe78de2867fa~mv2.jpg/v1/fill/w_2048,h_964,al_c,q_90,enc_avif,quality_auto/6f5f5b_c43a4577827b4b8ea047fe78de2867fa~mv2.jpg",
                    "https://images.entercostarica.com/uploads/pages/61/w2560_page_61_hermosa_jaco_2349c9e992.webp"
                  ],
                  links: [
                    { name: "Website", url: "https://www.vidahermosabeach.com/" },
                    { name: "TripAdvisor  ", url: "https://www.tripadvisor.com/Restaurant_Review-g703684-d2535766-Reviews-Vida_Hermosa_Bar_Restaurante-Playa_Hermosa_Jaco_District_Garabito_Municipality_Pr.html" }

                  ],
                  phone: "+506 2643 6215",
                  mapLocation: {
                    googleMapsUrl: "https://maps.app.goo.gl/XDhWR259SRc92xpZA",
                    appleMapsUrl: "https://maps.apple.com/place?place-id=IE51C7E9BFFC4D7E0&address=Carretera+Pac%C3%ADfica+Fern%C3%A1ndez+Oreamuno%2C+Garabito%2C+Costa+Rica&coordinate=9.575514%2C-84.604651&name=Vida+Hermosa+Bar+%26+Restaurante&_provider=9902",
                    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8801.715423341117!2d-84.60914529999998!3d9.581915000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1bf5f356a787b%3A0x60c5a9f48b737dc3!2sVida%20Hermosa%20Bar%20and%20Restaurant!5e0!3m2!1sen!2sus!4v1752593245939!5m2!1sen!2sus"
                  }
                },

                {
                  title: "Jaco Beach",
                  subtitle: "Just a short walk away!",
                  description: "<strong>From TripAdvisor:</strong> Its dark pebbled beach is fringed with palm trees, with warm rolling waves that attract surfers from all over Costa Rica. Take a surf lesson or even ride a horse along the coast. Nearby, you'll find plenty of shops and restaurants, and after sundown, Jaco's beach bars come alive with music and dancing.",
                  warnings: [],
                  locationLabel: "Jaco Beach, Jaco",
                  images: [
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/16/f1/08/jaco-beach-costa-rica.jpg?w=800&h=500&s=1",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/c4/0b/0a/photo3jpg.jpg?w=2000&h=-1&s=1",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/c4/0b/09/photo2jpg.jpg?w=2000&h=-1&s=1",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/c4/0b/06/photo0jpg.jpg?w=2000&h=-1&s=1",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/1f/8c/92/jaco-beach.jpg?w=2000&h=-1&s=1"
                  ],
                  links: [
                    { name: "TripAdvisor  ", url: "https://www.tripadvisor.com/Attraction_Review-g309271-d309613-Reviews-Jaco_Beach-Jaco_Jaco_District_Garabito_Municipality_Province_of_Puntarenas.html" }

                  ],
                  mapLocation: {
                    googleMapsUrl: "https://maps.app.goo.gl/jnUhHpFkSiNCjRvw8",
                    appleMapsUrl: "https://maps.apple.com/place?place-id=I558859276ACA5E39&address=Playa+Jac%C3%B3%2C+Jaco%2C+Costa+Rica&coordinate=9.6117303%2C-84.6287799&name=Jaco+Beach&_provider=9902",
                    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4921.488662044709!2d-84.63197989999999!3d9.614463599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c73eedbdf3b5%3A0xaf65eb06e8e78e92!2sJaco%20Beach!5e0!3m2!1sen!2sus!4v1752593542951!5m2!1sen!2sus"
                  }
                },
                {
                  title: "Playa Blanca",
                  subtitle: "White sandy beach known for its warm turquoise waters, remote locale & lush tropical backdrop. Adjacent to Playa Mantas",
                  description: "Playa Blanca is a white sand beach located in the province of Puntarenas, Costa Rica. It is known for its clear waters and white sand, making it a popular destination for tourists and locals alike. The beach is located about 20 kilometers from Jaco, and is easily accessible by car or public transportation.",
                  locationLabel: "Puntarenas Province, Costa Rica",
                  images: [
                    "https://www.twoweeksincostarica.com/wp-content/uploads/2015/03/Playa-Mantas-Costa-Rica.jpg"
                  ],
                  links: [
                    { name: "twoweeksincostarica.com  ", url: "https://www.twoweeksincostarica.com/playa-blanca-near-jaco/" }
                  ],
                  mapLocation: {
                    googleMapsUrl: "https://maps.app.goo.gl/XrTXuDawHoCd2KmQ9",
                    embedUrl:"https://www.google.com/maps/embed?pb=!1m16!1m10!1m3!1d31461.974995370652!2d-84.668332!3d9.702632!2m1!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c8eb40f52e55%3A0xb4f1dbf7635b6b33!2sPlaya%20Blanca!5e0!3m2!1sen!2sus!4v1752594229898!5m2!1sen!2sus"
                  }
                },
                {
                  title: "Playa Mantas",
                  subtitle: "Calm Water and a Local Vibe. Adjacent to Playa Blanca",
                  description: "Playa Mantas is a wide cove, flanked by a rocky outcropping on one end and a vegetated point on the other. The sand is a pretty gray color. In dry season when there is little rain (December to end of April), the water is a gorgeous turquoise shade. The waves are gentle and perfect for swimming, even with young kids. We have been visiting with our kids since they were babies, and it’s really the perfect beach for families.",
                  locationLabel: "Puntarenas Province, Costa Rica",
                  images: [
                    'https://www.twoweeksincostarica.com/wp-content/uploads/2021/11/North-end-Playa-Mantas.jpg',
                    'https://www.twoweeksincostarica.com/wp-content/uploads/2021/11/rocks-tide-pools-playa-mantas.jpg'
                  ],
                  highlights: ["Good option for families"],
                  links: [
                    { name: "twoweeksincostarica.com  ", url: "https://www.twoweeksincostarica.com/playa-mantas/" }
                  ],
                  mapLocation: {
                    googleMapsUrl: "https://maps.app.goo.gl/bbZETar9Af1KxAoPA",
                    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4620.475340588678!2d-84.66460561109832!3d9.707015210080492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c8ec8e631ce5%3A0xc5ed2412130cbaf9!2sPlaya%20Mantas!5e0!3m2!1sen!2sus!4v1752594945742!5m2!1sen!2sus"
                  }
                },
                {
                  title: "Playa Herradura",
                  subtitle: "Near the Los Suenos Resort. There are tons of great food options and activities at this beach. ",
                  description: '<strong>A review from TripAdvisor:</strong> "After 10 days in Jaco,Costa Rica I discovered one of the most beautiful beach views in the world at Playa Herradura. Playa Herradura is a popular spot for sport fishing and watching the beautiful sunsets. You can get there by bus for $.50(250 Colones) from Jaco. I enjoyed food and drinks at the popular Restaurant La Puesta del Sol.  Finally I just relaxed and embraced one of the best views in Costa Rica. I could do this everyday. Happy Travels!!!!"',
                  locationLabel: "Puntarenas Province, Costa Rica",
                  images: [
                    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/cc/3c/32/photo3jpg.jpg?w=2000&h=-1&s=1',
                    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/b3/8b/84/photo3jpg.jpg?w=2000&h=-1&s=1',
                    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3a/54/43/photo0jpg.jpg?w=1400&h=-1&s=1'
                    
                  ],
                  links: [
                    { name: "costarica.com", url: "https://costarica.org/beaches/central-pacific/herradura/" },
                    { name: "TripAdvisor", url: "https://www.tripadvisor.com/Attraction_Review-g1049082-d7393514-Reviews-Herradura_Beach-Herradura_Jaco_District_Garabito_Municipality_Province_of_Puntar.html" }
                  ],
                  mapLocation: {
                    googleMapsUrl: "https://maps.app.goo.gl/RF9zgk7MDQZ9ThAo6",
                    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13236.907211250713!2d-84.6693857316849!3d9.653924981413661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c7ca3e333ba5%3A0x3bad0def53af1756!2sPuntarenas%20Province%2C%20Playa%20Herradura%2C%20Costa%20Rica!5e0!3m2!1sen!2sus!4v1752595772909!5m2!1sen!2sus"
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