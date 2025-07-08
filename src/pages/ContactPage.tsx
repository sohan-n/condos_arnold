import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const PHONE = '+1 (716) 481-9370';
const EMAIL = 'earnold@tciallc.com';

const ContactPage: React.FC = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: 8,
      bgcolor: '#f5f5f5',
    }}>
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Gradient Title */}
        <Typography
          variant="h4"
          fontWeight={800}
          mb={1}
          sx={{
            letterSpacing: 1,
            fontSize: { xs: 32, md: 44 },
            background: 'linear-gradient(90deg, #111 0%, #eaeaea 100%)',
            textShadow: '0 10px 48px rgba(0,0,0,0.38), 0 2px 8px rgba(0,0,0,0.18)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
          }}
        >
          Contact us to book now!
        </Typography>
        <Typography color="#111" mb={5} sx={{ fontSize: { xs: 20, md: 26 }, color: '#111' }}>
          ...or if you have any questions!
        </Typography>
        {/* Phone */}
        <Box mb={4}>
          <Typography variant="h5" fontWeight={700} color="#111" mb={2} sx={{ fontSize: { xs: 30, md: 40 } }}>
            {PHONE}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<PhoneIcon sx={{ fontSize: 28 }} />}
              href={`tel:${PHONE.replace(/\s+/g, '')}`}
              sx={{
                borderRadius: 0.5,
                background: 'linear-gradient(135deg, #eaeaea 0%, #f5f5f5 100%)',
                color: '#222',
                boxShadow: '0 2px 12px #0002',
                letterSpacing: 1,
                textTransform: 'uppercase',
                fontSize: 18,
                px: 6,
                py: 2,
                fontWeight: 500,
                transition: 'background 0.2s, color 0.2s',
                mb: 1,
                '&:hover': {
                  background: 'linear-gradient(135deg, #e0e0e0 0%, #fafafa 100%)',
                  color: '#111',
                },
              }}
            >
              Call Now
            </Button>
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon sx={{ fontSize: 28 }} />}
              href={`https://wa.me/${PHONE.replace(/\D/g, '')}`}
              target="_blank"
              sx={{
                borderRadius: 0.5,
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: '#fff',
                boxShadow: '0 2px 12px #0002',
                letterSpacing: 1,
                textTransform: 'uppercase',
                fontSize: 18,
                px: 6,
                py: 2,
                fontWeight: 500,
                transition: 'background 0.2s, color 0.2s',
                mb: 1,
                '&:hover': {
                  background: 'linear-gradient(135deg, #128C7E 0%, #075E54 100%)',
                  color: '#fff',
                },
              }}
            >
              WhatsApp
            </Button>
          </Box>
        </Box>
        {/* Email */}
        <Box mb={2}>
          <Typography variant="h5" fontWeight={700} color="#111" mb={2} sx={{ fontSize: { xs: 23, md: 30 } }}>
            {EMAIL}
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<EmailIcon sx={{ fontSize: 28 }} />}
            href={`mailto:${EMAIL}`}
            sx={{
              borderRadius: 0.5,
              background: 'linear-gradient(135deg, #eaeaea 0%, #f5f5f5 100%)',
              color: '#222',
              boxShadow: '0 2px 12px #0002',
              letterSpacing: 1,
              textTransform: 'uppercase',
              fontSize: 18,
              px: 6,
              py: 2,
              fontWeight: 500,
              transition: 'background 0.2s, color 0.2s',
              '&:hover': {
                background: 'linear-gradient(135deg, #e0e0e0 0%, #fafafa 100%)',
                color: '#111',
              },
            }}
          >
            Email Us
          </Button>
        </Box>
        <Box
          sx={{
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            bgcolor: '#f5f5f5',
            color: '#222',
            fontSize: 13,
            fontWeight: 400,
            textAlign: 'center',
            py: 1,
            zIndex: 1200,
            boxShadow: '0 -2px 12px #0001',
            letterSpacing: 0.01,
          }}
        >
          © 2024 Jaco Luxury Condos. All rights reserved.
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage; 