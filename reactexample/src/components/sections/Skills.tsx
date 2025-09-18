import React from 'react';
import {
  Box,
  Container,
  Typography,
  LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: 'React & TypeScript', level: 95, color: '#61DAFB' },
    { name: 'Node.js & Express', level: 90, color: '#339933' },
    { name: 'Python & Django', level: 85, color: '#3776AB' },
    { name: 'Database Design', level: 88, color: '#336791' },
    { name: 'UI/UX Design', level: 82, color: '#FF6B6B' },
    { name: 'Cloud Services (AWS)', level: 78, color: '#FF9900' },
  ];

  return (
    <Box
      id="skills"
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
            My Skills
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
            Here are some of the key technologies and tools I work with to create exceptional digital experiences.
          </Typography>
        </motion.div>

        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Box sx={{ mb: 4 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: 'text.secondary',
                    }}
                  >
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={inView ? skill.level : 0}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: skill.color,
                      transition: 'transform 1.5s ease-in-out',
                    },
                  }}
                />
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;