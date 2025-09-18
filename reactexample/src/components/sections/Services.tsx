import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Web as WebIcon,
  PhoneIphone as MobileIcon,
  CloudQueue as CloudIcon,
  DesignServices as DesignIcon,
  Api as ApiIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: <WebIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Web Development',
      description: 'Modern, responsive websites built with React, TypeScript, and the latest web technologies. From landing pages to complex web applications.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Vite'],
    },
    {
      icon: <MobileIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native and Flutter. Native performance with code reusability.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
    },
    {
      icon: <ApiIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Backend Development',
      description: 'Scalable server-side solutions, RESTful APIs, and database design. Built for performance and security.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    },
    {
      icon: <CloudIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup, deployment automation, and DevOps practices for scalable applications.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
      icon: <DesignIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'UI/UX Design',
      description: 'User-centered design approach, wireframing, prototyping, and creating intuitive digital experiences.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Security & Testing',
      description: 'Comprehensive testing strategies, security audits, and performance optimization for robust applications.',
      technologies: ['Jest', 'Cypress', 'Security Audits', 'Performance'],
    },
  ];

  return (
    <Box
      id="services"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 3,
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            My Services
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 8,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.2rem',
              color: 'text.secondary',
              lineHeight: 1.6,
            }}
          >
            I offer comprehensive digital solutions to bring your ideas to life.
            From concept to deployment, I'll help you create exceptional digital experiences.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)',
                    borderColor: 'primary.light',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 0 }}>
                  <Box sx={{ mb: 3 }}>
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      justifyContent: 'center',
                    }}
                  >
                    {service.technologies.map((tech, techIndex) => (
                      <Box
                        key={techIndex}
                        sx={{
                          px: 2,
                          py: 0.5,
                          backgroundColor: 'primary.light',
                          color: 'primary.contrastText',
                          borderRadius: '20px',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              Ready to Get Started?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'text.secondary',
                fontSize: '1.1rem',
              }}
            >
              Let's discuss your project and create something amazing together.
            </Typography>
            <Box
              sx={{
                display: 'inline-block',
                px: 4,
                py: 2,
                backgroundColor: 'primary.main',
                color: 'white',
                borderRadius: 2,
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;