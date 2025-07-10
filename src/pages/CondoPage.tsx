import React from 'react';
import { Box, Typography, Card, CardContent, Container, Paper, Button } from '@mui/material';
import ParallaxHero from '../components/CondoPageHero';
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
import ModernCarousel from '../components/ModernCarousel';





const quickFacts = [
  { label: 'Bedrooms', value: '4' },
  { label: 'Bathrooms', value: '4' },
  { label: 'Max Guests', value: '10' },
];

const galleryImages = [
  'condo1_banner.png',
  'condo1_living.png',
  'condo1_bedroom.png',
  'condo1_balcony.png',
];

const detailedAmenities = [
  {
    category: 'Kitchen & Cooking',
    icon: <KitchenIcon sx={{ fontSize: 24, color: '#222' }} />,
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
    icon: <KingBedIcon sx={{ fontSize: 24, color: '#222' }} />,
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
    icon: <DeckIcon sx={{ fontSize: 24, color: '#222' }} />,
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
    icon: <LocalParkingIcon sx={{ fontSize: 24, color: '#222' }} />,
    description: 'Convenient parking and access to premium building amenities.',
    details: [
      '2 Residential parking spaces',
      'Access to the largest pool in Jaco right outside your door',
      'Elevator access',
      'Concierge services',
      'Bicycle racks available'
    ]
  },
  {
    category: 'Bathroom & Hygiene',
    icon: <BathtubIcon sx={{ fontSize: 24, color: '#222' }} />,
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
    icon: <VerifiedUserIcon sx={{ fontSize: 24, color: '#222' }} />,
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
    icon: <LocalLaundryServiceIcon sx={{ fontSize: 24, color: '#222' }} />,
    description: 'Convenient in-unit laundry facilities for your complete comfort during extended stays.',
    details: [
      'Washer and Dryer – In unit',
      'Laundry detergent provided',
      'Iron and ironing board'
    ]
  },
  {
    category: 'Entertainment & Technology',
    icon: <TvIcon sx={{ fontSize: 24, color: '#222' }} />,
    description: 'Modern entertainment system with streaming capabilities and high-speed internet throughout.',
    details: [
      'HDTV with cable and streaming apps',
      'High-speed WiFi throughout the condo'
    ]
  },
  {
    category: 'Climate Control',
    icon: <AcUnitIcon sx={{ fontSize: 24, color: '#222' }} />,
    description: '',
    details: [
      'AC in each room',
      'Ceiling fan in main living area'
    ]
  },
  {
    category: 'Services & Convenience',
    icon: <VpnKeyIcon sx={{ fontSize: 24, color: '#222' }} />,
    description: 'Seamless check-in and additional services for your convenience.',
    details: [
      'Self check-in with keypad access',
      '24/7 guest support with our on-site manager for questions and assistance'
    ]
  },
  {
    category: 'Dining',
    icon: <RestaurantMenuIcon sx={{ fontSize: 24, color: '#222' }} />,
    description: '',
    details: [
      'Formal dining table seating 8-10'
    ]
  }
];

const aboutShort = `This impeccably and recently remodeled 4-bedroom, 4-bathroom condo offers a masterful design and comes fully furnished, ideal for comfortably accommodating groups of up to 10 people. It's the perfect choice for families and groups looking to enjoy a vacation together without compromising on personal space or luxury.`;

const aboutLong = `Our luxury condo is thoughtfully designed with premium finishes and modern amenities throughout. The open-concept living area features floor-to-ceiling windows that showcase breathtaking ocean views, while the gourmet kitchen is equipped with everything needed to prepare memorable meals.

Each of the four bedrooms is designed for comfort and privacy, with premium bedding and individual climate control. The master suite includes a private balcony with panoramic ocean views, while the additional bedrooms offer flexible sleeping arrangements perfect for families or groups.

The condo's location on the main strip of Jaco provides easy access to the beach, restaurants, shopping, and nightlife, while the building's amenities including the pool and fitness center offer additional recreation options.

Whether you're planning a family vacation, a friends' getaway, or a business retreat, our condo provides the perfect blend of luxury, comfort, and convenience in one of Costa Rica's most vibrant beach communities.`;

const CondoPage: React.FC = () => {

  return (
    <Box sx={{ bgcolor: 'linear-gradient(to bottom, #fff 0%, #f6faff 60%, #eaf2fb 100%)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <ParallaxHero
        backgroundImage="condo1_hero.png"
        title="The Spacious Ocean View Condo for Groups"
        subtitle="Available now for booking"
        minHeight="70vh"
        titleFontSize={{ xs: 50, md: 56 }}
        overlayOpacity={0.25}
      />



      {/* Gallery Carousel */}
      <Container maxWidth="xl" sx={{ py: { xs: 3, md: 4 } }}>
        <ModernCarousel images={galleryImages} autoplayInterval={4000} />
      </Container>
      {/* Quick Facts / Highlights */}
      <Container maxWidth="md" sx={{ pb: { xs: 4, md: 0  } }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: { xs: 1, md: 1.4 }}}>
          {quickFacts.map((fact) => (
            <Box
              key={fact.label}
              sx={{
                flex: { xs: '1 1 80px', sm: '1 1 100px', md: '1 1 140px', lg: '1 1 160px' },
                minWidth: { xs: 80, sm: 100, md: 140, lg: 160 }
              }}
            >
              <Card elevation={3} sx={{ borderRadius: 1, boxShadow: 3, border: '1px solid #e3eaf1', bgcolor: 'rgba(255,255,255,0.96)' }}>
                <CardContent>
                  <Typography variant="h5" fontWeight={700} color="black" align="center" gutterBottom>
                    {fact.value}
                  </Typography>
                  <Typography color="#637988" align="center" fontSize={16 }>{fact.label}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
      {/* Availability Calendar */}
      <Container maxWidth="xl" sx={{ pt: { xs: 3, md: 7 }, pb: 4 }}>
        <Paper elevation={4} sx={{ borderRadius: 1, p: { xs: 2, md: 4 }, mb: 4 }}>
          <Typography variant="h5" fontWeight={700} mb={2} align="center">
            Availability
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=400&wkst=1&ctz=America%2FNew_York&showPrint=0&title=asdas&showTitle=0&showTabs=0&showCalendars=0&src=dGlvcXNpM2lsYmtiaGs5c2pmb3JxMGNyM3NtdHI1bnFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%233f51b5"
              style={{ borderWidth: 0, borderRadius: 4 }}
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              title="Availability Calendar"
              allowFullScreen
            />
          </Box>
        </Paper>
      </Container>

      {/* About the Space */}
      <Container maxWidth="xl" sx={{ pb: { xs: 6, md: 10 } }}>
        <Card elevation={2} sx={{ borderRadius: 1, p: 3, mb: 2, bgcolor: 'rgba(255,255,255,0.98)' }}>
          <Typography variant="h5" fontWeight={700} mb={2}>
            About the Space
          </Typography>
          <Typography color="text.secondary" mb={2} fontSize={16} fontWeight={450}>
            {aboutShort}
          </Typography>
          <Box sx={{ whiteSpace: 'pre-line', color: '#637988', fontSize: 15 }}>
            {aboutLong}
          </Box>
        </Card>
      </Container>

      {/* Elegant Amenities Section */}
      <Container id="amenities" maxWidth="xl" sx={{ pb: { xs: 6, md: 10 } }}>
        <Typography variant="h4" fontWeight={700} mb={4} align="center">
          Complete Amenities
        </Typography>
        <Typography color="text.secondary" mb={6} align="center">
          Everything you need for a luxurious and comfortable stay
        </Typography>
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
          gap: 2,
          bgcolor: 'rgba(255,255,255,0.98)',
          borderRadius: 1,
          p: 4,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          {detailedAmenities.map((amenity) => (
            <Box key={amenity.category} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                {amenity.icon}
                <Typography variant="h6" fontWeight={600} color="text.primary">
                  {amenity.category}
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1, lineHeight: 1.6 }}>
                {amenity.description}
              </Typography>
              <Box sx={{ pl: 4 }}>
                {amenity.details.map((detail, detailIndex) => (
                  <Typography 
                    key={detailIndex} 
                    variant="body2" 
                    sx={{ 
                      mb: 0.5, 
                      color: '#333',
                      fontWeight: 500,
                      position: 'relative',
                      '&::before': {
                        content: '"•"',
                        color: '#333',
                        fontWeight: 'bold',
                        position: 'absolute',
                        left: '-12px',
                        top: 0
                      }
                    }}
                  >
                    {detail}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Location */}
      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 10 } }}>
        <Card elevation={2} sx={{ borderRadius: 1, p: 3, bgcolor: 'rgba(255,255,255,0.98)' }}>
          <Typography variant="h5" fontWeight={700} mb={2}>
            Location
          </Typography>
          <Typography color="text.secondary" mb={3}>
            Located right on the main strip of Jaco, steps from the beach, restaurants, and nightlife. Enjoy the best of Costa Rica from your luxury penthouse.
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
              title="Jaco Bay Condos Location"
            />
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              href="https://maps.app.goo.gl/ScSEm3LAvfkaSWEV8?g_st=i&utm_campaign=ac-im"
              target="_blank"
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
        </Card>
      </Container>

      {/* Footer */}
      <Box sx={{ py: 4, textAlign: 'center', fontWeight: 500, fontSize: 13, letterSpacing: 0.5, mt: 6, color: '#637988' }}>
        © 2025 Jaco Bay Condos. All rights reserved.
      </Box>
    </Box>
  );
};

export default CondoPage; 