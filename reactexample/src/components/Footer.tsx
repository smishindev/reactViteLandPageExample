import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: LinkedInIcon, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: GitHubIcon, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: TwitterIcon, url: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: 'primary.main',
        color: 'white',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 1,
              }}
            >
              Your Name
            </Typography>
            <Typography
              variant="body1"
              sx={{
                opacity: 0.8,
                maxWidth: '400px',
              }}
            >
              Creating exceptional digital experiences through modern web development and thoughtful design.
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  onClick={() => window.open(social.url, '_blank')}
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <social.icon />
                </IconButton>
              ))}
            </Stack>
            
            <Typography
              variant="body2"
              sx={{
                opacity: 0.7,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              Made with <FavoriteIcon sx={{ fontSize: 16, color: '#ff6b6b' }} /> by Your Name
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                opacity: 0.5,
                mt: 1,
              }}
            >
              © {new Date().getFullYear()} All rights reserved.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;