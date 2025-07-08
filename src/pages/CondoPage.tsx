import React from 'react';
import { Box, Typography, Card, CardContent, Container, Collapse, IconButton, Paper, Accordion, AccordionSummary, AccordionDetails, Chip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
import ModernCarousel from '../components/ModernCarousel';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';




const quickFacts = [
  { label: 'Bedrooms', value: '4' },
  { label: 'Bathrooms', value: '4' },
  { label: 'Max Guests', value: '10' },
  { label: 'Location', value: 'Beachfront, Main Strip of Jaco' },
];

const galleryImages = [
  'condo1_banner.png',
  'condo1_living.png',
  'condo1_bedroom.png',
  'condo1_balcony.png',
];

const detailedAmenities = [
  {
    category: 'Scenic Views',
    icon: <BeachAccessIcon sx={{ fontSize: 32, color: '#1993e5' }} />,
    description: 'Breathtaking panoramic views of the Pacific Ocean from multiple vantage points throughout the condo.',
    details: [
      'Panoramic ocean views from balcony and living room',
      'Floor-to-ceiling windows in main living area',
      'Private balcony with unobstructed beach views',
      'Sunrise and sunset viewing opportunities',
      'Coastal breeze and natural ventilation'
    ]
  },
  {
    category: 'Bathroom & Hygiene',
    icon: <BathtubIcon sx={{ fontSize: 32, color: '#1993e5' }} />,
    description: 'Four fully equipped bathrooms with premium amenities for your comfort and convenience.',
    details: [
      'Hair dryer in each bathroom',
      'Premium cleaning products provided',
      'Shampoo, conditioner, and body soap',
      'Hot water available 24/7',
      'Fresh towels and linens',
      'Toilet paper and essentials restocked',
      'Modern fixtures and lighting',
      'Ventilation systems for air circulation'
    ]
  },
  {
    category: 'Bedroom & Sleeping',
    icon: <KingBedIcon sx={{ fontSize: 32, color: '#1993e5' }} />,
    description: 'Four spacious bedrooms designed for ultimate comfort and relaxation with premium bedding.',
    details: [
      'Essentials: towels, bed sheets, soap, toilet paper',
      'Quality hangers for all clothing',
      'Premium bed linens and pillows',
      'Room-darkening shades for restful sleep',
      'Iron and ironing board available',
      'In-room safe for valuables',
      'Clothing storage: walk-in closet & wardrobe',
      'Extra blankets and pillows',
      'Blackout curtains for complete darkness',
      'Temperature control in each room'
    ]
  },
  {
    category: 'Laundry & Housekeeping',
    icon: <LocalLaundryServiceIcon sx={{ fontSize: 32, color: '#1993e5' }} />,
    description: 'Convenient in-unit laundry facilities for your complete comfort during extended stays.',
    details: [
      'Free washer – In unit',
      'Free dryer – In unit',
      'Laundry detergent provided',
      'Drying rack available',
      'Iron and ironing board',
      'Steam cleaning capabilities',
      '24/7 laundry access'
    ]
  },
  {
    category: 'Entertainment & Technology',
    icon: <TvIcon sx={{ fontSize: 32, color: '#1993e5' }} />,
    description: 'Modern entertainment system with streaming capabilities and high-speed internet throughout.',
    details: [
      'HDTV with standard cable',
      'Streaming apps available (Netflix, Hulu, etc.)',
      'High-speed WiFi throughout the condo',
      'Smart TV with casting capabilities',
      'Bluetooth speaker compatibility',
      'USB charging ports in all rooms',
      'International power adapters available'
    ]
  },
  {
    category: 'Climate Control',
    icon: <AcUnitIcon sx={{ fontSize: 32, color: '#1993e5' }} />,
    description: 'Advanced climate control systems ensuring perfect temperature year-round.',
    details: [
      'AC - split type ductless system',
      'Ceiling fan in main living area',
      'Individual room temperature control',
      'Energy-efficient cooling',
      'Air purification systems',
      'Humidity control',
      'Quiet operation for peaceful sleep'
    ]
  },
  {
    category: 'Safety & Security',
    icon: <VerifiedUserIcon sx={{ fontSize: 32, color: '#1993e5' }} />,
    description: 'Comprehensive safety features and security systems for your peace of mind.',
    details: [
      'Smoke alarm in all rooms',
      'Carbon monoxide alarm',
      'Fire extinguisher on each floor',
      'First aid kit available',
      'Emergency contact information',
      '24/7 building security',
      'Secure building access',
      'Video surveillance in common areas'
    ]
  },
  {
    category: 'Internet & Connectivity',
    icon: <WifiIcon sx={{ fontSize: 32, color: '#1993e5' }} />,
    description: 'High-speed internet and connectivity solutions for work and entertainment.',
    details: [
      'Free high-speed Internet',
      'WiFi throughout the condo',
      'Fiber optic connection',
      'Multiple WiFi access points',
      'Work-friendly internet speeds',
      'VPN compatibility',
      'Mobile hotspot backup'
    ]
  },
  {
    category: 'Kitchen & Cooking',
    icon: <KitchenIcon sx={{ fontSize: 32, color: '#1993e5' }} />,
    description: 'Fully equipped gourmet kitchen perfect for preparing meals and entertaining guests.',
    details: [
      'Kitchen space to cook your own meals',
      'Full-size refrigerator with freezer',
      'Microwave oven',
      'Cooking basics: pots, pans, oil, salt, pepper',
      'Professional dishwasher',
      'Stainless steel electric stove & oven',
      'Coffee maker with premium coffee',
      'Toaster for breakfast convenience',
      'Blender for smoothies and cocktails',
      'Wine refrigerator',
      'Spice rack with essential spices',
      'Baking supplies and equipment'
    ]
  },
  {
    category: 'Dining & Entertainment',
    icon: <RestaurantMenuIcon sx={{ fontSize: 32, color: '#1993e5' }} />,
    description: 'Elegant dining areas perfect for meals with family and friends.',
    details: [
      'Formal dining table seating 8-10',
      'Wine glasses and stemware',
      'Complete dishes & silverware set',
      'Bowls, plates, cups for all occasions',
      'Serving dishes and platters',
      'Table linens and placemats',
      'Outdoor dining on balcony',
      'Bar area with cocktail supplies'
    ]
  },
  {
    category: 'Outdoor & Balcony',
    icon: <DeckIcon sx={{ fontSize: 32, color: '#1993e5' }} />,
    description: 'Private outdoor spaces with stunning ocean views and comfortable seating.',
    details: [
      'Private patio or balcony',
      'Backyard with open grassy area',
      'Premium outdoor furniture',
      'Ocean view seating areas',
      'BBQ grill available',
      'Outdoor lighting for evening use',
      'Tropical landscaping',
      'Beach access just steps away'
    ]
  },
  {
    category: 'Parking & Building Facilities',
    icon: <LocalParkingIcon sx={{ fontSize: 32, color: '#1993e5' }} />,
    description: 'Convenient parking and access to premium building amenities.',
    details: [
      'Free residential garage on premises – 2 spaces',
      'Shared pool with ocean views',
      'Elevator access (52" deep, 32" wide doorway)',
      'Fitness center access',
      'Rooftop terrace',
      'Concierge services',
      'Package delivery acceptance',
      'Bicycle storage available'
    ]
  },
  {
    category: 'Services & Convenience',
    icon: <VpnKeyIcon sx={{ fontSize: 32, color: '#1993e5' }} />,
    description: 'Seamless check-in and additional services for your convenience.',
    details: [
      'Self check-in with keypad access',
      '24/7 guest support',
      'Housekeeping available',
      'Concierge services',
      'Local recommendations provided',
      'Transportation arrangements',
      'Activity booking assistance',
      'Restaurant reservations'
    ]
  }
];

const aboutShort = `This impeccably and recently remodeled 4-bedroom, 4-bathroom condo offers a masterful design and comes fully furnished, ideal for comfortably accommodating groups of up to 10 people. It's the perfect choice for families and groups looking to enjoy a vacation together without compromising on personal space or luxury.`;

const aboutLong = `Our luxury condo is thoughtfully designed with premium finishes and modern amenities throughout. The open-concept living area features floor-to-ceiling windows that showcase breathtaking ocean views, while the gourmet kitchen is equipped with everything needed to prepare memorable meals.

Each of the four bedrooms is designed for comfort and privacy, with premium bedding and individual climate control. The master suite includes a private balcony with panoramic ocean views, while the additional bedrooms offer flexible sleeping arrangements perfect for families or groups.

The condo's location on the main strip of Jaco provides easy access to the beach, restaurants, shopping, and nightlife, while the building's amenities including the pool and fitness center offer additional recreation options.

Whether you're planning a family vacation, a friends' getaway, or a business retreat, our condo provides the perfect blend of luxury, comfort, and convenience in one of Costa Rica's most vibrant beach communities.`;

const CondoPage: React.FC = () => {
  // For quick facts animation
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <Box sx={{ bgcolor: 'linear-gradient(to bottom, #fff 0%, #f6faff 60%, #eaf2fb 100%)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        minHeight: '55vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        pt: { xs: 6, md: 10 },
        pb: { xs: 4, md: 8 },
        overflow: 'hidden',
        bgcolor: 'transparent',
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
      }}>
        <Box sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '115%',
          zIndex: 0,
        }}>
          <img
            src="condo1_hero.png"
            alt="Condo hero view"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
        <Box sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0,0,0,0.25)',
          zIndex: 1,
        }} />
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          {/* Content area - button is now handled by FloatingBookButton component */}
        </Container>
      </Box>

      {/* Availability Calendar */}
      <Container maxWidth="md" sx={{ pt: { xs: 6, md: 10 }, pb: 4 }}>
        <Paper elevation={4} sx={{ borderRadius: 1, p: { xs: 2, md: 4 }, mb: 4 }}>
          <Typography variant="h5" fontWeight={700} mb={2} align="center">
            Availability
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&title=asdas&showTitle=0&showTabs=0&showCalendars=0&src=dGlvcXNpM2lsYmtiaGs5c2pmb3JxMGNyM3NtdHI1bnFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%233f51b5"
              style={{ borderWidth: 0, borderRadius: 4 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              title="Availability Calendar"
              allowFullScreen
            />
          </Box>
        </Paper>
      </Container>

      {/* Gallery Carousel */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <ModernCarousel images={galleryImages} autoplayInterval={4000} />
      </Container>

      {/* Quick Facts / Highlights */}
      <Container maxWidth="md" sx={{ pb: { xs: 6, md: 10 } }}>
        <Box ref={ref} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
          {quickFacts.map((fact, i) => (
            <motion.div
              key={fact.label}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.2 } },
              }}
              initial="hidden"
              animate={controls}
              style={{ flex: '1 1 180px', maxWidth: 220, minWidth: 140 }}
            >
              <Card elevation={3} sx={{ borderRadius: 3, boxShadow: 3, border: '1px solid #e3eaf1', bgcolor: 'rgba(255,255,255,0.96)' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} color="#1993e5" align="center" gutterBottom>
                    {fact.value}
                  </Typography>
                  <Typography color="#637988" align="center">{fact.label}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* About the Space */}
      <Container maxWidth="md" sx={{ pb: { xs: 6, md: 10 } }}>
        <Card elevation={2} sx={{ borderRadius: 3, p: 3, mb: 2, bgcolor: 'rgba(255,255,255,0.98)' }}>
          <Typography variant="h5" fontWeight={700} mb={2}>
            About the Space
          </Typography>
          <Typography color="text.secondary" mb={2}>
            {aboutShort}
          </Typography>
          <Collapse in={expanded}>
            <Box sx={{ whiteSpace: 'pre-line', color: '#637988', fontSize: 16 }}>
              {aboutLong}
            </Box>
          </Collapse>
          <Box textAlign="center">
            <IconButton onClick={() => setExpanded((v) => !v)}>
              <ExpandMoreIcon sx={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </IconButton>
          </Box>
        </Card>
      </Container>

      {/* Comprehensive Amenities */}
      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 10 } }}>
        <Typography variant="h4" fontWeight={700} mb={4} align="center">
          Complete Amenities
        </Typography>
        <Typography color="text.secondary" mb={6} align="center">
          Everything you need for a luxurious and comfortable stay
        </Typography>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          {detailedAmenities.map((amenity) => (
            <Card 
              key={amenity.category}
              elevation={2} 
              sx={{ 
                borderRadius: 2, 
                bgcolor: 'rgba(255,255,255,0.98)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 32px rgba(25, 147, 229, 0.15)',
                }
              }}
            >
              <Accordion sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      alignItems: 'center',
                      gap: 2,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                    {amenity.icon}
                    <Box>
                      <Typography variant="h6" fontWeight={600} color="text.primary">
                        {amenity.category}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        {amenity.description}
                      </Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ pl: 6 }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1 }}>
                      {amenity.details.map((detail, detailIndex) => (
                        <Chip
                          key={detailIndex}
                          label={detail}
                          size="small"
                          sx={{
                            bgcolor: '#eaf2fb',
                            color: '#1993e5',
                            fontWeight: 500,
                            mb: 1,
                            '&:hover': {
                              bgcolor: '#d4e7f7',
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Location */}
      <Container maxWidth="md" sx={{ pb: { xs: 6, md: 10 } }}>
        <Card elevation={2} sx={{ borderRadius: 3, p: 3, bgcolor: 'rgba(255,255,255,0.98)' }}>
          <Typography variant="h5" fontWeight={700} mb={2}>
            Location
          </Typography>
          <Typography color="text.secondary" mb={3}>
            Located right on the main strip of Jaco, steps from the beach, restaurants, and nightlife. Enjoy the best of Costa Rica from your luxury penthouse.
          </Typography>
          <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Jaco+Beach+Costa+Rica"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jaco Bay Condos Location"
            />
          </Box>
        </Card>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: '#1993e5', color: '#fff', py: 4, textAlign: 'center', fontWeight: 500, fontSize: 13, letterSpacing: 0.5, mt: 6 }}>
        © 2024 Jaco Luxury Condos. All rights reserved.
      </Box>
    </Box>
  );
};

export default CondoPage; 