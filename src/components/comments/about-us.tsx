'use client';

import { Box, Typography } from '@mui/material';
import GenericMessage from './generic-comments';
import { GMessageObj } from './obj-generic-message';
import Link from 'next/link';

export default function AboutUsComponent() {
  return (
    <Box
      sx={{
        height: {
          xs: '100%',
          sm: '100%',
          md: '100vh',
        },
        width: '100%',
        background: '#1C1B1B',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '70rem',
          p: 2,
          height: '100%',
          display: {
            xs: 'flex',
            sm: 'flex',
            md: 'grid',
          },
          gridTemplateColumns: '1fr 1fr',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: {
            xs: 'start',
            sm: 'start',
            md: 'center',
          },
          gap: {
            xs: 4,
            sm: 4,
            md: 0,
          },
          mt: 4,
          mb: 4,
        }}
      >
        <div>
          <Typography
            gutterBottom
            sx={{ mt: 2 }}
            variant="h3"
            color="secondary.light"
          >
            O que nossos usuários{' '}
            <span style={{ color: '#bbee33' }}>dizem</span>?
          </Typography>
          <Typography variant="body1" color="secondary.light">
            Veja como a fit<span style={{ color: '#BBEE33' }}>boost</span> tem
            transformado vidas:
          </Typography>
        </div>
        <Box
          sx={{
            display: {
              xs: 'flex',
              sm: 'flex',
              md: 'none',
            },
            justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {GMessageObj.map((item, index) => (
            <Box
              sx={{
                display: {
                  xs: index === GMessageObj.length - 1 ? 'none' : 'flex',
                  sm: 'flex',
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
        <Box
          sx={{
            position: 'relative',
            height: '100%',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'flex',
            },
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          {GMessageObj.map((item, index) => (
            <Box
              key={index}
              sx={{
                rotate: item.deg,
                position: 'absolute',
                top: item.top,
                left: {
                  md: item.left === '60%' ? '8%' : '0',
                  lg: item.left === '60%' ? '34%' : '0',
                  xl: item.left,
                },
                right: item.right,
                bottom: item.bottom,
              }}
            >
              <GenericMessage
                nome={item.nome}
                idade={item.idade}
                mensagem={item.mensagem}
                urlitem={item.urlitem}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
