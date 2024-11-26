'use client';

import { Box, Typography } from '@mui/material';
import GenericMessage from './generic-comments';
import { GMessageObj } from './obj-generic-message';

export default function AboutUsComponent() {
  return (
    <div style={{ height: '100vh', background: '#1C1B1B' }}>
      <Box
        sx={{
          p: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <div>
          <Typography
            gutterBottom
            sx={{ mt: 2 }}
            variant="h3"
            color="secondary.light"
          >
            O que nossos usuários dizem?
          </Typography>
          <Typography variant="body1" color="secondary.light">
            Veja como a fit<span style={{ color: '#BBEE33' }}>boost</span> tem
            transformado vidas:
          </Typography>
        </div>
        {GMessageObj.map((item, index) => (
          <div key={index}>
            <GenericMessage
              nome={item.nome}
              idade={item.idade}
              urlitem={item.urlitem}
              mensagem={item.mensagem}
            />
          </div>
        ))}
      </Box>
    </div>
  );
}
