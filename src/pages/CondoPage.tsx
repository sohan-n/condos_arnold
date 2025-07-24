import React from 'react';
import { Box, Typography, CardContent, Container, Button } from '@mui/material';
import BathtubIcon from '@mui/icons-material/Bathtub';
import KingBedIcon from '@mui/icons-material/KingBed';
import TvIcon from '@mui/icons-material/Tv';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import KitchenIcon from '@mui/icons-material/Kitchen';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import DeckIcon from '@mui/icons-material/Deck';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import GoogleIcon from '@mui/icons-material/Google';
import BackgroundSlideshow from '../components/BackgroundSlideshow';
import BlurCard from '../components/BlurCard';
import HeroSlideshow from '../components/HeroSlideshow';
import CustomGoogleCalendar from '../components/CustomGoogleCalendar';





const quickFacts = [
  { label: 'Bedrooms', value: '4' },
  { label: 'Bathrooms', value: '4' },
  { label: 'Max Guests', value: '10' },
];

const galleryImages = [
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
];

const detailedAmenities = [
  {
    category: 'Kitchen & Cooking',
    icon: <KitchenIcon sx={{ fontSize: 32, color: '#000' }} />,
    description: 'Fully equipped gourmet kitchen perfect for preparing meals and entertaining guests.',
    details: [
      'Kitchen space to cook your own meals',
      'Full-size refrigerator with freezer',
      'Microwave oven',
      'Cooking basics: pots, pans, etc.',
      'Dishwasher',
      'Stainless steel electric stove & oven',
      'Complete dishes & silverware set',
      'Coffee maker',
      'Toaster',
      'Blender'
    ]
  },
  {
    category: 'Bedrooms',
    icon: <KingBedIcon sx={{ fontSize: 32, color: '#000' }} />,
    description: 'Four spacious bedrooms designed for ultimate comfort and relaxation with bedding.',
    details: [
      'Beach towels, bathroom towels, and bed sheets',
      'Bed linens and pillows',
      'Room-darkening shades',
      'In-room safe',
      'Extra blankets and pillows',
      'Temperature control in each room'
    ]
  },
  {
    category: 'Outdoor & Balcony',
    icon: <DeckIcon sx={{ fontSize: 32, color: '#000' }} />,
    description: 'Private outdoor spaces with stunning ocean views and comfortable seating.',
    details: [
      'Private patio or balcony',
      'Outdoor yard',
      'Grass Volleyball area',
      'Outdoor furniture',
      'Tropical landscaping',
      'Beach access just steps away'
    ]
  },
  {
    category: 'Parking & Building Facilities',
    icon: <LocalParkingIcon sx={{ fontSize: 32, color: '#000' }} />,
    description: 'Convenient parking and access to premium building amenities.',
    details: [
      '2 Residential parking spaces',
      'Access to the largest pool in Jacó right outside your door',
      'Elevator access',
      'Concierge services',
      'Bicycle racks available'
    ]
  },
  {
    category: 'Bathroom & Hygiene',
    icon: <BathtubIcon sx={{ fontSize: 32, color: '#000' }} />,
    description: 'Four fully equipped bathrooms with premium amenities for your comfort and convenience.',
    details: [
      'Hair dryer in each bathroom',
      'Shampoo, conditioner, and body soap',
      'Fresh towels and linens',
      'Toilet paper and other essentials'
    ]
  },
  {
    category: 'Safety & Security',
    icon: <VerifiedUserIcon sx={{ fontSize: 32, color: '#000' }} />,
    description: '',
    details: [
      'Smoke alarm in all rooms',
      'Carbon monoxide alarm',
      'Fire extinguisher on each floor',
      'Security at gate/entrance'
    ]
  },
  {
    category: 'Laundry & Housekeeping',
    icon: <LocalLaundryServiceIcon sx={{ fontSize: 32, color: '#000' }} />,
    description: 'Convenient in-unit laundry facilities for your complete comfort during extended stays.',
    details: [
      'Washer and Dryer – In unit',
      'Laundry detergent provided',
      'Iron and ironing board'
    ]
  },
  {
    category: 'Entertainment & Technology',
    icon: <TvIcon sx={{ fontSize: 32, color: '#000' }} />,
    description: 'Modern entertainment system with streaming capabilities and high-speed internet throughout.',
    details: [
      'HDTV with cable and streaming apps',
      'High-speed WiFi throughout the condo'
    ]
  },
  {
    category: 'Climate Control',
    icon: <AcUnitIcon sx={{ fontSize: 32, color: '#000' }} />,
    description: '',
    details: [
      'AC in each room',
      'Ceiling fan in main living area'
    ]
  },
  {
    category: 'Services & Convenience',
    icon: <VpnKeyIcon sx={{ fontSize: 32, color: '#000' }} />,
    description: 'Seamless check-in and additional services for your convenience.',
    details: [
      'Self check-in with keypad access',
      '24/7 guest support with our on-site manager for questions and assistance'
    ]
  },
  {
    category: 'Dining',
    icon: <RestaurantMenuIcon sx={{ fontSize: 32, color: '#000' }} />,
    description: '',
    details: [
      'Formal dining table seating 8-10'
    ]
  }
];

const aboutShort = `This impeccably and recently remodeled 4-bedroom, 4-bathroom condo offers a masterful design and comes fully furnished, ideal for comfortably accommodating groups of up to 10 people. It's the perfect choice for families and groups looking to enjoy a vacation together without compromising on personal space or luxury.`;

const aboutLong = `Our luxury condo is thoughtfully designed with premium finishes and modern amenities throughout. The open-concept living area features floor-to-ceiling windows that showcase breathtaking ocean views, while the gourmet kitchen is equipped with everything needed to prepare memorable meals.

Each of the four bedrooms is designed for comfort and privacy, with premium bedding and individual climate control. The master suite includes a private balcony with panoramic ocean views, while the additional bedrooms offer flexible sleeping arrangements perfect for families or groups.

The condo's location on the main strip of Jacó provides easy access to the beach, restaurants, shopping, and nightlife, while the building's amenities including the pool and fitness center offer additional recreation options.

Whether you're planning a family vacation, a friends' getaway, or a business retreat, our condo provides the perfect blend of luxury, comfort, and convenience in one of Costa Rica's most vibrant beach communities.`;

const CondoPage: React.FC = () => {
  const [carouselIndex, setCarouselIndex] = React.useState(0);

  return (
            <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      {/* Background Slideshow */}
      <BackgroundSlideshow 
        images={galleryImages}
        fadeDuration={500}
        currentIndex={carouselIndex}
        syncWithCarousel={true}
        useBlurredImages={true}
        blurredImagePath="slideshow-blurred"
      />
      
      {/* Hero Slideshow */}
      <HeroSlideshow
        images={galleryImages}
        title="The Spacious Ocean View Condo for Groups"
        subtitle="Available now for booking"
        buttonText="Book Now"
        buttonTo="/contact"
        heightPreset="listingpage"
        shadowType="light"
        overlayOpacity={0.25}
        fadeDuration={400}
        autoplayInterval={5000}
        onIndexChange={setCarouselIndex}
      />
      {/* Quick Facts / Highlights */}
      <Container maxWidth="md" sx={{ pb: { xs: 4, md: 0  }, mt: 7 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: { xs: 1, md: 1.4 }}}>
          {quickFacts.map((fact) => (
            <Box
              key={fact.label}
              sx={{
                flex: { xs: '1 1 80px', sm: '1 1 100px', md: '1 1 140px', lg: '1 1 160px' },
                minWidth: { xs: 80, sm: 100, md: 140, lg: 160 }
              }}
            >
              <BlurCard blurIntensity="light" opacity={0.85}>
                <CardContent>
                  <Typography variant="h5" fontWeight={700} color="#000" align="center" gutterBottom>
                    {fact.value}
                  </Typography>
                  <Typography color="rgba(0,0,0,0.7)" align="center" fontSize={16} fontWeight={500}>{fact.label}</Typography>
                </CardContent>
              </BlurCard>
            </Box>
          ))}
        </Box>
      </Container>
      {/* Availability Calendar */}
      <Container maxWidth="xl" sx={{ pt: { xs: 3, md: 7 }, pb: 4 }}>
        <BlurCard blurIntensity="light" opacity={0.9} sx={{ p: 3 }}>
          <Typography variant="h5" fontWeight={700} mb={3} color="#000" align="center">
            Availability Calendar
          </Typography>
          <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2, display: 'flex', justifyContent: 'center' }}>
            <CustomGoogleCalendar/>
          </Box>
        </BlurCard>
      </Container>

      {/* About the Space */}
      <Container maxWidth="xl" sx={{ pb: { xs: 6, md: 10 }, mt: 5 }}>
        <BlurCard blurIntensity="light" opacity={0.9} sx={{ p: 3, mb: 2 }}>
          <Typography variant="h5" fontWeight={700} mb={2} color="#000">
            About the Space
          </Typography>
          <Typography color="rgba(0,0,0,0.8)" mb={2} fontSize={18} fontWeight={450}>
            {aboutShort}
          </Typography>
          <Box sx={{ whiteSpace: 'pre-line', color: 'rgba(0,0,0,0.7)', fontSize: 17, fontWeight: 400 }}>
            {aboutLong}
          </Box>
        </BlurCard>
      </Container>

      {/* Elegant Amenities Section */}
      <Container id="amenities" maxWidth="xl" sx={{ pb: { xs: 6, md: 10 } }}>
        <BlurCard 
          blurIntensity="light" 
          opacity={0.9}
          sx={{ 
            p: 4
          }}
        >
          <Typography variant="h4" fontWeight={700} mb={4} align="center" color="#000">
            Complete Amenities
          </Typography>
          <Typography color="rgba(0,0,0,0.7)" mb={6} align="center">
            Everything you need for a luxurious and comfortable stay
          </Typography>
          
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
            gap: 1.5
          }}>
          {detailedAmenities.map((amenity) => (
            <Box key={amenity.category} sx={{ 
              mb: 1.5, 
              p: 2, 
              borderRadius: 2, 
              border: '1px solid rgba(255,255,255,0.8)',
              backgroundColor: '#fff',
              transition: 'all 0.2s ease',
              '&:hover': {
                border: '1px solid rgba(255,255,255,1)',
                backgroundColor: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 0.5 }}>
                <Box sx={{ color: 'rgba(0,0,0,0.8)' }}>
                  {amenity.icon}
                </Box>
                <Typography variant="h5" fontWeight={600} color="#000">
                  {amenity.category}
                </Typography>
              </Box>
              <Typography variant="body1" color="rgba(0,0,0,0.8)" sx={{ mb: 0.5, lineHeight: 1.6, fontSize: 18 }}>
                {amenity.description}
              </Typography>
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
                gap: 0.5,
                pl: 3
              }}>
                {amenity.details.map((detail, detailIndex) => (
                  <Box
                    key={detailIndex}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      mb: 0.5,
                      p: 0.5,
                      pl: 2,
                      ml: -2,
                      borderRadius: 1,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.03)'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 12,
                        height: 2,
                        backgroundColor: '#000',
                        mt: 1.5,
                        mr: 2,
                        flexShrink: 0,
                        borderRadius: 1
                      }}
                    />
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'rgba(0,0,0,0.7)',
                        fontWeight: 500,
                        fontSize: 16,
                        lineHeight: 1.5
                      }}
                    >
                      {detail}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
          </Box>
        </BlurCard>
      </Container>

      {/* Location */}
      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 10 } }}>
        <BlurCard blurIntensity="light" opacity={0.9} sx={{ p: 3 }}>
          <Typography variant="h5" fontWeight={700} mb={2} color="#000">
            Location
          </Typography>
          <Typography color="rgba(0,0,0,0.8)" mb={3}>
            Located right on the main strip of Jacó, steps from the beach, restaurants, and nightlife. Enjoy the best of Costa Rica from your luxury penthouse.
          </Typography>
          <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2, mb: 2 }}>
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=9.621195,-84.634025"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: 8 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jacó Bay Condos Location"
            />
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              href="https://maps.app.goo.gl/ScSEm3LAvfkaSWEV8?g_st=i&utm_campaign=ac-im"
              target="_blank"
              startIcon={<GoogleIcon />}
              sx={{
                borderRadius: 2,
                background: '#000',
                color: '#fff',
                px: 4,
                py: 2,
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  background: '#333',
                }
              }}
            >
              View on Google Maps
            </Button>
          </Box>
        </BlurCard>
      </Container>

      {/* Footer */}
      <Box sx={{ 
        py: 4, 
        textAlign: 'center', 
        fontWeight: 500, 
        fontSize: 13, 
        letterSpacing: 0.5, 
        mt: 6, 
        color: '#fff',
        textShadow: '0 1px 3px rgba(0,0,0,0.5)'
      }}>
        © 2025 Jacó Bay Condos. All rights reserved.
      </Box>
    </Box>
  );
};

export default CondoPage; 