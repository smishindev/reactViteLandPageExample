import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code as CodeIcon,
  Palette as DesignIcon,
  Speed as SpeedIcon,
  People as PeopleIcon,
} from '@mui/icons-material';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const achievements = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: '50+ Projects',
      description: 'Successfully delivered projects across various industries',
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: '30+ Happy Clients',
      description: 'Built lasting relationships with satisfied customers',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: '3+ Years Experience',
      description: 'Proven track record in web development and design',
    },
    {
      icon: <DesignIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Award Winner',
      description: 'Recognized for excellence in digital innovation',
    },
  ];

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
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
              mb: 6,
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 6,
            mb: 8,
          }}
        >
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Avatar
                sx={{
                  width: { xs: 200, md: 250 },
                  height: { xs: 200, md: 250 },
                  mx: 'auto',
                  mb: 3,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  fontSize: '4rem',
                  fontWeight: 'bold',
                }}
              >
                YN
              </Avatar>
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  color: 'primary.main',
                }}
              >
                Passionate Developer
              </Typography>
            </motion.div>
          </Box>

          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: 'text.secondary',
                }}
              >
                I'm a passionate full-stack developer with over 3 years of experience 
                creating exceptional digital experiences. I specialize in modern web 
                technologies and have a keen eye for user-centered design.
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: 'text.secondary',
                }}
              >
                My journey began with a curiosity about how websites work, and it has 
                evolved into a career dedicated to crafting solutions that make a 
                difference. I believe in clean code, intuitive design, and delivering 
                projects that exceed expectations.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: 'text.secondary',
                }}
              >
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </Typography>
            </motion.div>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    border: '1px solid',
                    borderColor: 'divider',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2 }}>
                      {achievement.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 1,
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {achievement.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.5,
                      }}
                    >
                      {achievement.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;