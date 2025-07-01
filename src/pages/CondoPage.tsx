import React from 'react';
import { Box, Typography, Button, Card, CardContent, Container, Collapse, IconButton, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModernCarousel from '../components/ModernCarousel';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import icalendarPlugin from '@fullcalendar/icalendar';

const ICAL_URL = 'https://www.airbnb.com/calendar/ical/648803575821899223.ics?s=e97fdbf0e6864327677e52fb17585f88';

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

const amenities = [
  'Beach view',
  'Kitchen',
  'Wifi',
  'Free residential garage on premises – 2 spaces',
  'Shared pool',
  'HDTV with standard cable',
  'Elevator',
  'Free washer – In unit',
  'Free dryer – In unit',
  'AC - split type ductless system',
];

const aboutShort = `This impeccably and recently remodeled 4-bedroom, 4-bathroom condo offers a masterful design and comes fully furnished, ideal for comfortably accommodating groups of up to 10 people. It's the perfect choice for families and groups looking to enjoy a vacation together without compromising on personal space or luxury.`;

const aboutLong = `\nMain Areas:\n- The main living room features comfortable and elegant seating, a flat-screen TV, floor-to-ceiling windows, and sliding door access to a private balcony. Here, you and your guests can relax or dine outdoors while enjoying breathtaking views of the ocean and beach.\n- The spacious and updated kitchen is fully equipped to meet all your luxury dining and entertaining needs. It includes granite countertops, full-size stainless steel appliances, a large dining table, and a breakfast bar. Other appliances include a refrigerator, freezer, dishwasher, oven, toaster, blender, coffee maker, and microwave.\n\nBedrooms:\n- Master Bedroom: King-size bed, Private bathroom, Walk-in closet, TV, Sofa, Sliding door access to the balcony\n- Bedroom 2: Queen-size bed, Private bathroom, TV, Sliding door access to the balcony\n- Bedroom 3: Twin beds, TV, Sliding door access to the balcony\n- Bedroom 4: Bunk bed, TV, Located just steps away from a full shared bathroom\n\nAdditional Amenities:\n- High-quality bedding\n- Plush pillows\n- Modern décor\n- In-unit laundry room\n- Full-size washer and dryer\n\nBook Your Stay!\nThis unit has everything you need to make your dream vacation a reality. Don't wait—book your stay today and enjoy an unforgettable experience!\n\nGuest Access:\nGuests will have exclusive access to the entire condo, ensuring privacy and comfort throughout their stay. The property is just steps away from the beach, making it easy to enjoy the sun and surf. Additionally, guests can relax and unwind in the incredible pool, perfect for soaking up the tropical vibes.\n\nOther Things to Note:\n- OCCUPANCY AND ACCESS: Unless otherwise specified, rates are based on occupancy of 10 people per condominium bedroom. All guests must be identified on the reservation before check-in. Access to the condo community is restricted to guests listed on the reservation.`;

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
          bgcolor: 'rgba(0,0,0,0.35)',
          zIndex: 1,
        }} />
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h3" fontWeight={800} color="white" gutterBottom>
            Spacious Ocean View Condo for Groups
          </Typography>
          <Typography variant="h6" color="rgba(255,255,255,0.9)" mb={4}>
            Luxury 4BR/4BA Penthouse · Sleeps 10 · Beachfront Jaco
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="https://www.airbnb.com/rooms/648803575821899223"
            target="_blank"
            rel="noopener"
            sx={{ fontWeight: 700, fontSize: 14, px: 4, py: 1.5 }}
          >
            Book Now
          </Button>
        </Container>
      </Box>

      {/* Availability Calendar */}
      <Container maxWidth="md" sx={{ pt: { xs: 6, md: 10 }, pb: 4 }}>
        <Paper elevation={4} sx={{ borderRadius: 4, p: { xs: 2, md: 4 }, mb: 4 }}>
          <Typography variant="h5" fontWeight={700} mb={2} align="center">
            Availability
          </Typography>
          <FullCalendar
            plugins={[dayGridPlugin, icalendarPlugin]}
            initialView="dayGridMonth"
            height="auto"
            events={{ url: ICAL_URL, format: 'ics' }}
            headerToolbar={{ start: 'title', center: '', end: 'prev,next' }}
            eventColor="#1993e5"
            displayEventTime={false}
            fixedWeekCount={false}
            aspectRatio={1.5}
          />
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

      {/* Amenities */}
      <Container maxWidth="md" sx={{ pb: { xs: 6, md: 10 } }}>
        <Card elevation={2} sx={{ borderRadius: 3, p: 3, bgcolor: 'rgba(255,255,255,0.98)' }}>
          <Typography variant="h5" fontWeight={700} mb={2}>
            Amenities
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            {amenities.map((a) => (
              <Paper key={a} elevation={1} sx={{ px: 2, py: 1, borderRadius: 2, bgcolor: '#eaf2fb', color: '#1993e5', fontWeight: 600, fontSize: 15, boxShadow: '0 2px 8px #1993e51a', minWidth: 120, textAlign: 'center' }}>
                {a}
              </Paper>
            ))}
          </Box>
        </Card>
      </Container>

      {/* Location */}
      <Container maxWidth="md" sx={{ pb: { xs: 6, md: 10 } }}>
        <Card elevation={2} sx={{ borderRadius: 3, p: 3, bgcolor: 'rgba(255,255,255,0.98)' }}>
          <Typography variant="h5" fontWeight={700} mb={2}>
            Location
          </Typography>
          <Typography color="text.secondary">
            Located right on the main strip of Jaco, steps from the beach, restaurants, and nightlife. Enjoy the best of Costa Rica from your luxury penthouse.
          </Typography>
        </Card>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: '#1993e5', color: '#fff', py: 4, textAlign: 'center', fontWeight: 500, fontSize: 18, letterSpacing: 0.5, mt: 6 }}>
        © 2024 Jaco Luxury Condos. All rights reserved.
      </Box>
    </Box>
  );
};

export default CondoPage; 