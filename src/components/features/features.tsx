'use client';

import { Box, Typography } from '@mui/material';
import CardGeneric from './card-generic';
import { CardGObj } from './obj-card';
export default function FeaturesComponent() {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          p: 2,
        }}
      >
        <div>
          <Typography
            textAlign="center"
            variant="h3"
            color="secondary.dark"
            gutterBottom
          >
            O seu treino, do <span style={{ color: '#BBEE33' }}>seu jeito</span>
            !
          </Typography>
          <Typography textAlign="center" variant="body1" color="secondary.dark">
            Descubra como o fit<span style={{ color: '#BBEE33' }}>boost</span>{' '}
            transforma sua rotina de exercícios com recursos inovadores:
          </Typography>
        </div>
        {CardGObj.map((item, index) => (
          <div key={index}>
            <CardGeneric
              ordem={index % 2 === 0 ? 0 : 1}
              subtitle={item.title}
              text_description={item.text_description}
              icon={item.icon}
            />
          </div>
        ))}
      </Box>
    </div>
  );
}
