'use client';

import { Box, Typography } from '@mui/material';

export default function ContactComponent() {
  return (
    <>
      <Box sx={{ p: 2, height: '100vh', background: '#1C1B1B' }}>
        <Typography gutterBottom variant="h3" color="secondary.light">
          <span style={{ color: '#BBEE33' }}>Fale </span>com a gente!
        </Typography>
        <Typography variant="body1" color="secondary.light">
          Quer saber mais sobre o fit
          <span style={{ color: '#BBEE33' }}>boost</span> ou precisa de ajuda?
          Entre em contato conosco:
        </Typography>
      </Box>
    </>
  );
}
