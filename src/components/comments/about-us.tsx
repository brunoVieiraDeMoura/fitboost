'use client';

import { Box, Typography } from '@mui/material';
import GenericMessage from './generic-comments';
import { GMessageObj } from './obj-generic-message';
import Link from 'next/link';

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
          <Box
            sx={{
              display: {
                mobiles: GMessageObj.length - 1 !== index ? 'block' : 'none',
                mobile: 'block',
              },
            }}
            key={index}
          >
            <GenericMessage
              nome={item.nome}
              idade={item.idade}
              urlitem={item.urlitem}
              mensagem={item.mensagem}
            />
          </Box>
        ))}
        <Box display="flex" justifyContent="end">
          <Link
            style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
            href={'/'}
          >
            <Typography variant="body1" color="secondary.light">
              Veja Mais
            </Typography>
            <span style={{ color: '#BBEE33' }}>&#8618;</span>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
