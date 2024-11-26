'use client';

import { Box, Typography } from '@mui/material';
import style from './features.module.css';
export default function FeaturesComponent() {
  return (
    <section className={style.container}>
      <Box sx={{ m: 2 }}>
        <Typography variant="h3" color="secondary.dark">
          O seu treino, do seu jeito!
        </Typography>
      </Box>
    </section>
  );
}
