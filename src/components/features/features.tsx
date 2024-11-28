'use client';

import { Box, Typography } from '@mui/material';
import CardGeneric from './card-generic';
import { CardGObj } from './obj-card';
import CardGenericDeskt from './generic-card-desk';
export default function FeaturesComponent() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '60rem',
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
            O seu treino, do <span style={{ color: '#a2c41e' }}>seu jeito</span>
            !
          </Typography>
          <Typography textAlign="center" variant="body1" color="secondary.dark">
            Descubra como o fit<span style={{ color: '#a2c41e' }}>boost</span>{' '}
            transforma sua rotina de exercícios com recursos inovadores:
          </Typography>
        </div>
        <Box
          sx={{
            display: {
              xs: 'flex',
              sm: 'flex',
              md: 'none',
            },
            gap: 2,
            flexDirection: 'column',
          }}
        >
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
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'grid',
            },
            gridTemplateColumns: '1fr 1fr',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            gap: 6,
            flexDirection: 'column',
          }}
        >
          {CardGObj.map((item, index) => (
            <div key={index}>
              <CardGenericDeskt
                subtitle={item.title}
                icon={item.icon}
                text_description={item.text_description}
              />
            </div>
          ))}
        </Box>
      </Box>
    </div>
  );
}
