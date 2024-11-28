'use client';
import { Box, Typography } from '@mui/material';
import React from 'react';

type IGeneric = {
  subtitle: string;
  icon: React.ReactNode;
  text_description: string;
};

export default function CardGenericDeskt({
  subtitle,
  text_description,
  icon,
}: IGeneric) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '260px',
      }}
    >
      {icon}
      <Typography sx={{ fontWeight: 'bold', color: '#a2c41e' }} variant="h6">
        {subtitle}
      </Typography>
      <Typography variant="body1" color="secondary.dark">
        {text_description}
      </Typography>
    </Box>
  );
}
