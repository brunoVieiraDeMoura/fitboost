'use client';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';

type IGeneric = {
  subtitle: string;
  icon: React.ReactNode;
  text_description: string;
  ordem: number;
};
export default function CardGeneric({
  subtitle,
  text_description,
  icon,
  ordem,
}: IGeneric) {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardActionArea>
        <CardContent
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Box sx={{ order: ordem, maxWidth: '70%' }}>
            <Typography variant="subtitle1" component="div">
              {subtitle}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {text_description}
            </Typography>
          </Box>
          {icon}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
