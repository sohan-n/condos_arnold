import React, { useState } from 'react';
import { Box, Typography, Button, Container, TextField, Paper, Alert, CircularProgress } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const PHONE = '+1 (716) 481-9370';
const EMAIL = 'earnold@tciallc.com';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Formspree - you'll need to replace this with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: 'New Contact Form Submission - Jaco Bay Condos'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Contact Form */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: { xs: 3, md: 4 }, 
            mb: 4, 
            borderRadius: 2,
            bgcolor: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography variant="h5" fontWeight={700} mb={3} color="#111">
            Send us a message
          </Typography>
          
          {submitStatus === 'success' && (
            <Alert severity="success" sx={{ mb: 3 }}>
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </Alert>
          )}
          
          {submitStatus === 'error' && (
            <Alert severity="error" sx={{ mb: 3 }}>
              Sorry, there was an error sending your message. Please try again or contact us directly.
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ textAlign: 'left' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 3 }}>
              <TextField
                required
                label="Name"
                value={formData.name}
                onChange={handleInputChange('name')}
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                  }
                }}
              />
              <TextField
                required
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                  }
                }}
              />
            </Box>
            
            <TextField
              label="Phone Number"
              value={formData.phone}
              onChange={handleInputChange('phone')}
              fullWidth
              sx={{ mb: 3, '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
            />
            
            <TextField
              required
              label="Message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange('message')}
              fullWidth
              sx={{ mb: 3, '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
            />
            
            <Box sx={{ textAlign: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                startIcon={isSubmitting ? <CircularProgress size={20} /> : <SendIcon />}
                sx={{
                  borderRadius: 1,
                  background: 'linear-gradient(135deg, #1993e5 0%, #0d47a1 100%)',
                  color: '#fff',
                  px: 6,
                  py: 2,
                  fontSize: 16,
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0d47a1 0%, #1993e5 100%)',
                  },
                  '&:disabled': {
                    background: '#ccc',
                  }
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
          </Box>
        </Paper>

        {/* Direct Contact Options */}
        <Typography variant="h6" fontWeight={600} mb={3} color="#111">
          Or contact us directly:
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